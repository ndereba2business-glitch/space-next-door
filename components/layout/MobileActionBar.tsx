// components/layout/MobileActionBar.tsx
//
// Thumb-reach actions on phones: call, reserve, order. On the homepage it
// appears once the hero's own CTAs have scrolled away and steps aside at
// the closing CTA, where the same actions are already on screen. Inner
// pages show it from the start.

'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/data/site'
import { IconArrowUpRight, IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './MobileActionBar.module.css'

export default function MobileActionBar() {
  const home = usePathname() === '/'
  const [clear, setClear] = useState(false)
  const visible = !home || clear

  useEffect(() => {
    if (!home) return
    const hero = document.getElementById('top')
    const closing = document.getElementById('reserve')
    const seen = new Map<Element, boolean>()
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) seen.set(e.target, e.isIntersecting)
      setClear(!(hero && seen.get(hero)) && !(closing && seen.get(closing)))
    })
    if (hero) observer.observe(hero)
    if (closing) observer.observe(closing)
    return () => observer.disconnect()
  }, [home])

  return (
    <nav className={styles.bar} data-visible={visible} aria-label="Quick actions">
      <a href={LINKS.call} className={styles.action}>
        <IconPhone width={18} height={18} />
        Call
      </a>
      <a
        href={LINKS.reserve}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.action} ${styles.primary}`}
      >
        <IconWhatsapp width={18} height={18} />
        Reserve
      </a>
      <a href={LINKS.order} target="_blank" rel="noopener noreferrer" className={styles.action}>
        <IconArrowUpRight width={18} height={18} />
        Order
      </a>
    </nav>
  )
}
