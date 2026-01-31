import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

type DevopsCardProps = {
  title: string
  description: string
  stack: string[]
}

function DevopsCard({ title, description, stack }: DevopsCardProps) {
  return (
    <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl text-white">{title}</h3>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
          DevOps
        </span>
      </div>
      <p className="mt-4 text-slate-300">{description}</p>
      <div className="mt-4 h-20 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-orange-400/10" />
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default DevopsCard
