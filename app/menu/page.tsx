// app/menu/page.tsx
//
// The complete menu. Content comes from data/menu.ts (DEMO until the
// venue's real menu is in).

import type { Metadata } from 'next'
import Image from 'next/image'
import MenuList from '@/components/ui/MenuList'
import { MENU } from '@/data/menu'
import { LINKS, SITE } from '@/data/site'
import { IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './menu.module.css'

export const metadata: Metadata = {
  title: 'Menu',
  description: `The ${SITE.name} menu: nyama choma and grills, kitchen plates, cocktails and bottle service. Order for pickup or delivery in Nakuru on WhatsApp.`,
  alternates: { canonical: '/menu' },
}

export default function MenuPage() {
  return (
    <main id="main" tabIndex={-1} className={`theme-light ${styles.page}`}>
      <header className={`container ${styles.head}`}>
        <p className="eyebrow">
          <span className="eyebrow__num">{SITE.name}</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          Kitchen & Bar
        </p>
        <h1 className="display">
          The <em>menu.</em>
        </h1>
        <nav aria-label="Menu sections" className={styles.jump}>
          {MENU.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.tab}
            </a>
          ))}
        </nav>
      </header>

      {MENU.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`container ${styles.section}`}
          aria-labelledby={`${section.id}-title`}
          tabIndex={-1}
        >
          <div className={`frame ${styles.photo}`} data-reveal="image">
            <Image
              src={section.photo.src}
              alt={section.photo.alt}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              placeholder="blur"
              preload={i === 0}
              style={{ objectPosition: section.photo.focus }}
            />
          </div>
          <div className={styles.body}>
            <span className={styles.num} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 id={`${section.id}-title`} className="h2">
              {section.title}
            </h2>
            <p className="body">{section.blurb}</p>
            <MenuList items={section.items} />
          </div>
        </section>
      ))}

      <section className={`container ${styles.order}`} aria-labelledby="menu-order-title">
        <h2 id="menu-order-title" className="h2">
          Ready when <em>you are.</em>
        </h2>
        <p className="body">
          Order for pickup or delivery, or tell us you’re coming and we’ll have the table and the
          first round waiting.
        </p>
        <div className={styles.ctas}>
          <a href={LINKS.order} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <IconWhatsapp />
            Order via WhatsApp
          </a>
          <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Reserve a table
          </a>
          <a href={LINKS.call} className="link">
            <IconPhone /> {SITE.phone.display}
          </a>
        </div>
      </section>
    </main>
  )
}
