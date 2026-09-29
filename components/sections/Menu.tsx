// components/sections/Menu.tsx
//
// Renders data/menu.ts. Until the venue's real menu is added there, each
// category shows as an intro card and the section leads to a WhatsApp
// "send me today's menu" request, so nothing on the page is made up.

import SectionHead from '@/components/ui/SectionHead'
import { MENU, MENU_CURRENCY } from '@/data/menu'
import { LINKS, SITE } from '@/data/site'
import { IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './Menu.module.css'

export default function Menu() {
  const hasItems = MENU.some((s) => s.items.length > 0)
  const sections = hasItems ? MENU.filter((s) => s.items.length > 0) : MENU

  return (
    <section
      id="menu"
      className={`section ${styles.section}`}
      aria-labelledby="menu-title"
      tabIndex={-1}
    >
      <div className="container">
        <SectionHead
          num="04"
          label="Kitchen & Bar"
          id="menu-title"
          className={styles.head}
          lines={[
            'Plates, pours',
            <>
              & the <span className="accent">grill.</span>
            </>,
          ]}
        />

        <div className={styles.columns}>
          {sections.map((s, i) => (
            <article key={s.id} className={styles.card} data-reveal="up">
              <p className={styles.num}>{String(i + 1).padStart(2, '0')}</p>
              <h3 className="h3">{s.title}</h3>
              <p className={styles.blurb}>{s.blurb}</p>
              {s.items.length > 0 && (
                <ul className={styles.items}>
                  {s.items.map((item) => (
                    <li key={item.name}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.leader} aria-hidden="true" />
                      {item.price != null && (
                        <span className={styles.price}>
                          {MENU_CURRENCY} {item.price.toLocaleString('en-KE')}
                        </span>
                      )}
                      {item.description && <span className={styles.desc}>{item.description}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className={styles.request} data-reveal="up">
          <div>
            <h3 className={styles.requestTitle}>
              {hasItems ? 'Planning a group order?' : 'Today’s menu, straight to your phone.'}
            </h3>
            <p className="body">
              {hasItems
                ? 'Message us ahead and we’ll have the table and the first round ready.'
                : 'The full menu isn’t online yet. Message us on WhatsApp and we’ll send the current menu and prices.'}
            </p>
          </div>
          <div className={styles.requestCtas}>
            <a href={LINKS.menu} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <IconWhatsapp />
              {hasItems ? 'Message us' : 'Get the menu'}
              <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
            </a>
            <a href={LINKS.call} className="btn btn--ghost">
              <IconPhone />
              {SITE.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
