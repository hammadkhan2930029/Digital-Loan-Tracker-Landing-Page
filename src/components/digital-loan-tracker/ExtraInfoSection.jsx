import { motion } from 'framer-motion'
import { extraCards } from '../../data/digitalLoanTrackerContent'
import { fadeUp, smoothTransition, staggerContainer } from './animations'

function ExtraInfoCard({ item }) {
  const Icon = item.icon

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={smoothTransition}
      className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)]"
    >
      <motion.div
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon className="h-9 w-9 text-[var(--brand-emerald)]" />
      </motion.div>
      <h3 className="mt-5 text-2xl font-black text-[var(--text-primary)]">{item.title}</h3>
      <p className="mt-3 leading-7 text-[var(--text-secondary)]">{item.text}</p>
    </motion.div>
  )
}

function ExtraInfoSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 md:grid-cols-3"
      >
        {extraCards.map((item) => (
          <ExtraInfoCard key={item.title} item={item} />
        ))}
      </motion.div>
    </section>
  )
}

export default ExtraInfoSection
