import { motion } from 'framer-motion'
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

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14"
        >
          <SectionHeader
            label="Let's Build"
            title="Have a project or role in mind?"
            description="I'm open to full-stack engineering, platform work, and DevOps-focused collaboration. Share your vision and I'll respond quickly."
          />

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:you@email.com"
              className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow"
            >
              you@email.com
            </a>
            <a
              href="/book"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Schedule a Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
