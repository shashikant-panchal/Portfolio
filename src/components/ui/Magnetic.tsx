import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type MagneticProps = {
  children: ReactNode
  /** How far the element is pulled toward the pointer (px at the edge). */
  strength?: number
  className?: string
}

/**
 * Wraps children so they are magnetically pulled toward the cursor while it
 * hovers, then spring back to rest on leave. Great for buttons and icons.
 */
export default function Magnetic({
  children,
  strength = 24,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 250, damping: 15, mass: 0.5 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / (rect.width / 2)) * strength)
    y.set((relY / (rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      data-cursor="hover"
    >
      {children}
    </motion.div>
  )
}
