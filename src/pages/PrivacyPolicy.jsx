import { motion } from 'framer-motion'
import logoImage from '../assets/logo.jpg'
import AppLink from '../components/digital-loan-tracker/AppLink.jsx'
import BackgroundGlow from '../components/digital-loan-tracker/BackgroundGlow.jsx'
import CursorEffect from '../components/digital-loan-tracker/CursorEffect.jsx'
import { fadeUp, staggerContainer } from '../components/digital-loan-tracker/animations.js'

const policySections = [
  {
    title: '1. Information We Collect',
    groups: [
      {
        label: 'a. Personal Information',
        items: ['Name', 'Phone number', 'Email (optional)'],
      },
      {
        label: 'b. User Data',
        items: [
          'Contacts added by you',
          'Transaction records (amount, date, notes)',
          'Attachments (images, PDFs such as payment slips)',
        ],
      },
      {
        label: 'c. Device Information',
        items: [
          'Device type',
          'OS version',
          'App usage data (for performance and analytics)',
        ],
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    intro: 'We use your data to:',
    items: [
      'Provide and operate the app',
      'Maintain your transaction records',
      'Improve user experience',
      'Send reminders (if enabled)',
      'Ensure security and prevent misuse',
    ],
  },
  {
    title: '3. Data Storage & Security',
    items: [
      'Your data may be stored securely on cloud servers',
      'We implement reasonable security measures to protect your data',
      'However, no system is 100% secure',
    ],
  },
  {
    title: '4. Attachments (Proof Uploads)',
    items: [
      'Files uploaded (images/PDFs) are stored securely',
      'These are accessible only to you unless you share them',
    ],
  },
  {
    title: '5. Data Sharing',
    intro: 'We do NOT sell your data. We may share data only:',
    items: ['With service providers (hosting, analytics)', 'If required by law'],
  },
  {
    title: '6. User Responsibility',
    intro: 'You are responsible for:',
    items: [
      'Accuracy of data entered',
      'Content uploaded (including proof documents)',
    ],
  },
  {
    title: '7. Data Retention',
    items: [
      'Data is stored as long as your account is active',
      'You may request deletion at any time',
    ],
  },
  {
    title: '8. Your Rights',
    intro: 'You can:',
    items: [
      'Access your data',
      'Update your information',
      'Request deletion of your account',
    ],
  },
  {
    title: '9. Third-Party Services',
    intro:
      'The app may use cloud storage providers and analytics tools. These services have their own privacy policies.',
  },
  {
    title: '10. Changes to This Policy',
    intro:
      'We may update this policy from time to time. Changes will be notified within the app.',
  },
  {
    title: '11. Contact Us',
    intro: 'For questions:',
    items: ['Email: bachatcommitee@gmail.com'],
  },
]

function PolicySection({ section }) {
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

      {section.groups ? (
        <div className="mt-5 space-y-5">
          {section.groups.map((group) => (
            <div key={group.label}>
              <h3 className="font-bold text-[var(--text-primary)]">
                {group.label}
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {section.items ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </motion.section>
  )
}

function PrivacyPolicy() {
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
              Privacy Policy
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
              Effective Date: April 24, 2026
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text-primary)] md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--text-secondary)]">
              This Privacy Policy describes how Digital Loan Tracker ("we",
              "our", "us") collects, uses, and protects your information when
              you use our mobile application ("App").
            </p>
          </motion.div>

          {policySections.map((section) => (
            <PolicySection key={section.title} section={section} />
          ))}
        </motion.div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
