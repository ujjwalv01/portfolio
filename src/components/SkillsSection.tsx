import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Code2, FileCode, Globe, GitBranch, Cpu, Terminal, Layers, Palette, Smartphone, Rocket } from "lucide-react";

const skills = [
  { name: "TypeScript", icon: Code2, level: 88, color: "from-sky-500 to-indigo-500" },
  { name: "React", icon: Layers, level: 87, color: "from-cyan-500 to-blue-500" },
  { name: "Tailwind CSS", icon: Palette, level: 84, color: "from-cyan-400 to-blue-500" },
  { name: "Responsive Design", icon: Smartphone, level: 90, color: "from-fuchsia-500 to-pink-500" },
  { name: "API Integration", icon: Globe, level: 82, color: "from-green-500 to-teal-500" },
  { name: "Web Performance", icon: Rocket, level: 80, color: "from-amber-500 to-orange-500" },
  { name: "JavaScript", icon: Terminal, level: 85, color: "from-yellow-400 to-yellow-500" },
  { name: "HTML & CSS", icon: Globe, level: 88, color: "from-orange-500 to-pink-500" },
  { name: "Git & GitHub", icon: GitBranch, level: 82, color: "from-gray-400 to-gray-500" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary mb-2">// skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-mono">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
