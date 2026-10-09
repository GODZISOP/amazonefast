"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  Sun, 
  Building2, 
  ChevronDown
} from "lucide-react";

interface FloridaLLCServiceUIProps {
  data: any;
}

export default function FloridaLLCServiceUI({ data }: FloridaLLCServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to form my Florida LLC ($500 package). Please guide me through the registration.";

  const floridaBenefits = [
    {
      title: "Zero Personal State Income Tax",
      desc: "Florida's state constitution strictly bans personal state income tax, making it a financial haven for digital and Amazon sellers.",
      tag: "0% Income Tax"
    },
    {
      title: "Premier East Coast Logistics Hub",
      desc: "Home to PortMiami, Port Everglades, and massive Amazon fulfillment centers, streamlining international freight imports.",
      tag: "Amazon FBA Prime"
    },
    {
      title: "Sunbiz Instant Electronic Filing",
      desc: "Direct integration with the Florida Division of Corporations (Sunbiz) for reliable, clean document issuance.",
      tag: "Direct Sunbiz"
    },
    {
      title: "Strong Commercial Banking Prestige",
      desc: "Florida companies are widely recognized and instantly approved by US physical banks and fintech leaders.",
      tag: "Top Bank Trust"
    }
  ];

  const complianceTimeline = [
    {
      step: "01",
      title: "Name Reservation & Sunbiz Filing",
      time: "Day 1 – 2",
      desc: "We verify your company name and file Articles of Organization directly through Florida Sunbiz."
    },
    {
      step: "02",
      title: "Official State Approval",
      time: "Day 3 – 5",
      desc: "Receive your stamped certificate and official Charter Document from the State of Florida."
    },
    {
      step: "03",
      title: "IRS EIN & BOI FinCEN Submission",
      time: "Day 6 – 14",
      desc: "We assign your Federal Employer Identification Number (EIN) and submit mandatory BOI compliance."
    },
    {
      step: "04",
      title: "Bank & Amazon Store Onboarding",
      time: "Day 15+",
      desc: "Open your US business bank account (Mercury / Relay / Wise) and initiate Amazon Seller Central."
    }
  ];

  const packageItems = [
    "Florida Division of Corporations Filing Fee ($125 Included)",
    "Florida Registered Agent Service (1 Full Year)",
    "Commercial Street Address in Florida with Mail Forwarding",
    "Federal EIN (Tax ID) from IRS for Non-Residents",
    "Custom Florida LLC Operating Agreement & Banking Resolutions",
    "Mandatory FinCEN BOI (Beneficial Ownership) Filing",
    "US Business Bank Account Setup Guidance (Mercury / Relay / Stripe)",
    "Florida Resale Certificate / Sales Tax Guidance",
    "Official Certificate of Status / Charter Document",
    "1-on-1 Dedicated Support on WhatsApp"
  ];

  const faqs = [
    {
      q: "Why choose Florida over other states for my Amazon business?",
      a: "Florida is the #1 logistics gateway for e-commerce with world-class ports, massive Amazon warehouse infrastructure, zero personal income tax, and high commercial credibility with US banks."
    },
    {
      q: "Is the $125 Florida state filing fee included in this $500 price?",
      a: "Yes! The $500 package is 100% all-inclusive. It covers the $125 Florida state fee, 1 year of registered agent, commercial address, EIN, BOI compliance, and bank account setup support."
    },
    {
      q: "What are Florida's annual ongoing requirements?",
      a: "Florida requires an Annual Report filed with Sunbiz between January 1st and May 1st each year ($138.75 state fee). We alert you and assist you with every deadline."
    },
    {
      q: "Can I form a Florida LLC without visiting the USA?",
      a: "Yes, 100% remotely. No US visa, physical travel, or SSN is needed. Everything is handled digitally."
    }
  ];

  return (
    <div className="bg-[#0a0400] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden pt-28 pb-24 border-t border-white/5">
      
      {/* Background ambient glow matching theme */}
      <div 
        className="absolute top-10 right-10 w-[700px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(10,4,0,0) 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services/llc-formation" className="hover:text-[#ff6b35] transition">LLC Formation</Link>
          <span>/</span>
          <span className="text-[#ff6b35] font-semibold">Florida LLC</span>
        </div>

        {/* Split Hero Section (Distinct from Wyoming) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4 pb-16 lg:pb-24">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs font-semibold mb-6">
              <Sun className="w-3.5 h-3.5 text-[#ff6b35]" />
              <span>Gateway for E-Commerce & East Coast Amazon FBA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Florida LLC <br />
              <span className="text-[#ff6b35]">
                Formation Service
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Launch your commercial presence in the nation’s top trade state for just <span className="font-instrument italic text-[#ff6b35] font-bold text-2xl">$500 all-inclusive</span>. Zero personal state income tax, direct Sunbiz electronic processing, and unmatched logistics access.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,53,0.35)] hover:scale-105"
              >
                Start Florida LLC ($500)
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <div className="text-xs text-white/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Includes $125 State Filing Fee</span>
              </div>
            </div>
          </div>

          {/* Right Live Status Card */}
          <div className="lg:col-span-5 bg-[#120703]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#ff6b35]" />
                <span className="font-bold text-white text-sm">Sunbiz Filing Station</span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff6b35] bg-[#ff6b35]/15 px-2.5 py-0.5 rounded-full border border-[#ff6b35]/30">
                Official Gateway
              </span>
            </div>

            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between items-center text-white/80">
                <span>State Filing Speed</span>
                <span className="font-semibold text-white">3 – 5 Business Days</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Personal Income Tax</span>
                <span className="font-semibold text-emerald-400">0% (Constitutionally Exempt)</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Corporate Franchise Tax</span>
                <span className="font-semibold text-white">$0</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>Total Turnkey Price</span>
                <span className="font-instrument italic font-bold text-[#ff6b35] text-2xl">$500 Flat</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-white/70 leading-relaxed">
              ⭐ Ideal for international sellers planning direct product container shipments to Florida ports and Amazon East Coast fulfillment centers.
            </div>
          </div>
        </div>

        {/* Section 1: Florida Core Advantages */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Why Form in Florida?</h2>
            <p className="text-white/60 text-sm">A strategic, high-growth environment for global e-commerce founders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {floridaBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#120703]/90 border border-white/10 hover:border-[#ff6b35]/40 p-6 rounded-2xl transition-all shadow-md group"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6b35] bg-[#ff6b35]/10 border border-[#ff6b35]/20 px-2.5 py-0.5 rounded-full inline-block mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Package Pricing Card ($500) */}
        <div className="py-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#140702] to-[#0d0401] border-2 border-[#ff6b35]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Full Florida LLC Package</h3>
                <span className="text-[#ff6b35] text-xs font-semibold">Includes $125 State Fee</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-instrument italic text-4xl sm:text-5xl font-extrabold text-white">$500</span>
                <span className="text-white/50 text-xs">/ all-inclusive</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Complete setup with Florida Department of State, IRS tax ID, physical address, and dedicated non-resident bank onboarding.
            </p>

            <div className="space-y-3 mb-8">
              {packageItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff6b35]/20 border border-[#ff6b35]/40 flex items-center justify-center text-[#ff6b35] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-white/90 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-base flex items-center justify-center gap-2 transition-all shadow-[0_5px_25px_rgba(255,107,53,0.35)] hover:scale-[1.02]"
            >
              Order Florida LLC on WhatsApp ($500)
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 3: 4-Step Florida Formation Roadmap */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Formation Timeline</h2>
            <p className="text-white/60 text-sm">Clear, transparent step-by-step delivery from day one.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceTimeline.map((step, idx) => (
              <div key={idx} className="bg-[#120703] border border-white/10 p-6 rounded-2xl">
                <span className="text-[#ff6b35] font-black text-2xl block mb-2">{step.step}</span>
                <span className="text-[11px] font-bold text-[#ff6b35] block mb-1 uppercase tracking-wider">{step.time}</span>
                <h4 className="font-bold text-white text-base mb-2">{step.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: FAQs */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Florida LLC FAQs</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#120703] border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm hover:text-[#ff6b35] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#ff6b35] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
