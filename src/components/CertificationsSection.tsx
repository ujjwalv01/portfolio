import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const certs = [
  {
    icon: Briefcase,
    title: "J.P. Morgan Software Engineering Simulation",
    org: "J.P. Morgan Chase & Co.",
    type: "Virtual Experience",
  },
  {
    icon: Briefcase,
    title: "Deloitte Technology Job Simulation",
    org: "Deloitte",
    type: "Virtual Experience",
  },
  {
    icon: GraduationCap,
    title: "Google AI Agents Course",
    org: "Google",
    type: "Certification",
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary mb-2">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-5 md:p-6 flex items-center gap-5"
            >
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <cert.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm md:text-base">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.org}</p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground shrink-0">
                {cert.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
