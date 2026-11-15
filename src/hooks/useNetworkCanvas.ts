import { RefObject, useEffect } from 'react'

const MAX_PARTICLES = 70
/** One particle per this many square pixels, up to MAX_PARTICLES. */
const AREA_PER_PARTICLE = 20000
/** Particles closer than this are joined by a line. */
const LINK_DISTANCE = 130
/** Particles this close to the pointer are joined to it. */
const POINTER_DISTANCE = 150
const OFFSCREEN = -999

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

/**
 * Animated constellation behind the page: drifting particles that link to each
 * other and to the pointer. Colour comes from the `--particle-rgb` token, so it
 * follows the theme. With reduced motion set it paints one static frame.
 */
export function useNetworkCanvas(ref: RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = matchMedia('(prefers-reduced-motion:reduce)').matches
    let width = 0
    let height = 0
    let frame = 0
    let particles: Particle[] = []
    const pointer = { x: OFFSCREEN, y: OFFSCREEN }

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      width = innerWidth
      height = innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(MAX_PARTICLES, (width * height) / AREA_PER_PARTICLE))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const rgb = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim() || '80,210,255'

      particles.forEach((p, i) => {
        if (!reduceMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
        ctx.fillStyle = `rgba(${rgb},.7)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d >= LINK_DISTANCE) continue
          ctx.strokeStyle = `rgba(${rgb},${0.28 * (1 - d / LINK_DISTANCE)})`
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()
        }

        const toPointer = Math.hypot(p.x - pointer.x, p.y - pointer.y)
        if (toPointer < POINTER_DISTANCE) {
          ctx.strokeStyle = `rgba(${rgb},${0.5 * (1 - toPointer / POINTER_DISTANCE)})`
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.stroke()
        }
      })

      if (!document.hidden && !reduceMotion) frame = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }

    // Restart the loop when the tab comes back; it stops itself while hidden.
    const onVisibility = () => {
      if (document.hidden || reduceMotion) return
      cancelAnimationFrame(frame)
      draw()
    }

    resize()
    draw()
    addEventListener('resize', resize)
    addEventListener('mousemove', onMove)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(frame)
      removeEventListener('resize', resize)
      removeEventListener('mousemove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [ref])
}
