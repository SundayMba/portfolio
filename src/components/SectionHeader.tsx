import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

type SectionHeaderProps = {
  label: string
  title: string
  description?: string
}

function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp}>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <h2 className="mt-4 font-display text-3xl text-white">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-slate-300">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeader
