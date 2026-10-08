"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

interface AirwallexServiceUIProps {
  data: any;
}

export default function AirwallexServiceUI({ data }: AirwallexServiceUIProps) {
  const whatsappMessage = `Hi AmazonFast, I need help with ${data.title}`;
  const priceMatch = data?.tagline?.match(/\(\$([0-9,]+)\)/);
  const price = priceMatch ? priceMatch[1] : '100';

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden">
      
      {/* 1. TOP SECTION (Dark Theme with Orange Accents) */}
      <div className="relative bg-[#0a0a0a] text-white pt-32 pb-24 lg:pb-32 px-6 lg:px-12 border-b border-white/5">
        
        {/* Dynamic Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Navigation link back */}
        <div className="max-w-[1400px] mx-auto mb-12 relative z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#ff6b35] transition-colors text-sm font-semibold uppercase tracking-widest">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6">
              Global Banking <br/>
              <span className="text-[#ff6b35]">for Sellers</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-md mb-10 leading-relaxed">
              Create your Airwallex global business account for seamless international payments, multi-currency management, and unlimited virtual corporate cards.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <Link 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-sm tracking-wide transition-all flex items-center justify-center shadow-[0_5px_15px_rgba(255,107,53,0.2)]"
              >
                START YOUR SETUP
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-800 overflow-hidden relative">
                    <Image src="/profile.png" alt="Seller" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-700 overflow-hidden relative">
                    <Image src="/profile.png" alt="Seller" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-[#ff6b35] text-white flex items-center justify-center font-bold text-xs">
                    +
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-base leading-none mb-0.5">100+ Sellers</span>
                  <span className="text-white/40 text-xs font-medium">Successfully Verified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none opacity-50"></div>
            
            <Image 
              src="/airwallex-hero.png" 
              alt="Airwallex Premium Account" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* 2. BOTTOM SECTION (Continued Dark Theme) */}
      <div className="bg-[#111111] text-white py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden border-b border-white/5">
        
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center relative">
            <span className="text-[#ff6b35] font-bold text-sm mb-4 tracking-wider uppercase">Multi-Currency Mastery</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Global Accounts <br/> in Minutes.
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-sm leading-relaxed font-medium">
              Open local accounts in 11+ currencies instantly. Receive Amazon payouts without forced conversions and pay suppliers in their native currency.
            </p>
            <div>
              <Link 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm tracking-wide transition-all"
              >
                SPEAK TO AN EXPERT
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/3 h-[300px] sm:h-[400px] lg:h-[500px] relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image 
              src="/airwallex-hand.png" 
              alt="Airwallex Card Hand" 
              fill 
              className="object-cover object-center"
            />
          </div>

          {/* Right Stats Block */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center gap-16 lg:pl-12">
            
            {/* Feature 1 */}
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Market-Leading FX Rates</h3>
              <p className="text-white/50 text-sm mb-6 max-w-xs leading-relaxed font-medium">
                Save significantly on foreign exchange fees. Airwallex offers interbank rates with a minimal, transparent markup.
              </p>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-5xl mb-1 flex items-baseline">
                  0% <span className="text-[#ff6b35] text-5xl ml-1">.</span>
                </span>
                <span className="text-white/30 text-xs font-semibold uppercase tracking-wider">Local account details in USD, EUR, GBP, HKD, and more.</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Unlimited Borderless Cards</h3>
              <p className="text-white/50 text-sm mb-6 max-w-xs leading-relaxed font-medium">
                Create unlimited virtual Visa cards to pay for inventory, software, and ads with zero international transaction fees.
              </p>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-5xl mb-1 flex items-baseline">
                  Unlimited <span className="text-[#ff6b35] text-5xl ml-1">.</span>
                </span>
                <span className="text-white/30 text-xs font-semibold uppercase tracking-wider">Virtual card issuance</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. PRICING SECTION (The $100 Pay Now Section) */}
      {price && (
        <div id="pricing" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Side Text & Guarantees */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Setup Your <br/> <span className="text-[#ff6b35]">Airwallex Account?</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-lg">
                Don't let verification barriers hold you back. Let our experts handle the complex compliance process and get your Airwallex account fully operational.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                    <ShieldCheck className="text-[#ff6b35]" size={20} />
                  </div>
                  <h4 className="text-white font-bold">100% Verified</h4>
                  <p className="text-sm text-white/50">Accounts fully verified for Amazon Seller Central payouts.</p>
                </div>
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                    <TrendingUp className="text-[#ff6b35]" size={20} />
                  </div>
                  <h4 className="text-white font-bold">Fast Delivery</h4>
                  <p className="text-sm text-white/50">Get everything set up and ready to use in days, not weeks.</p>
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
                    <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Top Choice For Sellers</span>
                  </div>

                  {/* Inner Content */}
                  <div className="p-10 flex flex-col">
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">Professional Setup</h3>
                    
                    <div className="flex items-end gap-1 mb-4">
                      <span className="text-6xl font-black text-white leading-none tracking-tight">${price}</span>
                      <span className="text-white/50 text-base font-medium mb-1">/ one-time</span>
                    </div>
                    
                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                      Perfect for sellers that need speed, structure, and a premium setup for success.
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
