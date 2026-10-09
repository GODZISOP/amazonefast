"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  FileCheck, 
  ChevronDown, 
  Lock,
  Award,
  Type,
  Image as ImageIcon
} from "lucide-react";

interface TrademarkServiceUIProps {
  data?: any;
  defaultPlan?: "logo" | "word";
}

export default function TrademarkServiceUI({ data, defaultPlan }: TrademarkServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      id: "logo",
      name: "Logo Trademark",
      price: "$600",
      icon: ImageIcon,
      badge: "Design Mark",
      tagline: "Protects Your Brand Logo & Graphic Symbol",
      desc: "Best if your brand identity relies on a unique visual logo or special stylized artwork.",
      features: [
        "Official USPTO Filing Included",
        "Complete Logo Conflict Search",
        "Licensed US Attorney Filing",
        "Serial Number in 2 to 3 Days",
        "Instant Amazon Brand Registry Access",
        "Unlocks A+ Content & Brand Store",
        "Hijacker & Counterfeit Protection"
      ],
      whatsappMsg: "Hi AmazonFast, I want to Pay Now for the Logo Trademark ($600)."
    },
    {
      id: "word",
      name: "Word Trademark",
      price: "$700",
      icon: Type,
      badge: "Most Popular & Strongest",
      tagline: "Protects Your Brand Name Text in Any Font or Color",
      desc: "Strongest legal protection. Protects your actual brand name letters regardless of how the logo changes in the future.",
      features: [
        "Official USPTO Filing Included",
        "Deep Name Clearance Search",
        "Licensed US Attorney Filing",
        "Serial Number in 2 to 3 Days",
        "Instant Amazon Brand Registry Access",
        "Full Text Protection Across All Classes",
        "Unlocks Amazon Brand Analytics & Video Ads",
        "Strongest Defense Against Copycats"
      ],
      whatsappMsg: "Hi AmazonFast, I want to Pay Now for the Word Trademark ($700)."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Name & Logo Search",
      desc: "We check the USPTO database to make sure your name or logo is available and safe to register."
    },
    {
      step: "02",
      title: "USPTO Application Filing",
      desc: "Our licensed US attorney files your official application directly with the government."
    },
    {
      step: "03",
      title: "Serial Number in 2-3 Days",
      desc: "You get your official USPTO serial number within 48 to 72 hours."
    },
    {
      step: "04",
      title: "Amazon Brand Registry",
      desc: "We enroll your serial number on Amazon to activate Brand Registry immediately."
    }
  ];

  const faqs = [
    {
      q: "What is the difference between Logo Trademark ($600) and Word Trademark ($700)?",
      a: "A Logo Trademark ($600) protects your exact visual artwork and symbol. A Word Trademark ($700) protects the actual name/words in any font or styling. Wordmarks give the strongest protection on Amazon because no one can use your brand name text."
    },
    {
      q: "Can I get Amazon Brand Registry before final trademark approval?",
      a: "Yes! Amazon allows you to enroll in Brand Registry as soon as you have an active USPTO application serial number (usually within 2 to 3 days of filing). You do not need to wait months for final registration."
    },
    {
      q: "What does Amazon Brand Registry give me?",
      a: "Brand Registry unlocks A+ Content (EBC), your own Amazon Storefront, Sponsored Brands video ads, Amazon Brand Analytics, and fast removal of unauthorized counterfeiters."
    },
    {
      q: "Are the government and attorney fees included in the price?",
      a: "Yes. Both the $600 Logo package and $700 Word package include your attorney filing fee, clearance search, and application setup."
    }
  ];

  return (
    <div className="bg-[#080503] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden pt-28 pb-24">
      
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#ff6b35]/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <span>/</span>
          <span className="text-[#ff6b35]">Trademark & Brand Registry</span>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-[#ff6b35] text-xs font-semibold">
            <ShieldCheck size={14} />
            <span>USPTO Registered & Amazon Brand Registry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Amazon Trademark & <br />
            <span className="text-[#ff6b35]">Brand Registry Protection</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Protect your brand name and logo legally with the USPTO. Get your official serial number in 2 to 3 days to unlock Amazon Brand Registry, A+ Content, and store design.
          </p>
        </div>

        {/* 2 MAIN PLANS (LOGO & WORDMARK) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((p) => {
              const IconC = p.icon;
              const isSelected = defaultPlan === p.id;
              return (
                <div 
                  key={p.id}
                  className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all relative overflow-hidden ${
                    p.id === "word"
                      ? "bg-gradient-to-b from-[#1c0c05] via-[#120703] to-[#0a0401] border-2 border-[#ff6b35] shadow-[0_0_40px_rgba(255,107,53,0.2)]"
                      : "bg-white/[0.03] border border-white/10 hover:border-white/25"
                  }`}
                >
                  {p.id === "word" && (
                    <div className="absolute -top-3.5 right-6 bg-[#ff6b35] text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
                      Recommended
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#ff6b35]/15 flex items-center justify-center text-[#ff6b35]">
                        <IconC size={24} />
                      </div>
                      <span className="text-xs font-mono text-[#ff6b35] bg-[#ff6b35]/10 px-2.5 py-0.5 rounded-full border border-[#ff6b35]/20">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
                    <p className="text-xs text-[#ffaa75] font-semibold mb-4">{p.tagline}</p>

                    <div className="my-4 pb-4 border-b border-white/10">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white block">
                        {p.price}
                      </span>
                      <span className="text-xs text-white/50 block mt-1">Complete USPTO filing package</span>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      {p.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block">
                        What is included:
                      </span>
                      {p.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-white/85">
                          <Check size={14} className="text-[#ff6b35] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/923322568950?text=${encodeURIComponent(p.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      p.id === "word"
                        ? "bg-[#ff6b35] hover:bg-[#ea5c2b] text-white shadow-lg shadow-[#ff6b35]/30"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                    }`}
                  >
                    <span>Pay Now ({p.price})</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* SIMPLE 4 STEPS */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#ff6b35] font-bold">Fast Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How It Works in 4 Steps</h2>
            <p className="text-white/60 text-xs sm:text-sm">We handle the entire filing so you can unlock Brand Registry fast.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <span className="text-xs font-mono text-[#ff6b35] font-bold block mb-2">{st.step}</span>
                <h3 className="text-sm font-bold text-white mb-1.5">{st.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQS SECTION */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="text-center mb-8 space-y-1">
            <span className="text-[#ff6b35] text-xs font-bold uppercase tracking-wider">Common Questions</span>
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-[#ff6b35] shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 pt-0 text-xs text-white/70 leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM FINAL CTA */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold text-white">Protect your brand name today</h2>
            <p className="text-white/60 text-xs sm:text-sm">
              Pay Now via WhatsApp and send us your brand name or logo. We will run your clearance search and file within 24 hours.
            </p>
            <div className="pt-2">
              <a 
                href={`https://wa.me/923322568950?text=${encodeURIComponent("Hi AmazonFast, I want to Pay Now for Trademark & Brand Registry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff6b35] hover:bg-[#ea5c2b] text-white px-8 py-3.5 rounded-full font-bold text-sm transition"
              >
                <span>Pay Now</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
