"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: custom * 0.15,
    },
  }),
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 120,
      mass: 0.8,
    },
  },
};

export default function Footer() {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("info@amazonfastservices.com");
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-between pt-16">

      {/* Background Gradient - perfectly balanced warm glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#ff6b35]/20 to-[#ff6b35]/50 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand & Social */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block mb-2">
              <Image src="/amazon-fast-logo.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain h-10 w-auto" style={{ filter: "drop-shadow(0 0 10px rgba(255,107,53,0.5))" }} />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">
              Your partner in scaling Amazon businesses globally with automated PPC, product sourcing, and reinstatement services.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="https://www.facebook.com/AmazonFastServices" target="_blank" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></Link>
              <Link href="https://www.instagram.com/amazonfastservices.pk/" target="_blank" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#E4405F] hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></Link>
              <Link href="https://pk.linkedin.com/company/amazonfastservices" target="_blank" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#0A66C2] hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></Link>
              <Link href="https://www.tiktok.com/@amazonfastservices" target="_blank" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-3.328.026c0 1.258.53 2.457 1.417 3.344C6.15 21.67 7.348 22 8.606 22a8.653 8.653 0 0 0 8.606-8.606v-3.791c1.336 1.096 3.031 1.737 4.788 1.76V8.049a4.877 4.877 0 0 1-2.411-1.363z" /></svg></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2 opacity-80">Our Services</h4>
            <Link href="/services/amazon-account-creation" className="text-white/60 hover:text-white transition text-sm">Account Creation</Link>
            <Link href="/services/amazon-ppc-advertising" className="text-white/60 hover:text-white transition text-sm">PPC Advertising</Link>
            <Link href="/services/product-hunting" className="text-white/60 hover:text-white transition text-sm">Product Hunting</Link>
            <Link href="/services/brand-approvals" className="text-white/60 hover:text-white transition text-sm">Brand Approvals</Link>
            <Link href="/services/llc-formation" className="text-white/60 hover:text-white transition text-sm">US LLC Formation</Link>
            <Link href="/services/payoneer-wallet" className="text-white/60 hover:text-white transition text-sm">Bank Account Creation</Link>
          </div>

          {/* Column 3: Quick Links & Legal */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-white font-medium mb-2 opacity-80">Pages & Legal</h4>
            <Link href="/" className="text-white/60 hover:text-white transition text-sm">Home</Link>
            <Link href="/about" className="text-white/60 hover:text-white transition text-sm">About Us</Link>
            <Link href="/contact-us" className="text-white/60 hover:text-white transition text-sm">Contact Us</Link>
            <Link href="/login" className="text-white/60 hover:text-white transition text-sm">Client Portal</Link>
            <Link href="/privacy-policy" className="text-[#ff6b35] hover:text-orange-400 transition text-sm font-semibold inline-flex items-center gap-1 mt-1">
              Privacy Policy
            </Link>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2 opacity-80">Contact & Newsletter</h4>
            <a href="mailto:info@amazonfastservices.com" className="text-white/60 hover:text-white transition text-sm mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]"></span> info@amazonfastservices.com
            </a>
            <div className="flex w-full mt-2 bg-black/20 rounded-md overflow-hidden border border-white/10 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-white placeholder-white/30 px-4 py-3 outline-none w-full text-sm"
              />
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium transition whitespace-nowrap border-l border-white/10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Animated Bottom Text */}
      <div
        className="relative z-10 w-full flex flex-col justify-center items-center mt-auto pb-6 pt-2 overflow-hidden select-none"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center w-full"
          animate={{
            filter: [
              "drop-shadow(0 0 16px rgba(255,107,53,0.6))",
              "drop-shadow(0 0 28px rgba(255,107,53,0.72))",
              "drop-shadow(0 0 16px rgba(255,107,53,0.6))",
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Row 1: AmazonFast */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0}
            className="flex items-center justify-center py-1"
          >
            {"AmazonFast".split("").map((char, index) => (
              <motion.span
                key={`brand-${index}`}
                variants={letterVariants}
                whileHover={{
                  y: -12,
                  scale: 1.1,
                  filter: "drop-shadow(0 0 25px rgba(255,107,53,0.85))",
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="text-[13vw] whitespace-nowrap leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ff5e28] to-[#ffaa5a] cursor-pointer inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Row 2: Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={1}
            className="flex items-center justify-center py-1 mt-1 md:mt-3"
          >
            {"Services".split("").map((char, index) => (
              <motion.span
                key={`service-${index}`}
                variants={letterVariants}
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  filter: "drop-shadow(0 0 25px rgba(255,107,53,0.85))",
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="text-[9.5vw] whitespace-nowrap leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ff5e28] to-[#ffaa5a] cursor-pointer inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </footer>
  );
}
