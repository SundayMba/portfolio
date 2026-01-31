import { motion } from 'framer-motion'
import { devopsProjects } from '../data/portfolio'
import DevopsCard from './DevopsCard'
import SectionHeader from './SectionHeader'

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

function DevopsSection() {
  return (
    <section id="devops" className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10"
        >
          <SectionHeader
            label="DevOps Spotlight"
            title="Infrastructure that ships with confidence."
            description="DevOps isn&apos;t an afterthought. I design reliable delivery systems, automate guardrails, and keep performance visible at all times."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {devopsProjects.map((project) => (
              <DevopsCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevopsSection
