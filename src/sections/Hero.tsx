import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react'
import Orbit from '../components/Orbit'
import { LOADER_DURATION_MS } from '../constants'
import { links, typing } from '../data/portfolio'
import { useTyping } from '../hooks'
import './hero.css'

const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

/** The entrance begins as the loader fades, then each line follows 0.12s apart. */
const entrance = { staggerChildren: 0.12, delayChildren: LOADER_DURATION_MS / 1000 }

export default function Hero() {
  const current = useTyping(typing)

  return (
    <section id="home">
      <div className="container hero-grid">
        <motion.div initial="hidden" animate="show" transition={entrance}>
          <motion.div variants={item} className="hero-badge glass">
            Software Development + Enterprise Solutions + AI
          </motion.div>
          <motion.p variants={item} className="hero-greeting">Hi, I’m <strong>Dimple Kumar</strong></motion.p>
          <motion.h1 variants={item}>
            Building <span className="gradient-text">Intelligent Software</span> &amp; AI-Powered Solutions
          </motion.h1>
          <motion.p variants={item} className="hero-sub">
            I’m a software developer passionate about building scalable applications, enhancing enterprise systems, and developing AI-driven solutions.
          </motion.p>
          <motion.p variants={item} className="hero-sub">
            Currently focused on <span className="typing">{current}</span>
          </motion.p>
          <motion.div variants={item} className="hero-actions">
            <a className="btn btn--primary" href="#projects">Explore My Work <ArrowRight size={16} /></a>
            <a className="btn" href={links.resume} target="_blank" rel="noopener noreferrer">Download Resume <ExternalLink size={16} /></a>
            <a className="btn" href="#contact">Contact Me</a>
          </motion.div>
          <motion.div variants={item} className="hero-social">
            <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
          </motion.div>
        </motion.div>
        <Orbit />
      </div>
    </section>
  )
}
