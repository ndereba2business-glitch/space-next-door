// lib/motion.ts
//
// Shared motion plumbing. The Lenis instance lives here so any component
// (e.g. the mobile menu) can pause page scroll without prop-drilling.

import type Lenis from 'lenis'

let lenis: Lenis | null = null

export function setLenis(instance: Lenis | null) {
  lenis = instance
}

export function getLenis() {
  return lenis
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// Runs before first paint (inlined in layout.tsx). Marks <html> so reveal
// start-states apply only when motion is welcome and JS is running.
export const MOTION_BOOT_SCRIPT = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')}catch(e){}`
