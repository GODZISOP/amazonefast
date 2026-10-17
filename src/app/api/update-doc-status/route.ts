import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { docId, newStatus } = await request.json();

    if (!docId || !newStatus) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Admin bypass key

    if (!supabaseKey) {
        console.error("SUPABASE_SERVICE_ROLE_KEY is not defined in environment variables.");
        return NextResponse.json({ error: 'Server misconfiguration: Service Role Key missing' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: updatedDoc, error } = await supabase
      .from('documents')
      .update({ status: newStatus })
      .eq('id', docId)
      .select('document_type, client_id, clients(email, full_name)')
      .single();

    if (error) {
      console.error('Error updating document status:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Sync overall client status in clients table based on core verification documents
    if (updatedDoc?.client_id) {
      try {
        const { data: clientDocs } = await supabase
          .from('documents')
          .select('document_type, status, uploaded_at')
          .eq('client_id', updatedDoc.client_id)
          .order('uploaded_at', { ascending: false });

        const getLatest = (type: string) => clientDocs?.find(d => d.document_type === type);
        const allApproved = 
          getLatest('ID Card (Front)')?.status === 'Approved' &&
          getLatest('ID Card (Back)')?.status === 'Approved' &&
          getLatest('Utility Bill')?.status === 'Approved' &&
          getLatest('Bank Statement')?.status === 'Approved';

        await supabase
          .from('clients')
          .update({ status: allApproved ? 'Approved' : 'Pending' })
          .eq('id', updatedDoc.client_id);
      } catch (errSync) {
        console.error('Error syncing client status:', errSync);
      }
    }

    // Client emails on document status updates are disabled as per requirements (in-portal updates only)
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error in update-doc-status:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
