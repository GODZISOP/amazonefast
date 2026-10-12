"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  stagger?: number;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className = "",
  tag = "h2",
  stagger = 0.05,
  y = 20,
  delay = 0,
  duration = 0.4,
  once = false,
}: AnimatedTextProps) {
  const Component = motion[tag] as any;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -50px 0px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration, ease: "easeOut" },
            },
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </Component>
  );
}

export default AnimatedText;
