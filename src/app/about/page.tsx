"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Users, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "@/components/AnimatedText";
import { SmoothImage } from "@/components/SmoothImage";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro Hero Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-pill", { y: 30, opacity: 0, duration: 1 })
        .from(".hero-desc", { y: 20, opacity: 0, duration: 1 }, "-=0.2");




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
        <div className="absolute inset-0 bg-[#ff6b35]/20 mix-blend-color z-10" />
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
            <AnimatedText
              text="Who We Are"
              className="text-[#ff6b35] text-sm font-semibold tracking-wide uppercase inline-block"
              tag="span"
              stagger={0.06}
            />
          </div>

          <div className="mb-6 flex flex-col items-center">
            <AnimatedText
              text="Start & Grow Your"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center"
              tag="h1"
              stagger={0.06}
            />
            <AnimatedText
              text="Amazon Business"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 text-center"
              tag="h1"
              stagger={0.06}
              delay={0.1}
            />
          </div>

          <AnimatedText
            text="Amazon Fast Services helps sellers start and grow on Amazon. From your seller account, bank and LLC to your brand, ads and daily account work, we handle it all so you can focus on selling."
            className="hero-desc text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed text-center"
            tag="p"
            stagger={0.02}
            y={12}
            delay={0.2}
          />
        </div>

        {/* Editorial Team Section */}
        <div className="relative w-full max-w-[1200px] mx-auto mb-32 pt-10">

          {/* Ambient Radial Center Glow (Dark Orange/Red) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(200,50,0,0.4)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0"></div>

          {/* Section Header */}
          <div className="relative z-10 mb-20">
            <AnimatedText
              text="About Us"
              className="text-6xl md:text-8xl font-normal tracking-tight uppercase mb-4"
              tag="h2"
              stagger={0.08}
            />
            <AnimatedText
              text="We joined forces to give people the start we wished we had at the beginning."
              className="text-white/40 text-xs md:text-sm uppercase tracking-widest"
              tag="p"
              stagger={0.03}
              y={10}
            />
          </div>

          {/* Service Block 1 - Left Image, Right Text */}
          <div className="service-block flex flex-col md:flex-row items-start relative w-full mb-32 z-10">
            {/* Image Box */}
            <div className="w-full md:w-[45%] flex flex-col items-start relative">
              <SmoothImage
                src="/srv_store_creation.jpg"
                alt="Amazon account management"
                aspectRatio="aspect-[4/5]"
              />
            </div>

            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[10%] left-[40%] w-[30%] h-[1px] bg-white/20 z-0"></div>

            {/* Text Box */}
            <div className="w-full md:w-[50%] mt-12 md:mt-0 md:ml-auto flex flex-col items-start md:items-end text-left md:text-right">
              <AnimatedText
                text="ACCOUNT MANAGEMENT"
                className="text-4xl md:text-5xl font-semibold uppercase tracking-wide mb-1 text-white"
                tag="h3"
                stagger={0.06}
              />
              <p className="text-[#ff6b35] text-sm md:text-base mb-12 md:mb-40 font-medium tracking-wider">
                WHOLESALE & PRIVATE LABEL, MANAGED FOR YOU
              </p>

              <AnimatedText
                text="We run your Amazon account day to day, including listings, orders and stock. We also find good products, create A+ Content and run PPC ads, so your sales grow slowly and safely."
                className="max-w-[350px] text-white/80 text-sm md:text-base leading-relaxed"
                tag="p"
                stagger={0.02}
                y={12}
              />
            </div>
          </div>

          {/* Service Block 2 - Left Text, Right Image */}
          <div className="service-block flex flex-col-reverse md:flex-row items-end relative w-full mb-32 z-10">
            {/* Text Box */}
            <div className="w-full md:w-[50%] mb-12 md:mb-0 flex flex-col items-start text-left mt-12 md:mt-0">
              <div className="mb-12 md:mb-40">
                <AnimatedText
                  text="SETUP & BRAND"
                  className="text-4xl md:text-5xl font-semibold uppercase tracking-wide mb-1 text-white"
                  tag="h3"
                  stagger={0.06}
                />
                <p className="text-[#ff6b35] text-sm md:text-base font-medium tracking-wider">
                  ACCOUNT, LLC, BANK & BRAND PROTECTION
                </p>
              </div>

              <AnimatedText
                text="We help you start the right way. We create your Amazon account, form your USA LLC, and set up your bank or wallet like Payoneer, Wise, Stripe or Chase. We also get your brand approved and registered."
                className="max-w-[350px] text-white/80 text-sm md:text-base leading-relaxed"
                tag="p"
                stagger={0.02}
                y={12}
              />
            </div>

            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[10%] left-[25%] w-[35%] h-[1px] bg-white/20 z-0"></div>

            {/* Image Box */}
            <div className="w-full md:w-[45%] flex flex-col items-end md:ml-auto relative">
              <SmoothImage
                src="/theme-gradient.png"
                alt="Account setup and brand registry"
                aspectRatio="aspect-[4/5]"
              />
            </div>
          </div>
        </div>

        {/* Cosmic Stats Section */}
        <div className="w-full max-w-[1200px] mx-auto mb-32">
          <SmoothImage
            src="/amazon-account-setup.png"
            alt="Amazon Fast Services Audience Stats"
            aspectRatio=""
            className="h-[450px] md:h-[550px] rounded-[30px] md:rounded-[40px] border border-[#ff3b30]/20 shadow-[0_0_80px_rgba(255,59,48,0.15)] bg-[#050000]"
            imageClassName="opacity-90"
          >
            {/* Top Left Text */}
            <div className="absolute top-10 left-6 md:top-14 md:left-10 max-w-[280px] md:max-w-[380px] z-20">
              <AnimatedText
                text="Get your products in front of people who are ready to buy"
                className="text-xl md:text-[26px] font-medium text-white/95 leading-snug tracking-wide"
                tag="h2"
                stagger={0.04}
              />
            </div>

            {/* Bottom Left Glassmorphism Card */}
            <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10 z-20 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 max-w-[260px] md:max-w-[300px] shadow-2xl">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mb-3 border border-white/5">
                <Users className="text-white/80 w-4 h-4" />
              </div>
              <AnimatedText
                text="With smart PPC ads and strong A+ Content, we bring buyers who really want to purchase, not just people who are looking around."
                className="text-white/70 text-[11px] md:text-xs leading-relaxed"
                tag="p"
                stagger={0.02}
                y={10}
              />
            </div>
          </SmoothImage>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="flex justify-center mb-12">
            <AnimatedText
              text="Our Core Principles"
              className="text-3xl font-bold text-center"
              tag="h3"
              stagger={0.06}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Transparency", desc: "No hidden fees. We tell you what we are doing and why, in simple words." },
              { title: "Staying Updated", desc: "Amazon changes its rules often. We keep up with them so your account stays safe." },
              { title: "Dedication", desc: "We treat your business like our own and work until you see results." }
            ].map((value, i) => (
              <div key={i} className="value-card bg-[#111] border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-colors">
                <CheckCircle2 className="text-[#ff6b35] mb-6 w-10 h-10" />
                <AnimatedText
                  text={value.title}
                  className="text-xl font-bold mb-3 text-white"
                  tag="h4"
                  stagger={0.06}
                />
                <AnimatedText
                  text={value.desc}
                  className="text-white/50 leading-relaxed"
                  tag="p"
                  stagger={0.02}
                  y={12}
                />
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
            <AnimatedText
              text="Ready to Start?"
              className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg text-center"
              tag="h2"
              stagger={0.06}
            />
            <AnimatedText
              text="Tell us where you are right now. We will help you with the next step, from account setup to growing your sales."
              className="text-white/95 text-lg md:text-xl mb-8 max-w-xl drop-shadow-md font-medium text-center"
              tag="p"
              stagger={0.02}
              y={12}
            />
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