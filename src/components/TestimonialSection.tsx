"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Brand owners who want to scale without complex logistics.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    isActive: false,
  },
  {
    text: "Established sellers looking for a reliable, borderless growth partner.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    isActive: true, // Orange background
  },
  {
    text: "Anyone tired of stagnant sales and risks of unoptimized listings.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    isActive: false,
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-4 flex justify-center items-center relative overflow-hidden">
      {/* Optional faint connecting line across the middle behind the cards */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#ff6b35]/20 -translate-y-1/2 z-0 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={index}
              className={`flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-[2rem] transition-all duration-300 ${
                item.isActive 
                  ? "bg-[#ff6b35] text-white shadow-[0_10px_40px_rgba(255,107,53,0.3)] scale-105 z-10" 
                  : "bg-[#111111] text-gray-300 hover:bg-[#151515]"
              }`}
            >
              <div className={`w-32 h-32 rounded-full overflow-hidden mb-6 border-4 ${item.isActive ? "border-orange-300/30" : "border-black/20"} shadow-xl`}>
                <Image
                  src={item.image}
                  alt="Testimonial Avatar"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <p className={`text-sm md:text-base font-semibold leading-relaxed max-w-[250px] ${item.isActive ? "text-white" : "text-gray-400"}`}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
