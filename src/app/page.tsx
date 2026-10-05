"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Wifi, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative font-sans overflow-x-hidden bg-[#0a0a0a]">
      
      {/* Hero Section Background (Fixed for Parallax Effect) */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gentle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        
        {/* Extra ambient glow just for the aesthetic */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35]/10 blur-[120px] rounded-full"></div>
      </div>
      
      {/* Hero Section Content Wrapper */}
      <div className="relative w-full min-h-[100vh] flex flex-col pb-10 z-10">

        {/* Navbar Section */}
        <header className="relative z-50 w-full px-6 sm:px-8 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/image.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain h-8 sm:h-10 w-auto" priority />
          </Link>

          {/* Center Pill Navbar */}
          <nav className="hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20">
            <Link href="#" className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium transition">Home</Link>
            <Link href="#" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">About us</Link>
            <Link href="#" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">Services</Link>
            <Link href="#" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">Cases</Link>
            <Link href="#" className="text-white/80 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition">Contact</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Social Icons (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
            </div>
            
            {/* Mobile Hamburger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-50"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown (Premium Agency Style) */}
          <motion.div 
            initial={false}
            animate={{ 
              height: isMobileMenuOpen ? 'calc(100vh - 88px)' : 0, 
              opacity: isMobileMenuOpen ? 1 : 0 
            }}
            className="absolute top-full left-0 w-full overflow-hidden bg-[#0a0a0a]/98 backdrop-blur-3xl border-t border-white/5 lg:hidden flex flex-col"
          >
            <div className="flex flex-col p-8 gap-8 mt-4">
              {['Services', 'Our Work', 'About', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
                  transition={{ delay: isMobileMenuOpen ? i * 0.1 : 0, duration: 0.4, ease: "easeOut" }}
                >
                  <Link href="#" className="text-4xl font-semibold text-white hover:text-[#ff6b35] transition tracking-tight flex items-center justify-between group">
                    {item}
                    <ArrowUpRight className="text-white/20 group-hover:text-[#ff6b35] transition-colors" size={28} />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Menu Footer CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto p-8 border-t border-white/10 mb-4"
            >
              <button className="w-full bg-white text-black hover:bg-[#ea5c2b] hover:text-white transition-colors py-4 rounded-full font-bold tracking-wide text-lg">
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        </header>

      {/* Main Content Layout */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-8 h-full flex flex-col justify-center pt-20">
        
        {/* Top Info (Creative Agency) */}
        <div className="flex items-center gap-2 text-white/80 text-sm tracking-wide uppercase font-medium mb-8 lg:mb-12">
          <span>Amazon LLC Services</span>
          <span className="w-1 h-1 rounded-full bg-[#ff6b35]"></span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start flex-grow">
          
          {/* Left Column */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-medium text-white leading-[1.05] tracking-tight mb-6 drop-shadow-sm">
              Scale your brand<br />on Amazon
            </h1>
            
            <p className="text-white/70 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
              We help sellers launch, connect with millions of buyers, and grow through smart FBA strategies and advertising.
            </p>

            {/* Start a project button */}
            <div className="mb-10">
              <button className="flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition group backdrop-blur-sm">
                <span className="text-sm font-medium">Start a project</span>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#ff6b35] group-hover:text-white transition">
                  <ArrowUpRight size={20} />
                </div>
              </button>
            </div>

            {/* Metric Cards Row (Mobile: 3 Cards, Desktop: 2 Cards) */}
            <div className="flex flex-row gap-2 sm:gap-6 mt-auto w-full">
              {/* Solid White Card */}
              <div className="bg-[#fcfaf7] rounded-2xl sm:rounded-[32px] p-3 sm:p-8 w-1/3 sm:w-[260px] text-black shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-5xl font-semibold tracking-tight mb-1 sm:mb-2">$10M+</h3>
                  <p className="text-black/60 font-medium text-[10px] sm:text-base mb-1 sm:mb-8 leading-tight">Client Revenue</p>
                </div>
                <p className="text-[10px] sm:text-xs text-black/50 leading-relaxed font-medium hidden sm:block">
                  Driving massive sales through optimized listings & PPC
                </p>
              </div>

              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-[32px] p-3 sm:p-8 w-1/3 sm:w-[260px] text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-5xl font-semibold tracking-tight mb-1 sm:mb-2">99%</h3>
                  <p className="text-white/70 font-medium text-[10px] sm:text-base mb-1 sm:mb-8 leading-tight">Seller Satisfaction</p>
                </div>
                <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed font-medium hidden sm:block">
                  Building long-term partnerships with Amazon brands
                </p>
              </div>

              {/* Mobile-Only Amazon Expert Card (3rd in the row) */}
              <div className="sm:hidden bg-[#f6efe7] p-2 rounded-2xl w-1/3 shadow-2xl flex flex-col justify-between items-center text-center">
                <div className="w-full aspect-square bg-gray-300 rounded-[12px] overflow-hidden relative mb-2">
                  <img src="/profile.png" alt="Amazon Expert" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[10px] font-bold leading-tight text-black mb-1">Amazon Expert</h4>
                <div className="w-full bg-[#ea5c2b] text-white py-1 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-[8px]">Get Started</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end mt-16 lg:mt-0 relative h-full">
            
            {/* Avatars / Projects Delivered */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-transparent relative z-30">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover rounded-full" alt="avatar 1" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-transparent relative z-20">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover rounded-full" alt="avatar 2" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-transparent relative z-10">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover rounded-full" alt="avatar 3" />
                </div>
              </div>
              <div className="text-white/80 text-sm font-medium leading-tight max-w-[120px]">
                500+ Successful<br />Amazon Stores
              </div>
            </div>

            {/* Profile Floating Card (Desktop Only) */}
            <div className="hidden sm:flex bg-[#f6efe7] p-3.5 rounded-[28px] w-full max-w-[280px] shadow-2xl relative lg:mt-auto flex-col items-stretch gap-0">
              
              {/* Image Side */}
              <div className="w-full h-auto aspect-square bg-[#0a0a0a] rounded-[20px] overflow-hidden shrink-0 relative mb-4 flex justify-center items-center">
                <img src="/profile.png" alt="Amazon Expert" className="w-full h-full object-contain p-4" />
              </div>

              {/* Text & Button Side */}
              <div className="flex flex-col justify-start w-full">
                
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="w-5 h-5 bg-[#ff6b35] text-white flex items-center justify-center rounded text-[10px] font-bold">A</div>
                  <span className="text-[10px] font-semibold text-black/60 uppercase tracking-wider">Available for new sellers</span>
                </div>

                <div className="px-2 mb-4 text-black">
                  <p className="text-xs font-medium mb-1">hello@amazonfast.com</p>
                  <h4 className="text-xl font-semibold mb-1.5 leading-tight">Amazon Expert</h4>
                  <p className="text-black/60 text-xs leading-relaxed">
                    Helping sellers grow through FBA & PPC
                  </p>
                </div>

                <button className="w-full bg-[#ea5c2b] hover:bg-[#d94a1b] text-white p-1.5 pl-5 rounded-full flex items-center justify-between transition group">
                  <span className="font-semibold text-sm">Get Started</span>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-white text-[#ea5c2b] flex items-center justify-center group-hover:scale-105 transition transform">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>

            </div>
            
          </div>
        </div>
      </main>
    </div>

    {/* Second Section: Perfect Full Cover Image with Scroll Text */}
      <section ref={sectionRef} className="relative w-full h-[85vh] md:h-auto md:aspect-video flex justify-center items-center overflow-hidden bg-[#0a0400]">
        
        {/* Background Image Optimized for Vercel */}
        <Image 
          src="/section2-bg-wide.jpg" 
          alt="Amazon Pay Experience" 
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover object-center z-0" 
        />

        {/* Typography & Scroll Reveal Container (Matches Nebula Layout) */}
        <div className="absolute inset-0 z-20 max-w-[1600px] mx-auto w-full px-6 sm:px-12 pointer-events-none">
          
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
            <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black hover:bg-[#ff6b35] hover:text-white transition-colors duration-300 w-fit">
              <span className="font-semibold">View All Services</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px", amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { title: "Store Creation", desc: "Expert store setup and optimization services providing a solid basis for success on Amazon." },
              { title: "Listing Optimization", desc: "Optimize conversions and guarantee visibility to potential customers searching for products." },
              { title: "Amazon DSP Ads", desc: "Reach a larger audience with measurable outcomes thanks to our tried-and-true tactics." },
              { title: "FBA Management", desc: "A virtual assistant service that guarantees effective management of your seller account." },
              { title: "PPC Advertising", desc: "Maximize revenue potential by optimizing your campaigns and decreasing your ACOS." },
              { title: "A+ Content / EBC", desc: "Tailored EBC/A+ content with relevant keywords to improve your brand's visibility." },
              { title: "Product Hunting", desc: "Extensive product research to find items that are in great demand for your startup." },
              { title: "SEO Services", desc: "Trustworthy marketing to raise your product’s position with guaranteed top results." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="group p-8 rounded-[2rem] bg-[#111111] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-500 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="w-12 h-12 mb-8 rounded-full bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] group-hover:scale-110 group-hover:bg-[#ff6b35] group-hover:text-white transition-all duration-500">
                    <Sparkles size={20} />
                  </div>
                  <motion.h3 
                    variants={{
                      hidden: { color: "rgba(255, 255, 255, 0.3)" },
                      visible: { color: "rgba(255, 255, 255, 1)", transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
                    }}
                    className="text-xl font-semibold mb-4"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    variants={{
                      hidden: { color: "rgba(255, 255, 255, 0.1)" },
                      visible: { color: "rgba(255, 255, 255, 0.5)", transition: { duration: 1, ease: "easeOut", delay: 0.3 } }
                    }}
                    className="text-sm leading-relaxed"
                  >
                    {service.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", text: "Brand owners who want to scale without complex logistics.", active: false },
              { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", text: "Established sellers looking for a reliable, borderless growth partner.", active: true },
              { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80", text: "Anyone tired of stagnant sales and risks of unoptimized listings.", active: false }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={{ hidden: { opacity: 0, scale: 0.8, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } } }}
                className={`relative z-10 rounded-[2rem] overflow-hidden group ${item.active ? 'bg-[#ff6b35]' : 'bg-[#0a0a0a] border border-white/[0.05]'} p-8 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2 shadow-2xl`}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-black/20 relative">
                  <img src={item.img} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <p className={`text-sm leading-relaxed font-medium ${item.active ? 'text-white' : 'text-white/60'}`}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Row (Community & Graphic) */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                Join the Trusted<br />AmazonFast Community
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
                We are just beginning our journey, and every new brand matters to us. Join others who have already chosen growth, transparency, and safety.
              </p>
              
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
                 initial={{ y: 150, opacity: 0, boxShadow: "0px 0px 0px rgba(255,107,53,0)" }}
                 whileInView={{ 
                    y: 0, 
                    opacity: 1,
                    boxShadow: ["0px 0px 0px rgba(255,107,53,0)", "0px 30px 100px rgba(255,107,53,0.5)", "0px 10px 40px rgba(255,107,53,0.1)"] 
                 }}
                 viewport={{ once: false, margin: "-50px" }}
                 transition={{ 
                   duration: 1.5, 
                   ease: "easeOut", 
                   boxShadow: { duration: 2, times: [0, 0.4, 1], ease: "easeInOut" } 
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
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.08), ease: [0.22, 1, 0.36, 1] }}
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
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            
            {/* VCard Composition */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative py-12">
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
                         <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest mb-1 font-semibold">Card Holder</p>
                         <p className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase drop-shadow-sm">AMAZON BRAND</p>
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
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-8">
              {/* Animated Text */}
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight animate-pulse" style={{ animationDuration: '3s' }}>
                Your Brand Deserves<br />Safe and Simple Scaling
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
                Don't put financial freedom on hold. Partner with AmazonFast and start scaling your eCommerce empire today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#ff6b35] hover:bg-[#e85c2b] text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-[#ff6b35]/20 text-center">
                  Start a Project
                </button>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition text-center">
                  Book Consultation
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-24 lg:py-32 bg-[#050200] px-6 sm:px-12 border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[#ff6b35]/5 blur-[150px] z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Become a <br />
              <span className="text-[#ff6b35]">Best Seller</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              With a professional set of eyes, your store will work wonders! Connect with our strategists now and make your brand a best-seller.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 mb-8">
              <div>
                <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Call Us</p>
                <p className="text-white text-lg font-medium mb-1">+1 (850) 213-9930</p>
                <p className="text-white text-lg font-medium">+92 332 2568950</p>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Email Us</p>
                <p className="text-white text-lg font-medium">info@amazonfastservices.com</p>
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

      {/* Footer */}
      <footer className="relative w-full bg-[#0a0a0a] pt-24 pb-8 px-6 sm:px-12 border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-12">
              <Link href="/" className="inline-block mb-6">
                <Image src="/image.png" alt="AmazonFast Logo" width={180} height={50} className="object-contain h-10 w-auto" />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                With years of expertise, Amazon Fast Services has established a solid reputation as one of the most respected Amazon marketing agencies in the United States.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:border-transparent hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#E4405F] hover:border-transparent hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-3.328.026c0 1.258.53 2.457 1.417 3.344C6.15 21.67 7.348 22 8.606 22a8.653 8.653 0 0 0 8.606-8.606v-3.791c1.336 1.096 3.031 1.737 4.788 1.76V8.049a4.877 4.877 0 0 1-2.411-1.363z"/></svg></Link>
              </div>
            </div>

            {/* Services Links */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Our Services</h4>
              <ul className="flex flex-col gap-3">
                {["A+ Content / EBC", "Amazon FBA Automation", "Amazon PPC", "Product Hunting", "Store Creation", "Shopify Dropshipping"].map(link => (
                  <li key={link}><Link href="#" className="text-white/50 hover:text-[#ff6b35] text-sm transition">{link}</Link></li>
                ))}
              </ul>
            </div>

            {/* Pages Links */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Pages</h4>
              <ul className="flex flex-col gap-3">
                {["Home", "Blog", "About Us", "Contact Us", "Privacy Policy"].map(link => (
                  <li key={link}><Link href="#" className="text-white/50 hover:text-[#ff6b35] text-sm transition">{link}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="tel:+923322568950" className="text-white/50 hover:text-white text-sm transition flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-1.5 shrink-0"></span> +92-332-2568950
                  </a>
                </li>
                <li>
                  <a href="mailto:info@amazonfastservices.com" className="text-white/50 hover:text-white text-sm transition flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-1.5 shrink-0"></span> info@amazonfastservices.com
                  </a>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs font-medium tracking-wide uppercase">
              &copy; {new Date().getFullYear()} Amazon Fast Services. All rights reserved.
            </p>
            <p className="text-white/30 text-xs font-medium tracking-wide uppercase">
              Powered By <span className="text-white/60">X One Hub</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
