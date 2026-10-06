import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] pt-24 pb-8 px-6 sm:px-12 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain h-12 w-auto" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              With years of expertise, Amazon Fast Services has established a solid reputation as one of the most respected Amazon marketing agencies in the United States.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <Link href="https://www.facebook.com/AmazonFastServices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:border-transparent hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/amazonfastservices.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#E4405F] hover:border-transparent hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></Link>
              {/* LinkedIn */}
              <Link href="https://pk.linkedin.com/company/amazonfastservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#0A66C2] hover:border-transparent hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link>
              {/* TikTok */}
              <Link href="https://www.tiktok.com/@amazonfastservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-3.328.026c0 1.258.53 2.457 1.417 3.344C6.15 21.67 7.348 22 8.606 22a8.653 8.653 0 0 0 8.606-8.606v-3.791c1.336 1.096 3.031 1.737 4.788 1.76V8.049a4.877 4.877 0 0 1-2.411-1.363z"/></svg></Link>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Amazon FBA Automation", slug: "amazon-fba-automation" },
                { name: "Amazon PPC", slug: "amazon-ppc" },
                { name: "Product Hunting", slug: "amazon-product-hunting" },
                { name: "Store Creation", slug: "amazon-store-creation" },
                { name: "A+ Content / EBC", slug: "a-content-ebc" },
                { name: "Shopify Dropshipping", slug: "shopify-dropshipping" }
              ].map(link => (
                <li key={link.slug}><Link href={`/services/${link.slug}`} className="text-white/50 hover:text-[#ff6b35] text-sm transition">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Pages Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Pages</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Privacy Policy", href: "/privacy-policy" }
              ].map(link => (
                <li key={link.name}><Link href={link.href} className="text-white/50 hover:text-[#ff6b35] text-sm transition">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-1.5 shrink-0"></span> +92-332-2568950
                </a>
              </li>
              <li>
                <a href="mailto:info@amazonfastservices.com" className="text-white/50 hover:text-white text-sm transition flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-1.5 shrink-0"></span> info@amazonfastservices.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-medium tracking-wide uppercase">
            &copy; {new Date().getFullYear()} Amazon Fast Services. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-medium tracking-wide uppercase">
            Powered By <span className="text-white/60">X One Hub</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
