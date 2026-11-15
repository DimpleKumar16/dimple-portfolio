import { RefObject, useEffect } from 'react'

/** How much of the remaining distance the ring closes each frame. */
const RING_EASING = 0.16
/** Elements that make the ring grow when hovered. */
const INTERACTIVE = 'a,button,.tab,input,textarea'

/**
 * Drives the custom pointer: the dot tracks the mouse exactly while the ring
 * trails behind it. Skipped on touch devices and when reduced motion is set.
 */
export function useCursorTrail(ring: RefObject<HTMLDivElement>, dot: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const fineHover = matchMedia('(hover:hover) and (pointer:fine)').matches
    if (!fineHover || matchMedia('(prefers-reduced-motion:reduce)').matches) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let frame = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      document.body.classList.add('has-custom-cursor')
      if (dot.current) dot.current.style.transform = `translate(${mouseX}px,${mouseY}px)`
      document.body.classList.toggle('cursor-hover', !!(e.target as Element).closest?.(INTERACTIVE))
    }

    const loop = () => {
      ringX += (mouseX - ringX) * RING_EASING
      ringY += (mouseY - ringY) * RING_EASING
      if (ring.current) ring.current.style.transform = `translate(${ringX}px,${ringY}px)`
      frame = requestAnimationFrame(loop)
    }

    addEventListener('mousemove', onMove)
    loop()
    return () => {
      removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [ring, dot])
}
