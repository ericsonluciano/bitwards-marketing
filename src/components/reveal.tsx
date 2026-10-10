'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// Marks a block as "arrived" once it scrolls into view, so the CSS in globals.css can slide it into place.
// Only transform moves (text is always readable), and nothing happens for visitors who ask for less motion.
export function Reveal({ as: Tag = 'div', className, children }: { as?: 'div' | 'ol' | 'ul'; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.dataset.reveal = 'in'
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = 'in'
          io.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref as never} data-reveal="out" className={className}>
      {children}
    </Tag>
  )
}
