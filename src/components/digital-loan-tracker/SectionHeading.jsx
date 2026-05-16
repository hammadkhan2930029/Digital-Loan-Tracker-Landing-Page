import { motion } from 'framer-motion'
import { fadeUp } from './animations'

function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="font-bold uppercase tracking-[0.25em] text-[var(--accent-400)]">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-[var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-[var(--text-secondary)]">{description}</p>
    </motion.div>
  )
}

export default SectionHeading
