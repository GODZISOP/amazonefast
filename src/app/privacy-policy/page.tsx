import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle, Globe, Database, UserCheck, Mail, Phone, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Amazon Fast Services",
  description: "Official Privacy Policy of Amazon Fast Services. Learn how we collect, store, protect, and handle your business data, Amazon seller account credentials, and verification documents.",
  alternates: {
    canonical: "https://amazonfastservices.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 17, 2026";

  const keyGuarantees = [
    {
      title: "No Sale of Client Data",
      desc: "We strictly never sell, rent, or trade your personal or business data to advertisers, data brokers, or third parties.",
      icon: <ShieldCheck className="text-[#ff6b35]" size={22} />,
    },
    {
      title: "Amazon Account Security",
      desc: "We request only the minimum necessary permissions via secondary user delegations or secure tokens, never exposing master credentials.",
      icon: <Lock className="text-[#ff6b35]" size={22} />,
    },
    {
      title: "End-to-End Encryption",
      desc: "All identity verification documents and business records are protected with bank-grade TLS 1.3 and AES-256 encryption.",
      icon: <Database className="text-[#ff6b35]" size={22} />,
    },
    {
      title: "Client Control & Deletion",
      desc: "You retain full rights to access, rectify, or request permanent deletion of your data at any time upon request.",
      icon: <UserCheck className="text-[#ff6b35]" size={22} />,
    },
  ];

  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-x-hidden selection:bg-[#ff6b35] selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[650px] h-[650px] bg-[#ff6b35]/10 blur-[170px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-[#ff6b35] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 mb-5">
            <ShieldCheck size={16} className="text-[#ff6b35]" />
            <span className="text-[#ff6b35] text-xs font-bold tracking-wider uppercase">Legal & Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
            Amazon Fast Services (“we,” “our,” or “us”) respects your privacy and is fully committed to safeguarding the personal and confidential business information you share with us.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-white/40">
            <span>Last Updated: <strong className="text-white/70">{lastUpdated}</strong></span>
            <span>•</span>
            <span>Official Domain: <strong className="text-white/70">amazonfastservices.com</strong></span>
            <span>•</span>
            <span className="text-green-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Active & Legally Binding
            </span>
          </div>
        </div>

        {/* 4 Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {keyGuarantees.map((item, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#ff6b35]/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content Body */}
        <div className="space-y-12 text-white/80 leading-relaxed text-sm sm:text-base">

          {/* Scope & Introduction */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">1</span>
              Introduction & Scope of Services
            </h2>
            <p className="mb-4">
              This Privacy Policy explains how <strong>Amazon Fast Services</strong> collects, uses, stores, discloses, and protects information when you visit <Link href="/" className="text-[#ff6b35] hover:underline">AmazonFastServices.com</Link>, interact with our client portal, contact our consulting team, or utilize any of our professional e-commerce solutions.
            </p>
            <p className="mb-4">
              Our comprehensive service suite includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70 mb-6">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Amazon Seller Account Setup & Assistance</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Turnkey Account Management & Automation</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> FBA Wholesale & Private Label Support</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Product Research & Niche Hunting</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Brand Approval & Gating Solutions</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Trademark Registration (USPTO) Assistance</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Amazon PPC Advertising & Campaign Optimization</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> US LLC Formation (Wyoming, Texas, Florida, etc.)</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> US Business Bank Account Setup Assistance</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#ff6b35] shrink-0" /> Reinstatement & Compliance Consulting</div>
            </div>
            <p className="text-white/60 text-xs">
              By visiting our website or engaging our services, you acknowledge and agree to the practices outlined in this policy.
            </p>
          </section>

          {/* 1. Information Collection */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">2</span>
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information directly from you when you submit inquiry forms, register for our client portal, or engage our agency for e-commerce services. The categories of information collected include:
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1.5">A. Contact & Personal Identifiers</h4>
                <p className="text-xs sm:text-sm text-white/65">
                  Full name, business email address, phone number (WhatsApp or direct line), physical mailing address, and country of residence.
                </p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1.5">B. Corporate & Legal Entity Documentation</h4>
                <p className="text-xs sm:text-sm text-white/65">
                  Company names, proposed LLC entity structures, Articles of Organization, Operating Agreements, Employer Identification Numbers (EIN / CP575 from IRS), and Registered Agent details necessary for US legal filings.
                </p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1.5">C. Client Identity & Proof of Address Verification Documents</h4>
                <p className="text-xs sm:text-sm text-white/65">
                  Government-issued passport or national identity cards (Front and Back), residential utility bills, and bank account statements. These sensitive documents are collected strictly for KYC (Know Your Customer) and AML compliance required by US state secretaries, banks, and Amazon.
                </p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1.5">D. Amazon Seller Central & Technical Credentials</h4>
                <p className="text-xs sm:text-sm text-white/65">
                  Authorized Amazon Seller Central secondary user invitations, Merchant Token IDs, store URLs, marketplace settings, advertising PPC portfolios, brand registry details, and associated business communication coordinates.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Purpose of Data Collection */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">3</span>
              Purpose & Lawful Basis of Processing
            </h2>
            <p className="mb-4">
              We process your personal and business data strictly to execute our contracted engagements, fulfill statutory compliance, and optimize your business growth:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
              <li><strong>Amazon Account Creation & Management:</strong> Preparing registration packets, navigating seller identity verification, configuring marketplace settings, and operating day-to-day store operations.</li>
              <li><strong>US Corporate LLC Formation:</strong> Submitting formal registration filings to state division of corporations, securing official state charters, and obtaining federal EIN confirmations from the IRS.</li>
              <li><strong>US Bank Account Setup Assistance:</strong> Preparing corporate resolution documentation and assisting with business banking onboarding with licensed institutions (e.g. Mercury, Relay Financial, Payoneer, Wise).</li>
              <li><strong>Wholesale Sourcing & Brand Approval:</strong> Presenting distributor applications, obtaining Brand ungating, managing brand registry files, and submitting USPTO trademark filings.</li>
              <li><strong>PPC & Advertising Optimization:</strong> Auditing search term reports, negative keyword matching, and managing automated bid campaigns to maximize return on ad spend (ROAS).</li>
              <li><strong>Customer Support & Status Notifications:</strong> Providing real-time updates regarding document reviews, account milestones, and support communications.</li>
            </ul>
          </section>

          {/* 3. Amazon Account Security */}
          <section className="bg-gradient-to-br from-white/[0.04] to-[#ff6b35]/5 border border-[#ff6b35]/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff6b35]/10 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35] text-white flex items-center justify-center text-sm font-bold">4</span>
              Amazon Account Security & Credential Protection
            </h2>
            <p className="mb-4 text-white/80">
              Your Amazon Seller Central account is the foundation of your e-commerce enterprise. We adhere to the highest institutional security standards when handling seller access:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ff6b35] shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">
                  <strong className="text-white">Principle of Least Privilege:</strong> We never ask for full administrative control unless strictly necessary. We request access only to specific functional modules (e.g., Advertising, Manage Inventory, Performance Notifications) required to deliver your contracted services.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ff6b35] shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">
                  <strong className="text-white">Secondary User Delegation:</strong> We strongly encourage and prefer access via Amazon's official <em>User Permissions</em> system. This guarantees that your primary account credentials, OTP 2-factor authentication, and payout bank accounts remain 100% under your sovereign control.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ff6b35] shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">
                  <strong className="text-white">Dedicated Static IP Infrastructure:</strong> All authorized client management sessions are conducted over enterprise-grade, dedicated static business IPs and VPN architectures to prevent cross-account association risks or automated security triggers by Amazon's risk algorithms.
                </p>
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-[#ff6b35]/20 rounded-xl text-xs text-white/70 flex items-center gap-3">
              <AlertCircle size={20} className="text-[#ff6b35] shrink-0" />
              <span>Amazon Fast Services employees are contractually prohibited from retaining client access after service termination. Merchant tokens and credentials are automatically revoked upon contract completion.</span>
            </div>
          </section>

          {/* 4. Data Protection & Security */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">5</span>
              Data Protection & Safeguards
            </h2>
            <p className="mb-4">
              We employ comprehensive technical, physical, and administrative security measures to prevent unauthorized access, loss, misuse, or alteration:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-[#ff6b35]" /> In-Transit & At-Rest
                </h4>
                <p className="text-white/60">
                  All traffic is enforced via HTTPS using TLS 1.3 encryption. Stored identity documents are sealed with AES-256 multi-layered encryption.
                </p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#ff6b35]" /> Access Control
                </h4>
                <p className="text-white/60">
                  Strict role-based access control (RBAC). Only assigned compliance officers and account managers can access customer documentation under active audit logging.
                </p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Database size={16} className="text-[#ff6b35]" /> Infrastructure
                </h4>
                <p className="text-white/60">
                  Enterprise-grade cloud infrastructure with 99.9% uptime, continuous automated penetration testing, and isolated database architectures.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Third-Party Sharing */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">6</span>
              Third-Party Disclosures & Authorizations
            </h2>
            <p className="mb-4">
              We only share personal and corporate information with third parties when strictly necessary to execute services you have authorized, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm mb-6">
              <li><strong>Amazon Services LLC:</strong> Submitting seller profile credentials, brand registry requests, catalog authorization letters, and dispute resolutions.</li>
              <li><strong>Government & Regulatory Bodies:</strong> State division of corporate filings (e.g., Wyoming Secretary of State), the United States Internal Revenue Service (IRS), and the USPTO for trademark registration.</li>
              <li><strong>Licensed Banking & Financial Partners:</strong> Transmitting corporate documents and identity files to partner banks (Mercury, Relay Financial, Payoneer, Wise) solely for opening your company accounts.</li>
              <li><strong>Registered Agent Providers:</strong> Legal corporate service companies providing official statutory registered office addresses in US states.</li>
              <li><strong>Legal Compliance:</strong> When strictly mandated by valid legal court orders, government subpoenas, or regulatory enforcement actions.</li>
            </ul>
            <p className="text-white/60 text-xs">
              Every third-party partner we engage is vetted and contractually bound by confidentiality and data processing agreements consistent with this policy.
            </p>
          </section>

          {/* 6. No Sale of Client Data */}
          <section className="bg-gradient-to-r from-green-500/10 via-white/[0.02] to-transparent border border-green-500/30 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 flex items-center gap-3">
              <CheckCircle2 size={24} className="text-green-500 shrink-0" />
              Absolute Guarantee: No Sale of Client Data
            </h2>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              <strong>Amazon Fast Services has never sold, rented, leased, or commercialized client data, and will never do so.</strong> Your personal contact coordinates, brand listings, supplier connections, profit margins, sales volumes, and corporate registration documents are held in strict commercial confidence. We do not monetize your data through ad exchanges, behavioral brokers, or external marketing networks.
            </p>
          </section>

          {/* 7. Cookies & Tracking Technologies */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">7</span>
              Cookies & Analytics
            </h2>
            <p className="mb-4">
              We use cookies, web beacons, and similar telemetry technologies on AmazonFastServices.com to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-white/70 text-sm mb-4">
              <li>Maintain your authenticated session in our client workspace.</li>
              <li>Analyze aggregate site traffic, page load speed, and user flow to enhance site performance.</li>
              <li>Deliver relevant educational and service updates across authorized advertising platforms (e.g. Google, Meta).</li>
            </ul>
            <p className="text-xs text-white/60">
              You can instruct your browser to refuse all cookies or notify you when a cookie is sent. However, certain parts of the client portal require session cookies to maintain secure authentication.
            </p>
          </section>

          {/* 8. Data Retention & Deletion Rights */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">8</span>
              Data Retention, Access & Deletion Rights
            </h2>
            <p className="mb-4">
              We retain your information only as long as required to fulfill active service contracts, maintain accounting records, and comply with tax and corporate regulations.
            </p>
            <p className="mb-4">Subject to applicable data privacy laws, you possess the right to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-xs sm:text-sm text-white/70">
                <strong className="text-white block mb-1">Right to Access:</strong> Request a comprehensive export of personal information we maintain on your behalf.
              </div>
              <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-xs sm:text-sm text-white/70">
                <strong className="text-white block mb-1">Right to Rectification:</strong> Update or amend inaccurate, outdated, or incomplete records.
              </div>
              <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-xs sm:text-sm text-white/70">
                <strong className="text-white block mb-1">Right to Erasure (Deletion):</strong> Request the permanent deletion of uploaded verification files and account records once services conclude.
              </div>
              <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-xs sm:text-sm text-white/70">
                <strong className="text-white block mb-1">Right to Withdraw Consent:</strong> Revoke consent for optional communications or data handling at any point.
              </div>
            </div>
            <p className="text-xs text-white/60">
              To submit a verifiable data privacy request, email our compliance team at <a href="mailto:privacy@amazonfastservices.com" className="text-[#ff6b35] hover:underline font-semibold">privacy@amazonfastservices.com</a>. We respond to all formal requests within 48 business hours.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35]/20 text-[#ff6b35] flex items-center justify-center text-sm font-bold">9</span>
              International Cross-Border Data Transfers
            </h2>
            <p className="mb-4">
              Amazon Fast Services operates as a global e-commerce consultancy. In delivering US corporate entities, American banking channels, and international Amazon marketplace services, your information may be transferred to, stored, and processed in the United States and other global cloud data centers.
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              Whenever cross-border transfers occur, we implement robust contractual clauses, standard security measures, and regulatory adequacy protocols to guarantee that your information receives the exact same standard of protection regardless of physical jurisdiction.
            </p>
          </section>

          {/* 10. Official Contact Information */}
          <section className="bg-white/[0.04] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#ff6b35] text-white flex items-center justify-center text-sm font-bold">10</span>
              Contact Information & Privacy Officer
            </h2>
            <p className="mb-6 text-white/70 text-sm">
              If you have any questions regarding this Privacy Policy, wish to exercise your data protection rights, or need assistance regarding your credentials, please reach out to our team:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 border border-white/10 p-6 rounded-2xl">
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-white/40 text-xs block font-bold uppercase tracking-wider">Corporate Name</span>
                  <span className="text-white font-bold">Amazon Fast Services</span>
                </div>
                <div>
                  <span className="text-white/40 text-xs block font-bold uppercase tracking-wider">Primary Official Email</span>
                  <a href="mailto:info@amazonfastservices.com" className="text-[#ff6b35] hover:underline font-semibold flex items-center gap-1.5 mt-0.5">
                    <Mail size={14} /> info@amazonfastservices.com
                  </a>
                </div>
                <div>
                  <span className="text-white/40 text-xs block font-bold uppercase tracking-wider">Dedicated Privacy Officer</span>
                  <a href="mailto:privacy@amazonfastservices.com" className="text-[#ff6b35] hover:underline font-semibold flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck size={14} /> privacy@amazonfastservices.com
                  </a>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-white/40 text-xs block font-bold uppercase tracking-wider">Direct / WhatsApp Helpline</span>
                  <a href="https://wa.me/923142573033" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff6b35] font-semibold flex items-center gap-1.5 mt-0.5 transition-colors">
                    <Phone size={14} className="text-[#ff6b35]" /> +92 314 2573033
                  </a>
                </div>
                <div>
                  <span className="text-white/40 text-xs block font-bold uppercase tracking-wider">Official Website</span>
                  <Link href="/" className="text-[#ff6b35] hover:underline font-semibold flex items-center gap-1.5 mt-0.5">
                    <Globe size={14} /> https://amazonfastservices.com/
                  </Link>
                </div>
                <div>
                  <span className="text-white/40 text-xs block font-bold uppercase tracking-wider">Response Commitment</span>
                  <span className="text-white/70 text-xs font-medium">Inquiries addressed within 24 to 48 business hours</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50">
                © {new Date().getFullYear()} Amazon Fast Services. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <Link href="/contact-us" className="text-white/70 hover:text-white transition">Contact Us</Link>
                <span className="text-white/20">•</span>
                <Link href="/login" className="text-white/70 hover:text-white transition">Client Portal</Link>
                <span className="text-white/20">•</span>
                <Link href="/" className="text-white/70 hover:text-white transition">Home</Link>
              </div>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}
