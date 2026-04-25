import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const certs = [
  {
    icon: Briefcase,
    title: "J.P. Morgan Software Engineering Simulation",
    org: "J.P. Morgan Chase & Co.",
    type: "Virtual Experience",
    url: "https://drive.google.com/file/d/1I2F5rqzgi5g73cKwYev9q8Tyf2f9Uj9-/view?usp=drive_link",
  },
  {
    icon: Briefcase,
    title: "Deloitte Technology Job Simulation",
    org: "Deloitte",
    type: "Virtual Experience",
    url: "https://drive.google.com/file/d/1taMJFkJG1P5RwvPwXDHWDL4v7WcB_cFP/view?usp=drive_link",
  },
  {
    icon: GraduationCap,
    title: "Google AI Agents Course",
    org: "Google",
    type: "Certification",
    url: "https://www.kaggle.com/certification/badges/ujjwalv01/105",
  },
  {
    icon: GraduationCap,
    title: "Building with the Claude API",
    org: "Anthropic",
    type: "Certification",
    url: "https://drive.google.com/file/d/1DEF0--pWzs5pf2b8L6SouhcOruv3pTCg/view?usp=drive_link",
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
              className="glass-card-hover p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1 w-full min-w-0">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0 mt-0.5 sm:mt-0">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm md:text-base leading-snug break-words">{cert.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">{cert.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground shrink-0">
                  {cert.type}
                </span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2.5 sm:py-2 text-xs font-semibold text-primary transition hover:bg-primary/10 text-center"
                >
                  View Certification
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
