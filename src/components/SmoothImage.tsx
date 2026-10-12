"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SmoothImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  once?: boolean;
  sizes?: string;
}

export function SmoothImage({
  src,
  alt,
  aspectRatio = "aspect-[4/5]",
  className = "",
  priority = false,
  once = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SmoothImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72, y: 35 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1], // Fluid cubic-bezier
      }}
      suppressHydrationWarning
      className={`w-full ${aspectRatio} relative bg-[#111] border border-white/10 overflow-hidden rounded-2xl group shadow-[0_15px_50px_rgba(0,0,0,0.6)] transform-gpu isolate ${className}`}
    >
      {/* Ambient hover glow inside border */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

      {/* Elegant entrance shimmer line sweep */}
      <motion.div
        initial={{ x: "-150%" }}
        whileInView={{ x: "250%" }}
        viewport={{ once }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none z-20"
      />

      {/* Butter-smooth zoom and color reveal on hover */}
      <motion.div
        className="relative w-full h-full transform-gpu"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 ease-out transform-gpu"
        />
      </motion.div>
    </motion.div>
  );
}

export default SmoothImage;
