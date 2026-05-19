import DigitalLoanTracker from './pages/DigitalLoanTracker.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {
  if (window.location.pathname === '/privacy-policy') {
    return <PrivacyPolicy />
  }

  return <DigitalLoanTracker />
}

export default App
