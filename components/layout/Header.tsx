// components/layout/Header.tsx
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { NAV } from '@/data/nav'
import { LINKS, SITE } from '@/data/site'
import { getLenis } from '@/lib/motion'
import { IconArrowUpRight, IconInstagram, IconTiktok, IconFacebook, IconWhatsapp } from '@/components/ui/icons'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Solid after leaving the top; tuck away while scrolling down.
  useEffect(() => {
    let last = window.scrollY
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      setSolid(y > 24)
      setHidden(y > 480 && y > last + 2)
      if (y < last - 2 || y <= 480) setHidden(false)
      last = y
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const item of NAV) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    const hero = document.getElementById('top')
    if (hero) observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const navigating = useRef(false)

  // Links inside the open menu: close first (page scroll is paused while
  // open), then scroll once the page is interactive again.
  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    navigating.current = true
    setOpen(false)
    requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (!target) return
      const lenis = getLenis()
      // Lenis already honours html { scroll-padding-top } for the header.
      if (lenis) lenis.scrollTo(target, { force: true })
      else target.scrollIntoView()
      history.replaceState(null, '', `#${id}`)
      target.focus({ preventScroll: true })
    })
  }

  // Mobile menu: pause page scroll, make the page inert, handle Escape.
  useEffect(() => {
    const siblings = Array.from(document.body.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && el.id !== 'site-header' && el.tagName !== 'SCRIPT',
    )
    if (open) {
      const toggle = toggleRef.current
      getLenis()?.stop()
      document.documentElement.style.overflow = 'hidden'
      siblings.forEach((el) => (el.inert = true))
      panelRef.current?.querySelector<HTMLElement>('a')?.focus()
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
        getLenis()?.start()
        document.documentElement.style.overflow = ''
        siblings.forEach((el) => (el.inert = false))
        if (!navigating.current) toggle?.focus()
        navigating.current = false
      }
    }
  }, [open])

  const state = [
    styles.header,
    solid && styles.solid,
    hidden && !open && styles.hidden,
    open && styles.open,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header id="site-header" className={state}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.logo} aria-label={`${SITE.name}, back to top`} onClick={close}>
          {/* Light version: the red mark disappears against the red neon photography */}
          <Image src="/brand/logo-light.png" alt="" width={538} height={344} preload sizes="96px" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href={LINKS.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary ${styles.reserve}`}
          >
            Reserve
            <span className="sr-only"> a table on WhatsApp (opens in a new tab)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className={styles.toggleLines} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-open={open}
      >
        <nav aria-label="Mobile" className="container">
          <ol className={styles.panelList}>
            {NAV.map((item, i) => (
              <li key={item.id} style={{ '--i': i } as React.CSSProperties}>
                <a href={`#${item.id}`} onClick={goTo(item.id)}>
                  <span className={styles.panelNum}>{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={`container ${styles.panelFoot}`}>
          <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <IconWhatsapp />
            Reserve on WhatsApp
          </a>
          <a href={LINKS.call} className="btn btn--ghost">
            Call {SITE.phone.display}
          </a>
          <p className={styles.panelMeta}>
            {SITE.address.line1}, {SITE.address.city} · {SITE.hours.short}
          </p>
          <div className={styles.panelSocial}>
            <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram width={20} height={20} />
            </a>
            <a href={SITE.social.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <IconTiktok width={20} height={20} />
            </a>
            <a href={SITE.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook width={20} height={20} />
            </a>
            <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="link">
              Directions <IconArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
