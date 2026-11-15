import { MotionConfig } from 'framer-motion'
import BackToTop from './app/BackToTop'
import CustomCursor from './app/CustomCursor'
import Footer from './app/Footer'
import Header from './app/Header'
import Loader from './app/Loader'
import NetworkCanvas from './app/NetworkCanvas'
import ScrollProgress from './app/ScrollProgress'
import { nav } from './data/portfolio'
import { useScrollSpy, useTheme } from './hooks'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

/**
 * Page shell: one scroll listener feeds the header and the back-to-top button,
 * everything else owns its own state.
 */
export default function App() {
  const toggleTheme = useTheme()
  const { offset, progress, activeId } = useScrollSpy(nav)

  return (
    <MotionConfig reducedMotion="user">
      <Loader />
      <ScrollProgress progress={progress} />
      <CustomCursor />
      <NetworkCanvas />
      <Header offset={offset} activeId={activeId} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop offset={offset} />
    </MotionConfig>
  )
}
