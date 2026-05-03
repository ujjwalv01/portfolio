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
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the <span className="text-amber-500">developer</span>
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
              Hello! I’m Ujjwal Verma, a Computer Science and Engineering undergraduate at PSIT Kanpur (2024–2028) with a strong passion for problem-solving and software development.
            </p>
            <p>
              I started with competitive programming, where solving challenging problems shaped my ability to think logically and write efficient code. As a Codeforces Specialist with 300+ problems solved, I’ve built a solid foundation in Data Structures and Algorithms using C++ and Python.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              To take my skills beyond problem-solving, I’m exploring full-stack web development, focusing on building scalable and user-friendly applications.
            </p>
            <p>
              I’m driven to bridge the gap between algorithmic thinking and real-world software engineering, and I’m always open to learning, building, and collaborating.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
