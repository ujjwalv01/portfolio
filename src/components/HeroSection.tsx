import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { ArrowDown, ExternalLink } from "lucide-react";
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

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
            <span className="neon-dot" />
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-primary-foreground transition-all duration-300 hover:scale-105 interactive-btn"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            View Projects <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium border border-border bg-card/50 text-foreground hover:bg-card transition-all duration-300 hover:scale-105 hover:border-primary/40 interactive-btn"
          >
            Contact Me
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
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">turn the page</span>
            <ArrowDown className="w-4 h-4 animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
