"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('info@amazonfastservices.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ff6b35]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Text & Info */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 mb-6">
                <span className="text-[#ff6b35] text-sm font-semibold tracking-wide">GET IN TOUCH</span>
              </div>
              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold text-white leading-[1.1]"
                >
                  Let's Scale Your Brand Together
                </motion.h1>
              </div>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Ready to dominate your niche on Amazon? Contact our experts today to discuss how we can automate your operations, boost your sales, and build a highly profitable e-commerce empire.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <a href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff6b35] transition-colors">
                  <Phone className="text-[#ff6b35] group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1 group-hover:text-white/70 transition-colors">Call or WhatsApp</p>
                  <p className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                    +92 332 2568950
                  </p>
                </div>
              </a>

              <button onClick={handleEmailClick} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer w-full text-left">
                <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff6b35] transition-colors">
                  <Mail className="text-[#ff6b35] group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1 group-hover:text-white/70 transition-colors">
                    {emailCopied ? "Email Address Copied!" : "Email Us"}
                  </p>
                  <p className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors break-all">
                    info@amazonfastservices.com
                  </p>
                </div>
              </button>
            </div>

            <div className="mt-8">
              <p className="text-white/50 text-sm font-medium mb-4">Follow us on Social Media</p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/AmazonFastServices" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] transition text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></Link>
                <Link href="https://www.instagram.com/amazonfastservices.pk/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] transition text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></Link>
                <Link href="https://pk.linkedin.com/company/amazonfastservices" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></Link>
              </div>
            </div>
          </div>

          {/* Right: Contact Form & Calendly */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/20 blur-[60px] rounded-full pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
            <p className="text-white/50 mb-8 text-sm">We'll get back to you within 24 hours.</p>

            <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-white/70 font-medium px-1">First Name</label>
                  <input type="text" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} required placeholder="John" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b35]/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-white/70 font-medium px-1">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} placeholder="Doe" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b35]/50 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-white/70 font-medium px-1">Email Address</label>
                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b35]/50 transition-colors" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-white/70 font-medium px-1">Message</label>
                <textarea rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required placeholder="How can we help you scale on Amazon?" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b35]/50 transition-colors resize-none"></textarea>
              </div>

              {status === 'success' && <p className="text-green-500 text-sm font-bold bg-green-500/10 p-3 rounded-lg border border-green-500/20">Message sent successfully! We will get back to you soon.</p>}
              {status === 'error' && <p className="text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20">Failed to send message. Please try again or email us directly.</p>}

              <button type="submit" disabled={status === 'loading'} className="mt-2 w-full bg-[#ff6b35] hover:bg-[#e85c2b] text-white py-4 rounded-xl font-bold transition-colors shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="relative flex items-center py-2 mb-6">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="shrink-0 px-4 text-white/40 text-sm font-medium">OR</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <h3 className="text-lg font-bold text-white mb-4 text-center">Schedule a Video Meeting</h3>
            <a
              href="https://calendly.com/amazonfastservice1/new-meeting-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black py-3.5 px-8 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Open Calendly Booking
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
