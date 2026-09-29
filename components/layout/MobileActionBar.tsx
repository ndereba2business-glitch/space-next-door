// components/layout/MobileActionBar.tsx
//
// Thumb-reach actions on phones. Appears once the hero's own CTAs have
// scrolled away, and steps aside near the footer where the same actions
// are already on screen.

'use client'

import { useEffect, useState } from 'react'
import { LINKS } from '@/data/site'
import { IconMapPin, IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './MobileActionBar.module.css'

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    const closing = document.getElementById('reserve')
    const seen = new Map<Element, boolean>()
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) seen.set(e.target, e.isIntersecting)
      setVisible(!(hero && seen.get(hero)) && !(closing && seen.get(closing)))
    })
    if (hero) observer.observe(hero)
    if (closing) observer.observe(closing)
    return () => observer.disconnect()
  }, [])

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
      <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className={styles.action}>
        <IconMapPin width={18} height={18} />
        Directions
      </a>
    </nav>
  )
}
