import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A custom two-layer cursor: a small solid dot that tracks precisely, and a
 * larger springy ring that lags behind and expands over interactive elements.
 * Hidden on touch devices (where a cursor makes no sense).
 */
export default function Cursor() {
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })

  useEffect(() => {
    // Only enable on fine pointers with hover support.
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mql.matches)
    if (!mql.matches) return

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)

      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, [data-cursor="hover"], input, textarea',
      )
      setHovering(Boolean(interactive))
    }
    const leave = () => setVisible(false)

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Springy ring */}
      <motion.div
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-neon/70 mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      {/* Precise dot */}
      <motion.div
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-neon shadow-glow"
        style={{ x, y }}
        animate={{ scale: hovering ? 0.5 : 1 }}
      />
    </div>
  )
}
