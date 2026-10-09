"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const servicesList = [
  { name: "Amazon Account Creation", slug: "amazon-account-creation" },
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

export const accountManagementList = [
  { name: "Wholesale Account Management", slug: "amazon-wholesale-fba" },
  { name: "Private Label Account Management", slug: "amazon-private-label" }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileBankCreationOpen, setIsMobileBankCreationOpen] = useState(false);
  const [isMobilePhysicalBankOpen, setIsMobilePhysicalBankOpen] = useState(false);
  const [isMobileLLCOpen, setIsMobileLLCOpen] = useState(false);
  const [isMobileWholesaleOpen, setIsMobileWholesaleOpen] = useState(false);
  const [desktopActiveDropdown, setDesktopActiveDropdown] = useState<"bank" | "llc" | "wholesale" | null>(null);

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
            <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[760px] max-w-[calc(100vw-48px)] shadow-2xl">
              <div className="grid grid-cols-3 gap-3">

                {/* Column 1: Store Setup & Growth */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6b35] px-3 py-1">
                    Store Setup & Growth
                  </span>
                  <Link 
                    href="/services/amazon-account-creation" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Amazon Account Creation</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                  <Link 
                    href="/services/amazon-ppc-advertising" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Amazon PPC Advertising</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                  <Link 
                    href="/services/product-hunting" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Product Hunting & Sourcing</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                  <Link 
                    href="/services/store-creation" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Amazon Store Creation</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                </div>

                {/* Column 2: Content & Protection */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6b35] px-3 py-1">
                    Content & Protection
                  </span>
                  <Link 
                    href="/services/a-content-ebc" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>A+ Content & EBC</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                  <Link 
                    href="/services/listing-seo" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Listing SEO & Optimization</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                  <Link 
                    href="/services/brand-approvals" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Brand Approvals & Ungating</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                  <Link 
                    href="/services/trademark-brand-registry" 
                    className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-between group/link"
                  >
                    <span>Trademark & Brand Registry</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#ff6b35]" />
                  </Link>
                </div>

                {/* Column 3: Corporate & Scaling with Dropdown Submenus */}
                <div 
                  className="flex flex-col gap-0.5"
                  onMouseLeave={() => setDesktopActiveDropdown(null)}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6b35] px-3 py-1">
                    Corporate & Scaling
                  </span>

                  {/* 1. Bank Account Creation Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setDesktopActiveDropdown("bank")}
                  >
                    <div className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${desktopActiveDropdown === "bank" ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
                      <Link href="/services/payoneer-wallet" className="flex-1">
                        Bank Account Creation
                      </Link>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setDesktopActiveDropdown(desktopActiveDropdown === "bank" ? null : "bank");
                        }}
                        className="p-0.5 hover:text-[#ff6b35] transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${desktopActiveDropdown === "bank" ? "rotate-180 text-[#ff6b35]" : "opacity-70"}`}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                    </div>

                    {desktopActiveDropdown === "bank" && (
                      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-1.5 flex flex-col gap-0.5 ml-2 mt-1 mb-1">
                        <Link href="/services/payoneer-wallet" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Payoneer Setup</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/wise-wallet" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Wise Setup</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/airwallex-wallet" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Airwallex Setup</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/stripe-setup" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Stripe Setup</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <div className="w-full h-px bg-white/10 my-0.5"></div>
                        <Link href="/services/chase-bank" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Chase Bank</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/bank-of-america" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Bank of America</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* 2. US LLC Formation Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setDesktopActiveDropdown("llc")}
                  >
                    <div className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${desktopActiveDropdown === "llc" ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
                      <Link href="/services/llc-formation" className="flex-1">
                        US LLC Formation
                      </Link>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setDesktopActiveDropdown(desktopActiveDropdown === "llc" ? null : "llc");
                        }}
                        className="p-0.5 hover:text-[#ff6b35] transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${desktopActiveDropdown === "llc" ? "rotate-180 text-[#ff6b35]" : "opacity-70"}`}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                    </div>

                    {desktopActiveDropdown === "llc" && (
                      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-1.5 flex flex-col gap-0.5 ml-2 mt-1 mb-1">
                        <Link href="/services/llc-formation" className="text-[#ff6b35] hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-between group/sub">
                          <span>Overview & All States</span>
                          <ArrowUpRight size={12} className="opacity-100 text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/wyoming-llc" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Wyoming LLC</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/florida-llc" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Florida LLC</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/texas-llc" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Texas LLC</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* 3. Complete Wholesale & PL Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setDesktopActiveDropdown("wholesale")}
                  >
                    <div className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${desktopActiveDropdown === "wholesale" ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
                      <Link href="/services/amazon-wholesale-fba" className="flex-1">
                        Complete Wholesale & PL
                      </Link>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setDesktopActiveDropdown(desktopActiveDropdown === "wholesale" ? null : "wholesale");
                        }}
                        className="p-0.5 hover:text-[#ff6b35] transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${desktopActiveDropdown === "wholesale" ? "rotate-180 text-[#ff6b35]" : "opacity-70"}`}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                    </div>

                    {desktopActiveDropdown === "wholesale" && (
                      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-1.5 flex flex-col gap-0.5 ml-2 mt-1 mb-1">
                        <Link href="/services/amazon-wholesale-fba" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Wholesale Account Management</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                        <Link href="/services/amazon-private-label" className="text-white/70 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group/sub">
                          <span>Private Label Management</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#ff6b35]" />
                        </Link>
                      </div>
                    )}
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
            
            {/* Mobile Submenu */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isMobileServicesOpen ? 'auto' : 0,
                opacity: isMobileServicesOpen ? 1 : 0,
                marginTop: isMobileServicesOpen ? 16 : 0
              }}
              className="overflow-hidden flex flex-col gap-3 pl-3 border-l-2 border-white/10"
            >
              {/* 1. Amazon Account Creation */}
              <Link 
                href="/services/amazon-account-creation" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white hover:text-[#ff6b35] text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                Amazon Account Creation
                <ArrowUpRight size={16} className="text-[#ff6b35]" />
              </Link>

              {/* 2. Amazon PPC Advertising */}
              <Link 
                href="/services/amazon-ppc-advertising" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white/70 hover:text-white text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                Amazon PPC Advertising
                <ArrowUpRight size={14} className="text-white/30" />
              </Link>

              {/* 3. Product Hunting & Sourcing */}
              <Link 
                href="/services/product-hunting" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white/70 hover:text-white text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                Product Hunting & Sourcing
                <ArrowUpRight size={14} className="text-white/30" />
              </Link>

              {/* 4. Amazon Store Creation */}
              <Link 
                href="/services/store-creation" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white/70 hover:text-white text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                Amazon Store Creation
                <ArrowUpRight size={14} className="text-white/30" />
              </Link>

              {/* 5. A+ Content & EBC */}
              <Link 
                href="/services/a-content-ebc" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white/70 hover:text-white text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                A+ Content & EBC
                <ArrowUpRight size={14} className="text-white/30" />
              </Link>

              {/* 6. Listing SEO & Optimization */}
              <Link 
                href="/services/listing-seo" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white/70 hover:text-white text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                Listing SEO & Optimization
                <ArrowUpRight size={14} className="text-white/30" />
              </Link>

              <div className="w-full h-px bg-white/10 my-1"></div>

              {/* 7. Mobile Bank Account Creation Dropdown */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileBankCreationOpen(!isMobileBankCreationOpen);
                }}
                className="text-white/80 hover:text-white text-base font-medium transition-colors flex items-center justify-between text-left py-1"
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
                  <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-[#ff6b35] text-sm font-medium transition-colors py-1">
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

              {/* 8. Mobile LLC Formation Dropdown */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileLLCOpen(!isMobileLLCOpen);
                }}
                className="text-white/80 hover:text-white text-base font-medium transition-colors flex items-center justify-between text-left py-1"
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
                  <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-[#ff6b35] text-sm font-medium transition-colors py-1">
                    {service.name}
                  </Link>
                ))}
              </motion.div>

              {/* 9. Complete Wholesale & PL Dropdown */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileWholesaleOpen(!isMobileWholesaleOpen);
                }}
                className="text-white/80 hover:text-white text-base font-medium transition-colors flex items-center justify-between text-left py-1"
              >
                Complete Wholesale & PL
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMobileWholesaleOpen ? 'rotate-180 text-[#ff6b35]' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
              </button>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isMobileWholesaleOpen ? 'auto' : 0,
                  opacity: isMobileWholesaleOpen ? 1 : 0,
                  marginTop: isMobileWholesaleOpen ? 4 : 0
                }}
                className="overflow-hidden flex flex-col gap-2 pl-3 border-l border-white/10"
              >
                {accountManagementList.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-[#ff6b35] text-sm font-medium transition-colors py-1 flex items-center justify-between">
                    {service.name}
                    <ArrowUpRight size={14} className="text-[#ff6b35]" />
                  </Link>
                ))}
              </motion.div>

              {/* 10. Brand Approvals */}
              <Link 
                href="/services/brand-approvals" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white hover:text-[#ff6b35] text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                <span>Brand Approvals</span>
                <ArrowUpRight size={14} className="text-[#ff6b35]" />
              </Link>

              {/* 11. Trademark & Brand Registry */}
              <Link 
                href="/services/trademark-brand-registry" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white hover:text-[#ff6b35] text-base font-medium transition-colors py-1 flex items-center justify-between"
              >
                <span>Trademark & Brand Registry</span>
                <ArrowUpRight size={14} className="text-[#ff6b35]" />
              </Link>
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
