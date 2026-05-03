
import { Linkedin, Github, Instagram, Twitter, Download } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 lg:pt-40 lg:pb-24">

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Column - Profile & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[35%] flex flex-col items-center will-change-transform"
          >
            {/* Profile Image container */}
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden mb-8 relative border border-white/10 bg-neutral-900 shadow-[0_0_40px_10px_rgba(0,0,0,0.6)] hover:shadow-[0_0_60px_20px_rgba(0,0,0,0.8)] hover:-translate-y-3 transition-all duration-500 cursor-pointer">
              {/* Note to user: Replace /placeholder.svg with your actual photo path */}
              <img 
                src="/WhatsApp Image 2026-05-03 at 15.55.44.jpeg" 
                alt="Ujjwal" 
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient fade at bottom of image like in the design */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-8 mb-10 text-white/50">
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {/* Custom X icon using an SVG path since lucide X is a close icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-full max-w-[240px] gap-4">
              <a 
                href="#contact" 
                className="w-full py-3.5 px-6 rounded-2xl border border-white/20 text-white/80 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all text-center font-medium"
              >
                Contact me
              </a>
              <a 
                href="https://drive.google.com/file/d/1AIgD792xOUPS1h2ZN0PhSXrijEvsQIHv/view?usp=drive_link" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black transition-all text-center font-medium flex items-center justify-center gap-2"
              >
                Resume <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full lg:w-[60%] flex flex-col text-left will-change-transform"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <span className="text-amber-500 font-medium text-xl md:text-2xl tracking-wide">Hello</span>
              <span className="text-white/30 text-xl font-light">|</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-xs sm:text-sm font-medium tracking-wide">Open to opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.15] mb-8">
              I'm Ujjwal, Full Stack Developer and Competitive Programmer
            </h1>
            
            <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-16 font-light">
              I craft elegant solutions to complex problems, and it gives me pleasure. I'm currently studying Computer Science and Engineering, building digital solutions that scale.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-12 md:gap-24">
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-semibold text-amber-500 mb-2">300+</span>
                <span className="text-white/40 text-sm md:text-base tracking-wide">DSA Problems Solved</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-semibold text-amber-500 mb-2">1421</span>
                <span className="text-white/40 text-sm md:text-base tracking-wide">Max CF Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-semibold text-amber-500 mb-2">4+</span>
                <span className="text-white/40 text-sm md:text-base tracking-wide">Featured Projects</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

