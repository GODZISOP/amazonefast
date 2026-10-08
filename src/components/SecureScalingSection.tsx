"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SecureScalingSection() {
  return (
    <section className="w-full bg-[#111111] py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Animated Card */}
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Glow Behind Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff6b35]/20 rounded-full blur-[100px]"></div>
          
          <motion.div
            initial={{ rotateX: 20, rotateY: -10, z: -100, opacity: 0 }}
            whileInView={{ rotateX: 10, rotateY: 15, z: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1 }}
            className="relative w-[360px] h-[220px] rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #1f1f1f 0%, #0a0a0a 100%)",
              border: "1px solid rgba(255,255,255,0.05)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Orange background accent card to match the image */}
            <div className="absolute -inset-4 bg-[#ff6b35] rounded-3xl -z-10 opacity-80" style={{ transform: "translateZ(-20px) rotate(-8deg)" }}></div>

            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-black text-xl">A</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide">AmazonFast</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="z-10">
              <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-600 mb-4 opacity-80"></div>
              <div className="flex gap-4 text-white/80 font-mono text-xl tracking-[0.2em] mb-2">
                <span>****</span>
                <span>****</span>
                <span>****</span>
              </div>
              <div className="text-white font-mono text-2xl tracking-[0.2em]">
                9000
              </div>
            </div>

            <div className="flex justify-between items-end z-10">
              <div>
                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">AmazonFast Service</p>
                <p className="text-white text-sm font-black tracking-widest uppercase mt-0.5">Amazon Seller</p>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-red-500 opacity-90 mix-blend-screen"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 -ml-4 opacity-90 mix-blend-screen"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} />
            Secure Payment Gateways
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Your Brand Deserves <br className="hidden md:block" />
            Safe and Simple Scaling
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Don't put financial freedom on hold. Partner with AmazonFast and start scaling your eCommerce empire today with our secure infrastructure.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#22c55e] hover:bg-[#1fb154] text-white font-bold py-4 px-8 rounded-xl transition flex items-center gap-2">
              Start a Project
              <ArrowRight size={18} />
            </button>
            <button className="bg-[#1a1a1a] hover:bg-[#222222] border border-white/10 text-white font-bold py-4 px-8 rounded-xl transition">
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
