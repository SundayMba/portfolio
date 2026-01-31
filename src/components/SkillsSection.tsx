import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeader from './SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="grid gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            label="Skills & Tools"
            title="Stacked for product velocity and reliability."
            description="Blending product design thinking with engineering discipline. I build experiences that scale, stay observable, and are optimized for iteration."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display text-xl text-white">{skill.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
