'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2 px-4 py-2 theme-bg-secondary rounded-lg shadow-sm">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${
          resolvedTheme === 'light' ? 'bg-blue-100 text-blue-700' : 'theme-text-secondary'
        }`}
        title="浅色模式"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${
          resolvedTheme === 'dark' ? 'bg-blue-100 text-blue-700' : 'theme-text-secondary'
        }`}
        title="深色模式"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${
          resolvedTheme === 'system' ? 'bg-blue-100 text-blue-700' : 'theme-text-secondary'
        }`}
        title="跟随系统"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  )
} 