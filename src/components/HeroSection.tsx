import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [curtainState, setCurtainState] = useState<"idle" | "closing" | "opening">("idle");
  const closeTimerRef = useRef<number | null>(null);
  const openTimerRef = useRef<number | null>(null);
  const { displayed, done } = useTypingEffect("Turning Logic Into Scalable Digital Solutions", 50, 300);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
    };
  }, []);

  const handleScrollAction = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (curtainState !== "idle") return;

    setCurtainState("closing");
    closeTimerRef.current = window.setTimeout(() => {
      const target = document.querySelector("#about");
      target?.scrollIntoView({ behavior: "smooth" });
      setCurtainState("opening");

      openTimerRef.current = window.setTimeout(() => {
        setCurtainState("idle");
      }, 460);
    }, 420);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className={`page-curtain ${curtainState !== "idle" ? curtainState : ""}`}>
        <div className="curtain-panel top-panel" />
        <div className="curtain-panel bottom-panel" />
      </div>
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse_glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse_glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 relative inline-block group"
        >
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse_glow" />
          <span className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-accent/30 text-foreground text-sm font-mono backdrop-blur-sm shadow-[0_0_15px_hsla(var(--accent)/0.15)] group-hover:shadow-[0_0_25px_hsla(var(--accent)/0.25)] transition-shadow duration-500">
            <span className="neon-dot animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 min-h-[1.2em]">
          <span className="gradient-text">{displayed}</span>
          {!done && <span className="animate-blink text-primary">|</span>}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
        >
          Full Stack Developer &bull; Competitive Programmer &bull; CSE Undergrad
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base rounded-xl font-medium text-primary-foreground transition-all duration-300 hover:scale-105 interactive-btn relative overflow-hidden"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">View Projects <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" /></span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base rounded-xl font-medium border border-border bg-card/50 text-foreground hover:bg-card hover:border-accent hover:shadow-[0_0_15px_hsla(var(--accent)/0.3)] transition-all duration-300 hover:scale-105 interactive-btn"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
          className="flex justify-center mt-6"
        >
          <a
            href="https://drive.google.com/file/d/1AIgD792xOUPS1h2ZN0PhSXrijEvsQIHv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base rounded-xl font-medium border border-border bg-card/50 text-foreground hover:bg-card hover:border-accent hover:shadow-[0_0_15px_hsla(var(--accent)/0.3)] transition-all duration-300 hover:scale-105 interactive-btn"
          >
            Download Resume <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          className="mt-20"
        >
          <a
            href="#about"
            onClick={handleScrollAction}
            className="group inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="text-xs font-mono group-hover:animate-pulse">turn the page</span>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-full group-hover:animate-pulse_glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowDown className="w-4 h-4 animate-float relative" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
