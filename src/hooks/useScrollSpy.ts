import { useEffect, useState } from 'react'

/** How far down the viewport a section must reach before it counts as active. */
const ACTIVE_LINE = 0.4

export type ScrollState = {
  /** Current `scrollY`, used to style the header and reveal the back-to-top button. */
  offset: number
  /** Scroll position through the document, 0–100, for the progress bar. */
  progress: number
  /** Id of the section currently under the active line, or '' above the first one. */
  activeId: string
}

/** Tracks scroll position and which of `ids` is the section currently in view. */
export function useScrollSpy(ids: string[]): ScrollState {
  const [state, setState] = useState<ScrollState>({ offset: 0, progress: 0, activeId: '' })

  useEffect(() => {
    const update = () => {
      const offset = scrollY
      const scrollable = document.documentElement.scrollHeight - innerHeight
      let activeId = ''
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < innerHeight * ACTIVE_LINE) activeId = id
      })
      setState({ offset, progress: scrollable > 0 ? (offset / scrollable) * 100 : 0, activeId })
    }
    update()
    addEventListener('scroll', update, { passive: true })
    return () => removeEventListener('scroll', update)
  }, [ids])

  return state
}
