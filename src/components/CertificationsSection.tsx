import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

const experience = {
  role: "Full Stack Developer",
  company: "MediaTree-Excellence Group",
  type: "Freelance",
  period: "Apr 2026 - Jun 2026",
  location: "Remote",
  bullets: [
    "Built a production Next.js 14 + TypeScript application from scratch - an Airbnb-style marketplace for medical spaces, with PostgreSQL and Prisma ORM, replacing a legacy WordPress setup.",
    "Engineered a multi-step listing form with Google Maps API auto-fill, auto-save draft system, and role-based onboarding across two distinct user journey paths.",
    "Integrated Stripe subscription checkout with pre-fetched session on page load, cutting redirect latency from 5s to under 1s; implemented a Cloudinary media pipeline with instant local blob preview and background upload.",
    "Architected and deployed an AI-powered property description generator using the Claude API triggered post-media upload, with region-based conditional logic for subscription and waitlist flows.",
  ],
};

const certs = [
  {
    icon: Briefcase,
    title: "J.P. Morgan Software Engineering Simulation",
    org: "J.P. Morgan Chase & Co.",
    type: "Virtual Internship",
    url: "https://drive.google.com/file/d/1I2F5rqzgi5g73cKwYev9q8Tyf2f9Uj9-/view?usp=drive_link",
  },
  {
    icon: Briefcase,
    title: "Deloitte Technology Job Simulation",
    org: "Deloitte",
    type: "Virtual Internship",
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
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="text-amber-500">Experience</span>
          </h2>
        </motion.div>

        {/* ── Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-amber-500 mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Experience
          </h3>

          <div className="glass-card-hover p-5 sm:p-7 md:p-8 relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600 rounded-l-xl" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground">
                  {experience.role}
                </h4>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {experience.company}{" "}
                  <span className="text-amber-500/80">· {experience.type}</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground shrink-0 mt-1 sm:mt-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  {experience.location}
                </span>
              </div>
            </div>

            <ul className="space-y-3 ml-1">
              {experience.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h3 className="text-lg font-semibold text-amber-500 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Certifications & Virtual Internships
          </h3>

          <div className="space-y-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.15 }}
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
                    className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black transition-all text-sm font-medium text-center"
                  >
                    View Certification
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
