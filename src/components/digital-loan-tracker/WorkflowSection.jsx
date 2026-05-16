import { motion } from 'framer-motion'
import { steps } from '../../data/digitalLoanTrackerContent'
import { fadeUp, smoothTransition, staggerContainer } from './animations'

function StepItem({ step, index }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ x: 8, scale: 1.01 }}
      transition={smoothTransition}
      className="flex items-center gap-4 rounded-3xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)] shadow-[var(--shadow-soft)]"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: index * 0.15,
          ease: 'easeInOut',
        }}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-500)] font-black text-white"
      >
        {index + 1}
      </motion.div>
      <p className="font-semibold text-[var(--text-primary)]">{step}</p>
    </motion.div>
  )
}

function WorkflowSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      id="workflow"
      className="mx-auto max-w-7xl px-5 py-16 md:px-8"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={smoothTransition}
        className="grid items-center gap-10 rounded-[2.5rem] border border-[var(--border)] bg-[var(--brand-cream)] p-6 shadow-[var(--shadow-card)] md:grid-cols-2 md:p-10"
      >
        <motion.div variants={fadeUp}>
          <p className="font-bold uppercase tracking-[0.25em] text-[var(--brand-rust)]">
            Simple Workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-[var(--brand-ink)] md:text-5xl">
            From loan entry to payment confirmation
          </h2>
          <p className="mt-5 leading-8 text-[var(--brand-slate)]">
            Digital Loan Tracker keeps the complete journey simple, secure, and
            easy to understand for every user.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {steps.map((step, index) => (
            <StepItem key={step} step={step} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default WorkflowSection
