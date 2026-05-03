import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, Variants } from "framer-motion";
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiVite,
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiGithub, SiVercel, SiLinux
} from "react-icons/si";

import {
  FaDatabase, FaServer, FaRobot, FaSyncAlt, FaFire
} from "react-icons/fa";

import { Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "REST APIs", icon: FaServer, color: "#0096D6" },
      { name: "Firecrawl", icon: FaFire, color: "#FF4500" },
      { name: "Groq AI", icon: FaRobot, color: "#F55036" },
      { name: "Claude AI", icon: Brain, color: "#D97757" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", icon: FaSyncAlt, color: "#F05032" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="text-amber-500">Stack</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 md:gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.flatMap((category) => category.skills).map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex items-center gap-2 px-4 py-2.5 bg-card/60 border border-border/50 rounded-xl hover:bg-card hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <skill.icon
                className="w-5 h-5 shrink-0"
                style={skill.color ? { color: skill.color } : {}}
              />
              <span className="font-mono text-sm text-foreground/80">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
