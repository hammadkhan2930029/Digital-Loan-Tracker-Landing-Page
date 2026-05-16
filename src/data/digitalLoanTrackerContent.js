import {
  BellRing,
  CheckCircle2,
  LineChart,
  LockKeyhole,
  MailCheck,
  ReceiptText,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'

export const features = [
  {
    icon: Wallet,
    title: 'Loan Management',
    desc: 'Track given, received, pending, and completed loans in one clean dashboard.',
  },
  {
    icon: BellRing,
    title: 'Smart Notifications',
    desc: 'Keep users updated with payment alerts, confirmations, and loan activity updates.',
  },
  {
    icon: MailCheck,
    title: 'Email OTP Verification',
    desc: 'Secure registration and forgot-password flow with email-based OTP verification.',
  },
  {
    icon: ReceiptText,
    title: 'Transaction History',
    desc: 'Maintain a digital record of all loan payments, returns, and user activity.',
  },
  {
    icon: LineChart,
    title: 'Financial Insights',
    desc: 'Understand total loans, paid amount, remaining amount, and overall cash flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Access',
    desc: 'Protected login, private data handling, and smooth user account management.',
  },
]

export const steps = [
  'Create your secure account',
  'Add loan details and related members',
  'Track payment status in real time',
  'Get notified when transactions are updated',
]

export const stats = [
  { value: '100%', label: 'Digital Tracking' },
  { value: '24/7', label: 'Access Anywhere' },
  { value: 'OTP', label: 'Secure Verification' },
]

export const extraCards = [
  {
    icon: Users,
    title: 'Multi-user Friendly',
    text: 'Manage loan records between different users with clear activity tracking.',
  },
  {
    icon: LockKeyhole,
    title: 'Private & Protected',
    text: 'User access remains secure through authentication and OTP verification.',
  },
  {
    icon: CheckCircle2,
    title: 'Easy Confirmation',
    text: 'Confirm returned payments and keep every transaction properly recorded.',
  },
]

export const appLinks = {
  playStore: '#',
}
