import { motion } from 'framer-motion'
import { features } from '../../data/digitalLoanTrackerContent'
import { fadeUp, smoothTransition, staggerContainer } from './animations'
import SectionHeading from './SectionHeading.jsx'

function FeatureCard({ feature }) {
  const Icon = feature.icon

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10, scale: 1.015 }}
      transition={smoothTransition}
      className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition hover:bg-[var(--primary-50)]"
    >
      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={smoothTransition}
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-50)] text-[var(--accent-400)] ring-1 ring-[var(--accent-100)]"
      >
        <Icon className="h-7 w-7" />
      </motion.div>
      <h3 className="text-xl font-black text-[var(--text-primary)]">{feature.title}</h3>
      <p className="mt-3 leading-7 text-[var(--text-secondary)]">{feature.desc}</p>
    </motion.div>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionHeading
        label="Core Features"
        title="Everything you need to manage loans digitally"
        description="A clean and practical finance app designed to make loan records, payments, and reminders easier to manage."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-70px' }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </motion.div>
    </section>
  )
}

export default FeaturesSection
