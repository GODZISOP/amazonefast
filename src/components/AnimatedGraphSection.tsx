"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Target, 
  Search, 
  Store, 
  Palette, 
  Landmark 
} from "lucide-react";

export default function AnimatedGraphSection() {
  const servicePills = [
    { name: "Amazon Account Creation", slug: "amazon-account-creation", icon: Zap },
    { name: "Amazon PPC Advertising", slug: "amazon-ppc-advertising", icon: Target },
    { name: "Product Hunting & Sourcing", slug: "product-hunting", icon: Search },
    { name: "Store Creation & Brand Registry", slug: "store-creation", icon: Store },
    { name: "A+ Content & EBC Design", slug: "a-content-ebc", icon: Palette },
    { name: "Global Bank & Stripe Setup", slug: "stripe-setup", icon: Landmark },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 bg-[#0a0400] text-white overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(10,4,0,0) 70%)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Top Editorial Statement (Grounded & Realistic) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mb-14 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] lg:text-[2.9rem] font-medium leading-[1.3] sm:leading-[1.28] tracking-tight text-white">
            <span className="font-bold text-white">Amazon Fast Service</span>{" "}
            <span className="inline-flex items-center justify-center align-middle mx-1 sm:mx-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#ff6b35] text-black shadow-[0_0_15px_rgba(255,107,53,0.6)]">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </span>{" "}
            <span className="text-white font-medium">
              is a dedicated Amazon FBA management and store growth partner built to launch, manage, and scale your brand.
            </span>{" "}
            <span className="text-white/40 font-normal">
              From daily inventory replenishment and focused PPC ad campaigns to verified international bank account setup, we handle the technical heavy lifting so your store runs consistently.
            </span>
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Card 1: Desi Seller Photo + Grounded Store Metric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative h-[460px] sm:h-[490px] rounded-[2.2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end p-4 sm:p-5"
          >
            {/* Real Desi Human Photo */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/desi-man-1.png" 
                alt="Amazon Store Partner" 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            </div>

            {/* Bottom Overlay Card */}
            <div className="relative z-10 w-full bg-[#120702]/95 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-[1.8rem] shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:border-[#ff6b35]/40 transition-colors">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-instrument italic text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  30+
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6b35] bg-[#ff6b35]/10 px-2 py-0.5 rounded-full border border-[#ff6b35]/20">
                  US & UK Stores
                </span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                Active stores launched, managed, and optimized across US & UK Amazon marketplaces with dedicated account managers.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Client Retention & Real Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group relative h-[460px] sm:h-[490px] bg-[#110702] border border-white/10 rounded-[2.2rem] p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#ff6b35]/40 transition-all"
          >
            {/* Top Stat */}
            <div>
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-1">
                Client Retention Rate
              </span>
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-2">
                98.2%
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff6b35]" />
              </div>

              {/* Overlapping Desi Avatars */}
              <div className="flex items-center -space-x-2.5 mt-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#110702] ring-1 ring-[#ff6b35]/40">
                  <Image src="/desi-man-1.png" alt="Client 1" fill className="object-cover" />
                </div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#110702] ring-1 ring-[#ff6b35]/40">
                  <Image src="/desi-woman.png" alt="Client 2" fill className="object-cover" />
                </div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#110702] ring-1 ring-[#ff6b35]/40">
                  <Image src="/desi-man-2.png" alt="Client 3" fill className="object-cover" />
                </div>
                <span className="pl-4 text-xs font-medium text-white/50">
                  Active Brand Partners
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="pt-6 border-t border-white/5">
              <p className="text-lg sm:text-xl font-light text-white leading-snug">
                “Having our product sourcing, PPC ads, and bank accounts handled by{" "}
                <span className="font-instrument italic text-[#ff6b35] text-2xl font-medium">
                  one team
                </span>{" "}
                keeps our store{" "}
                <span className="font-instrument italic text-white text-2xl font-medium">
                  profitable and
                </span>{" "}
                stress-free.”
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                  Verified Amazon FBA Seller
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Full-Service Store Operations & Account Health */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="group relative h-[460px] sm:h-[490px] bg-[#110702] border border-white/10 rounded-[2.2rem] p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#ff6b35]/40 transition-all overflow-hidden"
          >
            {/* Header: Brand Name + Action Link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">
                  Amazon Fast Service
                </span>
              </div>
              <Link
                href="/services"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ff6b35] hover:text-black text-white/80 border border-white/10 flex items-center justify-center transition-all duration-200 group-hover:border-[#ff6b35]"
                aria-label="Explore services"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Middle: Full-Service Store Operations & Checklist */}
            <div className="relative my-auto py-2">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider block">
                Full-Service Operations
              </span>
              <div className="font-instrument italic text-4xl sm:text-5xl font-bold text-white tracking-tight mt-1 mb-4">
                24/7 Managed
              </div>

              {/* Operational Feature List */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <div className="w-4 h-4 rounded-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] shrink-0 font-bold">✓</div>
                  <span>Daily Inventory & Shipment Sync</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <div className="w-4 h-4 rounded-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] shrink-0 font-bold">✓</div>
                  <span>Active PPC Bid & Keyword Control</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/85">
                  <div className="w-4 h-4 rounded-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] shrink-0 font-bold">✓</div>
                  <span>Account Health & Buy-Box Defense</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-white/50 font-medium">Account Health Score</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Excellent (100%)
                </span>
              </div>
            </div>

            {/* Bottom Dedicated Manager Strip */}
            <div className="w-full bg-black/60 border border-white/10 rounded-2xl p-2.5 pl-4 sm:pl-5 flex items-center justify-between shadow-inner">
              <div>
                <span className="font-instrument italic text-lg sm:text-xl font-bold text-white block leading-none">
                  Dedicated Account Pod
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                  Direct 1-on-1 Support
                </span>
              </div>

              <Link
                href="/services"
                className="bg-[#ff6b35] hover:bg-[#ff824d] text-black font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:scale-105"
              >
                Explore Services
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom Services Strip with Real Lucide React Icons (No Emojis) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 sm:gap-4"
        >
          <span className="text-white/40 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b35]" /> Core Scaling Solutions:
          </span>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {servicePills.map((pill) => {
              const IconComponent = pill.icon;
              return (
                <Link
                  key={pill.slug}
                  href={`/services/${pill.slug}`}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-[#ff6b35]/15 border border-white/10 hover:border-[#ff6b35]/40 text-white/80 hover:text-white text-xs font-medium transition-all duration-200"
                >
                  <IconComponent className="w-3.5 h-3.5 text-[#ff6b35]" />
                  <span>{pill.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-[#ff6b35] transition-colors" />
                </Link>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
