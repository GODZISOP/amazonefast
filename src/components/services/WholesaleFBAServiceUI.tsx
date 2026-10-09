"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Truck, 
  ChevronDown, 
  Building2, 
  Store,
  Boxes
} from "lucide-react";

interface WholesaleFBAServiceUIProps {
  data?: any;
}

export default function WholesaleFBAServiceUI({ data }: WholesaleFBAServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to get started with the Complete Amazon Wholesale FBA Service ($300 M1 + $300 M2 + Profit Share).";

  const pillars = [
    {
      step: "01",
      icon: Building2,
      title: "Brand Purchasing & Approvals",
      desc: "We find real US and UK brands, open wholesale accounts, and buy inventory with real commercial invoices so you can sell safely.",
      points: [
        "Direct wholesale accounts with brands",
        "Authorized distributor price lists",
        "Real invoices for Amazon ungating",
        "High sales demand product checking"
      ]
    },
    {
      step: "02",
      icon: Truck,
      title: "Shipment Plans & Prep",
      desc: "We make Send-to-Amazon (STA) shipment plans, send box and barcode labels to prep centers, and track stock until it arrives at Amazon.",
      points: [
        "Inbound shipment plan creation in Seller Central",
        "Prep center barcode and box labeling",
        "Stock tracking until safe Amazon arrival",
        "Automatic repricing setup for BuyBox"
      ]
    },
    {
      step: "03",
      icon: Store,
      title: "A-to-Z Account Management",
      desc: "We handle your Seller Central daily: winning the BuyBox, placing re-orders before stock runs out, and keeping your account 100% healthy.",
      points: [
        "Daily BuyBox repricing to get constant sales",
        "Inventory restock reminders & re-ordering",
        "Account health monitoring every day",
        "Monthly profit calculation report"
      ]
    }
  ];

  const faqs = [
    {
      q: "How does the Month 1 ($300), Month 2 ($300), and Month 3 (Profit Share %) model work?",
      a: "In Month 1 ($300), we open brand accounts and find profitable products. In Month 2 ($300), we create shipment plans, send stock to Amazon, and start selling. Starting Month 3, there is no fixed monthly fee. We work on a percentage of net profit so you only pay when your business makes money."
    },
    {
      q: "What is included in Brand Purchasing?",
      a: "We contact official brands and suppliers for you, apply for wholesale accounts, and purchase inventory with real invoices that Amazon accepts."
    },
    {
      q: "How do shipment plans and prep work?",
      a: "We create the shipment plan inside your Amazon account, coordinate with your prep center to stick barcode labels on items, and monitor until Amazon checks in your inventory."
    },
    {
      q: "How much money do I need for wholesale inventory?",
      a: "We recommend starting with at least $1,500 to $2,500 for purchasing inventory from suppliers. Wholesale items sell fast, so your money comes back quickly with profit."
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
          <span className="text-[#ff6b35]">Wholesale Account Management</span>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-[#ff6b35] text-xs font-semibold">
            <ShieldCheck size={14} />
            <span>Complete Wholesale FBA Operations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Complete Amazon Wholesale <br />
            <span className="text-[#ff6b35]">Account Management</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            We handle everything for your Wholesale FBA business: direct brand purchasing, shipment plans with prep centers, and daily BuyBox account management.
          </p>

          {/* Quick Price Pill */}
          <div className="inline-flex items-center gap-4 bg-white/[0.04] border border-white/10 px-6 py-3 rounded-2xl">
            <div>
              <span className="text-xs text-white/50 block">Months 1 & 2</span>
              <span className="text-lg font-bold text-white">$300 / month</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-xs text-white/50 block">Month 3 onwards</span>
              <span className="text-lg font-bold text-[#ff6b35]">Profit Share %</span>
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

        {/* 3 CORE PILLARS */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#ff6b35] font-bold">3 Core Steps</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Run Your Business</h2>
            <p className="text-white/60 text-xs sm:text-sm">We take care of the heavy lifting from buying products to daily sales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pil, idx) => {
              const IconC = pil.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#ff6b35]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/15 flex items-center justify-center text-[#ff6b35]">
                        <IconC size={20} />
                      </div>
                      <span className="text-xs font-mono text-white/40">{pil.step}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">{pil.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed mb-5">{pil.desc}</p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {pil.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-white/80">
                        <Check size={13} className="text-[#ff6b35] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* UNIFIED PROGRESSIVE PLAN */}
        <div className="mb-20">
          <div className="rounded-3xl bg-gradient-to-b from-[#1c0c05] via-[#120703] to-[#0a0401] border-2 border-[#ff6b35]/40 p-7 sm:p-10 max-w-4xl mx-auto">
            
            <div className="text-center mb-8 pb-6 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-[#ff6b35] font-semibold">Pricing Structure</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">One Simple Plan</h2>
              <p className="text-xs sm:text-sm text-white/60 mt-1">First two months are $300 each. From Month 3, we work on profit percentage only.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Month 1 */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                <span className="text-xs font-mono text-[#ff6b35] bg-[#ff6b35]/10 px-2 py-0.5 rounded-full border border-[#ff6b35]/20 inline-block mb-2">
                  Month 01
                </span>
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white block">$300</span>
                  <span className="text-[11px] text-white/50 block">Brand Approvals</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-3">
                  We open wholesale brand accounts, check product margins, and place your first purchase order.
                </p>
                <div className="space-y-1.5 text-xs text-white/80">
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>Brand applications</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>Wholesale trade accounts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>First order placement</span>
                  </div>
                </div>
              </div>

              {/* Month 2 */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                <span className="text-xs font-mono text-[#ff6b35] bg-[#ff6b35]/10 px-2 py-0.5 rounded-full border border-[#ff6b35]/20 inline-block mb-2">
                  Month 02
                </span>
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white block">$300</span>
                  <span className="text-[11px] text-white/50 block">Shipment & FBA Dispatch</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-3">
                  We make shipment plans, coordinate prep labels, track inventory to Amazon, and start live sales.
                </p>
                <div className="space-y-1.5 text-xs text-white/80">
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>Send-to-Amazon (STA) plans</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>Prep center box labels</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>First FBA sales launch</span>
                  </div>
                </div>
              </div>

              {/* Month 3 */}
              <div className="bg-gradient-to-b from-[#2a1309] to-black/60 border border-[#ff6b35]/60 rounded-2xl p-5">
                <span className="text-xs font-mono text-black bg-[#ff6b35] font-extrabold px-2 py-0.5 rounded-full inline-block mb-2">
                  Month 03+
                </span>
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-[#ffaa75] block">Profit %</span>
                  <span className="text-[11px] text-white/50 block">Zero fixed monthly fee</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-3">
                  Zero monthly retainer! Once your sales are running, we only earn based on a percentage of net profit.
                </p>
                <div className="space-y-1.5 text-xs text-white/85">
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>No fixed monthly fee</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>Daily BuyBox repricing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#ff6b35]" />
                    <span>Ongoing stock re-orders</span>
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
            <h2 className="text-2xl font-bold text-white">Ready to start Wholesale FBA?</h2>
            <p className="text-white/60 text-xs sm:text-sm">
              Send us a message on WhatsApp. We will start your brand outreach and catalog scanning right away.
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
