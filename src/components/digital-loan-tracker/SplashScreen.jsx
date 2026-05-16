import { AnimatePresence, motion } from 'framer-motion'
import { LineChart, ShieldCheck, Wallet } from 'lucide-react'
import logoImage from '../../assets/logo.jpg'

function SplashScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
          className="fixed inset-0 z-50 overflow-hidden bg-[var(--primary-700)]"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[-10%] top-[-15%] h-80 w-80 rounded-full bg-[var(--accent-300)]/30 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-12%] right-[-8%] h-96 w-96 rounded-full bg-[var(--brand-emerald)]/25 blur-3xl"
          />

          <div className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.03, y: -18 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/8 p-8 text-center text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.9rem] bg-white/10 ring-1 ring-white/15"
              >
                <img
                  src={logoImage}
                  alt="Digital Loan Tracker logo"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mt-6 text-3xl font-black tracking-tight md:text-4xl"
              >
                Digital Loan Tracker
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.65 }}
                className="mt-3 text-sm leading-7 text-[var(--primary-100)] md:text-base"
              >
                Secure tracking, smart reminders, and smooth finance management
                in one experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.65 }}
                className="mt-8 grid grid-cols-3 gap-3"
              >
                {[ShieldCheck, LineChart, Wallet].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: index * 0.18,
                      ease: 'easeInOut',
                    }}
                    className="rounded-2xl border border-white/10 bg-white/8 px-3 py-4"
                  >
                    <Icon className="mx-auto h-5 w-5 text-[var(--accent-200)]" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.7 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-8"
              >
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: ['-100%', '0%', '100%'] }}
                    transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full w-1/2 rounded-full bg-[linear-gradient(90deg,var(--accent-200),var(--accent-400),var(--brand-emerald))]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default SplashScreen
