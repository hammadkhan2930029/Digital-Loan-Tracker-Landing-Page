import { motion } from 'framer-motion'
import { fadeUp } from './animations'

function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      className="relative z-10 border-t border-[var(--border)] px-5 py-8 text-center text-sm text-[var(--text-muted)] md:px-8"
    >
      {'(c)'} {new Date().getFullYear()} Digital Loan Tracker. All rights reserved.
    </motion.footer>
  )
}

export default Footer
