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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -60px 0px" }}
          variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
          className="max-w-4xl mb-14 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] lg:text-[2.9rem] font-medium leading-[1.3] sm:leading-[1.28] tracking-tight text-white flex flex-wrap gap-x-2 gap-y-1 items-baseline">
            <motion.span
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="font-bold text-white inline-flex items-center gap-1.5 mr-1"
            >
              <span>Amazon Fast Service</span>
              <span className="inline-flex items-center justify-center align-middle w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#ff6b35] text-black shadow-[0_0_15px_rgba(255,107,53,0.6)] ml-1">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </span>
            </motion.span>
            {"is a dedicated Amazon FBA management and store growth partner built to launch, manage, and scale your brand.".split(" ").map((word, i) => (
              <motion.span
                key={`p1-${i}`}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                className="text-white font-medium"
              >
                {word}
              </motion.span>
            ))}
            {"From daily inventory replenishment and focused PPC ad campaigns to verified international bank account setup, we handle the technical heavy lifting so your store runs consistently.".split(" ").map((word, i) => (
              <motion.span
                key={`p2-${i}`}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                className="text-white/40 font-normal"
              >
                {word}
              </motion.span>
            ))}
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
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                className="flex items-baseline gap-2 mb-2"
              >
                <motion.span 
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                  className="font-instrument italic text-4xl sm:text-5xl font-bold text-white tracking-tight"
                >
                  30+
                </motion.span>
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                  className="text-xs font-semibold uppercase tracking-wider text-[#ff6b35] bg-[#ff6b35]/10 px-2 py-0.5 rounded-full border border-[#ff6b35]/20"
                >
                  US & UK Stores
                </motion.span>
              </motion.div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
                className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal flex flex-wrap gap-x-1"
              >
                {"Active stores launched, managed, and optimized across US & UK Amazon marketplaces with dedicated account managers.".split(" ").map((w, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.p>
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-1"
              >
                Client Retention Rate
              </motion.span>
              <motion.div 
                variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                className="text-4xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-2"
              >
                98.2%
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff6b35]" />
              </motion.div>

              {/* Overlapping Desi Avatars */}
              <motion.div 
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                className="flex items-center -space-x-2.5 mt-5"
              >
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
              </motion.div>
            </motion.div>

            {/* Testimonial Quote with Word-by-Word Reveal */}
            <div className="pt-6 border-t border-white/5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
                className="text-lg sm:text-xl font-light text-white leading-snug flex flex-wrap gap-x-1.5 items-baseline"
              >
                {[
                  { text: "“Having", highlight: false },
                  { text: "our", highlight: false },
                  { text: "product", highlight: false },
                  { text: "sourcing,", highlight: false },
                  { text: "PPC", highlight: false },
                  { text: "ads,", highlight: false },
                  { text: "and", highlight: false },
                  { text: "bank", highlight: false },
                  { text: "accounts", highlight: false },
                  { text: "handled", highlight: false },
                  { text: "by", highlight: false },
                  { text: "one", highlight: "orange" },
                  { text: "team", highlight: "orange" },
                  { text: "keeps", highlight: false },
                  { text: "our", highlight: false },
                  { text: "store", highlight: false },
                  { text: "profitable", highlight: "white-italic" },
                  { text: "and", highlight: "white-italic" },
                  { text: "stress-free.”", highlight: false },
                ].map((item, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
                    }}
                    className={
                      item.highlight === "orange"
                        ? "font-instrument italic text-[#ff6b35] text-2xl font-medium inline-block"
                        : item.highlight === "white-italic"
                        ? "font-instrument italic text-white text-2xl font-medium inline-block"
                        : "text-white inline-block"
                    }
                  >
                    {item.text}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                  Verified Amazon FBA Seller
                </span>
              </motion.div>
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
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white flex flex-wrap gap-x-1.5">
                  {"Amazon Fast Service".split(" ").map((w, i) => (
                    <motion.span
                      key={i}
                      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                    >
                      {w}
                    </motion.span>
                  ))}
                </span>
              </div>
              <Link
                href="/services"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ff6b35] hover:text-black text-white/80 border border-white/10 flex items-center justify-center transition-all duration-200 group-hover:border-[#ff6b35]"
                aria-label="Explore services"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Middle: Full-Service Store Operations & Checklist */}
            <div className="relative my-auto py-2">
              <motion.span 
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.35 }}
                className="text-white/50 text-xs font-semibold uppercase tracking-wider block"
              >
                Full-Service Operations
              </motion.span>
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-instrument italic text-4xl sm:text-5xl font-bold text-white tracking-tight mt-1 mb-4"
              >
                24/7 Managed
              </motion.div>

              {/* Operational Feature List with Staggered Entrance */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="space-y-2.5"
              >
                {[
                  "Daily Inventory & Shipment Sync",
                  "Active PPC Bid & Keyword Control",
                  "Account Health & Buy-Box Defense",
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.35 } }
                    }}
                    className="flex items-center gap-2.5 text-xs text-white/85"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] shrink-0 font-bold">✓</div>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Status Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between"
              >
                <span className="text-[11px] text-white/50 font-medium">Account Health Score</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Excellent (100%)
                </span>
              </motion.div>
            </div>

            {/* Bottom Dedicated Manager Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full bg-black/60 border border-white/10 rounded-2xl p-2.5 pl-4 sm:pl-5 flex items-center justify-between shadow-inner"
            >
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
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Services Strip with Real Lucide React Icons (No Emojis) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="w-full pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 sm:gap-4"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35 } } }}
            className="text-white/40 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b35]" /> Core Scaling Solutions:
          </motion.span>

          <motion.div 
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {servicePills.map((pill) => {
              const IconComponent = pill.icon;
              return (
                <motion.div
                  key={pill.slug}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
                  }}
                >
                  <Link
                    href={`/services/${pill.slug}`}
                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-[#ff6b35]/15 border border-white/10 hover:border-[#ff6b35]/40 text-white/80 hover:text-white text-xs font-medium transition-all duration-200"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#ff6b35]" />
                    <span>{pill.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-[#ff6b35] transition-colors" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
