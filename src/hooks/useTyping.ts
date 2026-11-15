import { useEffect, useState } from 'react'

const TYPE_MS = 55
const DELETE_MS = 28
const HOLD_MS = 1500

/**
 * Cycles through `words`, typing and deleting one character at a time.
 * With reduced motion requested, the first word is shown and left alone.
 */
export function useTyping(words: string[]) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) {
      setText(words[0])
      return
    }
    let wordIndex = 0
    let charCount = 0
    let deleting = false
    let timer: number

    const tick = () => {
      const word = words[wordIndex]
      setText(word.slice(0, charCount))
      if (!deleting && charCount === word.length) {
        deleting = true
        timer = window.setTimeout(tick, HOLD_MS)
        return
      }
      if (deleting && charCount === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
      }
      charCount += deleting ? -1 : 1
      timer = window.setTimeout(tick, deleting ? DELETE_MS : TYPE_MS)
    }

    tick()
    return () => clearTimeout(timer)
  }, [words])

  return text
}
