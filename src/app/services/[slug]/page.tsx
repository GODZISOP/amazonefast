import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

// Service Data
const serviceDetails: Record<string, any> = {
  "amazon-fba-automation": {
    title: "Amazon FBA Automation",
    tagline: "Hands-Free Passive Income on Amazon",
    description: "Our complete Amazon FBA automation service is designed for investors who want to scale a highly profitable e-commerce business without dealing with the day-to-day operations. We handle everything from LLC formation and product research to inventory management, PPC, and customer service.",
    image: "/srv_fba_automation.jpg",
    benefits: [
      "End-to-End Account Management",
      "Winning Product Sourcing",
      "Supplier Negotiation & Logistics",
      "Advanced Inventory Forecasting",
      "Daily Account Health Monitoring"
    ]
  },
  "amazon-ppc": {
    title: "Amazon PPC Management",
    tagline: "Maximize ROAS and Dominate Your Niche",
    description: "Stop wasting money on ineffective ad campaigns. Our Amazon PPC experts use advanced data analytics, keyword harvesting, and bidding algorithms to lower your ACoS, increase your organic ranking, and maximize your profitability.",
    image: "/srv_amazon_ppc.jpg",
    benefits: [
      "In-Depth Keyword & Competitor Research",
      "Campaign Setup (Sponsored Products, Brands, Display)",
      "Bid Optimization & ACoS Reduction",
      "Search Term Harvesting",
      "Detailed Weekly Performance Reports"
    ]
  },
  "amazon-product-hunting": {
    title: "Amazon Product Hunting",
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
  "amazon-store-creation": {
    title: "Amazon Store Creation",
    tagline: "Build a Premium Brand Experience",
    description: "Transform your Amazon presence with a highly converted, custom-designed Amazon Storefront. We create visually stunning storefronts that tell your brand story, cross-sell your catalog, and increase average order value.",
    image: "/section2-bg-wide.jpg",
    benefits: [
      "Custom Graphic Design & Layouts",
      "Brand Story Integration",
      "Mobile-Optimized Storefronts",
      "Shoppable Images & Video Modules",
      "Increased Brand Trust & Loyalty"
    ]
  },
  "a-content-ebc": {
    title: "A+ Content / EBC",
    tagline: "Boost Conversions with Premium Listing Designs",
    description: "Enhanced Brand Content (A+ Content) increases conversion rates by up to 20%. Our design team crafts compelling, benefit-driven infographics, lifestyle images, and comparison charts that turn browsers into buyers.",
    image: "/srv_a_plus_content_v2_1791214962821.jpg",
    benefits: [
      "High-Converting Graphic Design",
      "SEO-Optimized Image Alt Text",
      "Competitor Comparison Charts",
      "Lifestyle Imagery Selection",
      "A/B Testing Support"
    ]
  },
  "shopify-dropshipping": {
    title: "Shopify Dropshipping",
    tagline: "Your Own Highly Profitable E-Commerce Brand",
    description: "Expand beyond Amazon with a custom Shopify dropshipping store. We build high-converting websites, source winning products, and manage Facebook/TikTok ad campaigns to drive massive traffic and sales.",
    image: "/srv_shopify_dropshipping.jpg",
    benefits: [
      "Premium Premium Theme Customization",
      "Winning Product Integration",
      "Payment Gateway Setup",
      "Social Media Ad Strategies",
      "Conversion Rate Optimization (CRO)"
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

  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-x-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 self-start">
              <span className="text-[#ff6b35] text-sm font-semibold tracking-wide">{data.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              {data.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mt-4">
              {data.description}
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">What's Included?</h3>
              <ul className="flex flex-col gap-4">
                {data.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#ff6b35] shrink-0 mt-0.5" size={20} />
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="https://calendly.com/amazonfastservice1/new-meeting-1" target="_blank" rel="noopener noreferrer" className="bg-[#ff6b35] hover:bg-[#e85c2b] text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2">
                Get Started
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 mix-blend-overlay"></div>
            <Image 
              src={data.image}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

        </div>

      </div>
    </div>
  );
}
