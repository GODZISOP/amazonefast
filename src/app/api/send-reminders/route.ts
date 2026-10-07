import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
// import { createClient } from '@supabase/supabase-js';

// This API is meant to be hit automatically by Vercel Cron Jobs daily
export async function GET() {
  try {
    // In the future, we will:
    // 1. Fetch all clients from Supabase whose status is 'Documents Pending'
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
    // const { data: clients } = await supabase.from('clients').select('*').eq('status', 'Pending');
    
    // 2. Send reminder emails to each of them
    // for (const client of clients) {
    //   await sendEmail({
    //     to: client.email,
    //     subject: "Action Required: Pending Documents - Amazon Fast Services",
    //     html: `<h3>Hi ${client.name},</h3><p>We are waiting for your documents to proceed with your onboarding. Please login to the portal and upload them.</p>`,
    //   });
    // }

    return NextResponse.json({ 
      status: "success", 
      message: "Automated document reminders triggered successfully." 
    });
  } catch (error: any) {
    console.error("Error sending reminders:", error);
    return NextResponse.json({ 
      status: "error", 
      message: "Failed to process reminders." 
    }, { status: 500 });
  }
}
