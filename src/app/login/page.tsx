"use client";

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, Loader2, KeyRound } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    if (isLogin) {
      // Normal Email + Password Login
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      if (email.includes('admin') || email === 'shabbir@amazonfastservices.com' || email === 'appointmentstudio@gmail.com') {
        router.push('/admin-portal');
      } else {
        router.push('/portal');
      }
    } else {
      // CUSTOM NODE.JS OTP REGISTRATION FLOW
      // 1. Send OTP to email first
      try {
        const res = await fetch('/api/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        if (!res.ok) throw new Error("Failed to send OTP");
        
        setSuccessMsg("A 6-digit code has been sent to your email.");
        setStep('otp'); // Switch to OTP screen
      } catch (err: any) {
        setError(err.message || "Failed to send OTP");
      }
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 1. Verify OTP manually from database
    const { data: otpData, error: otpError } = await supabase
      .from('otps')
      .select('*')
      .eq('email', email)
      .eq('code', otp)
      .order('created_at', { ascending: false })
      .limit(1);

    if (otpError || !otpData || otpData.length === 0) {
      setError("Invalid or expired OTP.");
      setLoading(false);
      return;
    }

    // 2. OTP is correct! Now create the Supabase Account
    let finalSession = null;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (signUpData?.session) {
      finalSession = signUpData.session;
    } else {
      // If session is null, it means the user already exists OR 'Confirm email' is still ON in Supabase!
      // Let's try to log them in directly.
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        // This will clearly show 'Email not confirmed' if they forgot to turn it off!
        setError(signInError.message || "Failed to log in automatically.");
        setLoading(false);
        return;
      }
      finalSession = signInData.session;
    }

    if (!finalSession) {
      setError("Session could not be created. Please ensure 'Confirm email' is OFF in Supabase.");
      setLoading(false);
      return;
    }

    // 3. Insert Client Profile & Notify Admin (Fire and forget)
    fetch('/api/notify-admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'NEW_REGISTRATION', fullName, email })
    }).catch(e => console.error(e));

    if (finalSession?.user) {
      const realUserId = finalSession.user.id;
      
      supabase.from('clients').insert({
        id: realUserId,
        email: email,
        full_name: fullName,
        status: 'New'
      }).then(({ error }) => {
        if (error) console.error("Client Insert Error:", error);
      });
      
      supabase.from('notifications').insert({
        client_id: realUserId,
        message: `New client registered: ${fullName} (${email}).`,
      }).then(({ error }) => {
        if (error) console.error("Notification Insert Error:", error);
      });
    }

    // 4. Redirect to portal
    router.push('/portal');
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-4 selection:bg-[#ff6b35] selection:text-white">
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        
        {/* Branding (Logo) */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="mb-6">
            <Image src="/logo-new.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            {step === 'otp' ? 'Enter OTP Code' : (isLogin ? 'Welcome back' : 'Create an account')}
          </h2>
          <p className="text-sm text-gray-500 font-medium mt-1 text-center">
            {step === 'otp' ? `We sent a 6-digit code to ${email}` : (isLogin ? 'Enter your email & password to access your portal' : 'Start your Amazon FBA journey')}
          </p>
        </div>

        {/* Dynamic Form based on step */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl">
                {error}
              </div>
            )}

            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20 focus:border-[#ff6b35] transition"
                    placeholder="Ali Khan"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20 focus:border-[#ff6b35] transition"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20 focus:border-[#ff6b35] transition"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#ff6b35] to-orange-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : (isLogin ? 'Sign In' : 'Create Account')}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            {error && (
              <div className="p-3 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl">
                {error}
              </div>
            )}
            {successMsg && (
              <div className="p-3 text-sm font-medium text-green-600 bg-green-50 border border-green-100 rounded-xl">
                {successMsg}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">6-Digit OTP</label>
              <div className="relative">
                <KeyRound size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg tracking-[0.2em] font-black text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20 focus:border-[#ff6b35] transition"
                  placeholder="000000"
                  maxLength={6}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#ff6b35] to-orange-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : 'Verify OTP'}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>
        )}

        {/* Toggle between Login/Signup (Only show if not on OTP step) */}
        {step === 'form' && (
          <div className="mt-8 text-center text-sm font-medium text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button"
              onClick={() => { setIsLogin(!isLogin); setError(''); setSuccessMsg(''); }}
              className="text-[#ff6b35] hover:text-orange-600 font-bold transition"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
