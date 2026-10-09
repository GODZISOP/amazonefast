import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, CreditCard, ShieldCheck, Zap, Globe } from "lucide-react";
import { notFound } from "next/navigation";
import WalletServiceUI from "@/components/services/WalletServiceUI";
import WiseServiceUI from "@/components/services/WiseServiceUI";
import StripeServiceUI from "@/components/services/StripeServiceUI";
import AirwallexServiceUI from "@/components/services/AirwallexServiceUI";
import BOAServiceUI from "@/components/services/BOAServiceUI";
import ChaseBankServiceUI from "@/components/services/ChaseBankServiceUI";
import WyomingLLCServiceUI from "@/components/services/WyomingLLCServiceUI";
import FloridaLLCServiceUI from "@/components/services/FloridaLLCServiceUI";
import TexasLLCServiceUI from "@/components/services/TexasLLCServiceUI";
import LLCFormationServiceUI from "@/components/services/LLCFormationServiceUI";

// Service Data
const serviceDetails: Record<string, any> = {
  "amazon-fba-automation": {
    title: "Amazon FBA Automation",
    tagline: "Hands-Free Passive Income on Amazon",
    description: "Our complete Amazon FBA automation service is designed for investors who want to scale a highly profitable e-commerce business without dealing with the day-to-day operations. We handle everything from LLC formation and product research to inventory management, PPC, and customer service.",
    image: "/srv_fba_automation_new.jpg",
    benefits: [
      "End-to-End Account Management",
      "Winning Product Sourcing",
      "Supplier Negotiation & Logistics",
      "Advanced Inventory Forecasting",
      "Daily Account Health Monitoring"
    ]
  },
  "amazon-ppc-advertising": {
    title: "Amazon PPC Advertising",
    tagline: "Maximize ROAS and Dominate Your Niche",
    description: "Stop wasting money on ineffective ad campaigns. Our Amazon PPC experts use advanced data analytics, keyword harvesting, and bidding algorithms to lower your ACoS, increase your organic ranking, and maximize your profitability.",
    image: "/srv_amazon_ppc_new.png",
    benefits: [
      "In-Depth Keyword & Competitor Research",
      "Campaign Setup (Sponsored Products, Brands, Display)",
      "Bid Optimization & ACoS Reduction",
      "Search Term Harvesting",
      "Detailed Weekly Performance Reports"
    ]
  },
  "product-hunting": {
    title: "Product Hunting & Sourcing",
    tagline: "Find High-Demand, Low-Competition Winners",
    description: "The secret to Amazon success starts with the right product. We use premium tools and proprietary strategies to identify products with high search volume, strong margins, and low competition to ensure your launch is a massive success.",
    image: "/srv_product_hunting_v2_1791215473466.jpg",
    benefits: [
      "Data-Backed Market Analysis",
      "Competitor Weakness Identification",
      "Profit Margin & ROI Calculations",
      "Trend Forecasting",
      "Supplier Sourcing Reports"
    ]
  },
  "store-creation": {
    title: "Amazon Store Creation",
    tagline: "Build a Premium Brand Experience",
    description: "Transform your Amazon presence with a highly converting, custom-designed Amazon Storefront. We create visually stunning storefronts that tell your brand story, cross-sell your catalog, and increase average order value.",
    image: "/srv_a_plus_content_v2_1791214962821.jpg",
    benefits: [
      "Custom Graphic Design & Layouts",
      "Brand Story Integration",
      "Mobile-Optimized Storefronts",
      "Shoppable Images & Video Modules",
      "Increased Brand Trust & Loyalty"
    ]
  },
  "a-content-ebc": {
    title: "A+ Content & EBC",
    tagline: "Boost Conversions with Premium Listing Designs",
    description: "Enhanced Brand Content (A+ Content) increases conversion rates by up to 20%. Our design team crafts compelling, benefit-driven infographics, lifestyle images, and comparison charts that turn browsers into buyers.",
    image: "/srv_a_plus_content_new.jpg",
    benefits: [
      "High-Converting Graphic Design",
      "SEO-Optimized Image Alt Text",
      "Competitor Comparison Charts",
      "Lifestyle Imagery Selection",
      "A/B Testing Support"
    ]
  },
  "listing-seo": {
    title: "Listing SEO & Optimization",
    tagline: "Rank Higher, Sell Faster",
    description: "Without visibility, even the best product won't sell. We strategically optimize your product titles, bullet points, backend search terms, and descriptions to ensure maximum visibility on Amazon's A9 search algorithm.",
    image: "/srv_listing_seo_new.png",
    benefits: [
      "Comprehensive Keyword Research",
      "SEO-Optimized Titles & Bullets",
      "Backend Search Term Optimization",
      "HTML Formatted Product Descriptions",
      "Index Checking & Ranking Strategy"
    ]
  },
  "account-reinstatement": {
    title: "Account Reinstatement",
    tagline: "Professional Appeals & Reinstatement Plans",
    description: "A suspended Amazon account can be devastating to your business. Our team of policy experts crafts tailored Plans of Action (POA) and handles all communication with Amazon to get your account reactivated quickly and securely.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "In-Depth Suspension Analysis",
      "Customized Plan of Action (POA)",
      "Direct Communication with Amazon",
      "Account Health Monitoring",
      "Future Suspension Prevention Strategies"
    ]
  },
  "payoneer-wallet": {
    title: "Payoneer Setup",
    tagline: "Digital Wallet Setup ($100)",
    description: "Set up a professional Payoneer account to manage your international Amazon payouts securely and efficiently with low transaction fees.",
    image: "/srv_payoneer_setup.png",
    benefits: [
      "Fast Account Approval",
      "Multi-Currency Receiving Accounts",
      "Seamless Amazon Integration",
      "Low Conversion Fees",
      "Global Payment Solutions"
    ]
  },
  "wise-wallet": {
    title: "Wise Setup",
    tagline: "Digital Wallet Setup ($100)",
    description: "Get your Wise (formerly TransferWise) business account set up correctly for Amazon to receive funds with real exchange rates and zero hidden fees.",
    image: "/srv_wise_setup.png",
    benefits: [
      "Real Mid-Market Exchange Rate",
      "Local Bank Details in 10+ Currencies",
      "Direct Integration with Amazon Seller Central",
      "Fast International Transfers",
      "Business Expense Cards"
    ]
  },
  "airwallex-wallet": {
    title: "Airwallex Setup",
    tagline: "Digital Wallet Setup ($100)",
    description: "Create your Airwallex global business account for seamless international Amazon payments and multi-currency management.",
    image: "/srv_airwallex_setup.jpg",
    benefits: [
      "Global Accounts in 11+ Currencies",
      "Zero International Transaction Fees",
      "Virtual Visa Company Cards",
      "Automated Xero/QuickBooks Sync",
      "Optimized for E-commerce Sellers"
    ]
  },
  "stripe-setup": {
    title: "Stripe Setup",
    tagline: "Digital Wallet Setup ($100)",
    description: "Professional Stripe account setup to process global payments, manage cash flow, and integrate flawlessly with your e-commerce ecosystem.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Accept Global Payments",
      "Advanced Fraud Protection",
      "Seamless E-commerce Integration",
      "Custom Checkout Experiences",
      "Comprehensive Financial Reporting"
    ]
  },
  "chase-bank": {
    title: "Chase Bank Setup",
    tagline: "Physical Bank Setup ($1,500)",
    description: "Get a legitimate physical US bank account with Chase Bank for your Amazon business, providing ultimate credibility and financial flexibility.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Premium US Banking Entity",
      "High-Limit Business Credit Cards",
      "Dedicated Business Banking Support",
      "Secure Wire Transfers",
      "Maximum Amazon Trust Level"
    ]
  },
  "bank-of-america": {
    title: "Bank of America Setup",
    tagline: "Physical Bank Setup ($1,500)",
    description: "Establish a strong financial foundation with a Bank of America physical business account, tailored for international Amazon sellers.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Top-Tier US Physical Bank",
      "Business Advantage Banking",
      "Global Wire Transfer Capabilities",
      "Advanced Cash Flow Management",
      "Highly Trusted by Amazon"
    ]
  },
  "amazon-account-creation": {
    title: "Amazon Account Creation",
    tagline: "Professional Setup ($100)",
    description: "Avoid suspension on day one. We professionally set up and verify your Amazon Seller Central account, ensuring all legal and tax details are perfectly aligned.",
    image: "/srv_amazon_creation.png",
    benefits: [
      "Guaranteed Approval Process",
      "Utility Bill & Identity Verification",
      "Tax Interview Completion (W8/W9)",
      "Bank Account Linking",
      "Immediate Selling Privileges"
    ]
  },
  "llc-formation": {
    title: "US LLC Formation",
    tagline: "Turnkey US LLC Setup for Global Founders",
    description: "Launch your compliant US company 100% remotely. No SSN or US visa needed. Includes state filing, registered agent, US address, IRS EIN, and US business bank account setup.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "100% Non-Resident Remote Setup",
      "Official US Commercial Address & Mail Scanning",
      "Registered Agent (1 Full Year Included)",
      "IRS Federal EIN Tax ID Issuance",
      "US Business Bank Account (Mercury / Relay / Wise)"
    ]
  },
  "wyoming-llc": {
    title: "Wyoming LLC Formation",
    tagline: "Most Popular for Non-Residents ($500)",
    description: "Wyoming LLC formation for international founders. Low fees, strong privacy, zero state income tax, and fastest formation timeline.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Wyoming Secretary of State Filing Included",
      "Full Member Anonymity & Privacy",
      "0% State Income & Corporate Tax",
      "1 Year Registered Agent & US Address",
      "IRS EIN for Non-Residents without SSN"
    ]
  },
  "florida-llc": {
    title: "Florida LLC Formation",
    tagline: "East Coast E-Commerce Hub ($500)",
    description: "Form your Florida LLC directly through Sunbiz. Prime logistics gateway for Amazon FBA imports and zero personal state income tax.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Includes $125 Florida State Filing Fee",
      "Direct Sunbiz Electronic Processing",
      "0% Personal State Income Tax",
      "1 Year Registered Agent & US Address",
      "IRS Federal EIN & Bank Setup"
    ]
  },
  "texas-llc": {
    title: "Texas LLC Formation",
    tagline: "Economic & Logistics Powerhouse ($550)",
    description: "Establish your Texas LLC in the #2 US economy. Zero personal income tax, $2.47M franchise tax exemption, and central Amazon FBA mega-hubs.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Includes $300 Texas SOS Statutory Fee",
      "$2.47M Franchise Tax Exemption",
      "0% Personal State Income Tax",
      "1 Year Registered Agent & Commercial Address",
      "IRS EIN & Tier-1 Bank Readiness"
    ]
  }
};

// Required for Next.js App Router dynamic params
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = serviceDetails[params.slug];

  if (!data) {
    notFound();
  }

  if (params.slug === "llc-formation") {
    return <LLCFormationServiceUI data={data} />;
  }

  if (params.slug === "wyoming-llc") {
    return <WyomingLLCServiceUI data={data} />;
  }

  if (params.slug === "florida-llc") {
    return <FloridaLLCServiceUI data={data} />;
  }

  if (params.slug === "texas-llc") {
    return <TexasLLCServiceUI data={data} />;
  }

  if (params.slug === "payoneer-wallet") {
    return <WalletServiceUI data={data} />;
  }

  if (params.slug === "wise-wallet") {
    return <WiseServiceUI data={data} />;
  }

  if (params.slug === "stripe-setup") {
    return <StripeServiceUI data={data} />;
  }

  if (params.slug === "airwallex-wallet") {
    return <AirwallexServiceUI data={data} />;
  }

  if (params.slug === "bank-of-america") {
    return <BOAServiceUI data={data} />;
  }

  if (params.slug === "chase-bank") {
    return <ChaseBankServiceUI data={data} />;
  }

  // Extract price if it exists in tagline, e.g. "Digital Wallet Setup ($100)"
  const priceMatch = data.tagline.match(/\(\$([0-9,]+)\)/);
  const price = priceMatch ? priceMatch[1] : null;
  const cleanTagline = data.tagline.replace(/\s*\(\$[0-9,]+\)/, '');

  const whatsappMessage = `Hello Amazon Fast! I am interested in the ${data.title} service.`;

  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-x-hidden selection:bg-[#ff6b35]/30">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#ff6b35]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#ff6b35] transition-colors mb-12 text-sm font-medium uppercase tracking-widest">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>

        {/* Modern Centered Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          
          <div className="inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-[#ff6b35]/20 to-transparent border border-[#ff6b35]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(255,107,53,0.1)] mb-8">
            <span className="text-[#ff6b35] text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={14} />
              {cleanTagline}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1] mb-6">
            {data.title}
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-10">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#ff6b35] to-[#f44b0e] text-white rounded-full font-bold text-base transition-all shadow-[0_5px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_10px_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Started Now
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/10] md:aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] mb-32 border border-white/10 bg-[#111]">
          {/* Subtle Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20 pointer-events-none opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/20 to-transparent z-20 pointer-events-none mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <Image 
            src={data.image}
            alt={data.title}
            fill
            className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-[1.03]"
            priority
            quality={100}
          />
          
          {/* Floating Trust Banner */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] md:w-max bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:px-8 md:py-4 flex flex-wrap justify-center gap-6 md:gap-12 shadow-2xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#ff6b35] w-5 h-5" />
              <span className="text-white/90 text-sm font-semibold">Guaranteed Approval</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="text-[#ff6b35] w-5 h-5" />
              <span className="text-white/90 text-sm font-semibold">Fast Processing</span>
            </div>
            <div className="flex items-center gap-3 hidden sm:flex">
              <Globe className="text-[#ff6b35] w-5 h-5" />
              <span className="text-white/90 text-sm font-semibold">Global Support</span>
            </div>
          </div>
        </div>

        {/* Features Bento Grid Section */}
        <div className="mt-24 mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Core features that set us apart</h2>
          <p className="text-white/60 text-lg">Explore our standout features designed to deliver exceptional performance and value, ensuring your success from day one.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.benefits.map((benefit: string, idx: number) => {
            const icons = [ShieldCheck, Zap, Globe, CreditCard, Sparkles, CheckCircle2];
            const IconComponent = icons[idx % icons.length];
            
            return (
              <div 
                key={idx} 
                className={`p-8 rounded-[32px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#ff6b35]/50 transition-all duration-500 group flex flex-col justify-start relative overflow-hidden ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:to-transparent transition-all duration-500 z-0"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="text-[#ff6b35]" size={28} strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{benefit}</h3>
                <p className="text-white/50 leading-relaxed relative z-10">
                  Ensuring premium service delivery directly integrated with your overarching {data.title} goals.
                </p>
              </div>
            );
          })}
        </div>

        {/* Exact Layout of the Image Pricing Card */}
        {price && (
          <div className="mt-32 mb-10 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Container mimicking the image */}
              <div className="bg-[#111111] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 group">
                
                {/* Top Badge Area (Like the purple bar in the image) */}
                <div className="bg-gradient-to-r from-[#ff6b35]/20 to-[#ff6b35]/10 py-2.5 flex items-center justify-center gap-1.5 border-b border-[#ff6b35]/20">
                  <Sparkles size={14} className="text-[#ff6b35]" />
                  <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Most Recommended</span>
                </div>

                {/* Inner Content */}
                <div className="p-8 sm:p-10 flex flex-col">
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
                  
                  {/* Price */}
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-5xl font-black text-white leading-none tracking-tight">${price}</span>
                    <span className="text-white/50 text-sm font-medium mb-1">/ one-time</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Perfect for sellers that need speed, structure, and a premium setup for success.
                  </p>
                  
                  {/* Pay Now Button (Positioned exactly like the image) */}
                  <Link 
                    href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-sm transition-all shadow-[0_5px_15px_rgba(255,107,53,0.2)] hover:shadow-[0_10px_30px_rgba(255,107,53,0.4)] flex items-center justify-center gap-2 mb-8 relative overflow-hidden"
                  >
                    {/* Button highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    Pay Now
                  </Link>

                  {/* Features List */}
                  <div className="flex flex-col gap-3.5">
                    {data.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b35]/70 shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                        <span className="text-white/80 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
