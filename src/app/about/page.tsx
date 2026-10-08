"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Users, Trophy, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LightRays } from "@/components/LightRays";

gsap.registerPlugin(ScrollTrigger); import SplitText from "@/components/SplitText";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro Hero Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-pill", { y: 30, opacity: 0, duration: 1 })
        .from(".hero-desc", { y: 20, opacity: 0, duration: 1 }, "-=0.2");

      // Scroll Animations for Service Blocks
      gsap.utils.toArray(".service-block").forEach((block: any) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // Small-to-Big Scale Animation for Images
      gsap.utils.toArray(".scale-image").forEach((img: any) => {
        gsap.fromTo(img,
          { scale: 0.6, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Scroll Animation for Cosmic Stats Box
      gsap.from(".cosmic-stats", {
        scrollTrigger: {
          trigger: ".cosmic-stats",
          start: "top 75%",
        },
        scale: 0.95,
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Scroll Animation for Value Cards
      gsap.utils.toArray(".value-card").forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative font-sans overflow-x-hidden bg-[#0a0a0a] text-white pt-32 pb-20 min-h-screen">

      {/* Cinematic Globe Video Background for the Hero Section */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] md:h-[800px] pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse at top center, black 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at top center, black 0%, transparent 80%)"
        }}
      >
        <div className="absolute inset-0 bg-[#ff6b35]/20 mix-blend-color z-10" /> {/* Orange tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b35]/30 to-transparent mix-blend-overlay z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-80 translate-y-16 md:translate-y-32 scale-110"
          style={{ filter: "hue-rotate(140deg) saturate(1.5)" }}
          poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="hero-pill inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[#ff6b35] text-sm font-semibold tracking-wide uppercase">Who We Are</span>
          </div>

          <div className="mb-6 flex flex-col items-center">
            <SplitText
              text="Pioneering Amazon"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              delay={40}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
              tag="h1"
            />
            <SplitText
              text="Success Stories"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40"
              delay={40}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
              tag="h1"
            />
          </div>

          <p className="hero-desc text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Amazon Fast Services is a top-tier e-commerce marketing agency dedicated to scaling brands, automating FBA businesses, and delivering unmatched ROAS.
          </p>
        </div>

        {/* Editorial Team Section */}
        <div className="relative w-full max-w-[1200px] mx-auto mb-32 pt-10">

          {/* Ambient Radial Center Glow (Dark Orange/Red) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(200,50,0,0.4)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0"></div>

          {/* Section Header */}
          <div className="relative z-10 mb-20">
            <h2 className="text-6xl md:text-8xl font-normal tracking-tight uppercase mb-4">About Us</h2>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest">
              We joined forces to give people the start we wished we had at the beginning.
            </p>
          </div>

          {/* Service Block 1 - Left Image, Right Text */}
          <div className="service-block flex flex-col md:flex-row items-start relative w-full mb-32 z-10">
            {/* Image Box */}
            <div className="w-full md:w-[45%] flex flex-col items-start relative">
              <div className="w-full aspect-[4/5] relative bg-[#111] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/5 overflow-hidden rounded-xl">
                <Image
                  src="/srv_store_creation.jpg"
                  alt="Amazon FBA Wholesale"
                  fill
                  className="object-cover scale-image"
                />
              </div>
              <div className="flex gap-4 mt-8 ml-4">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition text-white/50 hover:text-white">&lt;</button>
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition text-white/50 hover:text-white">&gt;</button>
              </div>
            </div>

            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[10%] left-[40%] w-[30%] h-[1px] bg-white/20 z-0"></div>

            {/* Text Box */}
            <div className="w-full md:w-[50%] mt-12 md:mt-0 md:ml-auto flex flex-col items-start md:items-end text-left md:text-right">
              <SplitText
                text="FBA & WHOLESALE"
                className="text-4xl md:text-5xl font-semibold uppercase tracking-wide mb-1 text-white"
                delay={20}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                tag="h3"
              />
              <p className="text-[#ff6b35] text-sm md:text-base mb-12 md:mb-40 font-medium tracking-wider">END-TO-END ACCOUNT MANAGEMENT & SCALING</p>

              <p className="max-w-[350px] text-white/80 text-sm md:text-base leading-relaxed">
                We build sustainable, long-term wholesale and private label businesses. Our approach ensures stable supply chains, brand approvals, and consistent profitability without the usual roadblocks.
              </p>
            </div>
          </div>

          {/* Service Block 2 - Left Text, Right Image */}
          <div className="service-block flex flex-col-reverse md:flex-row items-end relative w-full mb-32 z-10">
            {/* Text Box */}
            <div className="w-full md:w-[50%] mb-12 md:mb-0 flex flex-col items-start text-left mt-12 md:mt-0">
              <div className="mb-12 md:mb-40">
                <SplitText
                  text="GLOBAL EXPANSION"
                  className="text-4xl md:text-5xl font-semibold uppercase tracking-wide mb-1 text-white"
                  delay={20}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  tag="h3"
                />
                <p className="text-[#ff6b35] text-sm md:text-base font-medium tracking-wider">USA LLC & UK LTD FORMATIONS</p>
              </div>

              <p className="max-w-[350px] text-white/80 text-sm md:text-base leading-relaxed">
                From company formation to global banking, we handle the complete legal and operational setup. We empower sellers globally to dominate international Amazon marketplaces seamlessly.
              </p>
            </div>

            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[10%] left-[25%] w-[35%] h-[1px] bg-white/20 z-0"></div>

            {/* Image Box */}
            <div className="w-full md:w-[45%] flex flex-col items-end md:ml-auto relative">
              <div className="w-full aspect-[4/5] relative bg-[#111] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/5 overflow-hidden rounded-xl">
                <Image
                  src="/theme_gradient.png"
                  alt="Global Expansion"
                  fill
                  className="object-cover scale-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cosmic Stats Section (Smaller Text, Placed Below Services) */}
        <div className="cosmic-stats relative w-full max-w-[1200px] mx-auto h-[450px] md:h-[550px] rounded-[30px] md:rounded-[40px] overflow-hidden mb-32 border border-[#ff3b30]/20 shadow-[0_0_80px_rgba(255,59,48,0.15)] bg-[#050000]">
          {/* Background Image (Orbs) */}
          <Image
            src="/image copy 3.png"
            alt="Amazon Fast Services Audience Stats"
            fill
            className="object-cover opacity-90"
          />

          {/* Top Left Text (Smaller) */}
          <div className="absolute top-10 left-6 md:top-14 md:left-10 max-w-[280px] md:max-w-[380px] z-20">
            <h2 className="text-xl md:text-[26px] font-medium text-white/95 leading-snug tracking-wide">
              Your brand will be seen by <br className="hidden md:block" /> an audience that is <span className="text-[#ff3b30] font-bold">ready to buy</span> even in tough times
            </h2>
          </div>

          {/* Bottom Left Glassmorphism Card (Smaller) */}
          <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10 z-20 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 max-w-[260px] md:max-w-[300px] shadow-2xl">
            <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mb-3 border border-white/5">
              <Users className="text-white/80 w-4 h-4" />
            </div>
            <p className="text-white/70 text-[11px] md:text-xs leading-relaxed">
              Our strategies ensure that the absolute majority of your audience are high-converting, premium buyers with strong purchasing power, rather than window shoppers.
            </p>
          </div>
        </div>
        {/* Core Values */}
        <div className="mb-24">
          <div className="flex justify-center mb-12">
            <SplitText
              text="Our Core Principles"
              className="text-3xl font-bold text-center"
              delay={30}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              tag="h3"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Transparency", desc: "No hidden fees, no black-hat tactics. Just clear reporting and honest communication." },
              { title: "Innovation", desc: "We stay ahead of Amazon's ever-changing policies and algorithm updates." },
              { title: "Dedication", desc: "Your brand's success is our success. We treat your investment as our own." }
            ].map((value, i) => (
              <div key={i} className="value-card bg-[#111] border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-colors">
                <CheckCircle2 className="text-[#ff6b35] mb-6 w-10 h-10" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-white/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl p-12 text-center flex flex-col items-center shadow-[0_20px_50px_rgba(255,107,53,0.3)]">
          {/* Rich Mesh-like Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#991b00] via-[#ff6b35] to-[#ffb347] z-0"></div>
          <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-gradient-to-bl from-[#ffaa00]/50 to-transparent blur-[80px] rounded-full z-0 pointer-events-none transform rotate-12"></div>
          <div className="absolute -bottom-[50%] -left-[20%] w-[80%] h-[150%] bg-gradient-to-tr from-[#661200]/60 to-transparent blur-[80px] rounded-full z-0 pointer-events-none transform -rotate-12"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Scale?</h2>
            <p className="text-white/95 text-lg md:text-xl mb-8 max-w-xl drop-shadow-md font-medium">
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
    </div>
  );
}
