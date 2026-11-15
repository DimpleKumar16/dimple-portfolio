import { useState } from 'react'
import { Menu, Moon, X } from 'lucide-react'
import { nav } from '../data/portfolio'
import './header.css'

/** Scroll distance after which the bar gains its glass background. */
const SCROLLED_AT = 20

const label = (id: string) => id[0].toUpperCase() + id.slice(1)

type Props = {
  /** Current scroll offset, used to style the bar once the page has moved. */
  offset: number
  /** Section id currently in view, highlighted in the links. */
  activeId: string
  onToggleTheme: () => void
}

export default function Header({ offset, activeId, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={offset > SCROLLED_AT ? 'is-scrolled' : ''}>
      <div className="container">
        <nav aria-label="Main">
          <a href="#home" className="logo"><b>DK</b><span>Dimple Kumar</span></a>
          <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="nav-links">
            {nav.map(id => (
              <a key={id} href={`#${id}`} className={activeId === id ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>
                {label(id)}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle light and dark theme">
              <Moon size={18} />
            </button>
            <button
              className="icon-btn"
              id="burger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="nav-links"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
