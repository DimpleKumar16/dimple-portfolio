import { ArrowUp } from 'lucide-react'
import './back-to-top.css'

/** Scroll distance after which the button appears. */
const VISIBLE_AT = 600

export default function BackToTop({ offset }: { offset: number }) {
  return (
    <button
      className={`icon-btn${offset > VISIBLE_AT ? ' is-visible' : ''}`}
      id="back-to-top"
      aria-label="Back to top"
      onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={18} />
    </button>
  )
}
