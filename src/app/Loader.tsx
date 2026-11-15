import { useEffect, useState } from 'react'
import { LOADER_DURATION_MS } from '../constants'
import './loader.css'

/** Intro overlay that fades out once LOADER_DURATION_MS has elapsed. */
export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), LOADER_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={done ? 'is-done' : ''} aria-hidden="true">
      <div className="loader-rings"><i /><i /><i /></div>
    </div>
  )
}
