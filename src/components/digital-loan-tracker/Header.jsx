import { motion } from 'framer-motion'
import logoImage from '../../assets/logo.jpg'
import { fadeUp, smoothTransition } from './animations'

function Header() {
  return (
    <motion.header
      variants={fadeUp}
      className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8"
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={smoothTransition}
        className="flex items-center gap-3"
      >
        <motion.div
          animate={{ rotate: [0, -6, 6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[var(--surface)] shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
        >
          <img
            src={logoImage}
            alt="Digital Loan Tracker logo"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
            Digital Loan Tracker
          </h1>
          <p className="text-xs text-[var(--text-secondary)]">
            Smart finance management
          </p>
        </div>
      </motion.div>

      <motion.a
        href="#contact"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={smoothTransition}
        className="hidden items-center rounded-full bg-[var(--accent-300)] px-5 py-2.5 text-sm font-semibold text-[var(--surface)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--accent-400)] md:inline-flex"
      >
        <span className="text-[var(--surface)]">Get Started</span>
      </motion.a>
    </motion.header>
  )
}

export default Header
