import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, smoothTransition } from './animations'
import PlayStoreBadge from './PlayStoreBadge.jsx'

function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2.5rem] bg-[var(--primary-500)] p-8 text-center text-white shadow-[var(--shadow-float)] md:p-14"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-10 top-10 h-24 w-24 rounded-full bg-[var(--accent-300)]/30 blur-2xl"
        />
        <motion.div
          animate={{ scale: [1.15, 0.95, 1.15], opacity: [0.18, 0.34, 0.18] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-[var(--brand-emerald)]/30 blur-2xl"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.h2 variants={fadeUp} className="text-3xl font-black md:text-5xl">
            Ready to track loans the smart way?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base font-medium leading-8 text-[var(--primary-100)] md:text-lg"
          >
            Make loan management simple, transparent, and secure with Digital Loan
            Tracker.
          </motion.p>
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={smoothTransition}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-300)] px-8 py-4 font-bold text-[var(--surface)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--accent-400)]"
          >
            <span className="text-[var(--surface)]">Contact Us</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.div variants={fadeUp} className="mt-5 flex justify-center">
            <PlayStoreBadge compact />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection
