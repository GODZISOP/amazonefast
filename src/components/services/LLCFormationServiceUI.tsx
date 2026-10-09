"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Building, 
  Globe2, 
  Zap, 
  CreditCard, 
  ChevronDown, 
  CheckCircle2, 
  Star,
  Sparkles,
  Award
} from "lucide-react";

interface LLCFormationServiceUIProps {
  data: any;
}

export default function LLCFormationServiceUI({ data }: LLCFormationServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to consult about forming a US LLC for my Amazon/Stripe business.";

  const states = [
    {
      name: "Wyoming LLC",
      slug: "wyoming-llc",
      price: "$500",
      tagline: "#1 Choice for Non-Residents",
      badge: "Most Popular",
      badgeColor: "bg-[#ff6b35] text-black",
      border: "border-white/10 hover:border-[#ff6b35]/60",
      accent: "text-[#ff6b35]",
      desc: "Top privacy, anonymous member protection, $0 state income tax, and the lowest ongoing annual report fees in the nation.",
      highlights: ["Strong Privacy & Anonymity", "$60 Annual Report Fee", "0% State Income Tax", "Fastest Approval Timeline"]
    },
    {
      name: "Florida LLC",
      slug: "florida-llc",
      price: "$500",
      tagline: "East Coast E-Commerce Gateway",
      badge: "Best Value",
      badgeColor: "bg-[#ff6b35] text-black",
      border: "border-white/10 hover:border-[#ff6b35]/60",
      accent: "text-[#ff6b35]",
      desc: "Ideal for sellers importing cargo through East Coast ports. Direct Sunbiz electronic processing and $0 personal state income tax.",
      highlights: ["Includes $125 State Fee", "0% Personal Income Tax", "Direct Sunbiz Electronic Filing", "Prime Amazon East Coast Hub"]
    },
    {
      name: "Texas LLC",
      slug: "texas-llc",
      price: "$550",
      tagline: "Commercial Industrial Powerhouse",
      badge: "High Growth",
      badgeColor: "bg-[#ff6b35] text-black",
      border: "border-white/10 hover:border-[#ff6b35]/60",
      accent: "text-[#ff6b35]",
      desc: "Establish your firm in the #2 economy in the US. $2.47M franchise tax exemption and central logistics across 25+ Amazon fulfillment centers.",
      highlights: ["Includes $300 SOS State Fee", "$2.47M Franchise Exemption", "0% Personal Income Tax", "Tier-1 Physical Bank Weight"]
    }
  ];

  const coreBenefits = [
    {
      icon: ShieldCheck,
      title: "100% Non-Resident Remote Setup",
      desc: "No US visa, travel, or Social Security Number (SSN) required. Form your entity purely with your foreign passport."
    },
    {
      icon: CreditCard,
      title: "US Business Banking & Stripe Ready",
      desc: "Guaranteed support to open US business bank accounts (Mercury, Relay, Wise, Chase) and verified Stripe accounts."
    },
    {
      icon: Globe2,
      title: "Amazon US Seller Central Compliant",
      desc: "Full legal infrastructure with US physical address, EIN, and utility bill documentation to pass Amazon seller verification."
    },
    {
      icon: Zap,
      title: "Mandatory FinCEN BOI Included",
      desc: "We file your mandatory Beneficial Ownership Information (BOI) compliance with the US Treasury at no extra cost."
    }
  ];

  const formationSteps = [
    {
      num: "01",
      title: "State & Name Selection",
      desc: "Pick your ideal state (Wyoming, Texas, Florida, NY) and provide company name options with passport copy."
    },
    {
      num: "02",
      title: "State Secretary of State Approval",
      desc: "We file your Articles of Organization with registered agent appointment and commercial US address."
    },
    {
      num: "03",
      title: "IRS Federal EIN Tax ID Issuance",
      desc: "We submit Form SS-4 directly to the IRS to assign your official Employer Identification Number without SSN."
    },
    {
      num: "04",
      title: "Bank Account & Amazon Launch",
      desc: "We guide your application for US business bank accounts (Mercury/Relay/Wise) and connect to Amazon Seller Central."
    }
  ];

  const faqs = [
    {
      q: "Which state is best for my Amazon FBA business?",
      a: "For most non-resident e-commerce sellers, Wyoming is the #1 recommended choice because of its zero state income tax, low $60 annual report fee, and total member privacy. If you want lower upfront cost with great logistics, Florida ($500) is exceptional. If you want corporate weight with central logistics, Texas ($550) is unmatched."
    },
    {
      q: "Can I form a US LLC if I don't live in the United States?",
      a: "Yes! Anyone from any country (except sanctioned countries) can legally own and operate a US LLC. You do not need to visit the United States."
    },
    {
      q: "What documents do I need to get started?",
      a: "All you need is a valid foreign passport and basic contact information. We handle all US-side filings, registered agents, addresses, and IRS interactions."
    },
    {
      q: "Will this LLC allow me to accept international payments?",
      a: "Yes. Once your LLC and EIN are approved, you can open US business bank accounts (Mercury, Relay, Wise) and activate a US Stripe account to accept credit card payments globally."
    }
  ];

  return (
    <div className="bg-[#080503] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden pt-28 pb-24">
      
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#ff6b35]/15 via-[#f97316]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <span>/</span>
          <span className="text-[#ff6b35] font-semibold">LLC Formation</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-16 sm:pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Complete US Corporate Infrastructure for Non-Residents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            US LLC Formation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff6b35]">
              For Global Founders & Sellers
            </span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Launch your 100% remote US LLC with state filing, registered agent, commercial US address, IRS EIN, and business banking. Built specifically for Amazon FBA, Stripe, and international trade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,53,0.4)] hover:scale-105"
            >
              Consult Free on WhatsApp
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* 4 State Selection Grid (Direct links to each individual state page) */}
        <div className="pt-6 pb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Choose Your US Formation State
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Every state has distinct tax, privacy, and logistics benefits. Explore full details and pricing below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {states.map((st) => (
              <div
                key={st.slug}
                className={`bg-[#120904]/90 backdrop-blur-xl border ${st.border} rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${st.badgeColor}`}>
                      {st.badge}
                    </span>
                    <span className="font-instrument italic text-3xl sm:text-4xl font-bold text-white">
                      {st.price}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                    {st.name}
                  </h3>
                  <span className={`text-xs font-semibold uppercase tracking-wider block mb-4 ${st.accent}`}>
                    {st.tagline}
                  </span>

                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {st.desc}
                  </p>

                  <div className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                    {st.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-white/85">
                        <Check className="w-3.5 h-3.5 text-[#ff6b35] shrink-0 stroke-[3]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${st.slug}`}
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-[#ff6b35] hover:text-black text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/15 transition-all duration-300 group-hover:border-[#ff6b35]"
                >
                  View Full {st.name} Page & Packages
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Core Benefits */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-white mb-2">Why Form With AmazonFast?</h2>
            <p className="text-white/60 text-sm">We provide full legal compliance, zero rejection guarantee, and lifetime guidance.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreBenefits.map((b, idx) => {
              const IconComponent = b.icon;
              return (
                <div key={idx} className="bg-[#120904] border border-white/10 p-6 rounded-2xl hover:border-[#ff6b35]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Roadmap */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-white mb-2">How It Works</h2>
            <p className="text-white/60 text-sm">From application to full bank activation in 4 structured steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formationSteps.map((s, idx) => (
              <div key={idx} className="bg-[#120904] border border-white/10 p-6 rounded-2xl relative">
                <span className="font-instrument italic text-3xl font-bold text-[#ff6b35] block mb-3">{s.num}</span>
                <h4 className="font-bold text-white text-base mb-2">{s.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-white/60 text-sm">Clear answers to common questions about non-resident US LLCs.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#120904] border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm hover:text-[#ff6b35] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
