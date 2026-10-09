"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Lock, 
  Percent, 
  Zap, 
  Shield, 
  Globe, 
  ChevronDown
} from "lucide-react";

interface WyomingLLCServiceUIProps {
  data: any;
}

export default function WyomingLLCServiceUI({ data }: WyomingLLCServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to form my Wyoming LLC ($650 package). Please guide me through the next steps.";
  const questionsMessage = "Hi AmazonFast, I have some questions about forming a Wyoming LLC as a non-resident.";

  const features = [
    {
      icon: Percent,
      title: "Lowest Ongoing Fees",
      desc: "$100 state filing fee. Annual report fee is just $60. No franchise tax. No minimum capital requirements."
    },
    {
      icon: Lock,
      title: "Strong Privacy",
      desc: "Wyoming does not require member names to be listed in public Secretary of State filings. Your identity stays completely private."
    },
    {
      icon: ShieldCheck,
      title: "No State Income Tax",
      desc: "Wyoming has zero state personal income tax and zero state corporate income tax. Perfect for international e-commerce founders."
    },
    {
      icon: Zap,
      title: "Fast Formation",
      desc: "Wyoming LLC filing approved within 2-4 business days. Official IRS EIN issued in 10-14 business days without an SSN."
    },
    {
      icon: Shield,
      title: "Strong Asset Protection",
      desc: "Wyoming pioneered the LLC and has some of the strongest charging order protection laws in the USA, shielding personal assets."
    },
    {
      icon: Globe,
      title: "Non-Resident Friendly",
      desc: "No requirement to visit the US or have a US SSN/ITIN. 100% remote online setup with complete legal authority."
    }
  ];

  const comparisonRows = [
    { feature: "State Filing Fee", wyoming: "$100 (Included in package)", delaware: "$110 + Franchise fee" },
    { feature: "Annual Report Fee", wyoming: "$60 flat (Lowest in US)", delaware: "$300+ annual franchise tax" },
    { feature: "State Income Tax", wyoming: "0% None", delaware: "8.7% on income earned in DE" },
    { feature: "Privacy & Anonymity", wyoming: "Strong (Anonymous LLC)", delaware: "Moderate" },
    { feature: "Best For", wyoming: "Amazon FBA, E-Commerce, Non-Residents", delaware: "Startups seeking US Venture Capital" },
    { feature: "Full All-Inclusive Package", wyoming: "$650 Complete", delaware: "$750+" }
  ];

  const packageIncludes = [
    "Wyoming Secretary of State Filing Fee ($100 included)",
    "Registered Agent Service (1 Full Year Included)",
    "Official US Commercial Business Address (1 Year)",
    "IRS Federal EIN (Tax ID) for Non-Residents without SSN",
    "Customized Operating Agreement for Bank & Amazon Verification",
    "FinCEN BOI (Beneficial Ownership Information) Compliance Filing",
    "US Business Bank Account Setup Support (Mercury / Relay / Wise / Stripe)",
    "Articles of Organization Certified Digital Copy",
    "Dedicated Account Manager on WhatsApp"
  ];

  const faqs = [
    {
      q: "Do I need a US visa, SSN, or physical address to form a Wyoming LLC?",
      a: "No! As a non-resident, you do not need a US visa, Social Security Number (SSN), or physical presence in Wyoming. We provide the registered agent and commercial business address for you."
    },
    {
      q: "Can I open an Amazon US Seller account and Stripe with this LLC?",
      a: "Yes, absolutely. A Wyoming LLC combined with an IRS EIN and a US business bank account provides 100% compliant infrastructure to open Amazon US Seller Central, Stripe, Wise, and TikTok Shop accounts."
    },
    {
      q: "How long does the entire Wyoming formation process take?",
      a: "State registration is usually approved in 2 to 4 business days. After that, we apply for your EIN with the IRS, which typically takes 10 to 14 business days for non-residents."
    },
    {
      q: "Are there any hidden fees beyond the $650 package?",
      a: "No. The $650 package covers all state filing fees, registered agent for the first year, US address, EIN filing, BOI filing, and banking guidance. Ongoing maintenance begins in Year 2 with the annual report ($60 state fee) and registered agent renewal."
    }
  ];

  return (
    <div className="bg-[#0a0400] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden pt-28 pb-24 border-t border-white/5">
      
      {/* Background ambient glow matching theme */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.2) 0%, rgba(10,4,0,0) 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services/llc-formation" className="hover:text-[#ff6b35] transition">LLC Formation</Link>
          <span>/</span>
          <span className="text-[#ff6b35] font-semibold">Wyoming LLC</span>
        </div>

        {/* Hero Section (Blueprint from User Screenshot) */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-16 sm:pb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs sm:text-sm font-semibold mb-6 shadow-inner">
            <span>👑</span>
            <span>#1 Recommended State for Non-Residents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Wyoming LLC Formation
          </h1>

          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-normal">
            The most popular choice for international founders. Low fees, strong privacy, zero state income tax, and the fastest formation timeline. Full Package: <span className="font-instrument italic text-[#ff6b35] font-bold text-3xl ml-1">$650</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,53,0.35)] hover:scale-105"
            >
              Form My Wyoming LLC →
            </Link>

            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(questionsMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm sm:text-base transition-all"
            >
              Ask Questions First
            </Link>
          </div>
        </div>

        {/* Section 1: Why Wyoming is #1 (6 Feature Cards Grid) */}
        <div className="pt-12 pb-20 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Why Wyoming is the <span className="text-[#ff6b35]">#1 Choice</span> for Non-Residents
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Over 70% of our international e-commerce clients choose Wyoming. Here's why.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#120703]/90 backdrop-blur-md border border-white/10 hover:border-[#ff6b35]/40 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/25 flex items-center justify-center text-[#ff6b35] mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Wyoming vs Delaware Comparison Table */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Wyoming vs Delaware — Which is Right for You?
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Both are excellent states, but the right choice depends on your business model.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#160a04]">
                  <th className="p-4 sm:p-5 text-sm font-bold text-white/80">Feature</th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-[#ff6b35] bg-[#ff6b35]/10 border-x border-white/10">
                    Wyoming ★ Recommended
                  </th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-white/60">Delaware</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#0f0602]">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 text-sm text-white/80 font-medium">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-sm font-semibold text-white bg-[#ff6b35]/5 border-x border-white/10">
                      {row.wyoming}
                    </td>
                    <td className="p-4 sm:p-5 text-sm text-white/50">{row.delaware}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Package Breakdown Card ($650 Complete) */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              What's Included in Your <span className="text-[#ff6b35]">$650</span> Wyoming Formation
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Zero hidden charges. Everything required to sell on Amazon US and open US bank accounts.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#140702] to-[#0d0401] border-2 border-[#ff6b35]/40 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#ff6b35] text-black font-extrabold text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              All-Inclusive Package
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Turnkey Wyoming Formation</h3>
                <span className="text-[#ff6b35] text-xs font-semibold">100% Non-Resident Ready</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-instrument italic text-4xl sm:text-5xl font-extrabold text-white">$650</span>
                <span className="text-white/50 text-xs">/ one-time</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              We handle state filings, official agent appointments, federal tax IDs, and bank onboarding so you don't face any rejections.
            </p>

            <div className="space-y-3.5 mb-10">
              {packageIncludes.map((item, idx) => (
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
              Get Started on WhatsApp ($650)
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 4: FAQs */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-white/60 text-sm">Everything you need to know about non-resident Wyoming LLCs.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#120703] border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm sm:text-base hover:text-[#ff6b35] transition-colors"
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
