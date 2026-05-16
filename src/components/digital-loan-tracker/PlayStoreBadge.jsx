import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { appLinks } from '../../data/digitalLoanTrackerContent'
import { smoothTransition } from './animations'

function PlayStoreBadge({ href = appLinks.playStore, compact = false }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={smoothTransition}
      className={[
        'group inline-flex items-center gap-3 rounded-[1.35rem] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-[var(--shadow-card)]',
        compact ? 'px-4 py-3' : 'px-5 py-4',
      ].join(' ')}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-500)] text-white shadow-[var(--shadow-soft)]">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M3.2 2.5c-.3.3-.5.8-.5 1.5v16c0 .7.2 1.2.5 1.5l10.1-10.5L3.2 2.5Zm11.7 9.7 2.9-3L6 2.7l8.9 9.5Zm3.9 2.1-3.1-1.8-2 2.1 2 2.1 3.1-1.8c1-.6 1-.9 1-1.3s0-.7-1-1.3ZM6 21.3l11.8-6.5-2.9-3-8.9 9.5Z" />
        </svg>
      </div>

      <div className="text-left">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Download on
        </p>
        <p className={compact ? 'text-sm font-black' : 'text-base font-black'}>
          Google Play
        </p>
      </div>

      <Download className="ml-1 h-4 w-4 text-[var(--accent-400)] transition group-hover:translate-y-0.5" />
    </motion.a>
  )
}

export default PlayStoreBadge
