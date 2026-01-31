import { motion } from 'framer-motion';
import { complexityRank, projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const projectsSorted = [...projects].sort(
  (a, b) => complexityRank[b.complexity] - complexityRank[a.complexity],
);

function ProjectsSection() {
  // const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div variants={stagger} initial="visible" animate="visible">
          <SectionHeader
            label="Project Vault"
            title="Ranked by complexity and impact."
            description="Each preview uses a placeholder for now. I'll replace the previews as I ship the actual builds."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projectsSorted.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
