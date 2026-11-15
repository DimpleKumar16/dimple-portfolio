import { CSSProperties, MouseEvent, useState } from 'react'
import Reveal from '../components/Reveal'
import { skills } from '../data/portfolio'
import './skills.css'

const categories = Object.keys(skills)

/** Maximum tilt applied to a card as the pointer crosses it. */
const MAX_TILT_DEG = 14

const tilt = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget
  const box = card.getBoundingClientRect()
  const x = (e.clientX - box.left) / box.width - 0.5
  const y = (e.clientY - box.top) / box.height - 0.5
  card.style.transform = `perspective(600px) rotateY(${x * MAX_TILT_DEG}deg) rotateX(${-y * MAX_TILT_DEG}deg) translateZ(6px)`
}

const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = ''
}

export default function Skills() {
  const [category, setCategory] = useState(categories[0])

  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow">02 / Skills</div>
          <h2>Technical toolkit</h2>
          <p className="lead">Technologies I work with, grouped by area. Pick a category to explore.</p>
        </Reveal>
        <div className="tabs" role="tablist">
          {categories.map(name => (
            <button key={name} role="tab" className="tab" aria-selected={name === category} onClick={() => setCategory(name)}>
              {name}
            </button>
          ))}
        </div>
        {/* key={category} remounts the grid so the pop-in replays on every switch. */}
        <div className="skill-grid" role="tabpanel" key={category}>
          {skills[category].map((name, i) => (
            <div
              key={name}
              className="glass skill-card"
              style={{ '--index': i } as CSSProperties}
              onMouseMove={tilt}
              onMouseLeave={resetTilt}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              <b>{name}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
