import { useRef } from 'react'
import { useCursorTrail } from '../hooks'
import './custom-cursor.css'

/** Desktop-only pointer: an exact dot plus a ring that lags behind it. */
export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)
  useCursorTrail(ring, dot)
  return (
    <>
      <div id="cursor-ring" ref={ring} />
      <div id="cursor-dot" ref={dot} />
    </>
  )
}
