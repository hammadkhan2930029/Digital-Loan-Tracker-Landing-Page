import { useEffect, useState } from 'react'
import DigitalLoanTracker from './pages/DigitalLoanTracker.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {
  const [pathname, setPathname] = useState(() =>
    window.location.pathname.replace(/\/$/, ''),
  )

  useEffect(() => {
    const updatePathname = () => {
      setPathname(window.location.pathname.replace(/\/$/, ''))
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('popstate', updatePathname)

    return () => window.removeEventListener('popstate', updatePathname)
  }, [])

  if (pathname === '/privacy-policy') {
    return <PrivacyPolicy />
  }

  return <DigitalLoanTracker />
}

export default App
