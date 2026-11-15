import { Briefcase, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import { interests } from '../data/portfolio'
import './about.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="eyebrow">01 / About</div>
          <h2>Code that connects <span className="gradient-text">business</span> and <span className="gradient-text">intelligence</span></h2>
        </Reveal>
        <Reveal>
          <p className="lead">
            I build across the stack: enterprise ERP modules on one side, camera-driven computer vision on the other. I enjoy turning real operational problems into reliable software.
          </p>
        </Reveal>
        <div className="about-grid">
          <Reveal className="glass padded">
            <div className="fact">
              <div className="fact-icon"><Briefcase size={18} /></div>
              <div>
                <b>Junior Developer</b>
                <small>Zigma Global Environ Solutions Pvt. Ltd. (Part of the Blueplanet Group) · since March 2026</small>
              </div>
            </div>
            <div className="fact">
              <div className="fact-icon"><GraduationCap size={18} /></div>
              <div>
                <b>Master of Computer Applications</b>
                <small>Dr. M.G.R. Educational and Research Institute · CGPA 7.9</small>
              </div>
            </div>
          </Reveal>
          <Reveal className="glass padded" delay={0.1}>
            <b>Interests</b>
            <div className="chips" style={{ marginTop: 14 }}>
              {interests.map(interest => <span className="chip" key={interest}>{interest}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
