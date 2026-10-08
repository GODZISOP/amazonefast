import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { id, email, fullName } = await req.json();

    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Check if client already exists
    const { data: existingClient } = await supabase.from('clients').select('id, full_name').eq('id', id).single();

    if (!existingClient) {
      // Insert client profile bypassing RLS
      const { error: clientError } = await supabase.from('clients').insert({
        id,
        email,
        full_name: fullName,
        status: 'New'
      });

      if (clientError) {
        console.error("Supabase insert client error:", clientError);
        return NextResponse.json({ error: clientError.message }, { status: 500 });
      }


      // Insert notification bypassing RLS
      const { error: notifError } = await supabase.from('notifications').insert({
        client_id: id,
        message: `New client registered: ${fullName} (${email}).`,
      });

      if (notifError) {
        console.error("Supabase insert notification error:", notifError);
      }
    } else if (existingClient.full_name !== fullName) {
      // Keep full_name in sync with Auth/Google if it changes
      await supabase.from('clients').update({ full_name: fullName }).eq('id', id);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Init Profile API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
