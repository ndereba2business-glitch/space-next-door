// components/sections/MenuShowcase.tsx
//
// Homepage menu: three categories as tabs, each with its own large
// photograph and a short list of signatures. The full list is at /menu.

'use client'

import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHead from '@/components/ui/SectionHead'
import MenuList from '@/components/ui/MenuList'
import { HOME_ITEMS, MENU } from '@/data/menu'
import { IconArrowRight } from '@/components/ui/icons'
import styles from './MenuShowcase.module.css'

export default function MenuShowcase() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const uid = useId()

  // Roving focus: arrow keys move between tabs, as the tabs pattern expects.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + MENU.length) % MENU.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id="menu"
      className={`section theme-light ${styles.section}`}
      aria-labelledby="menu-title"
      tabIndex={-1}
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.media} data-reveal="image">
          {MENU.map((section, i) => (
            <Image
              key={section.id}
              src={section.photo.src}
              alt={i === active ? section.photo.alt : ''}
              aria-hidden={i !== active}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className={styles.photo}
              data-active={i === active}
              style={{ objectPosition: section.photo.focus }}
            />
          ))}
          <p className={styles.count} aria-hidden="true">
            <span>{String(active + 1).padStart(2, '0')}</span> / {String(MENU.length).padStart(2, '0')}
          </p>
        </div>

        <div className={styles.body}>
          <SectionHead
            num="02"
            label="Kitchen & Bar"
            id="menu-title"
            lines={['Off the fire,', <em key="e">onto the table.</em>]}
          />

          <div
            role="tablist"
            aria-label="Menu categories"
            className={styles.tabs}
            onKeyDown={onKeyDown}
            data-reveal="up"
          >
            {MENU.map((section, i) => (
              <button
                key={section.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`${uid}-tab-${section.id}`}
                aria-selected={i === active}
                aria-controls={`${uid}-panel-${section.id}`}
                tabIndex={i === active ? 0 : -1}
                className={styles.tab}
                onClick={() => setActive(i)}
              >
                {section.tab}
              </button>
            ))}
          </div>

          {MENU.map((section, i) => (
            <div
              key={section.id}
              role="tabpanel"
              id={`${uid}-panel-${section.id}`}
              aria-labelledby={`${uid}-tab-${section.id}`}
              hidden={i !== active}
              className={styles.panel}
            >
              <p className={styles.blurb}>{section.blurb}</p>
              <MenuList items={section.items.slice(0, HOME_ITEMS)} />
            </div>
          ))}

          <div className={styles.ctas} data-reveal="up">
            <Link href="/menu" className="btn btn--primary">
              View the full menu
              <IconArrowRight />
            </Link>
            <a href="#order" className="link">
              Order for pickup or delivery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
