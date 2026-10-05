// components/sections/Order.tsx
//
// Ordering runs through WhatsApp, so this section makes that feel like a
// service, not a workaround: what happens, in three steps, and one button
// that opens a pre-filled order message.

import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { DEMO } from '@/data/photos'
import { LINKS, SITE } from '@/data/site'
import { IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './Order.module.css'

export default function Order() {
  return (
    <section
      id="order"
      className={`theme-ember ${styles.section}`}
      aria-labelledby="order-title"
      tabIndex={-1}
    >
      <div className={styles.media}>
        <div className={styles.mediaInner} data-speed="0.1">
          <Image
            src={DEMO.burger.src}
            alt={DEMO.burger.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            placeholder="blur"
            style={{ objectPosition: DEMO.burger.focus }}
          />
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <SectionHead
            num="03"
            label="Order from Space Next Door"
            id="order-title"
            lines={['Your favourites,', <em key="e">wherever you are.</em>]}
          />
          <p className={styles.lead} data-reveal="up">
            Match at home, late shift, or just not leaving the couch. Send us your order and we’ll
            take it from there.
          </p>

          <ol className={styles.steps}>
            {SITE.ordering.steps.map((step, i) => (
              <li key={step.title} data-reveal="up">
                <span className={styles.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.ctas} data-reveal="up">
            <a href={LINKS.order} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <IconWhatsapp />
              Order via WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={LINKS.call} className="btn btn--ghost">
              <IconPhone />
              {SITE.phone.display}
            </a>
          </div>
          <p className={styles.note} data-reveal="up">
            {SITE.ordering.note}
          </p>
        </div>
      </div>
    </section>
  )
}
