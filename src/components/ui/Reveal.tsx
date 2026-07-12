import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/**
 * Scroll-triggered reveal. Fades + slides its children up when they enter the
 * viewport, animating only once. Uses a shared easing curve for consistency.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
