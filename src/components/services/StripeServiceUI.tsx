"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, LayoutDashboard, Wallet, TrendingUp, ShieldCheck } from "lucide-react";

interface StripeServiceUIProps {
  data: any;
}

export default function StripeServiceUI({ data }: StripeServiceUIProps) {
  const whatsappMessage = `Hi AmazonFast, I need help with ${data.title}`;
  const priceMatch = data?.tagline?.match(/\(\$([0-9,]+)\)/);
  const price = priceMatch ? priceMatch[1] : '100';

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Hero Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Professional <span className="text-[#ff6b35]">Stripe Account Opening</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
              Take control of your global business with a fully verified Stripe account—effortlessly. We handle compliance, Amazon integration, and address verification.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank"
                className="px-8 py-4 flex items-center gap-3 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-sm transition-all shadow-[0_10px_30px_rgba(255,107,53,0.2)] hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Talk to an Expert
              </Link>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 max-w-md">
              {['Market Insights', 'Invest', 'Grow', 'Plan', 'Budget', 'Expert Tips'].map((pill) => (
                <div key={pill} className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold text-white/60">
                  {pill}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Graphics */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-8 lg:mt-0">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ff6b35]/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Hero Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/10 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
              <Image 
                src="/stripe-hero.png" 
                alt="Stripe Dashboard and Card" 
                fill sizes="(max-width: 768px) 100vw, 50vw" 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>


      </div>

      {/* 2. FEATURES SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-12 lg:gap-8">
          <div className="max-w-2xl relative z-10">
            <div className="px-4 py-1.5 bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35] rounded-full text-xs font-bold inline-block mb-6">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Get your <span className="text-[#ff6b35]">Stripe Account</span> set up correctly and securely to streamline your <span className="text-white/70">global payments</span> — all in one platform.
            </h2>
          </div>
          
          <div className="flex flex-col items-end gap-8 relative z-10 w-full lg:w-auto">
            {/* Added Card on the right */}
            <div className="w-full max-w-[450px] lg:max-w-[500px] aspect-[1.58] relative transform rotate-6 hover:-rotate-2 transition-transform duration-500 hidden md:block">
               <Image 
                 src="/stripe-hero.png" 
                 alt="Stripe Business Card" 
                 fill sizes="(max-width: 768px) 100vw, 50vw" 
                 className="object-contain drop-shadow-[0_30px_60px_rgba(136,224,0,0.25)]"
               />
            </div>
            <p className="text-sm font-bold text-white/50 uppercase tracking-widest max-w-[200px] text-right">
              Everything you need. Nothing you don't.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[400px]">
          <div className="col-span-1 bg-[#111] rounded-[32px] overflow-hidden relative flex flex-col justify-end p-8 min-h-[300px] border border-white/5">
            <Image 
              src="/stripe-hero.png"
              alt="Wallet Feature"
              fill sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-bottom opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10"></div>
            <h3 className="text-white text-2xl font-bold relative z-20">Seamless Integration</h3>
          </div>
          
          <div className="col-span-1 bg-[#111] border border-white/5 hover:border-[#ff6b35]/30 rounded-[32px] p-8 relative overflow-hidden group min-h-[300px] transition-colors duration-500">
            <div className="absolute -right-10 -bottom-20 text-[250px] font-black text-white/5 group-hover:text-[#ff6b35]/10 transition-colors duration-500">1</div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Amazon Seller Ready</h3>
            <p className="text-white/60 font-medium relative z-10">
              Get bank details that perfectly match your Amazon Seller Central requirements to avoid payment bounces.
            </p>
          </div>
          
          <div className="col-span-1 bg-[#111] border border-white/5 hover:border-[#ff6b35]/30 rounded-[32px] p-8 relative overflow-hidden group min-h-[300px] transition-colors duration-500">
            <div className="absolute -right-10 -bottom-20 text-[250px] font-black text-white/5 group-hover:text-[#ff6b35]/10 transition-colors duration-500">2</div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Unified Dashboard</h3>
            <p className="text-white/60 font-medium relative z-10">
              View all your bank accounts, cards, and transactions in one intuitive interface.
            </p>
          </div>
          
          <div className="col-span-1 bg-[#111] border border-white/5 hover:border-[#ff6b35]/30 rounded-[32px] p-8 relative overflow-hidden group min-h-[300px] transition-colors duration-500">
            <div className="absolute -right-10 -bottom-20 text-[250px] font-black text-white/5 group-hover:text-[#ff6b35]/10 transition-colors duration-500">$</div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Global Processing</h3>
            <p className="text-white/60 font-medium relative z-10">
              Instantly process customer payments worldwide with advanced local acquiring network routing.
            </p>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION (3 Steps) */}
      <div className="bg-[#111] border-t border-white/5 py-24 rounded-t-[60px] mt-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          {/* Stripe Card Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-[1.58] relative transform -rotate-6 hover:rotate-0 transition-transform duration-700">
               <Image 
                 src="/stripe-hero.png" 
                 alt="Stripe Business Card" 
                 fill sizes="(max-width: 768px) 100vw, 50vw" 
                 className="object-contain drop-shadow-[0_30px_60px_rgba(136,224,0,0.3)]"
               />
            </div>
          </div>

          {/* Steps List */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
              Open Your Stripe Account <br/> in 3 Easy Steps
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="text-[#ff6b35]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Sign Up and Verify Documents</h4>
                  <p className="text-white/60 font-medium">We collect your business details and handle the rigorous verification process with Stripe securely.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="text-[#ff6b35]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Enable Payment Gateways</h4>
                  <p className="text-white/60 font-medium">We configure your checkout forms and integrate Stripe securely into your Shopify, WooCommerce, or custom site.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="text-[#ff6b35]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Start Processing Payments</h4>
                  <p className="text-white/60 font-medium">Monitor real-time payments, prevent chargebacks, and enjoy automated 2-day payouts to your bank.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. PRICING CARD SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 border-t border-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side Text & Guarantees */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Scale Your <br/> <span className="text-[#ff6b35]">Global Business?</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg">
              Don't let payment barriers hold you back. Let our experts handle the complex verification process and get your Stripe account fully operational.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                  <ShieldCheck className="text-[#ff6b35]" size={20} />
                </div>
                <h4 className="text-white font-bold">100% Verified</h4>
                <p className="text-sm text-white/50">Accounts fully verified for Amazon Seller Central.</p>
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
                  <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Payment Standard</span>
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

    </div>
  );
}
