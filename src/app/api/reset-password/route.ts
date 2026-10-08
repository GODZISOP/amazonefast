import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { email, password, otp } = await req.json();

    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Verify OTP
    const { data: otpData, error: otpError } = await supabase
      .from('otps')
      .select('*')
      .eq('email', email)
      .eq('code', otp)
      .order('created_at', { ascending: false })
      .limit(1);

    if (otpError || !otpData || otpData.length === 0) {
      return NextResponse.json({ error: "Invalid or expired OTP." }, { status: 400 });
    }

    // 2. Get User ID
    let userId = null;

    // Try finding in clients table first (fastest)
    const { data: clientData } = await supabase.from('clients').select('id').eq('email', email).single();
    if (clientData?.id) {
      userId = clientData.id;
    } else {
      // Fallback: search in Auth users
      const { data: authData, error: authError } = await supabase.auth.admin.listUsers();
      if (!authError && authData.users) {
        const foundUser = authData.users.find(u => u.email === email);
        if (foundUser) {
          userId = foundUser.id;
        }
      }
    }

    if (!userId) {
       return NextResponse.json({ error: "User account not found." }, { status: 404 });
    }

    // 3. Update Password using Admin API
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      userId,
      { password: password }
    );

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // 4. Clean up the used OTP
    await supabase.from('otps').delete().eq('id', otpData[0].id);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Reset Password API Error:', error);
    return NextResponse.json({ error: error.message || "An unexpected error occurred." }, { status: 500 });
  }
}
