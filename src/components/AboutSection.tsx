import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">// about me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Story Behind the <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              It started with curiosity — a single <span className="text-foreground font-medium">competitive programming problem</span> that refused to be solved. Hours turned into days, and that stubborn persistence became the foundation of how I approach everything: with logic, patience, and a drive to understand deeply.
            </p>
            <p>
              As a <span className="text-foreground font-medium">Codeforces Specialist</span> with 100+ problems solved across platforms, I've trained my mind to think in algorithms. But I realized that problem-solving shouldn't stop at the terminal — it should reach users, build products, and create impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              That's when I dove into <span className="text-foreground font-medium">full-stack development</span>. The same discipline that helps me optimize a O(n²) solution to O(n log n) now helps me architect clean, scalable web applications. Every component I build carries that same rigor.
            </p>
            <p>
              Currently pursuing <span className="text-foreground font-medium">B.Tech in Computer Science</span> at PSIT Kanpur (2024–2028), I'm on a mission to bridge the gap between algorithmic thinking and real-world software engineering — one project at a time.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {["B.Tech CSE @ PSIT Kanpur", "Kanpur, India", "2024 – 2028"].map((item) => (
            <span key={item} className="px-4 py-2 rounded-lg bg-secondary text-sm font-mono text-muted-foreground">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
