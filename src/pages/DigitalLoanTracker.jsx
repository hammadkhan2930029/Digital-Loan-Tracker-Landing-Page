import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackgroundGlow from '../components/digital-loan-tracker/BackgroundGlow.jsx'
import CTASection from '../components/digital-loan-tracker/CTASection.jsx'
import ExtraInfoSection from '../components/digital-loan-tracker/ExtraInfoSection.jsx'
import FeaturesSection from '../components/digital-loan-tracker/FeaturesSection.jsx'
import Footer from '../components/digital-loan-tracker/Footer.jsx'
import Header from '../components/digital-loan-tracker/Header.jsx'
import HeroSection from '../components/digital-loan-tracker/HeroSection.jsx'
import SplashScreen from '../components/digital-loan-tracker/SplashScreen.jsx'
import WorkflowSection from '../components/digital-loan-tracker/WorkflowSection.jsx'
import { staggerContainer } from '../components/digital-loan-tracker/animations.js'

function DigitalLoanTracker() {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setShowSplash(false)
        }, 2300)

        return () => window.clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
            <SplashScreen visible={showSplash} />
            <BackgroundGlow />
            <AnimatePresence mode="wait">
                {!showSplash ? (
                    <motion.div
                        key="page-content"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="relative"
                    >
                        <Header />

                        <main className="relative z-10">
                            <HeroSection />
                            <FeaturesSection />
                            <WorkflowSection />
                            <ExtraInfoSection />
                            <CTASection />
                        </main>

                        <Footer />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}

export default DigitalLoanTracker
