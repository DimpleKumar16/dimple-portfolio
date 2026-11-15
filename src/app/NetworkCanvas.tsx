import { useRef } from 'react'
import { useNetworkCanvas } from '../hooks'
import './network-canvas.css'

/** Full-viewport decorative particle constellation behind the page. */
export default function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useNetworkCanvas(ref)
  return <canvas id="network-canvas" ref={ref} aria-hidden="true" />
}
