import { CSSProperties, useEffect, useRef, useState } from 'react'
import { orbitInner, orbitOuter } from '../data/portfolio'
import './orbit.css'

/** Radius of each ring as a fraction of the orbit's width. */
const INNER_RADIUS = 0.31
const OUTER_RADIUS = 0.5
const FALLBACK_WIDTH = 400

type RingProps = {
  /** `ring--inner` or `ring--outer`; picks the speed and direction. */
  modifier: string
  labels: string[]
  radius: number
}

function Ring({ modifier, labels, radius }: RingProps) {
  return (
    <div className={`ring ${modifier}`}>
      {labels.map((label, i) => {
        const angle = (360 / labels.length) * i
        return (
          <div className="ring-node" key={label} style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}>
            {/* --angle lets the label counter-rotate by exactly its own offset. */}
            <i style={{ '--angle': `${angle}deg` } as CSSProperties}>{label}</i>
          </div>
        )
      })}
    </div>
  )
}

/** Technology labels orbiting the central AI core in the hero. */
export default function Orbit() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(FALLBACK_WIDTH)

  useEffect(() => {
    const measure = () => setWidth(ref.current?.offsetWidth ?? FALLBACK_WIDTH)
    measure()
    addEventListener('resize', measure)
    return () => removeEventListener('resize', measure)
  }, [])

  return (
    <div className="orbit" ref={ref} aria-label="Technology orbit around an AI core">
      <Ring modifier="ring--outer" labels={orbitOuter} radius={width * OUTER_RADIUS} />
      <Ring modifier="ring--inner" labels={orbitInner} radius={width * INNER_RADIUS} />
      <div className="orbit-core">AI</div>
    </div>
  )
}
