"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading time (e.g., waiting for assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 500); // 0.5 seconds delay before doors open

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 1, duration: 0.1 } }} // Give time for doors to slide out before unmounting
        >
          {/* Left Door */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-1/2 h-full bg-[#0a0400] border-r border-[#ff6b35]/20 shadow-[10px_0_50px_rgba(255,107,53,0.1)] flex justify-end items-center overflow-hidden"
          >
            {/* Split Logo Left Half */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute right-[-75px] sm:right-[-100px] w-[150px] sm:w-[200px] h-auto flex justify-center"
            >
              <div className="w-[150px] sm:w-[200px] overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }}>
                <Image src="/logo-new.png" alt="Logo" width={200} height={200} priority className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-1/2 h-full bg-[#0a0400] border-l border-[#ff6b35]/20 shadow-[-10px_0_50px_rgba(255,107,53,0.1)] flex justify-start items-center overflow-hidden"
          >
            {/* Split Logo Right Half */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[-75px] sm:left-[-100px] w-[150px] sm:w-[200px] h-auto flex justify-center"
            >
              <div className="w-[150px] sm:w-[200px] overflow-hidden" style={{ clipPath: "inset(0 0 0 50%)" }}>
                <Image src="/logo-new.png" alt="Logo" width={200} height={200} priority className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Glowing center line before opening */}
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#ff6b35] to-transparent shadow-[0_0_20px_#ff6b35]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
