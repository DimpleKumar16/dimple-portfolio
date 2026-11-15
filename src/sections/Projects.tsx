import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Minus, Plus } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'
import './projects.css'

function Diagram({ flow }: { flow: string[] }) {
  return (
    <svg viewBox="0 0 400 110" role="img" aria-label={`Flow: ${flow.join(' to ')}`}>
      {flow.map((step, i) => (
        <g key={step}>
          <rect x={6 + i * 103} y="35" width="80" height="40" rx="8" />
          <text x={6 + i * 103 + 40} y="59" textAnchor="middle">{step}</text>
        </g>
      ))}
      <path d="M86 55H109M189 55H212M292 55H315" />
    </svg>
  )
}

function Card({ project, index }: { project: typeof projects[number]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal delay={index * 0.1}>
      <motion.article className="glass project-card" whileHover={{ y: -8 }}>
        <div className="project-diagram"><Diagram flow={project.flow} /></div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="tech-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
          <div className={`details${open ? ' is-open' : ''}`}>
            <div><ul>{project.contributions.map(c => <li key={c}>{c}</li>)}</ul></div>
          </div>
          <button className="btn" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <>Hide details <Minus size={16} /></> : <>Key contributions <Plus size={16} /></>}
          </button>
          {project.repo
            ? <a className="btn" href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={16} /> Source</a>
            : <span className="note">Source link: not public.</span>}
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="eyebrow">04 / Projects</div>
          <h2>Featured projects</h2>
          <p className="lead">Diagrams illustrate the general flow of each system. Expand a card for details.</p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, i) => <Card key={project.title} project={project} index={i} />)}
        </div>
      </div>
    </section>
  )
}
