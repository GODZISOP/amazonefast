import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from('clients')
      .select('*, documents(*)')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Self-healing sync: Ensure clients with all 4 core documents approved are marked Approved
    if (data && Array.isArray(data)) {
      for (const client of data) {
        const docs = client.documents || [];
        const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
        const getLatest = (type: string) => sortedDocs.find((d: any) => d.document_type === type);
        const allApproved = 
          getLatest('ID Card (Front)')?.status === 'Approved' &&
          getLatest('ID Card (Back)')?.status === 'Approved' &&
          getLatest('Utility Bill')?.status === 'Approved' &&
          getLatest('Bank Statement')?.status === 'Approved';
        
        if (allApproved && client.status !== 'Approved') {
          client.status = 'Approved';
          supabase.from('clients').update({ status: 'Approved' }).eq('id', client.id).then();
        }
      }
    }

    return NextResponse.json({ data }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
