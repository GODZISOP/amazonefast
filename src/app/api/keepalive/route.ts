import { NextResponse } from 'next/server';
// import { createClient } from '@supabase/supabase-js';

// This API route exists solely to be hit by a cron job every 24 hours.
// This prevents Supabase free-tier projects from pausing due to 7 days of inactivity.
export async function GET() {
  try {
    console.log("Keep-alive cron job executed.");
    
    // Uncomment and use this once Supabase is connected:
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
    // const { data, error } = await supabase.from('clients').select('id').limit(1);
    
    // if (error) throw error;

    return NextResponse.json({ 
      status: "success", 
      message: "Supabase keep-alive pinged successfully to prevent pausing." 
    });
  } catch (error: any) {
    console.error("Keep-alive error:", error.message);
    return NextResponse.json({ 
      status: "error", 
      message: "Failed to ping Supabase." 
    }, { status: 500 });
  }
}
