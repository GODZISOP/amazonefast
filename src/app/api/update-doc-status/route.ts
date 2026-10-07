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

    const { error } = await supabase
      .from('documents')
      .update({ status: newStatus })
      .eq('id', docId);

    if (error) {
      console.error('Error updating document status:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error in update-doc-status:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
