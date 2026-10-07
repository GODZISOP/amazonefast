import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { createClient } from '@supabase/supabase-js';

// Use a server-side Supabase client with anon key (or service key if available)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // 1. Generate a 6-digit random code
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // 2. Save it to Supabase otps table
    const { error: dbError } = await supabase.from('otps').insert({
      email: email,
      code: otpCode
    });

    if (dbError) {
      console.error("OTP DB Error:", dbError);
      return NextResponse.json({ error: "Failed to save OTP" }, { status: 500 });
    }

    // 3. Send email via Nodemailer
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; padding: 24px; text-align: center;">
        <h2 style="color: #ff6b35;">AmazonFast Services</h2>
        <p style="font-size: 16px;">Your verification code is:</p>
        <h1 style="letter-spacing: 5px; color: #111; background: #f9fafb; padding: 16px; border-radius: 8px; display: inline-block;">${otpCode}</h1>
        <p style="font-size: 14px; color: #666; margin-top: 20px;">Please enter this code on the website to verify your account.</p>
      </div>
    `;

    await sendEmail({
      to: email, // Send to the user
      subject: `Your Verification Code: ${otpCode}`,
      html: emailHtml
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Send OTP Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
