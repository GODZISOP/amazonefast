import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

function extractRawName(name: string): string {
  if (!name) return 'Client';
  return name.replace(/^AMZ-C\d+\s*/i, '').trim() || name;
}

export async function POST(req: Request) {
  try {
    const { id, email, fullName } = await req.json();

    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Check if client already exists in clients table
    const { data: existingClient } = await supabase
      .from('clients')
      .select('id, full_name, created_at')
      .eq('id', id)
      .maybeSingle();

    if (!existingClient) {
      // 2. Generate Next Sequential Client Code (Permanent & Immutable)
      // Fetch the permanent counter from otps table
      const { data: counterRow } = await supabase
        .from('otps')
        .select('code')
        .eq('email', '__system_client_code_sequence__')
        .maybeSingle();

      const counterVal = parseInt(counterRow?.code || '0', 10);

      // Also scan existing client names to find the absolute max assigned
      const { data: allClients } = await supabase.from('clients').select('full_name');
      let maxNum = counterVal;
      if (allClients && Array.isArray(allClients)) {
        for (const c of allClients) {
          const match = c.full_name?.match(/^AMZ-C(\d+)/i);
          if (match) {
            const num = parseInt(match[1], 10);
            if (num > maxNum) maxNum = num;
          }
        }
      }

      const nextNumber = maxNum + 1;
      const pad = String(nextNumber).padStart(2, '0');
      const clientCode = `AMZ-C${pad}`;
      const cleanRawName = extractRawName(fullName);
      const assignedFullName = `${clientCode} ${cleanRawName}`;

      // Insert client profile with permanent AMZ-CNUMBER
      const { error: clientError } = await supabase.from('clients').insert({
        id,
        email,
        full_name: assignedFullName,
        status: 'New'
      });

      if (clientError) {
        console.error("Supabase insert client error:", clientError);
        return NextResponse.json({ error: clientError.message }, { status: 500 });
      }

      // Update permanent sequence counter in otps (NEVER decreases even if users are deleted)
      if (counterRow) {
        await supabase
          .from('otps')
          .update({ code: String(nextNumber) })
          .eq('email', '__system_client_code_sequence__');
      } else {
        await supabase
          .from('otps')
          .insert({
            email: '__system_client_code_sequence__',
            code: String(nextNumber)
          });
      }

      // Insert notification bypassing RLS
      const { error: notifError } = await supabase.from('notifications').insert({
        client_id: id,
        message: `New client registered: ${assignedFullName} (${email}).`,
      });

      if (notifError) {
        console.error("Supabase insert notification error:", notifError);
      }

      return NextResponse.json({ success: true, clientCode, fullName: assignedFullName });
    } else {
      // 3. Existing client: preserve their assigned AMZ-C code!
      const codeMatch = existingClient.full_name?.match(/^(AMZ-C\d+)\s*(.*)/i);
      if (codeMatch) {
        // They already have an AMZ-C code: NEVER change their number!
        const existingCode = codeMatch[1].toUpperCase();
        const currentRaw = codeMatch[2]?.trim() || '';
        const incomingRaw = extractRawName(fullName);

        // Only update if the user provided a real new name that is not 'Client'
        if (incomingRaw && incomingRaw !== 'Client' && incomingRaw !== currentRaw) {
          const updatedName = `${existingCode} ${incomingRaw}`;
          await supabase.from('clients').update({ full_name: updatedName }).eq('id', id);
        }
      } else {
        // Edge case: Old client without a code yet - assign them the next code
        const { data: counterRow } = await supabase
          .from('otps')
          .select('code')
          .eq('email', '__system_client_code_sequence__')
          .maybeSingle();

        const counterVal = parseInt(counterRow?.code || '0', 10);
        const { data: allClients } = await supabase.from('clients').select('full_name');
        let maxNum = counterVal;
        if (allClients && Array.isArray(allClients)) {
          for (const c of allClients) {
            const match = c.full_name?.match(/^AMZ-C(\d+)/i);
            if (match) {
              const num = parseInt(match[1], 10);
              if (num > maxNum) maxNum = num;
            }
          }
        }
        const nextNumber = maxNum + 1;
        const pad = String(nextNumber).padStart(2, '0');
        const assignedFullName = `AMZ-C${pad} ${extractRawName(existingClient.full_name || fullName)}`;

        await supabase.from('clients').update({ full_name: assignedFullName }).eq('id', id);
        if (counterRow) {
          await supabase.from('otps').update({ code: String(nextNumber) }).eq('email', '__system_client_code_sequence__');
        } else {
          await supabase.from('otps').insert({ email: '__system_client_code_sequence__', code: String(nextNumber) });
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Init Profile API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
