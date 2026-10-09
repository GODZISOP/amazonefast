"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  FileCheck, 
  FileText, 
  ChevronDown, 
  Unlock,
  Receipt
} from "lucide-react";

interface BrandApprovalsServiceUIProps {
  data?: any;
}

export default function BrandApprovalsServiceUI({ data }: BrandApprovalsServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I need brand approvals and ungating for my Amazon account.";

  const packages = [
    {
      name: "Package 1",
      price: "$3,000",
      margin: "20% to 30% Profit Margin",
      desc: "Get brand approvals with 20% to 30% profit margin and complete documents to start selling.",
      deliverables: [
        "20% to 30% Profit Margin Brands",
        "Letter of Authorization (LOA)",
        "Brand Registry Approval",
        "Proforma Invoice & Paid Invoices",
        "Full Ungating Setup in Seller Central",
        "Safe & Approved by Amazon"
      ]
    },
    {
      name: "Package 2",
      price: "$5,000",
      margin: "20% to 45% Profit Margin",
      desc: "Get brand approvals with 20% to 45% profit margin for bigger profits and variety.",
      deliverables: [
        "20% to 45% Profit Margin Brands",
        "Letter of Authorization (LOA)",
        "Brand Registry Approval",
        "Proforma Invoice & Paid Invoices",
        "Full Ungating Setup in Seller Central",
        "Fast 3 to 5 Days Processing"
      ]
    },
    {
      name: "Package 3",
      price: "$7,000",
      margin: "20% to 50% Profit Margin",
      desc: "Get brand approvals with 20% to 50% profit margin to sell popular high-demand items.",
      deliverables: [
        "20% to 50% Profit Margin Brands",
        "Letter of Authorization (LOA)",
        "Brand Registry Approval",
        "Proforma Invoice & Paid Invoices",
        "Full Ungating Setup in Seller Central",
        "High Profit Brand List"
      ]
    },
    {
      name: "Package 4",
      price: "$10,000",
      margin: "20% to 70% Profit Margin",
      desc: "Get brand approvals with 20% to 70% profit margin for maximum selling profits.",
      deliverables: [
        "20% to 70% Profit Margin Brands",
        "Letter of Authorization (LOA)",
        "Brand Registry Approval",
        "Proforma Invoice & Paid Invoices",
        "Full Ungating Setup in Seller Central",
        "Top Selling Big Brands Included",
        "Priority Support"
      ]
    }
  ];

  const features = [
    {
      icon: FileCheck,
      title: "Letter of Authorization (LOA)",
      desc: "Direct letter from the brand giving your company official permission to sell their products on Amazon."
    },
    {
      icon: Receipt,
      title: "Proforma & Paid Invoices",
      desc: "100% real distributor invoices with your company name, address, and purchased quantities."
    },
    {
      icon: ShieldCheck,
      title: "Brand Registry Approval",
      desc: "We configure your brand permissions so your account is officially recognized and approved."
    },
    {
      icon: Unlock,
      title: "Seller Central Ungating",
      desc: "We submit all documents directly inside your Amazon account until selling is fully unlocked."
    }
  ];

  const faqs = [
    {
      q: "What documents are included in these packages?",
      a: "Every package includes: (1) Official Letter of Authorization (LOA), (2) Brand Registry approval, (3) Real Proforma and Paid Commercial Invoices, and (4) Complete ungating configuration inside your Amazon Seller Central."
    },
    {
      q: "What profit margin percentages are included in each package?",
      a: "$3,000 package gives you 20% to 30% profit margin brands. $5,000 package gives you 20% to 45% profit margin brands. $7,000 package gives you 20% to 50% profit margin brands. $10,000 package gives you 20% to 70% profit margin brands."
    },
    {
      q: "Are these invoices real and safe for Amazon?",
      a: "Yes, 100% real. We do not use fake or edited invoices. All invoices come directly from real authorized suppliers with verifiable tax numbers and addresses."
    },
    {
      q: "How long does it take to get approved?",
      a: "Usually it takes 5 to 7 days to get all your documents ready, submitted, and approved on Amazon."
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
          <span className="text-[#ff6b35]">Brand Approvals</span>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-[#ff6b35] text-xs font-semibold">
            <ShieldCheck size={14} />
            <span>Guaranteed Amazon Brand Approvals</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Amazon Brand Approvals & <br />
            <span className="text-[#ff6b35]">Ungating Packages</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Get official approvals to sell big brands on Amazon. We provide real Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete account setup.
          </p>

          <div className="pt-2">
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

        {/* 4 CORE INCLUSIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((feat, idx) => {
            const IconC = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#ff6b35]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/15 flex items-center justify-center text-[#ff6b35] mb-3">
                  <IconC size={20} />
                </div>
                <h2 className="text-sm font-bold text-white mb-1.5">{feat.title}</h2>
                <p className="text-xs text-white/60 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 4 PACKAGES SECTION */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#ff6b35] font-bold">Simple Pricing</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Choose Your Package</h2>
            <p className="text-white/60 text-xs sm:text-sm">Pick the profit margin percentage you want for your approved brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className="rounded-2xl p-6 flex flex-col justify-between bg-white/[0.03] border border-white/10 hover:border-[#ff6b35]/50 transition-all"
              >
                <div>
                  <span className="text-xs font-mono text-[#ff6b35] bg-[#ff6b35]/10 px-2.5 py-0.5 rounded-full border border-[#ff6b35]/20 inline-block mb-3">
                    {pkg.name}
                  </span>

                  <div className="mb-4 pb-4 border-b border-white/10">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white block">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-[#ffaa75] block mt-1">
                      {pkg.margin}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 mb-5 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block mb-1">
                      What is included:
                    </span>
                    {pkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                        <Check size={13} className="text-[#ff6b35] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={`https://wa.me/923322568950?text=${encodeURIComponent(`Hi AmazonFast, I want the ${pkg.name} (${pkg.price} - ${pkg.margin}) Brand Approval package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-[#ff6b35] hover:bg-[#ea5c2b] text-white transition"
                >
                  <span>Pay Now ({pkg.price})</span>
                  <ArrowUpRight size={14} />
                </a>
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
            <h2 className="text-2xl font-bold text-white">Ready to get your brand approvals?</h2>
            <p className="text-white/60 text-xs sm:text-sm">
              Contact us on WhatsApp now. Tell us which brands you want and we will start your paperwork today.
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
