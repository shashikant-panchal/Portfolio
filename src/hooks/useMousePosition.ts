import { useEffect, useState } from 'react'

export type MousePosition = { x: number; y: number }

/**
 * Tracks the pointer position normalized to the range [-1, 1] on both axes,
 * with the origin at the center of the viewport. Handy for parallax and for
 * feeding the 3D scene a stable, resolution-independent signal.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return position
}
