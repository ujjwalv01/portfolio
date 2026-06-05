import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RepWise",
    description: "An AI-powered fitness and nutrition ecosystem featuring a natural language food scanner, custom workout generation, and an interactive hydration tracker.",
    tags: ["AI Integration", "Fitness Tracker", "UI/UX", "React"],
    github: "https://github.com/ujjwalv01/repwise",
    live: "https://trainwithrepwise.vercel.app/",
    image: "/Repwise.png",
    bgColor: "bg-[#8B5CF6]", // Purple pastel
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce website featuring product listing, cart system, and user interactions. Built with modern web technologies.",
    tags: ["Full-Stack", "Product Listing", "Cart System", "User Auth"],
    github: "https://github.com/ujjwalv01/e-commerce-app.git",
    live: "https://github.com/ujjwalv01/e-commerce-app.git",
    image: "/ecommerce-thumbnail.png.png",
    bgColor: "bg-[#F87171]", // Red pastel
  },
  {
    title: "Portfolio Website",
    description: "A polished personal portfolio showcasing skills, projects, and developer story. Built with modern frontend techniques.",
    tags: ["Responsive", "UI/UX", "Modern CSS", "Developer Brand"],
    github: "https://github.com/ujjwalv01/portfolio",
    live: "https://github.com/ujjwalv01/portfolio",
    image: "/image.png",
    bgColor: "bg-[#60A5FA]", // Blue pastel
  },
  {
    title: "Rival Scan AI",
    description: "An AI-powered competitive intelligence tool that researches any company in seconds. Generates CI reports featuring SWOT analysis and charts.",
    tags: ["Next.js", "AI (Groq/Claude)", "Firecrawl", "Recharts"],
    github: "https://github.com/ujjwalv01/rivalscan-ai.git",
    live: "https://rivalscan-ai-01.vercel.app/",
    image: "/rival scan.png",
    bgColor: "bg-[#34D399]", // Emerald pastel
  },
  {
    title: "Promptify",
    description: "An intelligent tool designed to transform raw, unstructured inputs into highly effective and well-written AI prompts for LLMs.",
    tags: ["React", "JavaScript", "Vite", "AI Integration"],
    github: "https://github.com/ujjwalv01/promptify.git",
    live: "https://trypromptify.vercel.app/",
    image: "/Screenshot 2026-05-03 153037.png",
    bgColor: "bg-[#FBBF24]", // Amber pastel
  }
];

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
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-amber-500">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card-hover overflow-hidden rounded-3xl flex flex-col bg-card/40 border border-white/5 shadow-2xl"
            >
              {/* Top Image Section */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-[#0a0a0a]/50">
                {/* A subtle dark overlay to blend with the dark theme */}
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Bottom Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-500 text-xs font-mono border border-amber-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-2xl border border-border/50 bg-card/50 text-sm font-medium text-foreground hover:bg-card hover:border-amber-500/40 transition-all">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black transition-all text-sm font-medium">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
