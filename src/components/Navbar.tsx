"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const servicesList = [
  { name: "Amazon FBA Automation", slug: "amazon-fba-automation" },
  { name: "Amazon PPC Advertising", slug: "amazon-ppc-advertising" },
  { name: "Product Hunting & Sourcing", slug: "product-hunting" },
  { name: "Amazon Store Creation", slug: "store-creation" },
  { name: "A+ Content & EBC", slug: "a-content-ebc" },
  { name: "Listing SEO & Optimization", slug: "listing-seo" }
];

export const bankAccountsList = [
  { name: "Payoneer Setup", slug: "payoneer-wallet" },
  { name: "Wise Setup", slug: "wise-wallet" },
  { name: "Airwallex Setup", slug: "airwallex-wallet" },
  { name: "Stripe Setup", slug: "stripe-setup" }
];

export const physicalBankList = [
  { name: "Chase Bank", slug: "chase-bank" },
  { name: "Bank of America", slug: "bank-of-america" }
];

export const llcFormationList = [
  { name: "Wyoming LLC", slug: "wyoming-llc" },
  { name: "Florida LLC", slug: "florida-llc" },
  { name: "Texas LLC", slug: "texas-llc" }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileBankCreationOpen, setIsMobileBankCreationOpen] = useState(false);
  const [isMobilePhysicalBankOpen, setIsMobilePhysicalBankOpen] = useState(false);
  const [isMobileLLCOpen, setIsMobileLLCOpen] = useState(false);
  const [isDesktopNestedOpen, setIsDesktopNestedOpen] = useState(false);
  const [isDesktopPhysicalBankOpen, setIsDesktopPhysicalBankOpen] = useState(false);
  const [isDesktopLLCOpen, setIsDesktopLLCOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full px-6 sm:px-8 py-4 sm:py-6 flex justify-between items-center top-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <a href="/" className="flex items-center shrink-0">
        <Image src="/amazon-fast-logo.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain h-10 sm:h-12 w-auto" style={{ filter: "drop-shadow(0 0 15px rgba(255,107,53,0.8))" }} priority />
      </a>

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
            {/* Reduced gap and padding to prevent overflow */}
            <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-[280px] shadow-2xl flex flex-col gap-0.5 relative">
              {servicesList.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link">
                  {service.name}
                  <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                </Link>
              ))}

              <div className="w-full h-px bg-white/10 my-1"></div>

              {/* Nested Dropdown for LLC Formation */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDesktopLLCOpen(true)}
                onMouseLeave={() => setIsDesktopLLCOpen(false)}
              >
                <div className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${isDesktopLLCOpen ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  <Link href="/services/llc-formation" className="flex-1">
                    LLC Formation
                  </Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`opacity-70 transition-transform duration-200 ${isDesktopLLCOpen ? '-rotate-90 text-[#ff6b35]' : '-rotate-90'}`}><path d="m6 9 6 6 6-6"/></svg>
                </div>
                
                {/* Sub Menu appearing on the right */}
                <div 
                  className={`absolute top-0 left-[105%] transition-all duration-300 ${isDesktopLLCOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-4'}`}
                >
                  <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-56 shadow-2xl flex flex-col gap-0.5">
                    <Link href="/services/llc-formation" className="text-[#ff6b35] hover:bg-white/10 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between border-b border-white/10 mb-1">
                      Overview & All States
                      <ArrowUpRight size={14} />
                    </Link>
                    {llcFormationList.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/linkLlc">
                        {service.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover/linkLlc:opacity-100 transition-opacity text-[#ff6b35]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nested Dropdown for Bank Account Creation */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDesktopNestedOpen(true)}
                onMouseLeave={() => setIsDesktopNestedOpen(false)}
              >
                <button className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${isDesktopNestedOpen ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  Bank Account Creation
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`opacity-70 transition-transform duration-200 ${isDesktopNestedOpen ? '-rotate-90 text-[#ff6b35]' : '-rotate-90'}`}><path d="m6 9 6 6 6-6"/></svg>
                </button>
                
                {/* Sub Menu appearing on the right */}
                <div 
                  className={`absolute bottom-0 left-[105%] transition-all duration-300 ${isDesktopNestedOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-4'}`}
                >
                  <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-56 shadow-2xl flex flex-col gap-0.5">
                    {bankAccountsList.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link2">
                        {service.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover/link2:opacity-100 transition-opacity text-[#ff6b35]" />
                      </Link>
                    ))}
                    
                    <div className="w-full h-px bg-white/10 my-1"></div>

                    {/* Third level nested dropdown for Physical Bank */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsDesktopPhysicalBankOpen(true)}
                      onMouseLeave={() => setIsDesktopPhysicalBankOpen(false)}
                    >
                      <button className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${isDesktopPhysicalBankOpen ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                        Physical Bank
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`opacity-70 transition-transform duration-200 ${isDesktopPhysicalBankOpen ? '-rotate-90 text-[#ff6b35]' : '-rotate-90'}`}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      
                      <div className={`absolute top-0 left-[105%] transition-all duration-300 ${isDesktopPhysicalBankOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-4'}`}>
                        <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-48 shadow-2xl flex flex-col gap-0.5">
                          {physicalBankList.map((service) => (
                            <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link3">
                              {service.name}
                              <ArrowUpRight size={14} className="opacity-0 group-hover/link3:opacity-100 transition-opacity text-[#ff6b35]" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Link href="/privacy-policy" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">Privacy Policy</Link>
        <Link href="/contact-us" className="bg-[#ff6b35] text-white hover:bg-[#e85c2b] px-6 py-2 rounded-full text-sm font-medium transition ml-2">Contact Us</Link>
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
        <div className="flex flex-col p-6 gap-6 mt-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {[{name: 'Home', href: '/'}, {name: 'About', href: '/about'}].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 10 }}
              transition={{ delay: isMobileMenuOpen ? i * 0.1 : 0, duration: 0.3 }}
              className="flex flex-col"
            >
              <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white hover:text-[#ff6b35] transition flex items-center justify-between group">
                {item.name}
                <ArrowUpRight className="text-white/20 group-hover:text-[#ff6b35] transition-colors" size={24} />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 10 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex flex-col"
          >
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-2xl font-semibold text-white hover:text-[#ff6b35] transition flex items-center justify-between w-full text-left"
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white/20 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            {/* Mobile Submenu - Compacted */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isMobileServicesOpen ? 'auto' : 0,
                opacity: isMobileServicesOpen ? 1 : 0,
                marginTop: isMobileServicesOpen ? 16 : 0
              }}
              className="overflow-hidden flex flex-col gap-3 pl-3 border-l-2 border-white/10"
            >
              {servicesList.map(service => (
                <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-white text-base font-medium transition-colors py-1">
                  {service.name}
                </Link>
              ))}

              {/* Mobile LLC Formation Dropdown */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileLLCOpen(!isMobileLLCOpen);
                }}
                className="text-white/60 hover:text-white text-base font-medium transition-colors flex items-center justify-between text-left py-1 mt-1 border-t border-white/10 pt-3"
              >
                LLC Formation
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMobileLLCOpen ? 'rotate-180 text-[#ff6b35]' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
              </button>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isMobileLLCOpen ? 'auto' : 0,
                  opacity: isMobileLLCOpen ? 1 : 0,
                  marginTop: isMobileLLCOpen ? 4 : 0
                }}
                className="overflow-hidden flex flex-col gap-2 pl-3 border-l border-white/10"
              >
                <Link href="/services/llc-formation" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ff6b35] font-semibold text-sm transition-colors py-1">
                  ★ Overview & All States
                </Link>
                {llcFormationList.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 hover:text-[#ff6b35] text-sm font-medium transition-colors py-1">
                    {service.name}
                  </Link>
                ))}
              </motion.div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileBankCreationOpen(!isMobileBankCreationOpen);
                }}
                className="text-white/60 hover:text-white text-base font-medium transition-colors flex items-center justify-between text-left py-1 mt-1 border-t border-white/10 pt-3"
              >
                Bank Account Creation
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMobileBankCreationOpen ? 'rotate-180 text-[#ff6b35]' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
              </button>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isMobileBankCreationOpen ? 'auto' : 0,
                  opacity: isMobileBankCreationOpen ? 1 : 0,
                  marginTop: isMobileBankCreationOpen ? 4 : 0
                }}
                className="overflow-hidden flex flex-col gap-2 pl-3 border-l border-white/10"
              >
                {bankAccountsList.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 hover:text-[#ff6b35] text-sm font-medium transition-colors py-1">
                    {service.name}
                  </Link>
                ))}

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobilePhysicalBankOpen(!isMobilePhysicalBankOpen);
                  }}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center justify-between text-left py-1 mt-1 border-t border-white/10 pt-2"
                >
                  Physical Bank
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMobilePhysicalBankOpen ? 'rotate-180 text-[#ff6b35]' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                </button>
                
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isMobilePhysicalBankOpen ? 'auto' : 0,
                    opacity: isMobilePhysicalBankOpen ? 1 : 0,
                    marginTop: isMobilePhysicalBankOpen ? 4 : 0
                  }}
                  className="overflow-hidden flex flex-col gap-2 pl-3 border-l border-white/10"
                >
                  {physicalBankList.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 hover:text-[#ff6b35] text-sm font-medium transition-colors py-1">
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 10 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link href="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white hover:text-[#ff6b35] transition flex items-center justify-between group">
              Privacy Policy
              <ArrowUpRight className="text-white/20 group-hover:text-[#ff6b35] transition-colors" size={24} />
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Menu Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.4 }}
          className="mt-auto p-6 border-t border-white/10 bg-[#0a0a0a]"
        >
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-white text-black hover:bg-[#ea5c2b] hover:text-white transition-colors py-3.5 rounded-full font-bold tracking-wide text-base shadow-lg">
            Book a Meeting
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}
