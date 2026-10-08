import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, TrendingUp, Search, ShoppingBag, PenTool, Layout, UserPlus } from "lucide-react";

export const servicesData = [
  {
    name: "Amazon FBA Automation",
    slug: "amazon-fba-automation",
    description: "Completely hands-off FBA management, from product sourcing to fulfillment, ensuring passive income growth.",
    icon: <TrendingUp className="text-[#ff6b35] w-8 h-8" />
  },
  {
    name: "Amazon PPC Advertising",
    slug: "amazon-ppc-advertising",
    description: "Data-driven ad campaigns designed to minimize ACoS and maximize your revenue potential and sales velocity.",
    icon: <Search className="text-[#ff6b35] w-8 h-8" />
  },
  {
    name: "Product Hunting & Sourcing",
    slug: "product-hunting",
    description: "Extensive market research to identify winning, high-margin products with low competition for your brand.",
    icon: <ShoppingBag className="text-[#ff6b35] w-8 h-8" />
  },
  {
    name: "Amazon Store Creation",
    slug: "store-creation",
    description: "Expertly crafted, highly-converting storefront designs that establish a premium brand identity on Amazon.",
    icon: <Layout className="text-[#ff6b35] w-8 h-8" />
  },
  {
    name: "A+ Content & EBC",
    slug: "a-content-ebc",
    description: "Premium, visually engaging Enhanced Brand Content that boosts conversion rates and builds customer trust.",
    icon: <PenTool className="text-[#ff6b35] w-8 h-8" />
  },
  {
    name: "Listing SEO & Optimization",
    slug: "listing-seo",
    description: "Strategic keyword placement and compelling copywriting to secure top organic rankings on Amazon search.",
    icon: <Sparkles className="text-[#ff6b35] w-8 h-8" />
  },
  {
    name: "Bank Account Creation",
    slug: "payoneer-wallet",
    description: "Professional payment and bank account setup to receive Amazon payouts securely and manage global business funds.",
    icon: <UserPlus className="text-[#ff6b35] w-8 h-8" />
  }
];

export default function ServicesPage() {
  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[#ff6b35] text-sm font-semibold tracking-wide uppercase">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Services That Drive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Real Growth</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            From initial product research to advanced PPC optimization, we provide end-to-end solutions to dominate the Amazon marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <Link 
              key={idx}
              href={`/services/${service.slug}`}
              className="group bg-[#111111] border border-white/5 hover:border-[#ff6b35]/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,53,0.1)] relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle orange glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
              <p className="text-white/50 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-[#ff6b35] font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                Explore Detail
                <ArrowUpRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
