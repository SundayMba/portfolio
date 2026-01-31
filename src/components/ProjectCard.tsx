import { motion } from 'framer-motion'
import type { Complexity } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

type ProjectCardProps = {
  title: string
  complexity: Complexity
  description: string
  stack: string[]
}

function ProjectCard({ title, complexity, description, stack }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl text-white">{title}</h3>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{complexity}</span>
      </div>
      <p className="mt-4 text-slate-300">{description}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-white/10 bg-[#0b0f14] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Placeholder Preview</p>
          <div className="mt-4 h-28 rounded-lg bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-orange-400/20" />
          <p className="mt-3 text-xs text-slate-400">Link coming soon</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
