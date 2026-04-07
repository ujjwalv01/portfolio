import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Search, Zap, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary mb-2">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group glass-card-hover overflow-hidden relative"
        >
          <div className="section-overlay rounded-[1.25rem]" />
          <div className="grid md:grid-cols-2 gap-0">
            {/* Mockup */}
            <div className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-full max-w-sm rounded-xl border border-border/40 overflow-hidden shadow-lg">
                <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">e-commerce-website</span>
                </div>
                <div className="bg-card p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">ShopHub</div>
                      <div className="text-xs text-muted-foreground">Full-Stack E-Commerce</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { emoji: "🎧", label: "Buds" },
                      { emoji: "👕", label: "Clothes" },
                      { emoji: "📱", label: "Electronics" },
                      { emoji: "🏠", label: "Household" },
                    ].map((item) => (
                      <div key={item.label} className="aspect-square rounded-lg bg-secondary flex flex-col items-center justify-center gap-1">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-[10px] text-muted-foreground font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-8 rounded-lg w-full flex items-center justify-center text-xs font-medium text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-mono text-primary mb-3">FEATURED PROJECT</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">E-Commerce Website</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A full-stack e-commerce website featuring product listing, cart system, and user interactions. Built with modern web technologies to deliver a seamless shopping experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Full-Stack", "Product Listing", "Cart System", "User Auth"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/ujjwalv01/e-commerce-app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card/50 text-sm font-medium text-foreground hover:bg-card hover:border-primary/40 transition-all interactive-btn"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
                <a
                  href="https://github.com/ujjwalv01/e-commerce-app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:scale-105 interactive-btn"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <ExternalLink className="w-4 h-4" /> View Project
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="group glass-card-hover overflow-hidden relative mt-10"
        >
          <div className="section-overlay rounded-[1.25rem]" />
          <div className="grid md:grid-cols-2 gap-0">
            {/* Mockup */}
            <div className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-full max-w-sm rounded-xl border border-border/40 overflow-hidden shadow-lg">
                <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">portfolio</span>
                </div>
                <div className="bg-card p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">Portfolio Website</div>
                      <div className="text-xs text-muted-foreground">Personal branding site</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { emoji: "💼", label: "About" },
                      { emoji: "🛠️", label: "Projects" },
                      { emoji: "📱", label: "Responsive" },
                      { emoji: "✨", label: "Animations" },
                    ].map((item) => (
                      <div key={item.label} className="aspect-square rounded-lg bg-secondary flex flex-col items-center justify-center gap-1">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-[10px] text-muted-foreground font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-8 rounded-lg w-full flex items-center justify-center text-xs font-medium text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
                    View Portfolio
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-mono text-primary mb-3">FEATURED PROJECT</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Portfolio Website</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A polished personal portfolio showcasing skills, projects, and developer story. Built with modern frontend techniques to highlight professional work and online presence.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Responsive", "UI/UX", "Modern CSS", "Developer Brand"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/ujjwalv01/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card/50 text-sm font-medium text-foreground hover:bg-card hover:border-primary/40 transition-all interactive-btn"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
                <a
                  href="https://github.com/ujjwalv01/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:scale-105 interactive-btn"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <ExternalLink className="w-4 h-4" /> View Project
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="group glass-card-hover overflow-hidden relative mt-10"
        >
          <div className="section-overlay rounded-[1.25rem]" />
          <div className="grid md:grid-cols-2 gap-0">
            {/* Mockup */}
            <div className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-full max-w-sm rounded-xl border border-border/40 overflow-hidden shadow-lg">
                <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">rival-scan-ai</span>
                </div>
                <div className="bg-card p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold text-foreground">RivalScan AI</span>
                    </div>
                    <div className="px-2 py-0.5 rounded text-[10px] bg-primary/10 text-primary font-mono animate-pulse">
                      ANALYZING...
                    </div>
                  </div>
                  
                  <div className="relative aspect-video rounded-lg bg-secondary/50 border border-border/40 flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(var(--primary-rgb), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    <Search className="w-8 h-8 text-primary/40 mb-2" />
                    <div className="w-3/4 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: <BarChart3 className="w-3 h-3" />, label: "SWOT" },
                      { icon: <Zap className="w-3 h-3" />, label: "Insights" },
                      { icon: <Search className="w-3 h-3" />, label: "Reports" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 p-2 rounded-md bg-secondary/30 border border-border/20">
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-[8px] text-muted-foreground uppercase tracking-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-mono text-primary mb-3">FEATURED PROJECT</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Rival Scan</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                An AI-powered competitive intelligence tool that researches any company in seconds. It scrapes public web presence and generates comprehensive CI reports featuring SWOT analysis and interactive charts.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "AI (Groq/Claude)", "Firecrawl", "Recharts"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/ujjwalv01/rivalscan-ai.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card/50 text-sm font-medium text-foreground hover:bg-card hover:border-primary/40 transition-all interactive-btn"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
                <a
                  href="https://rivalscan-ai-01.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:scale-105 interactive-btn"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <ExternalLink className="w-4 h-4" /> View Project
                </a>
              </div>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
};

export default ProjectsSection;
