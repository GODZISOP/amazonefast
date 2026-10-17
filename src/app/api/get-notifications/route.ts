import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: notifData } = await supabase
      .from('notifications')
      .select('*, clients(full_name)')
      .order('created_at', { ascending: false })
      .limit(15);

    return NextResponse.json({ notifications: notifData || [] });
  } catch (error: any) {
    return NextResponse.json({ notifications: [] }, { status: 500 });
  }
}
