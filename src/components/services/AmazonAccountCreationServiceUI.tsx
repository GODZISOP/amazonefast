"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Globe2, 
  FileText, 
  Mail, 
  CreditCard, 
  Building, 
  Sparkles, 
  ChevronDown, 
  AlertCircle,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";

interface AmazonAccountCreationServiceUIProps {
  data?: any;
}

export default function AmazonAccountCreationServiceUI({ data }: AmazonAccountCreationServiceUIProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappMessage = "Hi AmazonFast, I want to create and verify my Amazon Seller Central account.";

  const requiredDocuments = [
    {
      num: "01",
      icon: Mail,
      title: "Dedicated Gmail & Password",
      badge: "Account Security",
      desc: "A completely fresh, clean Google/Gmail address that has never been linked to any existing Amazon buyer or seller account."
    },
    {
      num: "02",
      icon: FileText,
      title: "Bank Account Statement",
      badge: "Financial Proof",
      desc: "Official bank statement (Digital bank like Wise/Payoneer or local bank) in PDF format, dated within the last 90 days, with exact matching legal name and residential address."
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "CNIC / Smart National Card / Passport",
      badge: "Identity Verification",
      desc: "High-resolution color scan of your valid Government National ID (CNIC/Smart ID) or Passport with at least 6 months validity. All four corners must be clearly visible with zero glare."
    },
    {
      num: "04",
      icon: Building,
      title: "Official Utility Bill",
      badge: "Address Verification",
      desc: "Electricity, piped gas, water, or landline internet bill matching your exact legal name and residential address to pass Amazon Section 3 and automated utility bill verification."
    },
    {
      num: "05",
      icon: CreditCard,
      title: "International Credit / Debit Card",
      badge: "Charge Method",
      desc: "An active Visa or Mastercard enabled for international online e-commerce transactions for the Amazon monthly seller subscription fee."
    }
  ];

  const supportedCountries = [
    { name: "United States (USA)", flag: "🇺🇸", marketplace: "Amazon.com (North America)", popular: true },
    { name: "United Kingdom (UK)", flag: "🇬🇧", marketplace: "Amazon.co.uk (Europe)", popular: true },
    { name: "Canada", flag: "🇨🇦", marketplace: "Amazon.ca (North America)", popular: true },
    { name: "Dubai / UAE", flag: "🇦🇪", marketplace: "Amazon.ae (Middle East)", popular: true },
    { name: "Saudi Arabia (KSA)", flag: "🇸🇦", marketplace: "Amazon.sa (Middle East)", popular: true },
    { name: "Qatar", flag: "🇶🇦", marketplace: "Amazon Gulf Network", popular: false },
    { name: "Oman", flag: "🇴🇲", marketplace: "Amazon Middle East Regional", popular: false },
    { name: "Pakistan", flag: "🇵🇰", marketplace: "Global Selling Approved Country", popular: true },
    { name: "India", flag: "🇮🇳", marketplace: "Amazon.in & Global Export", popular: true },
    { name: "Worldwide (10+ Countries)", flag: "🌍", marketplace: "Europe, Australia, Asia & Global", popular: false }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Document Pre-Audit & Vetting",
      desc: "Our legal and account specialists inspect your ID, bank statement, and utility bill to ensure 100% character-by-character address and name matching before submission."
    },
    {
      step: "02",
      title: "Charge & Deposit Method Setup",
      desc: "We configure your payout receiving account (Wise, Payoneer, or US bank) and verify your international card compatibility for uninterrupted billing."
    },
    {
      step: "03",
      title: "Seller Central Filing & Tax Interview",
      desc: "We guide your application submission and complete the mandatory US W-8BEN (non-resident) or relevant regional tax interview accurately."
    },
    {
      step: "04",
      title: "Identity Clearance & Active Account Handover",
      desc: "We assist through automated identity checks and live video verification until your Seller Central account is 100% active with green health status."
    }
  ];

  const faqs = [
    {
      q: "Why do so many Amazon accounts get suspended on Day 1?",
      a: "Most accounts are flagged under Section 3 due to minor discrepancies between the name and address on the bank statement, utility bill, and government ID, or using a previously compromised IP or card. We perform a pre-submission audit to guarantee zero mismatches."
    },
    {
      q: "Can I open an Amazon US/UK account from Pakistan, India, or Gulf countries?",
      a: "Yes! Pakistan, India, UAE, and Saudi Arabia are on Amazon's official list of approved countries for registration. You can register using your local passport or national ID card along with a compliant bank account."
    },
    {
      q: "What if the utility bill is not under my name?",
      a: "Amazon strictly requires the utility bill to match the seller's registered name and physical address. If your bill is under a landlord or parent's name, we guide you on compliant alternatives such as postpaid internet bills or bank verification documentation."
    },
    {
      q: "Do I need a US LLC to create an Amazon seller account?",
      a: "No! You can register as an individual seller first. However, if you plan to scale or want to open wholesale accounts, forming a US LLC (Wyoming, Florida, or Texas) gives you enterprise status. We offer both setups."
    },
    {
      q: "How long does the verification process take?",
      a: "Once all vetted documents are submitted, Amazon typically approves the account within 24 to 72 hours following document review or a quick identity video call."
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
          <span className="text-[#ff6b35] font-semibold">Amazon Account Creation</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-16 sm:pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Guaranteed Non-Resident Identity Verification & Approval</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Amazon Seller Central <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff6b35]">
              Account Creation & Verification
            </span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Avoid instant Section 3 suspensions. Professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,53,0.4)] hover:scale-105"
            >
              Start Account Setup
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <a
              href="#required-documents"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/10 transition-colors"
            >
              View Document Checklist
            </a>
          </div>
        </div>

        {/* Section 1: Necessary Documents (User Specification) */}
        <div id="required-documents" className="pt-10 pb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#ff6b35] font-bold block mb-2">Mandatory Checklist</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Required Documents For Approval
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Every document must be perfectly formatted and pre-audited to avoid automatic rejection by Amazon's verification bots:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc) => {
              const IconComp = doc.icon;
              return (
                <div
                  key={doc.num}
                  className="bg-[#120703]/90 backdrop-blur-xl border border-white/10 hover:border-[#ff6b35]/50 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-instrument italic text-2xl font-bold text-[#ff6b35]">
                        {doc.num}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                        {doc.badge}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {doc.title}
                    </h3>

                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#ff6b35] font-semibold border-t border-white/10 pt-4">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    <span>Verified By AmazonFast Team</span>
                  </div>
                </div>
              );
            })}

            {/* Reassurance Card */}
            <div className="bg-gradient-to-br from-[#1c0c05] to-[#120703] border border-[#ff6b35]/30 rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#ff6b35] block mb-2">Our Guarantee</span>
                <h3 className="text-xl font-bold text-white mb-3">Pre-Submission Audit</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                  Don't risk submitting unverified documents. Send them to us first on WhatsApp. We inspect character-by-character formatting, bank watermarks, and resolution before anything touches Amazon.
                </p>
              </div>

              <Link
                href={`https://wa.me/923322568950?text=${encodeURIComponent("Hi AmazonFast, please pre-audit my documents for Amazon Account Creation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#ff6b35] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition hover:bg-[#ff824d]"
              >
                <span>Free Document Pre-Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Supported Countries & Marketplaces */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#ff6b35] font-bold block mb-2">Global Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Supported Countries & Major Marketplaces
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              We register and verify active seller accounts for founders residing across 10+ countries worldwide:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportedCountries.map((c, idx) => (
              <div 
                key={idx}
                className="bg-[#120703] border border-white/10 hover:border-[#ff6b35]/40 p-5 rounded-2xl flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{c.name}</h4>
                    <p className="text-white/50 text-xs">{c.marketplace}</p>
                  </div>
                </div>
                {c.popular && (
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-[#ff6b35]/20 text-[#ff6b35] border border-[#ff6b35]/30">
                    High Demand
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 4-Step Approval Roadmap */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#ff6b35] font-bold block mb-2">Approval Process</span>
            <h2 className="text-3xl font-bold text-white mb-2">How We Guarantee Approval</h2>
            <p className="text-white/60 text-sm">Our structured methodology minimizes rejection risks to nearly zero.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, idx) => (
              <div key={idx} className="bg-[#120703] border border-white/10 p-6 rounded-2xl relative">
                <span className="font-instrument italic text-3xl font-bold text-[#ff6b35] block mb-3">{s.step}</span>
                <h4 className="font-bold text-white text-base mb-2">{s.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Package Card */}
        <div className="py-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#170a04] via-[#120703] to-[#170a04] border border-[#ff6b35]/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff6b35] text-black text-xs font-bold uppercase tracking-wider mb-4">
              Full-Service Package
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Amazon Account Creation & Verification
            </h2>

            <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto mb-8">
              Includes comprehensive document pre-screening, Section 3 safeguard, tax interview completion, and live approval support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8 text-left text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ff6b35] shrink-0 stroke-[3]" />
                <span>Document Pre-Submission Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ff6b35] shrink-0 stroke-[3]" />
                <span>Bank Statement Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ff6b35] shrink-0 stroke-[3]" />
                <span>W-8BEN / Regional Tax Interview</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ff6b35] shrink-0 stroke-[3]" />
                <span>Video Verification Coaching</span>
              </div>
            </div>

            <Link
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-base transition-all shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-105"
            >
              Get Started on WhatsApp
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Section 5: FAQs */}
        <div className="py-16 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-white/60 text-sm">Clear answers about creating and passing Amazon verification.</p>
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
