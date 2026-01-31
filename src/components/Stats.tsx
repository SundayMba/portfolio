import { motion } from 'framer-motion'
import { stats } from '../data/portfolio'

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

function Stats() {
  return (
    <motion.div
      className="mt-16 grid gap-4 sm:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shimmer"
        >
          <div className="text-3xl font-display text-white">{stat.value}</div>
          <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Stats
