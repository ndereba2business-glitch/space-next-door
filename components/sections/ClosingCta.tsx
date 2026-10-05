// components/sections/ClosingCta.tsx
//
// "Take me to Space" is the venue's own hashtag (#takemetospace).

import Image from 'next/image'
import { DEMO } from '@/data/photos'
import { LINKS } from '@/data/site'
import { IconArrowUpRight, IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './ClosingCta.module.css'

export default function ClosingCta() {
  const photo = DEMO.openGrill

  return (
    <section
      id="reserve"
      className={`theme-dark ${styles.section}`}
      aria-labelledby="reserve-title"
      tabIndex={-1}
    >
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgInner} data-speed="0.16">
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            style={{ objectPosition: photo.focus }}
          />
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <p className="eyebrow" data-reveal="up">
          <span className="eyebrow__num">Tonight</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          Reservations
        </p>
        <h2 id="reserve-title" className={`display ${styles.title}`} data-reveal="lines">
          <span className="line">
            <span>Take me</span>
          </span>{' '}
          <span className="line">
            <span>
              <em>to Space.</em>
            </span>
          </span>
        </h2>
        <p className={styles.lead} data-reveal="up">
          Message us with the night and the number of guests and we’ll hold a table for you.
        </p>
        <div className={styles.ctas} data-reveal="up">
          <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <IconWhatsapp />
            Reserve a table
            <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
          </a>
          <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Get directions
            <IconArrowUpRight />
          </a>
          <a href={LINKS.call} className={`link ${styles.call}`}>
            <IconPhone /> Or call us
          </a>
        </div>
      </div>
    </section>
  )
}
