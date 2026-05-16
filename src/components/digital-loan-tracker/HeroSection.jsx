import { motion } from 'framer-motion'
import { ArrowRight, BellRing, ShieldCheck, Smartphone } from 'lucide-react'
import { stats } from '../../data/digitalLoanTrackerContent'
import { fadeUp, scaleIn, smoothTransition, staggerContainer } from './animations'
import PlayStoreBadge from './PlayStoreBadge.jsx'

function ProgressBox({ title, amount, width }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={smoothTransition}
      className="rounded-3xl bg-[var(--surface-muted)] p-4"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-secondary)]">{title}</p>
        <p className="font-bold text-[var(--brand-emerald)]">{amount}</p>
      </div>
      <div className="mt-3 h-2 rounded-full bg-[var(--primary-100)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-2 rounded-full bg-[var(--accent-300)]"
        />
      </div>
    </motion.div>
  )
}

function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer}
      className="space-y-7"
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--accent-400)] shadow-[var(--shadow-soft)]"
      >
        <ShieldCheck className="h-4 w-4" />
        Secure, simple and smart loan tracking
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="text-4xl font-black leading-tight tracking-tight text-[var(--text-primary)] md:text-6xl"
      >
        Manage loans with confidence, clarity and control.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg"
      >
        Digital Loan Tracker helps users record, monitor, and manage personal or
        business loans with secure OTP verification, smart notifications, and
        complete transaction history.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
        <motion.a
          href="#features"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={smoothTransition}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-500)] px-7 py-3.5 font-bold text-[var(--surface)] shadow-[var(--shadow-float)] transition hover:bg-[var(--primary-600)]"
        >
          <span className="text-[var(--surface)]">Explore Features</span>
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </motion.a>
        <motion.a
          href="#workflow"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={smoothTransition}
          className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3.5 font-bold text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--primary-50)]"
        >
          <span className="text-[var(--text-primary)]">How It Works</span>
        </motion.a>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
        <PlayStoreBadge />
        <p className="text-sm text-[var(--text-secondary)]">
          Install the app for faster loan updates and secure tracking.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="grid max-w-xl grid-cols-3 gap-3 pt-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -6 }}
            transition={smoothTransition}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)]"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="text-2xl font-black text-[var(--primary-500)]"
            >
              {item.value}
            </motion.p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function AppPreviewCard() {
  return (
    <motion.div variants={scaleIn} className="relative mx-auto w-full max-w-md">
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, -1.4, 0, 1.4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface-elevated)] p-5 shadow-[var(--shadow-float)]"
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={smoothTransition}
          className="rounded-[2rem] bg-[var(--primary-700)] p-5 ring-1 ring-[var(--primary-600)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Total Balance</p>
              <h3 className="text-3xl font-black text-white">PKR 850,000</h3>
            </div>
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl bg-[var(--accent-300)]/20 p-3"
            >
              <Smartphone className="h-7 w-7 text-[var(--accent-200)]" />
            </motion.div>
          </div>

          <div className="space-y-3">
            <ProgressBox title="Paid Amount" amount="PKR 520,000" width="64%" />
            <ProgressBox
              title="Remaining Amount"
              amount="PKR 330,000"
              width="39%"
            />
          </div>

          <motion.div
            animate={{ opacity: [0.86, 1, 0.86] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-5 rounded-3xl border border-[var(--success)]/30 bg-[var(--success-soft)]/10 p-4"
          >
            <div className="flex items-start gap-3">
              <BellRing className="mt-1 h-5 w-5 text-[var(--success)]" />
              <div>
                <p className="font-bold text-white">Payment Updated</p>
                <p className="text-sm text-slate-300">
                  A new loan return has been confirmed successfully.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function HeroSection() {
  return (
    <motion.section
      variants={staggerContainer}
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20"
    >
      <HeroContent />
      <AppPreviewCard />
    </motion.section>
  )
}

export default HeroSection
