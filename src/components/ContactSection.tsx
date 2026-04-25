import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, ArrowUp } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <a
              href="mailto:ujjwalverma010305@gmail.com"
              className="glass-card-hover p-4 sm:p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground font-mono">Email</p>
                <p className="text-sm font-medium text-foreground break-all sm:break-normal">ujjwalverma010305@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/ujjwalv01"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-4 sm:p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground font-mono">GitHub</p>
                <p className="text-sm font-medium text-foreground truncate">github.com/ujjwalv01</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/ujjwal-verma-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-4 sm:p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground font-mono">LinkedIn</p>
                <p className="text-sm font-medium text-foreground truncate">Ujjwal Verma</p>
              </div>
            </a>

            <a
              href="https://x.com/Ujjwal_v01"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-4 sm:p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Twitter className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground font-mono">X</p>
                <p className="text-sm font-medium text-foreground truncate">@Ujjwal_v01</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:ujjwalverma010305@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
            }}
          >
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © 2025 Ujjwal Verma. Built with passion & caffeine.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
