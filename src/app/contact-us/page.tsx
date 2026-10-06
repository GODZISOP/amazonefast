import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | AmazonFast",
  description: "Get in touch with Amazon Fast Services for expert Amazon scaling and marketing.",
};

export default function ContactUs() {
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
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                Let's Scale Your Brand Together
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Ready to dominate your niche on Amazon? Contact our experts today to discuss how we can automate your operations, boost your sales, and build a highly profitable e-commerce empire.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center shrink-0">
                  <Phone className="text-[#ff6b35]" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1">Call or WhatsApp</p>
                  <a href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-[#ff6b35] transition-colors">
                    +92 332 2568950
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center shrink-0">
                  <Mail className="text-[#ff6b35]" size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1">Email Us</p>
                  <a href="mailto:info@amazonfastservices.com" className="text-xl font-bold text-white hover:text-[#ff6b35] transition-colors break-all">
                    info@amazonfastservices.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-white/50 text-sm font-medium mb-4">Follow us on Social Media</p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/AmazonFastServices" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] transition text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></Link>
                <Link href="https://www.instagram.com/amazonfastservices.pk/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] transition text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></Link>
                <Link href="https://pk.linkedin.com/company/amazonfastservices" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link>
              </div>
            </div>
          </div>

          {/* Right: Embed Calendly / Form */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/20 blur-[60px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Schedule a Meeting</h3>
            <p className="text-white/60 mb-8">
              Pick a time that works best for you and talk directly to our experts via Google Meet or Zoom.
            </p>
            
            <a 
              href="https://calendly.com/amazonfastservice1/new-meeting-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-3 bg-[#ff6b35] hover:bg-[#e85c2b] text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Open Calendly Booking
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/40 text-sm">We typically respond within 24 hours.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
