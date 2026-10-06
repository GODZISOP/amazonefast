"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Wifi, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { RealEarth } from "../components/RealEarth";
import AnimatedGraphSection from "../components/AnimatedGraphSection";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const rawLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useSpring(rawLineHeight, { stiffness: 60, damping: 20 });

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  // Generate 40 random moving stars (White and Orange)
  const [stars, setStars] = useState<any[]>([]);
  useEffect(() => {
    setStars(Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * -10,
      isOrange: Math.random() > 0.5
    })));
  }, []);

  return (
    <div className="relative font-sans overflow-x-hidden bg-[#0a0a0a]">

      <style>{`
        @keyframes drift-up {
          0% { transform: translateY(110vh) scale(0.5); opacity: 0; }
          20% { opacity: 1; scale: 1; }
          80% { opacity: 1; scale: 1; }
          100% { transform: translateY(-20vh) scale(0.5); opacity: 0; }
        }
        .moving-star {
          position: absolute;
          border-radius: 50%;
          animation: drift-up linear infinite;
          z-index: 0;
        }
      `}</style>

      {/* Hero Section Container */}
      <section
        className="relative w-full min-h-[100vh] flex flex-col overflow-hidden bg-black perspective-[1000px]"
        onMouseMove={handleMouseMove}
      >

        {/* Starry Space Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>

        {/* Animated Moving Stars (White & Orange) */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="moving-star"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              backgroundColor: star.isOrange ? '#ff6b35' : '#ffffff',
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 3}px ${star.isOrange ? '#ff6b35' : '#ffffff'}`
            }}
          />
        ))}

        {/* Background Image requested by user */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#3a0d00] to-black">
          <Image
            src="/image copy.png"
            alt="Hero Background"
            fill
            priority
            fetchPriority="high"
            unoptimized
            className="object-cover object-bottom opacity-90 mix-blend-screen"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>
        </div>

        {/* Main Content Layout (Center/Lower) */}
        <main className="relative z-20 w-full h-full flex-grow max-w-[1000px] mx-auto px-6 pt-12 md:pt-20 pb-20 md:pb-32 flex flex-col justify-center items-center text-center -mt-20 md:-mt-32">

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-white"
          >
            {/* First Line with Gradient Animation */}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              className="flex flex-wrap justify-center gap-x-3 gap-y-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ff6b35] to-white bg-[length:200%_auto]"
            >
              {["Scale", "Your", "Amazon", "Brand"].map((word, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 15, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } }}>
                  {word}
                </motion.span>
              ))}
            </motion.span>

            <div className="w-full h-0"></div>

            {/* Second Line without Gradient */}
            {["Without", "Borders"].map((word, i) => (
              <motion.span key={`l2-${i}`} variants={{ hidden: { opacity: 0, y: 15, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } }}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-white/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-medium"
          >
            Build and manage international sales with optimized listings, automated PPC campaigns, and seamless FBA logistics from a single platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/about" className="bg-white text-black px-8 py-4 rounded-full font-bold text-[15px] hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-block">
              Start Scaling Today
            </Link>
          </motion.div>

          {/* Floating Glassmorphism Elements (Amazon Focus) */}

          {/* Left Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block absolute left-[-5%] xl:left-[-15%] top-[65%] w-[320px] bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-left shadow-2xl"
          >
            <h4 className="text-white font-bold mb-2">Automated PPC Optimization</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Discover highly profitable keywords through intelligent matching based on search volume and competition worldwide today.
            </p>
          </motion.div>

          {/* Right Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block absolute right-[-5%] xl:right-[-15%] top-[70%] w-[320px] bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-left shadow-2xl"
          >
            <h4 className="text-white font-bold mb-2">Global Market Access</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Connect with millions of buyers worldwide while expanding your product offerings across multiple Amazon marketplaces.
            </p>
          </motion.div>

          {/* Animated Connecting Lines (Network Loop) */}
          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none hidden md:block"
            style={{ filter: "drop-shadow(0 0 10px rgba(255,107,53,1))" }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Dim background track connecting all nodes */}
            <motion.path
              d="M 20 60 L 30 75 L 70 85 L 75 63"
              fill="none"
              stroke="rgba(255,107,53,0.2)"
              strokeWidth="1"
              strokeDasharray="1 1"
              vectorEffect="non-scaling-stroke"
            />
            {/* Bright moving pulse connecting them endlessly */}
            <motion.path

d="M 20 60 L 30 75 L 70 85 L 75 63"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0.1, pathOffset: 0 }}
              animate={{ pathOffset: 1 }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity
              }}
            />
          </svg>

          {/* Floating Nodes (simulating the map locations) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "backOut" }}
            className="hidden md:flex absolute top-[60%] left-[20%] items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="w-4 h-4 rounded-full bg-cover" style={{ backgroundImage: "url('https://flagcdn.com/w20/gb.png')" }}></span>
            <span className="text-white text-xs font-semibold">UK Market</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
            className="hidden md:flex absolute top-[63%] right-[25%] items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="w-4 h-4 rounded-full bg-cover" style={{ backgroundImage: "url('https://flagcdn.com/w20/de.png')" }}></span>
            <span className="text-white text-xs font-semibold">Germany</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7, ease: "backOut" }}
            className="hidden md:flex absolute top-[75%] left-[30%] items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="w-4 h-4 rounded-full bg-cover" style={{ backgroundImage: "url('https://flagcdn.com/w20/us.png')" }}></span>
            <span className="text-white text-xs font-semibold">United States</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "backOut" }}
            className="hidden md:flex absolute top-[85%] right-[30%] items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="w-4 h-4 rounded-full bg-cover" style={{ backgroundImage: "url('https://flagcdn.com/w20/nl.png')" }}></span>
            <span className="text-white text-xs font-semibold">Netherlands</span>
          </motion.div>

        </main>
      </section>

      {/* New Animated Graph Section (Matching provided image with Orange theme) */}
      <AnimatedGraphSection />

      {/* Second Section: Perfect Full Cover Image with Scroll Text */}
      <section 
        ref={sectionRef} 
        className="relative w-full h-[85vh] md:h-screen flex justify-center items-center overflow-hidden bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/section2-highres.jpg')" }}
      >
        {/* Typography & Scroll Reveal Container */}
        <div className="relative z-20 max-w-[1600px] mx-auto w-full px-6 sm:px-12 pointer-events-none -mt-24 lg:-mt-40">

          {/* Top Section (Huge Headline & Paragraph) */}
          <div className="flex flex-col md:flex-row justify-between items-start pt-6 sm:pt-20 gap-4 sm:gap-8">

            {/* Top Left: Massive Bold Headline */}
            <div className="w-full md:w-[45%] lg:w-[40%]">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -100px 0px" }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1] tracking-[-0.04em] flex flex-wrap gap-x-2 sm:gap-x-[14px] gap-y-1 sm:gap-y-2"
              >
                {"The future of seamless Amazon scaling".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { color: "rgba(255, 255, 255, 0.2)" }, visible: { color: "rgba(245, 245, 245, 1)", transition: { duration: 0.4 } } }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            {/* Top Right: Medium Description */}
            <div className="w-full md:w-[35%] lg:w-[30%] pt-2 md:pt-4">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } } }}
                className="text-lg sm:text-2xl lg:text-[1.65rem] leading-snug font-medium flex flex-wrap gap-x-1 sm:gap-x-2 gap-y-1"
              >
                {"Redefines what Amazon scaling can be—transforming passive sales into exponential, automated growth.".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { color: "rgba(255, 255, 255, 0.2)" }, visible: { color: "rgba(229, 229, 229, 1)", transition: { duration: 0.4 } } }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>

          </div>

          {/* Scattered Meta Details (Desktop Only - Just like the reference) */}
          <div className="absolute top-[45%] left-12 hidden lg:block">
            <p className="text-[13px] font-medium text-white/50 mb-1 leading-tight tracking-wide">Project Type:</p>
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-tight tracking-wide">E-Commerce</p>
          </div>

          <div className="absolute top-[35%] right-12 hidden lg:block text-right">
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-tight tracking-wide">Oct 05</p>
            <p className="text-[13px] font-medium text-white/50 leading-tight tracking-wide">2026</p>
          </div>

          <div className="absolute bottom-[20%] right-12 hidden lg:block text-right">
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-[1.6] tracking-wide">PPC Strategy</p>
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-[1.6] tracking-wide">FBA Logistics</p>
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-[1.6] tracking-wide">Brand Design</p>
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-[1.6] tracking-wide">Listing SEO</p>
          </div>

          <div className="absolute bottom-[10%] left-12 hidden lg:block">
            <p className="text-[13px] font-medium text-white/50 mb-1 leading-tight tracking-wide">Location:</p>
            <p className="text-[13px] font-medium text-[#e5e5e5] leading-tight tracking-wide">Global, USA</p>
          </div>

        </div>

      </section>

      {/* Services Section */}
      <section className="relative w-full py-24 lg:py-32 bg-[#0a0a0a] px-6 sm:px-12 border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "0px 0px -100px 0px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight mb-6 leading-[1.1] flex flex-wrap">
                {["Elevate", "Your"].map((word, i) => (
                  <motion.span key={`h1-${i}`} variants={{ hidden: { color: "rgba(255, 255, 255, 0.2)" }, visible: { color: "rgba(255, 255, 255, 1)", transition: { duration: 0.5 } } }} className="mr-4">
                    {word}
                  </motion.span>
                ))}
                <div className="w-full h-0"></div>
                {["eCommerce", "Game"].map((word, i) => (
                  <motion.span key={`h2-${i}`} variants={{ hidden: { color: "rgba(255, 255, 255, 0.2)" }, visible: { color: "rgba(255, 255, 255, 1)", transition: { duration: 0.5 } } }} className="mr-4">
                    {word}
                  </motion.span>
                ))}
              </h2>

              <p className="text-lg md:text-xl max-w-2xl leading-relaxed flex flex-wrap">
                {"Utilize Amazon Fast Service to revolutionize your online store. Our state-of-the-art solutions help you focus on what really matters—building your brand.".split(" ").map((word, i) => (
                  <motion.span key={`p-${i}`} variants={{ hidden: { color: "rgba(255, 255, 255, 0.2)" }, visible: { color: "rgba(255, 255, 255, 0.6)", transition: { duration: 0.5 } } }} className="mr-1.5">
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>
            <Link href="/services" className="flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black hover:bg-[#ff6b35] hover:text-white transition-colors duration-300 w-fit group">
              <span className="font-semibold">View All Services</span>
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </div>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto mt-16 md:mt-24 pl-2 sm:pl-0">
            {/* Static dim background line */}
            <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-[#ff6b35]/10"></div>

            {/* Scroll-driven glowing orange line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[30px] top-0 w-[2px] bg-gradient-to-b from-[#ff6b35] via-[#ff6b35] to-transparent origin-top"
            ></motion.div>

            {[
              { title: "Amazon FBA Automation", desc: "Completely hands-off FBA management, from product sourcing to fulfillment, ensuring passive income growth." },
              { title: "Amazon PPC Advertising", desc: "Data-driven ad campaigns designed to minimize ACoS and maximize your revenue potential and sales velocity." },
              { title: "Product Hunting & Sourcing", desc: "Extensive market research to identify winning, high-margin products with low competition for your brand." },
              { title: "Amazon Store Creation", desc: "Expertly crafted, highly-converting storefront designs that establish a premium brand identity on Amazon." },
              { title: "A+ Content & EBC", desc: "Premium, visually engaging Enhanced Brand Content that boosts conversion rates and builds customer trust." },
              { title: "Listing SEO & Optimization", desc: "Strategic keyword placement and compelling copywriting to secure top organic rankings on Amazon search." },
              { title: "Account Reinstatement", desc: "Professional appeal services and tailored plans of action to recover suspended seller accounts securely." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial="dim"
                whileInView="glowing"
                viewport={{ margin: "-40% 0px -40% 0px" }}
                variants={{
                  dim: { opacity: 0.5, scale: 0.98 },
                  glowing: { opacity: 1, scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                className="relative flex items-center gap-4 sm:gap-8 mb-10 last:mb-0 cursor-pointer"
              >
                {/* Number Circle with Glow */}
                <motion.div
                  variants={{
                    dim: { borderColor: "rgba(255,107,53,0.2)", boxShadow: "0 0 0px rgba(255,107,53,0)" },
                    glowing: { borderColor: "rgba(255,107,53,1)", boxShadow: "0 0 25px rgba(255,107,53,0.6)" }
                  }}
                  className="relative z-10 shrink-0 w-[60px] h-[60px] rounded-full bg-[#0a0a0a] border-[3px] flex items-center justify-center transition-colors duration-300"
                >
                  <motion.span 
                    variants={{
                      dim: { color: "rgba(255,255,255,0.5)" },
                      glowing: { color: "rgba(255,107,53,1)" }
                    }}
                    className="font-bold text-xl tracking-wide"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </motion.span>
                </motion.div>

                {/* Horizontal connection line */}
                <motion.div
                  variants={{
                    dim: { scaleX: 0, opacity: 0 },
                    glowing: { scaleX: 1, opacity: 1 }
                  }}
                  style={{ transformOrigin: "left" }}
                  className="hidden sm:block absolute left-[60px] w-8 h-[2px] bg-gradient-to-r from-[#ff6b35] to-transparent"
                ></motion.div>

                {/* Content Box */}
                <motion.div
                  variants={{
                    dim: { borderColor: "rgba(255,255,255,0.05)", boxShadow: "0 0 0px rgba(255,107,53,0)" },
                    glowing: { borderColor: "rgba(255,107,53,0.6)", boxShadow: "0 0 40px rgba(255,107,53,0.15)" }
                  }}
                  className="flex-1 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border-[1px] p-6 rounded-3xl relative overflow-hidden"
                >
                  {/* Subtle corner decorations like in the image */}
                  <motion.div
                    variants={{ dim: { borderColor: "rgba(255,255,255,0.1)" }, glowing: { borderColor: "rgba(255,107,53,1)" } }}
                    className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300"
                  ></motion.div>
                  <motion.div
                    variants={{ dim: { borderColor: "rgba(255,255,255,0.1)" }, glowing: { borderColor: "rgba(255,107,53,1)" } }}
                    className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300"
                  ></motion.div>

                  {/* Orange ambient glow inside box when active */}
                  <motion.div
                    variants={{ dim: { opacity: 0 }, glowing: { opacity: 1 } }}
                    className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#ff6b35]/20 blur-[50px] rounded-full pointer-events-none"
                  ></motion.div>

                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <Sparkles className="text-[#ff6b35]" size={20} />
                    <motion.h3
                      variants={{ dim: { color: "#ffffff" }, glowing: { color: "#ff6b35" } }}
                      className="text-xl sm:text-2xl font-bold uppercase tracking-wide transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h3>
                  </div>
                  <p className="text-white/50 text-base leading-relaxed relative z-10 pl-8">{service.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / VCard Section (Modeled after user's screenshot) */}
      <section className="relative w-full py-24 lg:py-32 bg-[#000000] px-6 sm:px-12 border-t border-white/[0.05] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Avatars Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px", amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 relative"
          >
            {/* Connector Line (Desktop) */}
            <motion.div
              variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 0.5, transition: { duration: 1.2, ease: "easeInOut" } } }}
              style={{ transformOrigin: "center" }}
              className="hidden md:block absolute top-[50%] left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent z-0"
            ></motion.div>

            {[
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", text: "Brand owners who want to scale without complex logistics.", active: false, dir: -1 },
              { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", text: "Established sellers looking for a reliable, borderless growth partner.", active: true, dir: 0 },
              { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80", text: "Anyone tired of stagnant sales and risks of unoptimized listings.", active: false, dir: 1 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: item.active ? 0 : 30, scale: item.active ? 0.9 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: item.active ? 0.4 : 0.5,
                  delay: item.active ? 0 : 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: false, margin: '-20px' }}
                className={`relative z-10 rounded-[2rem] overflow-hidden group ${item.active ? 'bg-[#ff6b35]' : 'bg-[#0a0a0a] border border-white/[0.05]'} p-8 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2 shadow-2xl`}
              >
                {/* Sliding shine for active card */}
                {item.active && (
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: '100%', opacity: [0, 0.6, 0] }}
                    transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 pointer-events-none"
                  />
                )}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-black/20 relative z-10">
                  <img src={item.img} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <p className={`text-sm leading-relaxed font-medium relative z-10 ${item.active ? 'text-white' : 'text-white/60'}`}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Row (Community & Graphic) */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                >
                  Join the Trusted<br />AmazonFast Community
                </motion.h2>
              </div>
              <div className="mb-10 max-w-md">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white/60 text-lg leading-relaxed"
                >
                  We are just beginning our journey, and every new brand matters to us. Join others who have already chosen growth, transparency, and safety.
                </motion.p>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-[#ff6b35]/30 transition duration-500">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b35] flex items-center justify-center shrink-0 shadow-lg shadow-[#ff6b35]/20">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Partner Program</h4>
                  <p className="text-white/50 text-sm leading-relaxed">Invite other sellers and earn up to 5% of their initial project volume in real-time.</p>
                </div>
              </div>
            </div>

            {/* Right: Glowing Animated Graph (Moved here from above) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end py-8">
              <motion.div
                initial={{ y: 50, opacity: 0, boxShadow: "0px 0px 0px rgba(255,107,53,0)" }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  boxShadow: ["0px 0px 0px rgba(255,107,53,0)", "0px 30px 100px rgba(255,107,53,0.4)", "0px 10px 40px rgba(255,107,53,0.1)"]
                }}
                viewport={{ once: false, margin: "50px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  boxShadow: { duration: 1, times: [0, 0.5, 1], ease: "easeInOut" }
                }}
                className="relative w-full max-w-[450px] h-[300px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/10 p-6 flex flex-col justify-end overflow-hidden shadow-2xl"
              >
                {/* Graph grid lines */}
                <div className="absolute inset-0 z-0 flex flex-col justify-between py-8 px-6 opacity-20 pointer-events-none">
                  <div className="w-full h-[1px] bg-white border-b border-dashed border-white/50"></div>
                  <div className="w-full h-[1px] bg-white border-b border-dashed border-white/50"></div>
                  <div className="w-full h-[1px] bg-white border-b border-dashed border-white/50"></div>
                  <div className="w-full h-[1px] bg-white border-b border-dashed border-white/50"></div>
                </div>

                {/* Animated Bars */}
                <div className="flex items-end justify-between h-[80%] gap-2 sm:gap-3 relative z-10">
                  {[30, 45, 25, 60, 40, 75, 55, 90, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: false, margin: "50px" }}
                      transition={{ duration: 0.6, delay: 0.1 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                      className="w-full bg-gradient-to-t from-[#ff6b35]/20 to-[#ff6b35] rounded-t-md relative group cursor-pointer"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}k
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-white text-sm font-semibold flex items-center gap-2 shadow-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-[#ff6b35] flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                  +345% Revenue
                </motion.div>

              </motion.div>
            </div>
          </div>

          {/* Bottom Row (VCard & CTA) */}
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center overflow-hidden">

            {/* VCard Composition */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2 flex justify-center items-center relative py-12"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ff6b35]/15 blur-[120px] z-0 rounded-full pointer-events-none"></div>

              {/* Background Orange Card */}
              <div className="absolute z-0 w-[70%] sm:w-[60%] max-w-[350px] aspect-[1.58/1] bg-[#ff6b35] rounded-3xl transform rotate-6 translate-x-12 translate-y-8 shadow-2xl opacity-90 transition-transform duration-700 group-hover:rotate-12"></div>

              {/* Foreground Black Premium CSS VCard */}
              <div className="relative z-10 w-[85%] sm:w-[75%] max-w-[450px] aspect-[1.58/1] transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group rounded-3xl">

                {/* The Card Body */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#000] rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-inner">

                  {/* Glassy reflection sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-1000 ease-in-out z-20"></div>

                  {/* Watermark Logo Background */}
                  <div className="absolute -right-8 -bottom-10 opacity-[0.03] transform scale-150 pointer-events-none">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center font-black text-9xl">A</div>
                  </div>

                  {/* Top Row: Logo & Contactless */}
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black font-bold text-lg sm:text-xl flex items-center justify-center rounded-xl shadow-lg">A</div>
                      <span className="text-white font-bold text-lg sm:text-xl tracking-tight">AmazonFast</span>
                    </div>
                    <Wifi className="text-white/60 rotate-90" size={28} />
                  </div>

                  {/* Middle: EMV Chip */}
                  <div className="w-12 h-10 sm:w-14 sm:h-11 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa8022] relative z-10 border border-black/20 flex items-center justify-center overflow-hidden shadow-sm mt-4 sm:mt-2">
                    <div className="w-full h-[1px] bg-black/20 absolute top-1/2"></div>
                    <div className="w-[1px] h-full bg-black/20 absolute left-1/3"></div>
                    <div className="w-[1px] h-full bg-black/20 absolute right-1/3"></div>
                    <div className="w-[70%] h-[60%] border border-black/20 absolute rounded-md"></div>
                  </div>

                  {/* Bottom: Numbers & Details */}
                  <div className="relative z-10 mt-auto">
                    <div className="text-white/90 text-2xl sm:text-3xl font-mono tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 drop-shadow-md">
                      **** **** **** 9000
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest mb-1 font-semibold">AmazonFast Service</p>
                        <p className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase drop-shadow-sm">AMAZON SELLER</p>
                      </div>

                      {/* Fake Master/Visa Style Logo */}
                      <div className="flex -space-x-3 sm:-space-x-4 mix-blend-screen opacity-90">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ff3333]"></div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ffb700] mix-blend-screen"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2 lg:pl-8"
            >
              {/* Animated Text */}
              <div className="mb-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
                >
                  Your Brand Deserves<br />Safe and Simple Scaling
                </motion.h2>
              </div>
              <div className="mb-10 max-w-md">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white/60 text-lg leading-relaxed"
                >
                  Don't put financial freedom on hold. Partner with AmazonFast and start scaling your eCommerce empire today.
                </motion.p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebd57] text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-[#25D366]/20 text-center inline-block">
                  Start a Project
                </Link>
                <Link href="https://calendly.com/amazonfastservice1/new-meeting-1" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition text-center inline-block">
                  Book Consultation
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-24 lg:py-32 bg-[#050200] px-6 sm:px-12 border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[#ff6b35]/5 blur-[150px] z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap gap-x-4 items-center"
            >
              <span className="text-[clamp(3rem,6vw,4rem)] font-bold text-white leading-tight">Become a</span>
              <span className="text-[clamp(3rem,6vw,4rem)] font-bold text-[#ff6b35] leading-tight">Best Seller</span>
            </motion.div>
            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              With a professional set of eyes, your store will work wonders! Connect with our strategists now and make your brand a best-seller.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 mb-8">
              <div>
                <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Call Us</p>
                <a href="tel:+18502139930" className="text-white text-lg font-medium mb-1 hover:text-[#ff6b35] transition block">+1 (850) 213-9930</a>
                <a href="https://wa.me/923322568950" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-medium hover:text-[#ff6b35] transition block">+92 332 2568950</a>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Email Us</p>
                <a href="mailto:info@amazonfastservices.com" className="text-white text-lg font-medium hover:text-[#ff6b35] transition block">info@amazonfastservices.com</a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#111111] border border-white/[0.05] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/10 blur-[80px] rounded-full pointer-events-none"></div>

              <h3 className="text-2xl font-semibold text-white mb-8">Chat With Our Strategists</h3>
              <form className="flex flex-col gap-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your name" className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:border-[#ff6b35] outline-none transition" />
                  <input type="email" placeholder="Your email" className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:border-[#ff6b35] outline-none transition" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:border-[#ff6b35] outline-none transition" />
                <textarea placeholder="Your message (optional)" rows={4} className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:border-[#ff6b35] outline-none transition resize-none"></textarea>
                <button type="button" className="mt-4 w-full bg-[#ff6b35] hover:bg-[#e85c2b] text-white font-semibold py-4 rounded-2xl transition flex justify-center items-center gap-2">
                  Send Message
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "What is Amazon FBA and how does AmazonFast help with it?",
      a: "FBA (Fulfillment by Amazon) means Amazon stores, packs, and ships your products. AmazonFast handles the entire FBA setup — from product sourcing and labeling to shipment creation and inventory management — so your products reach customers fast without you lifting a finger."
    },
    {
      q: "How long does it take to launch a new Amazon store?",
      a: "A fully optimized Amazon store with listings, A+ content, and PPC campaigns can be launched in as little as 2–4 weeks. Product sourcing and shipping timelines may vary depending on your supplier, but we guide you through every step."
    },
    {
      q: "What is Amazon PPC and do I really need it?",
      a: "Amazon PPC (Pay-Per-Click) advertising puts your products in front of buyers who are actively searching. Without it, new listings get buried. AmazonFast builds data-driven PPC campaigns that minimize your ACoS while maximizing sales velocity and organic rank."
    },
    {
      q: "How do you find winning products for my brand?",
      a: "We use a combination of professional tools (Helium 10, Jungle Scout), real market data, and competitor analysis to identify products with high demand, low competition, and strong profit margins — tailored to your budget and niche."
    },
    {
      q: "Can you help if my Amazon account is suspended?",
      a: "Yes. Our reinstatement team specializes in writing effective Plan of Action (POA) letters and navigating Amazon's appeal process. We have a strong track record of successfully reinstating suspended seller accounts."
    },
    {
      q: "What marketplaces do you support?",
      a: "We operate across all major Amazon marketplaces — USA, UK, UAE, Canada, Germany, and more. Whether you're launching locally or going global, we have the expertise to scale your brand internationally."
    },
    {
      q: "How do you optimize product listings for more sales?",
      a: "We combine keyword research, competitor analysis, and conversion-focused copywriting to craft titles, bullet points, descriptions, and A+ content that rank high and convert visitors into buyers."
    },
    {
      q: "How do we get started with AmazonFast?",
      a: "Simply book a free consultation or fill out our contact form. Within 48 hours, our team will analyze your current situation and deliver a customized growth plan for your Amazon business — completely free."
    },
  ];

  const left = faqs.slice(0, 4);
  const right = faqs.slice(4, 8);

  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 mb-5">
            <span className="text-[#ff6b35] text-sm font-semibold tracking-wide">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Frequently Asked<br />
            <span className="text-[#ff6b35]">Questions</span>
          </h2>
        </motion.div>

        {/* Vertical beam section wrapper */}
        <div className="relative pt-20">
          {/* Subtle background grid pattern */}
          <div 
            className="absolute inset-x-0 -top-24 h-[300px] pointer-events-none opacity-25"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
              maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)'
            }}
          />

          {/* 1. Main Vertical Pillar Beam coming down from above */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-24 h-[180px] w-[300px] pointer-events-none flex justify-center items-end z-0">
            {/* Outer soft vertical red/orange glow */}
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75], scaleX: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 w-[180px] h-[220px] bg-gradient-to-t from-[#ff4500] via-[#ff4500]/60 to-transparent blur-[45px]"
            />
            {/* Mid intense vertical glow */}
            <motion.div
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 w-[50px] h-[220px] bg-gradient-to-t from-[#ff6b35] via-[#ff4500] to-transparent blur-[14px]"
            />
            {/* Sharp inner vertical laser line */}
            <div className="absolute bottom-0 w-[4px] h-[240px] bg-gradient-to-t from-[#ffaa55] via-[#ff5500] to-transparent shadow-[0_0_20px_#ff4500]" />
          </div>

          {/* 2. Dark Box Container with Horizontal Spreading Glow */}
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* Impact Point Flare (where vertical beam hits top of box) */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 -translate-x-1/2 -top-7 w-[220px] h-[60px] bg-[#ff4500] blur-[28px] rounded-full pointer-events-none z-20"
            />
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-[90px] h-[20px] bg-[#ffcc77] blur-[8px] rounded-full pointer-events-none z-20" />

            {/* Horizontal Light Bar spreading left & right along top border ("water spreading" effect) */}
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff8c42] via-[#ff4500] to-transparent pointer-events-none z-30 shadow-[0_0_18px_#ff4500]"
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50px] bg-gradient-to-b from-[#ff4500]/60 via-[#ff4500]/15 to-transparent blur-[20px] pointer-events-none z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[160px] bg-gradient-to-b from-[#ff6b35]/25 to-transparent blur-[50px] pointer-events-none z-0" />

            {/* FAQ grid */}
            <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
              {[left, right].map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col">
                  {col.map((item, i) => {
                    const globalIdx = colIdx * 4 + i;
                    const isOpen = openIdx === globalIdx;
                    return (
                      <motion.div
                        key={globalIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        viewport={{ once: false, margin: '-50px' }}
                        className={`border-b transition-colors duration-300 ${isOpen ? 'border-[#ff6b35]/40' : 'border-white/[0.06]'}`}
                      >
                        <button
                          onClick={() => setOpenIdx(isOpen ? null : globalIdx)}
                          className="w-full flex items-center justify-between py-6 text-left gap-4 group"
                        >
                          <span className={`text-sm sm:text-base font-semibold uppercase tracking-wider transition-colors duration-300 ${isOpen ? 'text-[#ff6b35]' : 'text-white/80 group-hover:text-white'}`}>
                            {item.q}
                          </span>
                          <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#ff6b35] border-[#ff6b35] rotate-45' : 'border-white/20 group-hover:border-[#ff6b35]/50'}`}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                          </span>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/50 text-sm leading-relaxed pb-6 max-w-lg">
                            {item.a}
                          </p>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
);
}
