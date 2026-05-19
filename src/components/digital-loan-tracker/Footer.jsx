import { motion } from 'framer-motion'
import { FileText, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import logoImage from '../../assets/logo.jpg'
import AppLink from './AppLink.jsx'
import { fadeUp } from './animations'

const footerLinks = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy/',
    icon: ShieldCheck,
  },
  {
    label: 'Terms & Conditions',
    href: '/terms-and-conditions/',
    icon: FileText,
  },
]

const contactItems = [
  {
    label: 'Karachi, Pakistan',
    href: null,
    icon: MapPin,
  },
  {
    label: 'info@cogentdevs.com',
    href: 'mailto:info@cogentdevs.com',
    icon: Mail,
  },
  {
    label: '+92 300 1234567',
    href: 'tel:+923001234567',
    icon: Phone,
  },
]

function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      className="relative z-10 overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] px-5 py-12 text-sm text-[var(--text-muted)] md:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--accent-300)]/70" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:items-start">
        <div>
          <AppLink href="/" className="inline-flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] shadow-[var(--shadow-soft)]">
              <img
                src={logoImage}
                alt="Digital Loan Tracker logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-xl font-black tracking-tight text-[var(--text-primary)]">
              Digital Loan Tracker
            </span>
          </AppLink>
          <p className="mt-3 max-w-sm leading-7 text-[var(--text-secondary)]">
            Simple, secure record keeping for personal lending and borrowing.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[var(--text-primary)]">
            Others
          </h2>
          <nav className="mt-4 flex flex-col gap-3">
            {footerLinks.map(({ href, icon: Icon, label }) => (
              <AppLink
                key={label}
                href={href}
                className="group flex items-center gap-3 font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent-400)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--accent-400)] transition group-hover:border-[var(--accent-200)] group-hover:bg-[var(--accent-50)]">
                  <Icon size={17} strokeWidth={2.3} />
                </span>
                <span>{label}</span>
              </AppLink>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[var(--text-primary)]">
            Contact
          </h2>
          <address className="mt-4 flex flex-col gap-3 not-italic">
            {contactItems.map(({ href, icon: Icon, label }) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--accent-400)]">
                    <Icon size={17} strokeWidth={2.3} />
                  </span>
                  <span>{label}</span>
                </>
              )

              if (!href) {
                return (
                  <p
                    key={label}
                    className="flex items-center gap-3 font-semibold text-[var(--text-secondary)]"
                  >
                    {content}
                  </p>
                )
              }

              return (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent-400)]"
                >
                  {content}
                </a>
              )
            })}
          </address>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-[var(--border)] pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span>
          Copyright {'\u00A9'} {new Date().getFullYear()} Cogent Devs. All
          Rights Reserved.
        </span>
        <span className="font-semibold text-[var(--text-secondary)]">
          Crafted by Cogent Devs
        </span>
      </div>
    </motion.footer>
  )
}

export default Footer
