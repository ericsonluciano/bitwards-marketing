// Simple line icons for the benefit strip. Decorative: the text next to each one carries the meaning.
const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const

export function GiftIcon() {
  return (
    <svg {...common}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5" />
    </svg>
  )
}

export function StoreIcon() {
  return (
    <svg {...common}>
      <path d="M4 9l1.5-5h13L20 9M4 9h16M4 9a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0A2.67 2.67 0 0 0 20 9M5 12v8h14v-8M10 20v-4h4v4" />
    </svg>
  )
}

export function StarIcon() {
  return (
    <svg {...common}>
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
    </svg>
  )
}

export function HeartIcon() {
  return (
    <svg {...common}>
      <path d="M12 20s-7-4.4-9-9.2C1.7 7.6 3.7 4.5 6.8 4.5c2 0 3.4 1 5.2 3 1.8-2 3.2-3 5.2-3 3.1 0 5.1 3.1 3.8 6.300C19 15.600 12 20 12 20z" />
    </svg>
  )
}
