"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  Star, 
  Building, 
  Truck, 
  Award, 
  ChevronDown,
  Banknote
} from "lucide-react";

interface TexasLLCServiceUIProps {
  data: any;
}

export default function TexasLLCServiceUI({ data }: TexasLLCServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to form my Texas LLC ($550 package). Please guide me through the registration.";

  const texasBento = [
    {
      icon: Banknote,
      title: "$2.47M Franchise Tax Exemption",
      desc: "In Texas, businesses earning under $2.47M gross annual revenue pay $0 in Texas Franchise Tax (No Tax Due Info Report only).",
      highlight: "$0 Tax Under $2.47M"
    },
    {
      icon: Truck,
      title: "Amazon FBA Mega Logistics Hub",
      desc: "Home to 25+ major Amazon Fulfillment Centers (Dallas-Fort Worth, Houston, Austin), maximizing FBA inbound inventory speeds.",
      highlight: "Central US Distribution"
    },
    {
      icon: Award,
      title: "Tier-1 Commercial Banking Trust",
      desc: "Texas entities carry tremendous corporate weight with major US physical banks like Chase, Bank of America, and digital lenders.",
      highlight: "Maximum Bank Approval"
    },
    {
      icon: Building,
      title: "Zero Personal State Income Tax",
      desc: "Texas is legally forbidden from levying personal state income tax, allowing foreign founders to maximize net retained earnings.",
      highlight: "0% Personal State Tax"
    }
  ];

  const packageItems = [
    "Texas Secretary of State Filing Fee ($300 Included)",
    "Texas Registered Agent Service (1 Full Year)",
    "Commercial Street Address in Texas with Mail Scanning",
    "IRS Federal EIN (Employer Identification Number) for Non-Residents",
    "Custom Texas LLC Operating Agreement & Member Certificates",
    "Mandatory FinCEN BOI (Beneficial Ownership) Filing Included",
    "US Business Bank Account Support (Mercury / Relay / Wise / Chase)",
    "Texas Certificate of Formation & Stamped SOS Filing",
    "Dedicated AmazonFast Account Manager on WhatsApp"
  ];

  const faqs = [
    {
      q: "Is the $300 Texas Secretary of State fee included in the $550 price?",
      a: "Yes! The State of Texas charges a $300 state filing fee, which is 100% included in our $550 total price. There are no surprise extra costs."
    },
    {
      q: "What is the Texas Franchise Tax rule for non-residents?",
      a: "Texas does not have a personal income tax. For corporate franchise tax, any business with annual gross revenue under $2.47 Million pays ZERO tax. You simply file a standard 'No Tax Due Information Report'."
    },
    {
      q: "Why is Texas considered the best state for Amazon logistics?",
      a: "Texas sits geographically in the center of the US with massive Amazon fulfillment centers in Dallas, Fort Worth, and Houston, drastically cutting cross-country shipping transit times."
    },
    {
      q: "Can I form a Texas LLC without an SSN or US residency?",
      a: "Yes. 100% of our international founders form their Texas LLC without a US Social Security Number (SSN) or US residency. We guide you end-to-end."
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
          <span className="text-[#ff6b35] font-semibold">Texas LLC</span>
        </div>

        {/* Executive Hero Layout */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs sm:text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
            <span>The #2 Economy in the USA — Commercial Powerhouse</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            Texas LLC Formation
          </h1>

          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
            Establish your business in the industrial and e-commerce capital of the southern US for <span className="font-instrument italic text-[#ff6b35] font-bold text-3xl">$550 all-inclusive</span>. Zero personal state tax, $2.47M franchise exemption, and top banking status.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto p-4 rounded-2xl bg-[#120703]/90 border border-white/10 mb-8 text-center shadow-lg">
            <div>
              <span className="text-[#ff6b35] font-extrabold text-xl sm:text-2xl block">0%</span>
              <span className="text-white/50 text-[11px] sm:text-xs">Personal Income Tax</span>
            </div>
            <div className="border-x border-white/10">
              <span className="font-instrument italic text-[#ff6b35] font-extrabold text-xl sm:text-2xl block">$2.47M</span>
              <span className="text-white/50 text-[11px] sm:text-xs">Franchise Exemption</span>
            </div>
            <div>
              <span className="text-white font-extrabold text-xl sm:text-2xl block">25+</span>
              <span className="text-white/50 text-[11px] sm:text-xs">Amazon FBA Hubs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,53,0.35)] hover:scale-105"
            >
              Start Texas LLC ($550)
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 1: Bento Grid of Texas Advantages */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">The Texas Advantage</h2>
            <p className="text-white/60 text-sm">Built for serious volume sellers and international brand owners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texasBento.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#120703]/90 border border-white/10 hover:border-[#ff6b35]/40 p-7 rounded-2xl transition-all shadow-md group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#ff6b35] bg-[#ff6b35]/10 border border-[#ff6b35]/20 px-2.5 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Complete $550 Package Card */}
        <div className="py-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#140702] to-[#0d0401] border-2 border-[#ff6b35]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-[#ff6b35] text-black font-extrabold text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              Includes $300 SOS State Fee
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Texas Turnkey Package</h3>
                <span className="text-[#ff6b35] text-xs font-semibold">100% Non-Resident Remote Setup</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-instrument italic text-4xl sm:text-5xl font-extrabold text-white">$550</span>
                <span className="text-white/50 text-xs">/ flat fee</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Includes the entire $300 Texas Secretary of State statutory fee, full year of registered agent, commercial address, federal EIN, and US banking guidance.
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
              Order Texas LLC on WhatsApp ($550)
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 3: FAQs */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Texas LLC FAQs</h2>
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
