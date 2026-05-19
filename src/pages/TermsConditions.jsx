import { motion } from 'framer-motion'
import logoImage from '../assets/logo.jpg'
import AppLink from '../components/digital-loan-tracker/AppLink.jsx'
import BackgroundGlow from '../components/digital-loan-tracker/BackgroundGlow.jsx'
import CursorEffect from '../components/digital-loan-tracker/CursorEffect.jsx'
import Footer from '../components/digital-loan-tracker/Footer.jsx'
import { fadeUp, staggerContainer } from '../components/digital-loan-tracker/animations.js'

const termsSections = [
  {
    title: '1. Nature of Service',
    intro: 'Digital Loan Tracker is:',
    items: [
      'A record-keeping tool',
      'Designed to track lending and borrowing between individuals',
    ],
    outro: 'It is NOT:',
    outroItems: [
      'A financial institution',
      'A lending platform',
      'A legal authority',
    ],
  },
  {
    title: '2. User Responsibility',
    intro: 'You agree that:',
    items: [
      'All data entered is your responsibility',
      'You will use the app lawfully',
      'You will not misuse the platform',
    ],
  },
  {
    title: '3. Accuracy of Records',
    items: [
      'The app does not verify transactions',
      'Entries are user-generated',
      'We do not guarantee correctness',
    ],
  },
  {
    title: '4. No Financial Liability',
    intro: 'We are not responsible for:',
    items: [
      'Financial losses',
      'Disputes between users',
      'Misuse of records',
    ],
  },
  {
    title: '5. Attachments & Content',
    intro: 'You agree not to upload:',
    items: [
      'Illegal content',
      'Fraudulent documents',
      "Content violating others' rights",
    ],
  },
  {
    title: '6. Account Usage',
    items: [
      'You are responsible for maintaining account security',
      'Unauthorized use must be reported immediately',
    ],
  },
  {
    title: '7. Termination',
    intro: 'We may suspend or terminate accounts that:',
    items: ['Violate terms', 'Misuse the app'],
  },
  {
    title: '8. Modifications',
    intro: 'We may update features or terms at any time.',
  },
  {
    title: '9. Limitation of Liability',
    intro: 'We are not liable for:',
    items: [
      'Indirect damages',
      'Loss of data',
      'Financial disputes',
    ],
  },
  {
    title: '10. Governing Law',
    intro: 'These terms are governed by the laws of Pakistan.',
  },
  {
    title: '11. Contact',
    items: ['Email: digiloantracker@gmail.com'],
  },
]

function TermsSection({ section }) {
  return (
    <motion.section
      variants={fadeUp}
      className="border-t border-[var(--border)] py-7 first:border-t-0 first:pt-0"
    >
      <h2 className="text-xl font-black text-[var(--text-primary)]">
        {section.title}
      </h2>

      {section.intro ? (
        <p className="mt-4 leading-8 text-[var(--text-secondary)]">
          {section.intro}
        </p>
      ) : null}

      {section.items ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {section.outro ? (
        <p className="mt-5 leading-8 text-[var(--text-secondary)]">
          {section.outro}
        </p>
      ) : null}

      {section.outroItems ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          {section.outroItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </motion.section>
  )
}

function TermsConditions() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <CursorEffect />
      <BackgroundGlow />

      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 py-6 md:px-8">
        <AppLink href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[var(--surface)] shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]">
            <img
              src={logoImage}
              alt="Digital Loan Tracker logo"
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight">
              Digital Loan Tracker
            </span>
            <span className="block text-xs text-[var(--text-secondary)]">
              Terms & Conditions
            </span>
          </span>
        </AppLink>

        <AppLink
          href="/"
          className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm font-bold text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--primary-50)]"
        >
          Home
        </AppLink>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-16 pt-8 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] md:p-10"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <p className="font-bold uppercase tracking-[0.25em] text-[var(--accent-400)]">
              Effective Date: 24 April 2026
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text-primary)] md:text-6xl">
              Terms & Conditions
            </h1>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--text-secondary)]">
              By using Digital Loan Tracker, you agree to the following terms.
            </p>
          </motion.div>

          {termsSections.map((section) => (
            <TermsSection key={section.title} section={section} />
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default TermsConditions
