import './scroll-progress.css'

/** Thin bar across the top showing how far the page has been scrolled. */
export default function ScrollProgress({ progress }: { progress: number }) {
  return <div id="scroll-progress" style={{ width: `${progress}%` }} />
}
