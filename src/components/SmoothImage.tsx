"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface SmoothImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  once?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}

export function SmoothImage({
  src,
  alt,
  aspectRatio = "aspect-[4/5]",
  className = "",
  imageClassName = "",
  priority = false,
  once = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  children,
}: SmoothImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress as the image passes through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Inertia spring physics for buttery scroll movement without jank
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Pure on-scroll parallax: image glides smoothly inside the frame as you scroll
  const imageY = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.14, 1.05, 1.14]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      suppressHydrationWarning
      className={`w-full ${aspectRatio} relative bg-[#121212] border border-white/10 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* On-scroll light beam sweep */}
      <motion.div
        initial={{ x: "-120%", opacity: 0 }}
        whileInView={{ x: "220%", opacity: [0, 0.7, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none z-20"
      />

      {/* Pure on-scroll parallax image container */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="relative w-full h-full will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>

      {/* Subtle depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />

      {/* Optional Children overlay */}
      {children && (
        <div className="absolute inset-0 z-20 pointer-events-auto">
          {children}
        </div>
      )}
    </motion.div>
  );
}

export default SmoothImage;
