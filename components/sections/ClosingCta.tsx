// components/sections/ClosingCta.tsx
//
// "Take me to Space" is the venue's own hashtag (#takemetospace).

import Image from 'next/image'
import { PHOTOS } from '@/data/venue'
import { LINKS } from '@/data/site'
import { IconArrowUpRight, IconPhone, IconWhatsapp } from '@/components/ui/icons'
import styles from './ClosingCta.module.css'

export default function ClosingCta() {
  return (
    <section id="reserve" className={styles.section} aria-labelledby="reserve-title" tabIndex={-1}>
      <div className={`${styles.bg} grain`} aria-hidden="true">
        <div className={styles.bgInner} data-speed="0.2">
          {/* Heavily blurred and darkened, so a smaller rendition is plenty */}
          <Image src={PHOTOS.mainHall.src} alt="" fill sizes="50vw" placeholder="blur" />
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
              to Space<span className="accent">.</span>
            </span>
          </span>
        </h2>
        <p className="lead" data-reveal="up">
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
