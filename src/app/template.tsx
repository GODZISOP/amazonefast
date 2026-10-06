"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, scale: 0.92, y: 40, rotateX: 10, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Super smooth custom easing
      }}
      style={{ perspective: "1200px" }}
      className="flex-grow flex flex-col w-full h-full origin-top"
    >
      {children}
    </motion.div>
  );
}
