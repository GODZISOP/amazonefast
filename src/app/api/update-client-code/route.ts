import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

function extractRawName(fullName: string): string {
  if (!fullName) return 'Client';
  let str = fullName.trim();
  
  // 1. Remove bracketed code if present: [AXY] ...
  str = str.replace(/^\[.*?\]\s*/, '');
  
  // 2. Remove any AMZ-C... code
  str = str.replace(/^AMZ-C\d+\s*/i, '');
  
  // 3. Repeatedly strip any leading code or number like "AXY ", "01 ", "C1 ", "VIP "
  while (/^([A-Za-z0-9_\-#]{1,8})\s+(.*)/.test(str)) {
    const match = str.match(/^([A-Za-z0-9_\-#]{1,8})\s+(.*)/);
    if (!match) break;
    const token = match[1];
    // If it's numbers, or a short code (e.g. 01, AXY, VIP) and not a normal lowercase name
    if (/^\d+$/.test(token) || /^[A-Z0-9_\-#]{1,6}$/i.test(token)) {
      str = match[2].trim();
    } else {
      break;
    }
  }
  
  return str.trim() || 'Client';
}

export async function POST(req: Request) {
  try {
    const { clientId, newCode } = await req.json();

    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }

    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Fetch current client record
    const { data: client, error: fetchErr } = await supabase
      .from('clients')
      .select('id, full_name')
      .eq('id', clientId)
      .single();

    if (fetchErr || !client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Clean code: remove any brackets user might type
    const cleanCode = (newCode || '').replace(/[\[\]]/g, '').trim();
    const currentFullName = client.full_name || '';

    // Pure client actual name without any codes or numbers
    const pureClientName = extractRawName(currentFullName);

    // Store as [CODE] Name so parseClientInfo separates the box code and name perfectly with 0 bleed
    const updatedFullName = cleanCode ? `[${cleanCode}] ${pureClientName}` : pureClientName;

    // Update in Supabase clients table
    const { error: updateErr } = await supabase
      .from('clients')
      .update({ full_name: updatedFullName })
      .eq('id', clientId);

    if (updateErr) {
      return NextResponse.json({ error: updateErr.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      clientId,
      newCode: cleanCode,
      clientName: pureClientName,
      updatedFullName
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
