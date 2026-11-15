import { FormEvent, useState } from 'react'
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import Reveal from '../components/Reveal'
import { links } from '../data/portfolio'
import './contact.css'

const DEFAULT_STATUS = 'Copies your message so you can send it via LinkedIn.'

export default function Contact() {
  const [status, setStatus] = useState(DEFAULT_STATUS)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const text = `From: ${form.get('name')} <${form.get('email')}>\n\n${form.get('message')}`

    if (links.email) {
      location.href = `mailto:${links.email}?subject=Portfolio%20enquiry&body=${encodeURIComponent(text)}`
      return
    }
    navigator.clipboard?.writeText(text).then(
      () => setStatus('Message copied. Paste it into a LinkedIn message to send.'),
      () => setStatus('Could not copy automatically. Please copy your message manually.'),
    )
  }

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="eyebrow">06 / Contact</div>
          <h2>Let’s <span className="gradient-text">connect</span></h2>
          <p className="lead">Open to software, backend, full-stack and AI application roles.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-links">
            <a className="glass" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} /><div><b>LinkedIn</b><small>dimple-kumar-a32663362</small></div>
            </a>
            <a className="glass" href={links.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} /><div><b>GitHub</b><small>DimpleKumar16/dimple-codes</small></div>
            </a>
            <div className="glass row">
              <Mail size={20} /><div><b>Email</b><small>{links.email || 'Professional email: to be added'}</small></div>
            </div>
            <a className="btn btn--primary" href={links.resume} target="_blank" rel="noopener noreferrer">
              Download Resume <ExternalLink size={16} />
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="glass padded" onSubmit={submit}>
              <label>Name<input name="name" required autoComplete="name" /></label>
              <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Message<textarea name="message" rows={4} required /></label>
              <button className="btn btn--primary" type="submit">{links.email ? 'Send message' : 'Copy message'}</button>
              <div id="form-status" role="status">{status}</div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
