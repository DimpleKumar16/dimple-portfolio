import Reveal from '../components/Reveal'
import { tracks } from '../data/portfolio'
import './experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="eyebrow">03 / Experience</div>
          <h2>Professional experience</h2>
        </Reveal>
        <Reveal className="timeline">
          <div className="timeline-dot" />
          <div className="timeline-role">
            <h3>Junior Developer</h3>
            <div className="eyebrow" style={{ margin: '6px 0 0' }}>
              Zigma Global Environ Solutions Pvt. Ltd. · March 2026 – Present
            </div>
          </div>
        </Reveal>
        <div className="track-grid">
          {tracks.map((track, i) => (
            <Reveal key={track.title} delay={i * 0.1} className={`glass padded track${track.ai ? ' track--ai' : ''}`}>
              <h3>{track.title} <span className="tag">{track.tag}</span></h3>
              <div className="tech-tags">{track.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              <ul>{track.points.map(point => <li key={point}>{point}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
