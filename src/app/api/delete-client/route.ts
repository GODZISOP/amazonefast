import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { clientId } = await req.json();

    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const supabase = createSupabaseClient(supabaseUrl, supabaseKey);

    // 1. Delete dependent records (notifications, documents) in parallel
    await Promise.allSettled([
      supabase.from('notifications').delete().eq('client_id', clientId),
      supabase.from('documents').delete().eq('client_id', clientId)
    ]);
    
    // 2. Delete the client record and auth user in parallel
    await Promise.allSettled([
      supabase.from('clients').delete().eq('id', clientId),
      supabase.auth.admin.deleteUser(clientId)
    ]);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Delete client error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
