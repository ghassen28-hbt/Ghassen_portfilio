import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light') } catch { /* empty */ }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(v => !v)}
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        right: 'max(0.5rem, 1vw)',
        top: 'max(0.5rem, 1vh)',
        zIndex: 60,
        padding: '0.5rem',
        borderRadius: '0.5rem',
        background: 'rgba(255,255,255,0.03)',
        color: 'var(--color-text)',
        border: '1px solid rgba(255,255,255,0.04)',
        backdropFilter: 'blur(6px)',
        minWidth: '2.5rem',
        minHeight: '2.5rem'
      }}
    >
      {isDark ? '☾' : '☀'}
    </button>
  )
}
