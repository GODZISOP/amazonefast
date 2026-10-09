"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  Building2, 
  Newspaper, 
  Award, 
  Globe2, 
  ShieldCheck, 
  ChevronDown
} from "lucide-react";

interface NewYorkLLCServiceUIProps {
  data: any;
}

export default function NewYorkLLCServiceUI({ data }: NewYorkLLCServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I am interested in forming a New York LLC. Please provide package and timeline details.";

  const nyHighlights = [
    {
      icon: Newspaper,
      title: "Section 206 Publication Handled",
      desc: "New York law mandates publishing LLC notices in two designated newspapers for 6 weeks. We handle the entire publication & Certificate of Publication filing seamlessly."
    },
    {
      icon: Award,
      title: "Wall Street & Global Brand Prestige",
      desc: "An official New York entity commands high trust with global manufacturers, enterprise brands, and major international wholesale distributors."
    },
    {
      icon: Globe2,
      title: "Tier-1 Financial Market Access",
      desc: "Preferred status with East Coast international banks, fintech platforms, payment gateways, and US trade organizations."
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Non-Resident Setup",
      desc: "100% remote online formation without requiring an SSN, US visa, or physical New York presence."
    }
  ];

  const packageItems = [
    "New York Department of State (NY DOS) Filing Fee Included",
    "Section 206 Mandatory 2-Newspaper Publication Handling (6 Weeks)",
    "Official Certificate of Publication from NY Department of State",
    "New York Registered Agent Service (1 Full Year)",
    "Commercial Street Business Address in New York",
    "Federal EIN (Tax ID) from IRS for Non-Residents",
    "Custom New York LLC Operating Agreement",
    "FinCEN BOI (Beneficial Ownership) Mandatory Compliance",
    "US Business Bank Account Support (Mercury / Relay / Stripe)",
    "Dedicated Account Manager on WhatsApp"
  ];

  const faqs = [
    {
      q: "What is the New York LLC Section 206 publication requirement?",
      a: "Under NY Limited Liability Company Law § 206, newly formed LLCs must publish a notice of formation in two county newspapers once a week for 6 consecutive weeks, followed by filing a Certificate of Publication with the NY Department of State. We manage this entire process for you."
    },
    {
      q: "How does AmazonFast keep NY publication costs affordable?",
      a: "Publishing in Manhattan can cost over $1,500 due to local newspaper ad rates. We utilize strategic, cost-effective county registered agent addresses to keep publication legal and affordable."
    },
    {
      q: "Can I form a NY LLC as a foreign non-resident?",
      a: "Yes. You do not need US citizenship or an SSN. We file directly with the NY Department of State and obtain your federal EIN from the IRS on your passport."
    }
  ];

  return (
    <div className="bg-[#0a0400] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden pt-28 pb-24 border-t border-white/5">
      
      {/* Background ambient glow matching theme */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(10,4,0,0) 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services/llc-formation" className="hover:text-[#ff6b35] transition">LLC Formation</Link>
          <span>/</span>
          <span className="text-[#ff6b35] font-semibold">New York LLC</span>
        </div>

        {/* Editorial Wall Street Hero */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs sm:text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4 text-[#ff6b35]" />
            <span>Global Prestige & Financial Capital of the World</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            New York LLC Formation
          </h1>

          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
            Form an elite New York entity with full Section 206 publication compliance included. Supreme global credibility for high-volume trading, wholesale distribution, and global supplier contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,53,0.35)] hover:scale-105"
            >
              Consult NY Formation on WhatsApp
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 1: NY Core Highlights Grid */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">The New York Advantage</h2>
            <p className="text-white/60 text-sm">Recognized worldwide as the standard of corporate authority.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nyHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#120703]/90 border border-white/10 hover:border-[#ff6b35]/40 p-7 rounded-2xl transition-all shadow-md group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Complete Package Breakdown Card */}
        <div className="py-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#140702] to-[#0d0401] border-2 border-[#ff6b35]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Full NY Turnkey Package</h3>
                <span className="text-[#ff6b35] text-xs font-semibold">Includes Section 206 Publication & State Fees</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Complete formation, newspaper notices in two county newspapers, official Certificate of Publication, federal EIN, and banking setup.
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
              Get Started on WhatsApp
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 3: FAQs */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">New York LLC FAQs</h2>
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
