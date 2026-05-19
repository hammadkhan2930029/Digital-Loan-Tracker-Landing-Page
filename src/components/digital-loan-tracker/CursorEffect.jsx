import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 230, damping: 26, mass: 0.55 })
  const springY = useSpring(cursorY, { stiffness: 230, damping: 26, mass: 0.55 })

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)')
    const updatePointer = () => setIsFinePointer(pointerQuery.matches)

    updatePointer()
    pointerQuery.addEventListener('change', updatePointer)

    return () => pointerQuery.removeEventListener('change', updatePointer)
  }, [])

  useEffect(() => {
    if (!isFinePointer) {
      return undefined
    }

    const moveCursor = (event) => {
      cursorX.set(event.clientX - 20)
      cursorY.set(event.clientY - 20)
      dotX.set(event.clientX - 4)
      dotY.set(event.clientY - 4)
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)
    const activateCursor = (event) => {
      setIsActive(Boolean(event.target.closest('a, button, [role="button"]')))
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseout', hideCursor)
    window.addEventListener('mouseover', activateCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseout', hideCursor)
      window.removeEventListener('mouseover', activateCursor)
    }
  }, [cursorX, cursorY, dotX, dotY, isFinePointer])

  if (!isFinePointer) {
    return null
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isActive ? 1.65 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10 rounded-full border border-[var(--accent-300)] bg-[var(--accent-300)]/10 shadow-[0_0_28px_rgba(236,116,24,0.28)] mix-blend-multiply"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: isVisible ? 1 : 0, scale: isActive ? 0.7 : 1 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-2 w-2 rounded-full bg-[var(--accent-400)]"
      />
    </>
  )
}

export default CursorEffect
