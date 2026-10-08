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
                Book a Call
                <ArrowUpRight size={18} />
              </Link>
              <a href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2">
                Message Us
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964 1.006-3.588c-.608-1.065-.928-2.294-.928-3.544 0-3.9 3.17-7.07 7.071-7.071 3.899 0 7.07 3.172 7.071 7.073-.001 3.901-3.173 7.07-7.071 7.07z"/></svg>
              </a>
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
