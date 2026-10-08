"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, Zap, Landmark, CreditCard, BarChart3 } from "lucide-react";

interface BOAServiceUIProps {
  data: any;
}

export default function BOAServiceUI({ data }: BOAServiceUIProps) {
  const whatsappMessage = `Hi AmazonFast, I need help with ${data.title}`;
  const priceMatch = data?.tagline?.match(/\(\$([0-9,]+)\)/);
  const price = priceMatch ? priceMatch[1] : '1,500';

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden text-white">
      
      {/* 1. HERO SECTION (Layout: Text Left, Image Center, Stats Right) */}
      <div className="relative pt-32 pb-24 lg:pb-32 px-6 lg:px-12 border-b border-white/5">
        
        {/* Dynamic Background Glow - Bottom Center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6b35]/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Navigation link back */}
        <div className="max-w-[1400px] mx-auto mb-12 relative z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#ff6b35] transition-colors text-sm font-semibold uppercase tracking-widest">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              The ultimate <br/>
              <span className="text-[#ff6b35]">US banking</span><br/>
              solution.
            </h1>
            
            <p className="text-white/60 text-lg mb-10 leading-relaxed mx-auto lg:mx-0 max-w-sm">
              Open your physical US Bank of America business account remotely. Essential infrastructure for high-volume Amazon sellers.
            </p>
            
            <div>
              <Link 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_5px_20px_rgba(255,107,53,0.25)]"
              >
                Start Setup
              </Link>
            </div>
          </div>

          {/* Center Image Block (col-span-5) */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[550px] lg:h-[700px] flex items-center justify-center">
            <div className="relative w-full h-full drop-shadow-[0_0_50px_rgba(255,107,53,0.15)] rounded-[2.5rem] overflow-hidden">
              <Image 
                src="/boa-hero.png" 
                alt="Bank of America App" 
                fill 
                className="object-contain object-center scale-110"
                priority
              />
            </div>
          </div>

          {/* Right Stats Block (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-12 text-center lg:text-left">
            <div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                It's time to secure your financial infrastructure. Join top-tier sellers today.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-[#ff6b35]">★</span>
                <span className="font-bold">5.0</span>
                <span className="text-white/50 text-sm">Verified Service</span>
                <div className="w-6 h-6 rounded-full bg-gray-700 ml-2 overflow-hidden border border-[#ff6b35]">
                  <Image src="/profile.png" alt="User" width={24} height={24} className="object-cover" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-[#ff6b35] mb-1">100+</h3>
              <p className="text-white/50 text-sm">Active Amazon Sellers</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-[#ff6b35] mb-1">100%</h3>
              <p className="text-white/50 text-sm">Compliance Guarantee</p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. FEATURE GRID SECTION (Layout: Text Left, 2x2 Grid Right) */}
      <div className="bg-[#0f0f0f] py-24 lg:py-32 px-6 lg:px-12 relative border-b border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/3 flex flex-col lg:sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              One account.<br/>
              Total control.
            </h2>
            <p className="text-white/50 text-base mb-10 leading-relaxed max-w-sm">
              Our tier-1 physical banking solution offers a seamless and highly secure platform for making vendor payments, managing Amazon payouts, and monitoring all business transactions.
            </p>

          </div>

          {/* Right 2x2 Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#151515] border border-white/5 p-8 rounded-3xl hover:border-[#ff6b35]/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-6 text-[#ff6b35] group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Transfers</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Make instant wire transfers and ACH payments anytime, anywhere, ensuring your suppliers are paid without delay.
              </p>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#ff6b35]/20 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/10 blur-3xl rounded-full"></div>
              <div className="w-12 h-12 rounded-full bg-[#ff6b35] flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform relative z-10">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white relative z-10">USD Savings</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                A reliable and fully compliant physical bank account to safely store your USD payouts directly from Amazon.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151515] border border-white/5 p-8 rounded-3xl hover:border-[#ff6b35]/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-6 text-[#ff6b35] group-hover:scale-110 transition-transform">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Cards</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Receive physical and virtual Visa/Mastercard corporate cards to manage ad spend seamlessly.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#151515] border border-white/5 p-8 rounded-3xl hover:border-[#ff6b35]/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-6 text-[#ff6b35] group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Limits</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Avoid the rolling reserves and withdrawal restrictions associated with virtual digital wallets.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. SPLIT SECTION (Layout: Image Left, Text Right) */}
      <div className="bg-[#0a0a0a] py-24 lg:py-32 px-6 lg:px-12 relative border-b border-white/5 overflow-hidden">
        
        {/* Background Accent */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b35]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Image (Hand/Dashboard) */}
          <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[550px]">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 bg-[#111]">
              <Image 
                src="/boa-hand.png" 
                alt="Bank of America Corporate Card" 
                fill 
                className="object-cover object-center"
              />
            </div>
            {/* Decorative floating element to match layout style */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff6b35] rounded-full blur-[80px] opacity-30"></div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[#ff6b35] font-bold text-sm mb-4 tracking-wider uppercase">Easy, safe, and hassle-free.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Instantly receive & <br/> manage payouts.
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-md leading-relaxed">
              Connect your US Bank of America account directly to Amazon Seller Central. Say goodbye to waiting for third-party payment gateways to process your hard-earned funds.
            </p>
            <div>
              <Link 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex px-8 py-4 bg-[#1a1a1a] hover:bg-[#222] text-white border border-white/10 rounded-full font-bold text-sm tracking-wide transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 4. PRICING SECTION (Standard AmazonFast Pricing Block) */}
      {price && (
        <div id="pricing" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Side Text & Guarantees */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Setup Your <br/> <span className="text-[#ff6b35]">Bank of America Account?</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-lg">
                Setting up a physical USA bank account typically requires a US visit. We handle the entire formation and banking process remotely for you.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                    <ShieldCheck className="text-[#ff6b35]" size={20} />
                  </div>
                  <h4 className="text-white font-bold">LLC Included</h4>
                  <p className="text-sm text-white/50">Full US corporate structuring to support your physical banking.</p>
                </div>
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                    <TrendingUp className="text-[#ff6b35]" size={20} />
                  </div>
                  <h4 className="text-white font-bold">100% Remote</h4>
                  <p className="text-sm text-white/50">You do not need to travel to the United States. We manage the branch relationships.</p>
                </div>
              </div>
            </div>

            {/* Right Side Pricing Card */}
            <div className="w-full lg:w-[450px]">
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b35]/50 to-[#ff6b35]/10 blur-2xl opacity-50 rounded-[2.5rem] pointer-events-none"></div>
                
                <div className="bg-[#111111] rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10">
                  {/* Top Badge Area */}
                  <div className="bg-gradient-to-r from-[#ff6b35]/20 to-[#ff6b35]/5 py-3 flex items-center justify-center gap-1.5 border-b border-[#ff6b35]/20">
                    <Sparkles size={14} className="text-[#ff6b35]" />
                    <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Premium Elite Package</span>
                  </div>

                  {/* Inner Content */}
                  <div className="p-10 flex flex-col">
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">Physical Bank Setup</h3>
                    
                    <div className="flex items-end gap-1 mb-4">
                      <span className="text-6xl font-black text-white leading-none tracking-tight">${price}</span>
                      <span className="text-white/50 text-base font-medium mb-1">/ one-time</span>
                    </div>
                    
                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                      The ultimate banking solution for high-tier Amazon sellers and global dropshippers.
                    </p>
                    
                    <Link 
                      href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-base transition-all shadow-[0_5px_15px_rgba(255,107,53,0.2)] hover:shadow-[0_10px_30px_rgba(255,107,53,0.4)] flex items-center justify-center gap-2 mb-8 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                      Pay Now
                    </Link>

                    <div className="flex flex-col gap-4">
                      {data?.benefits?.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#ff6b35] shrink-0 mt-0.5" size={18} />
                          <span className="text-white/80 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
