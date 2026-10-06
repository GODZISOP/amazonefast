"use client";

import { motion } from "framer-motion";
import { Cloud, Code, Bot, Shield, TrendingUp } from "lucide-react";

export default function AnimatedGraphSection() {
  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0a0400] flex flex-col justify-center items-center overflow-hidden border-t border-white/5">
      
      {/* Background glow - Optimized with radial gradient instead of expensive CSS blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(0,0,0,0) 70%)' }}></div>
      
      {/* Top Text Section */}
      <div className="w-full flex flex-col items-center text-center mb-16 md:mb-20 px-6 relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.1] mb-6 uppercase"
        >
          Scaling <TrendingUp className="inline-block w-8 h-8 md:w-14 md:h-14 text-[#ff6b35] mx-1 md:mx-3 -mt-2 md:-mt-4" strokeWidth={3} /> Your Brand<br />
          Through <span className="text-[#ff6b35]">Amazon FBA</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/60 text-base md:text-xl max-w-3xl font-medium leading-relaxed"
        >
          We build intelligent, scalable, and optimized product listings to<br className="hidden md:block"/>
          drive international growth and transform your store into a market leader.
        </motion.p>
      </div>
      
      {/* Container for the graph (Responsive 16:9 aspect ratio space) */}
      <div className="relative w-full max-w-[1400px] h-[600px] md:h-[750px] flex justify-center items-center">
        
        {/* SVG Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet">
          
          <defs>
            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ff6b35" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.1" />
            </linearGradient>
            {/* Removed heavy SVG filter glow for performance */}
          </defs>

          {/* Lines to Top Left (Cloud) */}
          <g>
            <motion.path d="M 600 350 L 500 350 L 400 250 L 400 200" stroke="url(#lineGlow)" strokeWidth="3" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.8 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }} />
            <motion.path d="M 600 340 L 520 340 L 420 240 L 420 200" stroke="url(#lineGlow)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} />
          </g>

          {/* Lines to Bottom Left (AI) */}
          <g>
            <motion.path d="M 600 350 L 500 350 L 400 450 L 400 500" stroke="url(#lineGlow)" strokeWidth="3" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.8 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} />
            <motion.path d="M 600 360 L 520 360 L 420 460 L 420 500" stroke="url(#lineGlow)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} />
          </g>

          {/* Lines to Top Right (Code) */}
          <g>
            <motion.path d="M 600 350 L 700 350 L 800 250 L 800 200" stroke="url(#lineGlow)" strokeWidth="3" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.8 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }} />
            <motion.path d="M 600 340 L 680 340 L 780 240 L 780 200" stroke="url(#lineGlow)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} />
          </g>

          {/* Lines to Bottom Right (Shield) */}
          <g>
            <motion.path d="M 600 350 L 700 350 L 800 450 L 800 500" stroke="url(#lineGlow)" strokeWidth="3" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.8 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} />
            <motion.path d="M 600 360 L 680 360 L 780 460 L 780 500" stroke="url(#lineGlow)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} />
          </g>

          {/* Long Lines to Side Cards */}
          <motion.path d="M 400 350 L 250 350 L 250 300" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1, delay: 0.2 }} />
          <motion.path d="M 800 350 L 950 350 L 950 300" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1, delay: 0.2 }} />

        </svg>

        {/* Central Hexagon */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute z-30 flex flex-col items-center justify-center w-40 h-40 bg-[#0a0400] border-2 border-[#ff6b35] shadow-[0_0_60px_rgba(255,107,53,0.5)]" 
          style={{ clipPath: hexClipPath }}
        >
          <div className="absolute inset-0 bg-[#ff6b35]/20 animate-pulse"></div>
          <span className="text-[#ff6b35] text-5xl font-bold font-sans tracking-tighter">AFS</span>
          <span className="text-white text-[9px] font-bold tracking-widest mt-1 text-center px-1">AMAZON FAST SERVICE</span>
        </motion.div>

        {/* Outer Hexagons */}
        {/* Top Left - Cloud */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ type: "spring", delay: 0.1 }}
          className="absolute top-[18%] left-[28%] z-20 flex items-center justify-center w-20 h-20 bg-[#0a0400] border border-[#ff6b35]/50 shadow-[0_0_25px_rgba(255,107,53,0.3)]" 
          style={{ clipPath: hexClipPath }}
        >
          <Cloud className="text-[#ff6b35] w-8 h-8" />
        </motion.div>
        
        {/* Top Right - Code */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ type: "spring", delay: 0.1 }}
          className="absolute top-[18%] right-[28%] z-20 flex items-center justify-center w-20 h-20 bg-[#0a0400] border border-[#ff6b35]/50 shadow-[0_0_25px_rgba(255,107,53,0.3)]" 
          style={{ clipPath: hexClipPath }}
        >
          <Code className="text-[#ff6b35] w-8 h-8" />
        </motion.div>

        {/* Bottom Left - AI */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ type: "spring", delay: 0.2 }}
          className="absolute bottom-[18%] left-[28%] z-20 flex items-center justify-center w-20 h-20 bg-[#0a0400] border border-[#ff6b35]/50 shadow-[0_0_25px_rgba(255,107,53,0.3)]" 
          style={{ clipPath: hexClipPath }}
        >
          <Bot className="text-[#ff6b35] w-8 h-8" />
        </motion.div>

        {/* Bottom Right - Shield */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ type: "spring", delay: 0.2 }}
          className="absolute bottom-[18%] right-[28%] z-20 flex items-center justify-center w-20 h-20 bg-[#0a0400] border border-[#ff6b35]/50 shadow-[0_0_25px_rgba(255,107,53,0.3)]" 
          style={{ clipPath: hexClipPath }}
        >
          <Shield className="text-[#ff6b35] w-8 h-8" />
        </motion.div>

        {/* Left Card: Bar Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, margin: "100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-[2%] md:left-[5%] top-[45%] md:top-[50%] -translate-y-1/2 bg-[#0c0400] border border-[#ff6b35]/30 p-6 md:p-8 rounded-3xl w-[300px] md:w-[350px] shadow-2xl"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-white/60 text-sm md:text-base font-semibold uppercase tracking-wider mb-1">System Performance</h4>
              <p className="text-white text-xs md:text-sm text-white/50 mb-2">Uptime this month</p>
              <p className="text-white text-3xl md:text-4xl font-bold">99.99% <span className="text-[#ff6b35] text-base font-medium ml-2">+2.45%</span></p>
            </div>
            <TrendingUp className="text-[#ff6b35] w-6 h-6 md:w-8 md:h-8 mt-1" />
          </div>
          <div className="flex items-end justify-between h-24 md:h-32 gap-2 md:gap-3 mt-8">
             {[40, 70, 50, 90, 60, 80, 100].map((height, i) => (
               <motion.div 
                 key={i}
                 className="w-full bg-[#ff6b35] rounded-t-md opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                 initial={{ height: 0 }}
                 whileInView={{ height: `${height}%` }}
                 viewport={{ once: false }}
                 transition={{ duration: 0.6, delay: 0.2 + (i * 0.05), type: "spring", stiffness: 100 }}
               />
             ))}
          </div>
          <div className="flex justify-between text-xs md:text-sm text-white/40 mt-4 font-medium px-1">
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
          </div>
        </motion.div>

        {/* Right Card: Line Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, margin: "100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute right-[2%] md:right-[5%] top-[45%] md:top-[50%] -translate-y-1/2 bg-[#0c0400] border border-[#ff6b35]/30 p-6 md:p-8 rounded-3xl w-[300px] md:w-[350px] shadow-2xl"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-white/60 text-sm md:text-base font-semibold uppercase tracking-wider mb-1">Active Users</h4>
              <p className="text-white text-4xl md:text-5xl font-bold mt-2">24,780 <span className="text-[#ff6b35] text-base font-medium ml-2">+12.5%</span></p>
            </div>
            <TrendingUp className="text-[#ff6b35] w-6 h-6 md:w-8 md:h-8 mt-1" />
          </div>
          <div className="relative h-24 md:h-32 mt-8 w-full">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
              <motion.path
                d="M 0 35 L 15 25 L 30 30 L 45 15 L 60 20 L 75 10 L 90 15 L 100 0"
                fill="none"
                stroke="#ff6b35"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              />
              {[
                { cx: 15, cy: 25 },
                { cx: 30, cy: 30 },
                { cx: 45, cy: 15 },
                { cx: 60, cy: 20 },
                { cx: 75, cy: 10 },
                { cx: 90, cy: 15 },
                { cx: 100, cy: 0 }
              ].map((point, i) => (
                <motion.circle 
                  key={i} 
                  cx={point.cx} cy={point.cy} r={i === 6 ? "3" : "2.5"} 
                  fill={i === 6 ? "#fff" : "#ff6b35"} 
                  initial={{ scale: 0 }} 
                  whileInView={{ scale: 1 }} 
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + (i * 0.1) }} 
                />
              ))}
            </svg>
          </div>
          <div className="flex justify-between text-xs md:text-sm text-white/40 mt-4 font-medium">
             <span>May</span>
             <span>Jun</span>
             <span>Jul</span>
             <span>Aug</span>
             <span>Sep</span>
             <span>Oct</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
