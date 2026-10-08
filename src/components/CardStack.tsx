"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const initialCards = [
  { id: 1, src: "/wise-card.png", alt: "Wise Card" },
  { id: 2, src: "/payoneer-card.png", alt: "Payoneer Card" },
  { id: 3, src: "/airwallex-card.png", alt: "Airwallex Card" }, // Fixed spaces in filename
  { id: 4, src: "/stripe-hero.png", alt: "Stripe Card" }
];

export default function CardStack() {
  const [cards, setCards] = useState(initialCards);

  const nextCard = () => {
    setCards((prev) => {
      const newArray = [...prev];
      const first = newArray.shift();
      newArray.push(first!);
      return newArray;
    });
  };

  return (
    <div 
      className="relative w-full max-w-[450px] aspect-[1.58/1] perspective-[1200px] cursor-pointer mx-auto"
      onClick={nextCard}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card, index) => {
          let rotate = 0;
          let x = 0;
          let y = 0;
          let scale = 1;
          let zIndex = 40 - index * 10;
          let opacity = 1;

          // Define stacking transforms
          if (index === 0) {
            rotate = -6;
            x = -10;
            y = 20;
            scale = 0.95;
          } else if (index === 1) {
            rotate = 6;
            x = 20;
            y = -10;
            scale = 0.9;
            opacity = 0.9;
          } else if (index === 2) {
            rotate = -10;
            x = -20;
            y = -30;
            scale = 0.85;
            opacity = 0.7;
          } else {
            rotate = 10;
            x = 10;
            y = -40;
            scale = 0.8;
            opacity = 0.5;
          }

          return (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ 
                rotate, 
                x, 
                y, 
                scale, 
                opacity,
                zIndex 
              }}
              exit={{ opacity: 0, scale: 0.5, x: 200 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden border border-white/10"
              style={{ transformOrigin: "center" }}
            >
              <Image 
                src={card.src} 
                alt={card.alt} 
                fill 
                className="object-cover object-center"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
