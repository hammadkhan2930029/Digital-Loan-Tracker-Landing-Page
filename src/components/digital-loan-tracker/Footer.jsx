import { motion } from 'framer-motion'
import AppLink from './AppLink.jsx'
import { fadeUp } from './animations'

function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      className="relative z-10 border-t border-[var(--border)] px-5 py-8 text-center text-sm text-[var(--text-muted)] md:px-8"
    >
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <span>
          {'(c)'} {new Date().getFullYear()} Digital Loan Tracker. All rights
          reserved.
        </span>
        <AppLink
          href="/privacy-policy/"
          className="font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent-400)]"
        >
          Privacy Policy
        </AppLink>
      </div>
    </motion.footer>
  )
}

export default Footer
