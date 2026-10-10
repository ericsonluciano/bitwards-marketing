'use client'

import { Moon, Sun } from '@phosphor-icons/react'
import { useSyncExternalStore } from 'react'

// Switches between light and dark. The choice is saved in this browser only (localStorage), and until it is made
// the page follows the device setting. The sun/moon swap is done in CSS, so the right icon shows before scripts run.
function currentIsDark() {
  const set = document.documentElement.dataset.theme
  return set ? set === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', onChange)
  window.addEventListener('bitwards-theme', onChange)
  return () => {
    media.removeEventListener('change', onChange)
    window.removeEventListener('bitwards-theme', onChange)
  }
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, currentIsDark, () => false)

  function toggle() {
    const next = currentIsDark() ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('bitwards-theme', next)
    } catch {
      // Storage can be blocked (private windows); the choice then lasts for this visit only.
    }
    window.dispatchEvent(new Event('bitwards-theme'))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Dark mode"
      className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-[colors,transform] hover:bg-mint active:scale-95"
    >
      <Sun size={22} weight="regular" aria-hidden className="theme-sun" />
      <Moon size={22} weight="regular" aria-hidden className="theme-moon" />
    </button>
  )
}
