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

    // Delete documents first to avoid foreign key constraints
    await supabase.from('documents').delete().eq('client_id', clientId);
    
    // Delete the client from the database
    const { error: dbError } = await supabase.from('clients').delete().eq('id', clientId);
    
    if (dbError) throw dbError;

    // Delete the user from Supabase Auth (Admin action)
    const { error: authError } = await supabase.auth.admin.deleteUser(clientId);
    
    if (authError) {
      console.warn("Failed to delete user from Auth, they might only be a client record:", authError.message);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Delete client error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
