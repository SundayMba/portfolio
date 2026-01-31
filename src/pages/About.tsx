import { motion } from 'framer-motion'
import { highlights, timeline } from '../data/portfolio'

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

function About() {
  return (
    <div className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid gap-12">
          <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About Me</p>
              <h1 className="mt-4 font-display text-4xl text-white md:text-5xl">
                Crafting experiences that scale with clarity.
              </h1>
              <p className="mt-5 text-lg text-slate-300">
                I&apos;m a full-stack engineer with a DevOps mindset, focused on building products that feel effortless
                to use and effortless to operate. My work blends UX clarity, resilient infrastructure, and systems
                that let teams ship without friction.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Full Stack', 'DevOps', 'Product Strategy', 'Cloud Architecture'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-xl text-white">What I optimize for</h2>
              <div className="mt-4 grid gap-4">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0b0f14]/60 p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-display text-2xl text-white">Journey</h2>
            <div className="mt-6 grid gap-6">
              {timeline.map((item) => (
                <div key={item.year} className="grid gap-2 md:grid-cols-[120px_1fr]">
                  <span className="text-sm uppercase tracking-[0.3em] text-emerald-200">{item.year}</span>
                  <div>
                    <p className="text-base font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
