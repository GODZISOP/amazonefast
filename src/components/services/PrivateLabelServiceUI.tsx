"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  ChevronDown, 
  Search,
  Factory,
  Camera,
  Boxes,
  FileCheck2,
  Sparkles,
  Zap,
  TrendingUp,
  Percent
} from "lucide-react";

interface PrivateLabelServiceUIProps {
  data?: any;
}

export default function PrivateLabelServiceUI({ data }: PrivateLabelServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to start Private Label Account Management ($500/month for 6 months + 60/40 profit share).";

  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Product Finding",
      desc: "We find high-demand winning products with low competition and more than 30% to 35% profit margin."
    },
    {
      step: "02",
      icon: TrendingUp,
      title: "Competitor Research",
      desc: "We study competitor top products and customer bad reviews to fix problems and make a better product."
    },
    {
      step: "03",
      icon: Factory,
      title: "Manufacturing & Sourcing",
      desc: "We talk directly to factories, get good sample pieces, and negotiate the lowest unit price for production."
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Patent Check & Design",
      desc: "We check US and international patents to make sure the product design is 100% legal with zero copy issues."
    },
    {
      step: "05",
      icon: FileCheck2,
      title: "Product Testing & Quality Check",
      desc: "We test product samples and check factory batch quality before products are shipped to Amazon."
    },
    {
      step: "06",
      icon: Boxes,
      title: "Product Labeling & Packaging",
      desc: "Custom box packaging design, logo placement, barcode labels, and Amazon safety stickers."
    },
    {
      step: "07",
      icon: Camera,
      title: "Graphic & Product Photography",
      desc: "Professional studio photos, 3D pictures, product feature graphics, and lifestyle images."
    },
    {
      step: "08",
      icon: Sparkles,
      title: "A+ Content & Listing Setup",
      desc: "Beautiful A+ Content (EBC) with comparison tables and sales copywriting to turn visitors into buyers."
    },
    {
      step: "09",
      icon: Zap,
      title: "PPC Marketing Strategy from Scratch",
      desc: "We set up Amazon ads from scratch to get fast initial sales and rank your product on Page 1."
    }
  ];

  const faqs = [
    {
      q: "How does the $500 for 6 months and 60/40 profit share model work?",
      a: "For the first 6 months, you pay $500 per month while our team builds everything from scratch (finding the product, factory sourcing, patent check, photos, packaging, and ads). Starting in Month 7, once the product is making profit, there is no monthly fee. We share the net profit: 60% goes to you, and 40% goes to AmazonFast."
    },
    {
      q: "What is included in the service?",
      a: "Everything needed to launch: product hunting, competitor study, factory manufacturing, patent check, product quality testing, custom packaging and labels, professional photography, A+ content, and PPC ads from scratch."
    },
    {
      q: "Who owns the Amazon account, brand, and inventory?",
      a: "You own 100% of the brand, inventory, and Amazon account. AmazonFast works as your expert management team."
    },
    {
      q: "How much budget is needed for stock and manufacturing?",
      a: "We recommend having around $3,000 to $5,000 for purchasing initial product stock, shipping to Amazon, and starting ads."
    }
  ];

  return (
    <div className="bg-[#080503] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden pt-28 pb-24">
      
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#ff6b35]/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <span>/</span>
          <span className="text-[#ff6b35]">Private Label Account Management</span>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-[#ff6b35] text-xs font-semibold">
            <Sparkles size={14} />
            <span>Complete Brand Launch From Scratch</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Amazon Private Label <br />
            <span className="text-[#ff6b35]">Account Management</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            We build and manage your complete Amazon brand from scratch. Product finding, competitor research, factory sourcing, patent check, product testing, custom packaging, photography, A+ content, and PPC ads.
          </p>

          {/* Quick Price Pill */}
          <div className="inline-flex items-center gap-4 bg-white/[0.04] border border-white/10 px-6 py-3 rounded-2xl">
            <div>
              <span className="text-xs text-white/50 block">Months 1 to 6</span>
              <span className="text-lg font-bold text-white">$500 / month</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-xs text-white/50 block">Month 7 onwards</span>
              <span className="text-lg font-bold text-[#ff6b35]">60 / 40 Profit Share</span>
            </div>
          </div>

          <div className="pt-3">
            <a 
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6b35] hover:bg-[#ea5c2b] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#ff6b35]/30 transition"
            >
              <span>Pay Now</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* WHAT WE DO (9 EASY STEPS) */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#ff6b35] font-bold">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Full Service From Scratch</h2>
            <p className="text-white/60 text-xs sm:text-sm">We handle all 9 tasks so you don’t have to worry about anything.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((st, idx) => {
              const IconC = st.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#ff6b35]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/15 flex items-center justify-center text-[#ff6b35]">
                      <IconC size={20} />
                    </div>
                    <span className="text-xs font-mono text-white/40">{st.step}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PRICING DETAILS SECTION */}
        <div className="mb-20">
          <div className="rounded-3xl bg-gradient-to-b from-[#1c0c05] via-[#120703] to-[#0a0401] border-2 border-[#ff6b35]/40 p-7 sm:p-10 max-w-4xl mx-auto">
            
            <div className="text-center mb-8 pb-6 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-[#ff6b35] font-semibold">Payment Details</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Simple 2-Step Fee Model</h2>
              <p className="text-xs sm:text-sm text-white/60 mt-1">Pay $500 per month for the first 6 months, then we share profit 60/40.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Step 1 */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <span className="text-xs font-mono text-[#ff6b35] bg-[#ff6b35]/10 px-2.5 py-0.5 rounded-full border border-[#ff6b35]/20 inline-block mb-3">
                  Step 1: First 6 Months
                </span>
                <div className="mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white block">$500</span>
                  <span className="text-xs text-white/50 block mt-0.5">per month for 6 months</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  We build your entire brand from scratch: product finding, factory sourcing, packaging, testing, photography, A+ content, and PPC launch.
                </p>
                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Product Finding & Competitor Study</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Factory Sourcing & Price Negotiation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Patent Check & Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Product Labeling & Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Photos, A+ Content & Launch Ads</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-b from-[#2a1309] to-black/60 border border-[#ff6b35]/60 rounded-2xl p-6">
                <span className="text-xs font-mono text-black bg-[#ff6b35] font-extrabold px-2.5 py-0.5 rounded-full inline-block mb-3">
                  Step 2: Month 7 Onwards
                </span>
                <div className="mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#ffaa75] block">60 / 40</span>
                  <span className="text-xs text-white/50 block mt-0.5">Profit Share (No monthly fee)</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Once your product is selling and making profit, there is zero fixed monthly charge. We only take our share from net profits.
                </p>
                <div className="space-y-2 text-xs text-white/85">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>60% profit to You</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>40% profit to AmazonFast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>No fixed monthly retainer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Daily account care & restock orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#ff6b35]" />
                    <span>Continuous PPC scaling & growth</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
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

        {/* FAQS SECTION */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="text-center mb-8 space-y-1">
            <span className="text-[#ff6b35] text-xs font-bold uppercase tracking-wider">Helpful Answers</span>
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
            <h2 className="text-2xl font-bold text-white">Ready to start your own brand?</h2>
            <p className="text-white/60 text-xs sm:text-sm">
              Send us a message on WhatsApp. We will talk through your goals and start the first step together.
            </p>
            <div className="pt-2">
              <a 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
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
