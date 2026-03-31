import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Code2, Globe, ArrowUpRight } from "lucide-react";

const profiles = [
  {
    platform: "Codeforces",
    description: "Competitive programming profile with active problem-solving and rating growth.",
    href: "https://codeforces.com/profile/ujjwxl.exe",
    icon: Code2,
    badge: "Specialist",
  },
  {
    platform: "GeeksforGeeks",
    description: "Profile activity focused on algorithms, practice, and learning resources.",
    href: "https://www.geeksforgeeks.org/profile/ujjwxl?tab=activity",
    icon: Globe,
    badge: "Active Learner",
  },
];

const ProfilesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="profiles" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary mb-2">// coding profiles</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore the <span className="gradient-text">Performance</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.platform}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card-hover p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-5 transition-colors group-hover:bg-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{profile.platform}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{profile.description}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground">{profile.badge}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-primary font-medium">
                  <span>Visit profile</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
