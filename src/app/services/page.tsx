"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Search, 
  ShoppingBag, 
  PenTool, 
  Layout, 
  UserPlus, 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Landmark, 
  Wallet, 
  CreditCard, 
  Banknote,
  Check,
  Building,
  Layers,
  ArrowRight
} from "lucide-react";

export interface ServiceItem {
  name: string;
  slug: string;
  category: "amazon" | "llc" | "banking";
  categoryLabel: string;
  tag: string;
  tagColor?: string;
  description: string;
  icon: any;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  // --- Amazon Growth & Store Scaling ---
  {
    name: "Amazon FBA Automation",
    slug: "amazon-fba-automation",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "Hands-Off Passive",
    description: "Completely hands-off FBA management, from product sourcing to fulfillment, ensuring passive income growth.",
    icon: TrendingUp,
    highlights: ["Hands-off passive operations", "Winning product sourcing", "Daily inventory & health monitoring"]
  },
  {
    name: "Amazon PPC Advertising",
    slug: "amazon-ppc-advertising",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "ROAS Focused",
    description: "Data-driven ad campaigns designed to minimize ACoS and maximize your revenue potential and sales velocity.",
    icon: Search,
    highlights: ["Advanced keyword isolation", "Targeted 18%–24% ACoS", "Dayparting & bid optimization"]
  },
  {
    name: "Product Hunting & Sourcing",
    slug: "product-hunting",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "High Margin",
    description: "Extensive market research to identify winning, high-margin products with low competition for your brand.",
    icon: ShoppingBag,
    highlights: ["High-demand niche analysis", "Direct factory price negotiation", "Sample inspection & quality checks"]
  },
  {
    name: "Amazon Store Creation",
    slug: "store-creation",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "Brand Identity",
    description: "Expertly crafted, highly-converting storefront designs that establish a premium brand identity on Amazon.",
    icon: Layout,
    highlights: ["Custom brand storefronts", "Mobile-optimized UX design", "Higher organic basket size"]
  },
  {
    name: "A+ Content & EBC",
    slug: "a-content-ebc",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "Conversion Booster",
    description: "Premium, visually engaging Enhanced Brand Content that boosts conversion rates and builds customer trust.",
    icon: PenTool,
    highlights: ["High-resolution visual storytelling", "Competitor comparison tables", "Boosts conversion by up to 20%"]
  },
  {
    name: "Listing SEO & Optimization",
    slug: "listing-seo",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "Search Ranking",
    description: "Strategic keyword placement and compelling copywriting to secure top organic rankings on Amazon search.",
    icon: Sparkles,
    highlights: ["Top-tier search indexing", "Persuasive sales copywriting", "Backend search term maximization"]
  },
  {
    name: "Amazon Account Creation",
    slug: "amazon-account-creation",
    category: "amazon",
    categoryLabel: "Amazon Growth",
    tag: "$100 Setup",
    description: "Avoid suspension on day one. We professionally set up and verify your Amazon Seller Central account.",
    icon: UserPlus,
    highlights: ["Safe non-resident registration", "Utility bill verification guidance", "Zero initial rejection guarantee"]
  },

  // --- US LLC Formation ---
  {
    name: "US LLC Formation",
    slug: "llc-formation",
    category: "llc",
    categoryLabel: "US Corporate",
    tag: "Turnkey Hub",
    tagColor: "bg-[#ff6b35] text-black font-bold",
    description: "Complete US corporate structure for non-residents. State filing, Registered Agent, US physical address, and FinCEN BOI filing.",
    icon: Building2,
    highlights: ["Wyoming, Florida & Texas options", "100% remote non-resident setup", "Registered Agent, US Address & EIN"]
  },
  {
    name: "Wyoming LLC Formation",
    slug: "wyoming-llc",
    category: "llc",
    categoryLabel: "US Corporate",
    tag: "$500 Complete",
    tagColor: "bg-[#ff6b35] text-black font-bold",
    description: "Most popular choice for global sellers. Complete member anonymity, 0% state income tax, and lowest $60 annual compliance fee.",
    icon: ShieldCheck,
    highlights: ["#1 Non-resident seller choice", "Full member anonymity & privacy", "Lowest $60 annual report fee"]
  },
  {
    name: "Florida LLC Formation",
    slug: "florida-llc",
    category: "llc",
    categoryLabel: "US Corporate",
    tag: "$500 Complete",
    tagColor: "bg-[#ff6b35] text-black font-bold",
    description: "East Coast commerce hub with direct Sunbiz electronic processing, zero personal income tax, and prime logistics gateway.",
    icon: Globe2,
    highlights: ["Includes $125 Florida state fee", "Direct Sunbiz electronic processing", "Prime East Coast logistics gateway"]
  },
  {
    name: "Texas LLC Formation",
    slug: "texas-llc",
    category: "llc",
    categoryLabel: "US Corporate",
    tag: "$550 Complete",
    tagColor: "bg-[#ff6b35] text-black font-bold",
    description: "Commercial powerhouse with $2.47M franchise tax exemption, central logistics across 25+ Amazon fulfillment centers.",
    icon: Landmark,
    highlights: ["Includes $300 Texas SOS fee", "$2.47M franchise tax exemption", "Tier-1 US commercial banking weight"]
  },

  // --- Banking & Payment Infrastructure ---
  {
    name: "Bank Account Creation",
    slug: "payoneer-wallet",
    category: "banking",
    categoryLabel: "Banking & Wallets",
    tag: "Multi-Currency",
    description: "Professional payment and bank account setup to receive Amazon payouts securely and manage global business funds.",
    icon: Wallet,
    highlights: ["Direct Amazon disbursements", "USD, EUR, GBP virtual receiving", "Low withdrawal fees to local banks"]
  },
  {
    name: "Wise Business Account",
    slug: "wise-wallet",
    category: "banking",
    categoryLabel: "Banking & Wallets",
    tag: "Global Treasury",
    description: "Multi-currency borderless banking for international supplier payments with real mid-market exchange rates.",
    icon: CreditCard,
    highlights: ["Real mid-market FX rates", "Fast supplier international wires", "Debit card & multi-currency wallets"]
  },
  {
    name: "Stripe Payment Gateway",
    slug: "stripe-setup",
    category: "banking",
    categoryLabel: "Banking & Wallets",
    tag: "$100 Setup",
    description: "Professional Stripe account setup to process global payments, manage cash flow, and integrate with Shopify.",
    icon: Banknote,
    highlights: ["Accept global credit cards", "Direct Shopify & web integration", "Instant payout support"]
  },
  {
    name: "Bank of America Setup",
    slug: "bank-of-america",
    category: "banking",
    categoryLabel: "Banking & Wallets",
    tag: "$1,500 Physical",
    description: "Establish a strong financial foundation with a Bank of America physical business account for Amazon sellers.",
    icon: Landmark,
    highlights: ["Top-tier US physical bank branch", "High-limit corporate checking", "Maximum Amazon trust status"]
  },
  {
    name: "Chase Bank Setup",
    slug: "chase-bank",
    category: "banking",
    categoryLabel: "Banking & Wallets",
    tag: "$1,500 Physical",
    description: "Get a legitimate physical US bank account with Chase Bank for ultimate credibility and financial flexibility.",
    icon: Building,
    highlights: ["Premier Wall Street banking entity", "High-limit business credit cards", "Dedicated commercial banker support"]
  },
  {
    name: "Airwallex Setup",
    slug: "airwallex-wallet",
    category: "banking",
    categoryLabel: "Banking & Wallets",
    tag: "Fintech Scale",
    description: "Global treasury and cross-border payment platform with corporate virtual cards and zero foreign transaction fees.",
    icon: Layers,
    highlights: ["Virtual corporate Visa cards", "Zero international transaction fees", "Fast batch supplier payouts"]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "amazon" | "llc" | "banking">("all");

  const filteredServices = activeTab === "all" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  const whatsappMessage = "Hi AmazonFast, I would like to consult about your services and pricing.";

  return (
    <div className="relative font-sans bg-[#080503] text-white pt-32 pb-24 min-h-screen overflow-hidden selection:bg-[#ff6b35]/30">
      
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#ff6b35]/15 via-[#f97316]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-[#ff6b35] font-semibold">All Services</span>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Full-Spectrum E-Commerce & Corporate Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Services Built To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff6b35]">
              Scale Global Brands
            </span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            From hands-free FBA store automation and high-ROAS PPC advertising to turnkey US LLC formation and business banking for international founders.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: "all", label: "All Services", count: servicesData.length },
            { id: "amazon", label: "Amazon Growth", count: servicesData.filter(s => s.category === "amazon").length },
            { id: "llc", label: "US LLC Formation", count: servicesData.filter(s => s.category === "llc").length },
            { id: "banking", label: "Banking & Wallets", count: servicesData.filter(s => s.category === "banking").length },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive 
                    ? "bg-[#ff6b35] text-black shadow-[0_0_20px_rgba(255,107,53,0.35)] scale-105" 
                    : "bg-[#120703]/80 text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${isActive ? "bg-black/20 text-black font-bold" : "bg-white/10 text-white/50"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx}
                className="group bg-[#120703]/90 backdrop-blur-xl border border-white/10 hover:border-[#ff6b35]/50 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(255,107,53,0.15)] relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle orange hover glow in background */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#ff6b35]/15 blur-[55px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Category Pill + Price/Feature Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      {service.categoryLabel}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.tagColor || "bg-[#ff6b35]/15 text-[#ff6b35] border border-[#ff6b35]/30"}`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 bg-[#ff6b35]/10 w-14 h-14 flex items-center justify-center rounded-2xl border border-[#ff6b35]/20 group-hover:border-[#ff6b35]/50 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-[#ff6b35] w-7 h-7" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white tracking-tight group-hover:text-[#ff6b35] transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-white/65 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {service.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#ff6b35] shrink-0 stroke-[3]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Permanent Prominent View Details Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#ff6b35] text-white hover:text-black font-bold text-sm flex items-center justify-center gap-2 border border-white/15 hover:border-[#ff6b35] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170a04] via-[#120703] to-[#170a04] border border-[#ff6b35]/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#ff6b35]/5 blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            Need a Custom Package or Strategy?
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Speak directly with our senior Amazon and US corporate specialists to design a tailor-made roadmap for your brand.
          </p>
          <Link
            href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff824d] text-black font-bold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(255,107,53,0.4)] hover:scale-105"
          >
            Consult Free on WhatsApp
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
