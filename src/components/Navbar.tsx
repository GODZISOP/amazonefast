"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const servicesList = [
  { name: "Amazon FBA Automation", slug: "amazon-fba-automation" },
  { name: "Amazon PPC", slug: "amazon-ppc" },
  { name: "Amazon Product Hunting", slug: "amazon-product-hunting" },
  { name: "Amazon Store Creation", slug: "amazon-store-creation" },
  { name: "A+ Content/EBC", slug: "a-content-ebc" },
  { name: "Shopify Dropshipping", slug: "shopify-dropshipping" }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="absolute z-50 w-full px-6 sm:px-8 py-6 flex justify-between items-center top-0 left-0 bg-transparent">
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image src="/image.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain h-8 sm:h-10 w-auto" priority />
      </Link>

      {/* Center Pill Navbar */}
      <nav className="hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20">
        <Link href="/" className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium transition">Home</Link>
        <Link href="/about" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">About Us</Link>
        
        {/* Services Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-200"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 w-64 shadow-2xl flex flex-col gap-1">
              {servicesList.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link">
                  {service.name}
                  <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/privacy-policy" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">Privacy Policy</Link>
        <Link href="https://calendly.com/amazonfastservice1/new-meeting-1" target="_blank" className="bg-[#ff6b35] text-white hover:bg-[#e85c2b] px-6 py-2 rounded-full text-sm font-medium transition ml-2">Contact Us</Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-50"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <motion.div 
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? 'calc(100vh - 88px)' : 0, 
          opacity: isMobileMenuOpen ? 1 : 0 
        }}
        className="absolute top-full left-0 w-full overflow-hidden bg-[#0a0a0a]/98 backdrop-blur-3xl border-t border-white/5 lg:hidden flex flex-col"
      >
        <div className="flex flex-col p-8 gap-8 mt-4 overflow-y-auto">
          {[{name: 'Home', href: '/'}, {name: 'About', href: '/about'}, {name: 'Privacy Policy', href: '/privacy-policy'}, {name: 'Contact Us', href: 'https://calendly.com/amazonfastservice1/new-meeting-1'}].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: isMobileMenuOpen ? i * 0.1 : 0, duration: 0.4, ease: "easeOut" }}
              className="flex flex-col"
            >
              <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-semibold text-white hover:text-[#ff6b35] transition tracking-tight flex items-center justify-between group">
                {item.name}
                <ArrowUpRight className="text-white/20 group-hover:text-[#ff6b35] transition-colors" size={28} />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            className="flex flex-col"
          >
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-4xl font-semibold text-white hover:text-[#ff6b35] transition tracking-tight flex items-center justify-between group w-full text-left"
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white/20 group-hover:text-[#ff6b35] transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            {/* Mobile Submenu */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isMobileServicesOpen ? 'auto' : 0,
                opacity: isMobileServicesOpen ? 1 : 0,
                marginTop: isMobileServicesOpen ? 24 : 0
              }}
              className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-white/10"
            >
              {servicesList.map(service => (
                <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-white text-xl font-medium transition-colors">
                  {service.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Mobile Menu Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.4 }}
          className="mt-auto p-8 border-t border-white/10 mb-4"
        >
          <Link href="https://calendly.com/amazonfastservice1/new-meeting-1" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-black hover:bg-[#ea5c2b] hover:text-white transition-colors py-4 rounded-full font-bold tracking-wide text-lg">
            Book a Meeting
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}
