import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card-hover overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Mockup */}
            <div className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-full max-w-sm rounded-xl border border-border/40 overflow-hidden shadow-lg">
                <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">e-commerce-app</span>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">E-Commerce App</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A full-stack e-commerce application featuring product listing, cart system, and user interactions. Built with modern web technologies to deliver a seamless shopping experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Full-Stack", "Product Listing", "Cart System", "User Auth"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ujjwalv01/e-commerce-app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card/50 text-sm font-medium text-foreground hover:bg-card hover:border-primary/40 transition-all"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
                <a
                  href="https://github.com/ujjwalv01/e-commerce-app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <ExternalLink className="w-4 h-4" /> View Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="glass-card-hover overflow-hidden mt-10"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Mockup */}
            <div className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-full max-w-sm rounded-xl border border-border/40 overflow-hidden shadow-lg">
                <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
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
              <div className="flex gap-4">
                <a
                  href="https://github.com/ujjwalv01/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card/50 text-sm font-medium text-foreground hover:bg-card hover:border-primary/40 transition-all"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
                <a
                  href="https://github.com/ujjwalv01/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <ExternalLink className="w-4 h-4" /> View Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
