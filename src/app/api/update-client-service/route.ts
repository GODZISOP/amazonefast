import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { clientId, serviceName } = await req.json();

    if (!clientId || !serviceName) {
      return NextResponse.json({ error: 'Client ID and service name are required' }, { status: 400 });
    }

    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const cleanService = serviceName.trim();

    // 1. Check if 'Assigned Service' doc already exists for this client
    const { data: existingDoc } = await supabase
      .from('documents')
      .select('id')
      .eq('client_id', clientId)
      .eq('document_type', 'Assigned Service')
      .maybeSingle();

    let docResult;
    if (existingDoc) {
      docResult = await supabase
        .from('documents')
        .update({
          file_name: cleanService,
          status: 'Active',
          uploaded_at: new Date().toISOString()
        })
        .eq('id', existingDoc.id)
        .select()
        .single();
    } else {
      docResult = await supabase
        .from('documents')
        .insert({
          client_id: clientId,
          document_type: 'Assigned Service',
          file_name: cleanService,
          file_url: 'https://amazonfastservices.com/services',
          status: 'Active'
        })
        .select()
        .single();
    }

    if (docResult.error) {
      return NextResponse.json({ error: docResult.error.message }, { status: 500 });
    }

    // 2. Also save to otps key-value store for dual-redundancy
    const serviceKey = `__client_service_${clientId}__`;
    const { data: existingOtp } = await supabase
      .from('otps')
      .select('id')
      .eq('email', serviceKey)
      .maybeSingle();

    if (existingOtp) {
      await supabase.from('otps').update({ code: cleanService }).eq('id', existingOtp.id);
    } else {
      await supabase.from('otps').insert({ email: serviceKey, code: cleanService });
    }

    return NextResponse.json({
      success: true,
      clientId,
      serviceName: cleanService,
      document: docResult.data
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
