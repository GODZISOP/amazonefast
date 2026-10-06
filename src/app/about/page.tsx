import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Users, Trophy, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative font-sans overflow-x-hidden bg-[#0a0a0a] text-white pt-32 pb-20 min-h-screen">
      
      {/* Background ambient glow */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-[#ff6b35]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[#ff6b35] text-sm font-semibold tracking-wide uppercase">Who We Are</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Pioneering Amazon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Success Stories</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Amazon Fast Services is a top-tier e-commerce marketing agency dedicated to scaling brands, automating FBA businesses, and delivering unmatched ROAS.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/20 to-transparent z-10 mix-blend-overlay"></div>
            <Image 
              src="/theme_gradient.png" 
              alt="Amazon Fast Services Team" 
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold">Your Growth Partner on the World's Biggest Marketplace</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              We don't just manage accounts; we build empires. With years of deep-rooted experience in the Amazon ecosystem, our team understands the nuances of the A9 algorithm, competitive PPC strategies, and conversion-optimized storefronts.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              Whether you are a startup looking to launch your first private label or an enterprise aiming to scale globally, we provide tailored, data-driven solutions that guarantee measurable results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3">
                <Trophy className="text-[#ff6b35] w-8 h-8" />
                <h4 className="text-xl font-semibold">Award-Winning</h4>
                <p className="text-white/50 text-sm">Recognized for top-tier Amazon brand management.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3">
                <Target className="text-[#ff6b35] w-8 h-8" />
                <h4 className="text-xl font-semibold">Data-Driven</h4>
                <p className="text-white/50 text-sm">Every decision is backed by analytics and market research.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Transparency", desc: "No hidden fees, no black-hat tactics. Just clear reporting and honest communication." },
              { title: "Innovation", desc: "We stay ahead of Amazon's ever-changing policies and algorithm updates." },
              { title: "Dedication", desc: "Your brand's success is our success. We treat your investment as our own." }
            ].map((value, i) => (
              <div key={i} className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-colors">
                <CheckCircle2 className="text-[#ff6b35] mb-6 w-10 h-10" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-white/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#e85c2b] rounded-3xl p-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Scale?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl">
            Let's discuss how we can skyrocket your Amazon sales and automate your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://calendly.com/amazonfastservice1/new-meeting-1" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
              Book a Call
              <ArrowUpRight size={20} />
            </Link>
            <Link href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)]">
              WhatsApp Message
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
