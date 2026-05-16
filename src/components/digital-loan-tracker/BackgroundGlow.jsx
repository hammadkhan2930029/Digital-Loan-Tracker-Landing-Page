import { motion } from 'framer-motion'

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-60">
      <motion.div
        animate={{ x: [0, 26, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[var(--accent-100)] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -22, 0], y: [0, -16, 0], scale: [1.04, 0.96, 1.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-[var(--primary-100)] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -24, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--brand-sand)] blur-3xl"
      />
    </div>
  )
}

export default BackgroundGlow
