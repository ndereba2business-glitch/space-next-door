// components/layout/Motion.tsx
//
// One client component drives all page motion so every section can stay a
// server component. Sections opt in declaratively:
//
//   data-reveal="up"     fade + rise when scrolled into view
//   data-reveal="lines"  masked line-by-line heading reveal (.line > span)
//   data-reveal="image"  clip-path wipe + settle-in scale on the inner <img>
//   data-speed="0.15"    scroll-linked parallax (fraction of own height)
//
// With prefers-reduced-motion, none of this runs: no smooth scroll, no
// start-states (see MOTION_BOOT_SCRIPT), content is simply there.

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion, setLenis } from '@/lib/motion'

gsap.registerPlugin(ScrollTrigger)

const EASE = 'expo.out'

export default function Motion() {
  // Re-run on client-side navigation so the new page's elements are wired up.
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    if (prefersReducedMotion()) {
      root.classList.add('motion-ready')
      return
    }

    // Anchor offsets come from html { scroll-padding-top }, which Lenis reads.
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    })
    setLenis(lenis)
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('[data-reveal="up"]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.09 }),
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
        gsap.to(el.querySelectorAll('.line > span'), {
          yPercent: 0,
          y: 0,
          duration: 1.2,
          ease: EASE,
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal="image"]').forEach((el) => {
        // On completion, hand control back to CSS so hover zooms still work.
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onComplete: () => {
            el.classList.add('is-revealed')
            gsap.set([el, el.querySelector('img')], { clearProps: 'clipPath,transform' })
          },
        })
        tl.fromTo(
          el,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' },
        )
        const img = el.querySelector('img')
        if (img) tl.to(img, { scale: 1, duration: 1.8, ease: EASE }, 0)
      })

      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '0')
        gsap.fromTo(
          el,
          { yPercent: -speed * 50 },
          {
            yPercent: speed * 50,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    })

    root.classList.add('motion-ready')

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      ctx.revert()
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [pathname])

  return null
}
