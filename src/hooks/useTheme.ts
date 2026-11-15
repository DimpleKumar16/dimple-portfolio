import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Light/dark theme stored on `<html data-theme>`. With nothing stored, the OS
 * preference applies; the returned function toggles away from whatever is active.
 */
export function useTheme() {
  const [theme, setTheme] = useState<string | null>(readStoredTheme)

  useEffect(() => {
    if (!theme) return
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return () => {
    const isDark = theme ? theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches
    setTheme(isDark ? 'light' : 'dark')
  }
}
