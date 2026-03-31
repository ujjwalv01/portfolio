import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { Trophy, Target, Zap, TrendingUp } from "lucide-react";

const CompetitiveSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const rating = useCountUp(1421, 2000, isVisible);
  const problems = useCountUp(300, 2000, isVisible);

  const stats = [
    { icon: Trophy, label: "Codeforces Rating", value: rating.toString(), suffix: " (Max)", highlight: true },
    { icon: Target, label: "Problems Solved", value: `${problems}+`, suffix: "", highlight: false },
    { icon: Zap, label: "CF Rank", value: "Specialist", suffix: "", highlight: false },
    { icon: TrendingUp, label: "Platforms", value: "CF, GFG", suffix: "", highlight: false },
  ];

  return (
    <section id="competitive" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary mb-2">// competitive programming</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The <span className="gradient-text">Algorithm</span> Mindset
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.a
              key={stat.label}
              href="#profiles"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card-hover p-6 text-center ${stat.highlight ? "glow-border" : ""} cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary`}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold font-mono gradient-text mb-1">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 glass-card p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-accent/10 shrink-0">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Why Competitive Programming Matters</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Competitive programming isn't just about contests — it's a training ground for engineering excellence.
                Every problem hones pattern recognition, optimization thinking, and the ability to write clean,
                efficient code under pressure. These skills directly translate into building better software systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveSection;
