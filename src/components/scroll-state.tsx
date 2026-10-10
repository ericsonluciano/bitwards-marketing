'use client'

import { useEffect, useRef } from 'react'

// Tells the page whether it is still at the very top, by setting data-scrolled on <html> ("false" at the top, "true" once
// scrolled). The header uses it to show a bigger logo at the top and the normal size after scrolling. It watches a small
// marker at the top of the page with an IntersectionObserver, so nothing runs on every scroll.
export function ScrollState() {
  const marker = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = marker.current
    if (!el) return
    const root = document.documentElement
    root.dataset.scrolled = 'false'
    const io = new IntersectionObserver(([entry]) => {
      root.dataset.scrolled = entry.isIntersecting ? 'false' : 'true'
    })
    io.observe(el)
    return () => {
      io.disconnect()
      delete root.dataset.scrolled
    }
  }, [])
  return <div ref={marker} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-16 w-px" />
}
