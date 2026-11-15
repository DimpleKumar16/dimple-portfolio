import Reveal from '../components/Reveal'
import { careers, education } from '../data/portfolio'
import './education.css'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <div className="eyebrow">05 / Education</div>
          <h2>Education</h2>
        </Reveal>
        <div className="education-grid">
          <Reveal className="glass padded education-card">
            <div className="year">{education.mca.years}</div>
            <h3>{education.mca.degree}</h3>
            <p>{education.mca.school}</p>
            <p><b>CGPA: {education.mca.cgpa}</b></p>
          </Reveal>
          <Reveal className="glass padded education-card" delay={0.1}>
            <div className="year" contentEditable suppressContentEditableWarning spellCheck={false} aria-label="Edit BCA duration">
              {education.bca.years}
            </div>
            <h3>{education.bca.degree}</h3>
            <p contentEditable suppressContentEditableWarning spellCheck={false} aria-label="Edit BCA college">
              {education.bca.school}
            </p>
          </Reveal>
        </div>
        <Reveal><h2 style={{ marginTop: 80 }}>Career interests</h2></Reveal>
        <div className="career-grid">
          {careers.map((career, i) => (
            <Reveal key={career} delay={i * 0.05} className="glass career-card">
              {career}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
