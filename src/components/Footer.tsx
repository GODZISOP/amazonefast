import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-between pt-16">
      
      {/* Background Gradient matching the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#ff6b35]/40 to-[#ff6b35] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2 opacity-80">Quick Links</h4>
            <Link href="/" className="text-white/60 hover:text-white transition text-sm">Home</Link>
            <Link href="/about" className="text-white/60 hover:text-white transition text-sm">About Us</Link>
            <Link href="/blog" className="text-white/60 hover:text-white transition text-sm">Blogs</Link>
            <Link href="/contact-us" className="text-white/60 hover:text-white transition text-sm">Contact Us</Link>
          </div>

          {/* Column 2: Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2 opacity-80">Legal Links</h4>
            <Link href="/terms" className="text-white/60 hover:text-white transition text-sm">Terms Of Service</Link>
            <Link href="/privacy-policy" className="text-white/60 hover:text-white transition text-sm">Privacy Policy</Link>
          </div>

          {/* Column 3: Stay Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2 opacity-80">Stay Connect</h4>
            <div className="flex gap-4 items-center">
              <Link href="https://twitter.com" target="_blank" className="text-white/60 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="https://pk.linkedin.com/company/amazonfastservices" target="_blank" className="text-white/60 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="mailto:info@amazonfastservices.com" className="text-white/60 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2 opacity-80">Newsletter</h4>
            <p className="text-white font-medium text-lg leading-snug">
              You Read This Far, Might As Well Sign Up.
            </p>
            <div className="flex w-full mt-2 bg-black/20 rounded-md overflow-hidden border border-white/10 backdrop-blur-sm">
              <input 
                type="email" 
                placeholder="sample@gmail.com" 
                className="bg-transparent text-white placeholder-white/30 px-4 py-3 outline-none w-full text-sm"
              />
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium transition whitespace-nowrap border-l border-white/10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Bottom Text */}
      <div className="relative z-10 w-full flex justify-center items-end mt-auto pointer-events-none pb-4">
        <h1 className="text-[18vw] leading-[0.75] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/40 drop-shadow-2xl select-none">
          AmazonFast
        </h1>
      </div>
      
    </footer>
  );
}
