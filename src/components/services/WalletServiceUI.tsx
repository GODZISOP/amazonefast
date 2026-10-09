import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Sparkles, Star, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

interface WalletServiceUIProps {
  data: any;
}

export default function WalletServiceUI({ data }: WalletServiceUIProps) {
  const whatsappMessage = `Hi AmazonFast, I need help with ${data.title}`;
  const priceMatch = data.tagline.match(/\(\$([0-9,]+)\)/);
  const price = priceMatch ? priceMatch[1] : null;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#ff6b35]/30 overflow-x-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b35]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              <div className="w-3 h-5 bg-[#ff6b35] rounded-full"></div>
              <div className="w-3 h-5 bg-[#ff6b35]/50 rounded-full"></div>
            </div>
            <span className="text-[#ff6b35] font-bold tracking-widest uppercase text-sm">Expert Payoneer Account Setup</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Secure Your Global Business with Professional <span className="text-[#ff6b35]">Payoneer Account Opening</span>
          </h1>
          <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
            Stop risking frozen funds and high conversion fees. We handle your entire Payo
            neer account creation, ensuring perfectly matched business details so you can receive Amazon payouts securely.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-sm transition-all shadow-[0_5px_20px_rgba(255,107,53,0.3)] hover:-translate-y-1"
            >
              Explore More <ArrowRight size={18} />
            </Link>
            <Link href="#pricing" className="text-white font-bold text-sm hover:text-[#ff6b35] underline underline-offset-4 decoration-2 decoration-[#ff6b35]/50 hover:decoration-[#ff6b35] transition-all">
              View All Benefits
            </Link>
          </div>
        </div>
        
        {/* Hero Image Collage */}
        <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full h-[400px] md:h-[500px] max-w-lg p-4 relative">
            <div className="col-span-1 h-full relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
              <Image src={data.image} alt="Service 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="col-span-1 h-[75%] mt-[25%] relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
              <Image src="/payoneer-dashboard.png" alt="Service 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            {/* Circular floating badge */}
            <div className="absolute bottom-16 -left-8 w-28 h-28 bg-[#111] border border-[#ff6b35]/30 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <div className="text-center">
                <span className="block text-[#ff6b35] font-black text-2xl">100%</span>
                <span className="block text-white/50 text-[10px] uppercase tracking-wider">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Section */}
      <div className="w-full bg-[#ff6b35] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-8">
          {[...data.benefits, ...data.benefits].map((benefit: string, i: number) => (
            <React.Fragment key={i}>
              <Star size={20} className="text-black fill-black shrink-0" />
              <span className="text-black font-extrabold text-xl uppercase tracking-wider">{benefit}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-5 bg-[#ff6b35] rounded-full"></div>
              <div className="w-3 h-5 bg-[#ff6b35]/50 rounded-full"></div>
            </div>
            <span className="text-[#ff6b35] font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Flawless Payoneer Account <br/> Opening & Verification
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Single Large Image (Decorated) */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative py-16 md:py-10">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff6b35]/30 blur-[100px] rounded-full z-0"></div>
            
            <div className="relative w-full max-w-[450px] z-10">
              <div className="transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-700 relative">
                <Image 
                  src="/payoneer-card.png" 
                  alt="Card Image" 
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,107,53,0.4)]" 
                />
              </div>
            </div>

            {/* Floating Badge 1: Secure */}
            <div className="absolute top-[5%] md:top-[15%] left-[0%] md:left-[5%] bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-[bounce_4s_infinite] z-20">
              <div className="w-10 h-10 rounded-full bg-[#ff6b35]/20 flex items-center justify-center">
                <Sparkles className="text-[#ff6b35]" size={20} />
              </div>
              <div>
                <p className="text-white text-sm font-bold">100% Secure</p>
                <p className="text-white/50 text-xs">Bank-grade</p>
              </div>
            </div>

            {/* Floating Badge 2: Verified */}
            <div className="absolute bottom-[5%] md:bottom-[10%] left-[5%] md:left-[10%] bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-[bounce_5s_infinite_reverse] z-20">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center relative">
                <div className="w-3 h-3 bg-green-500 rounded-full absolute"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full absolute animate-ping"></div>
              </div>
              <div>
                <p className="text-white text-sm font-bold">Verified</p>
                <p className="text-white/50 text-xs">Active Account</p>
              </div>
            </div>

            {/* Circular Arrow badge */}
            <div className="absolute top-1/2 right-4 md:-right-8 -translate-y-1/2 w-24 h-24 bg-[#111] border border-[#ff6b35]/30 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,107,53,0.2)] z-20 hover:scale-110 transition-transform cursor-pointer">
              <div className="w-20 h-20 border border-dashed border-[#ff6b35]/50 rounded-full flex items-center justify-center">
                <ArrowRight className="text-[#ff6b35]" size={24} />
              </div>
            </div>
          </div>

          {/* Right: Text and Progress Bars */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Opening a Payoneer account incorrectly is the #1 reason for frozen Amazon funds. We meticulously verify your LLC details, IDs, and utility bills before applying. Our expert setup guarantees instant approval, unlocks multi-currency receiving accounts, and ensures you get the absolute lowest conversion fees.
            </p>

            <div className="flex flex-col gap-8 mb-10">
              {/* Progress 1 */}
              <div>
                <div className="flex justify-between text-sm font-bold text-white mb-3">
                  <span>Application Success Rate</span>
                  <span>99%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full relative">
                  <div className="absolute top-0 left-0 h-full bg-[#ff6b35] rounded-full w-[99%]"></div>
                  <div className="absolute top-1/2 right-[1%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#ff6b35] rounded-full"></div>
                </div>
              </div>
              {/* Progress 2 */}
              <div>
                <div className="flex justify-between text-sm font-bold text-white mb-3">
                  <span>Setup Speed & Efficiency</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full relative">
                  <div className="absolute top-0 left-0 h-full bg-[#ff6b35] rounded-full w-[95%]"></div>
                  <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#ff6b35] rounded-full"></div>
                </div>
              </div>
              {/* Progress 3 */}
              <div>
                <div className="flex justify-between text-sm font-bold text-white mb-3">
                  <span>Fee Optimization & Savings</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full relative">
                  <div className="absolute top-0 left-0 h-full bg-[#ff6b35] rounded-full w-full"></div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#ff6b35] rounded-full"></div>
                </div>
              </div>
            </div>

            <div>
              <Link 
                href={`https://wa.me/923322568950?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#111] border border-white/10 hover:bg-[#222] text-white rounded-full font-bold text-sm transition-all"
              >
                About Us <ArrowRight size={18} className="text-[#ff6b35]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-white/10 py-12 bg-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-2">
              450+ <div className="flex gap-1"><div className="w-2 h-4 bg-[#ff6b35] rounded-full"></div><div className="w-2 h-4 bg-[#ff6b35]/50 rounded-full"></div></div>
            </h3>
            <p className="text-white/50 font-medium">Successful Setups</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-2">
              99% <div className="flex gap-1"><div className="w-2 h-4 bg-[#ff6b35] rounded-full"></div><div className="w-2 h-4 bg-[#ff6b35]/50 rounded-full"></div></div>
            </h3>
            <p className="text-white/50 font-medium">Approval Rate</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-2">
              10+ <div className="flex gap-1"><div className="w-2 h-4 bg-[#ff6b35] rounded-full"></div><div className="w-2 h-4 bg-[#ff6b35]/50 rounded-full"></div></div>
            </h3>
            <p className="text-white/50 font-medium">Supported Currencies</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-2">
              24-48h <div className="flex gap-1"><div className="w-2 h-4 bg-[#ff6b35] rounded-full"></div><div className="w-2 h-4 bg-[#ff6b35]/50 rounded-full"></div></div>
            </h3>
            <p className="text-white/50 font-medium">Setup Time</p>
          </div>
        </div>
      </div>

      {/* Pricing Section (The $100 Card) */}
      {price && (
        <div id="pricing" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 border-t border-white/5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Side Text & Guarantees */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Scale Your <br/> <span className="text-[#ff6b35]">Global Business?</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-lg">
                Don't let payment barriers hold you back. Let our experts handle the complex verification process and get your Payoneer account fully operational.
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
                    <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">E-Commerce Favorite</span>
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

      {/* Add Marquee animation style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
