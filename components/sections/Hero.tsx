// components/sections/Hero.tsx
//
// First screen: the name, one line about the experience, two actions. The
// photograph does the selling. The entrance is pure CSS so it starts before
// hydration and never delays the LCP image.

import Image from 'next/image'
import { DEMO, VENUE } from '@/data/photos'
import { LINKS, SITE } from '@/data/site'
import { IconArrowRight, IconWhatsapp } from '@/components/ui/icons'
import styles from './Hero.module.css'

export default function Hero() {
  const photo = DEMO.nyamaChoma
  const inset = VENUE.facadePortrait

  return (
    <section
      id="top"
      className={`theme-dark ${styles.hero}`}
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div className={styles.media}>
        <div className={styles.mediaInner} data-speed="0.1">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            preload
            sizes="100vw"
            placeholder="blur"
            style={{ objectPosition: photo.focus }}
          />
        </div>
        <div className={styles.shade} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>
          <span className="eyebrow__num">Nakuru</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          Sports Bar · Grill · Nightlife
        </p>

        <h1 id="hero-title" className={`display ${styles.title}`}>
          <span className={styles.line}>
            <span>Space</span>
          </span>{' '}
          <span className={styles.line}>
            <span>
              <em>Next Door</em>
            </span>
          </span>
        </h1>

        <div className={styles.foot}>
          <p className={styles.statement}>
            Fire on the grill, the match on screen, and the whole night still ahead.
          </p>

          <div className={styles.ctas}>
            <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <IconWhatsapp />
              Reserve a table
              <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
            </a>
            <a href="#menu" className="btn btn--ghost">
              Explore the menu
              <IconArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* The venue itself, in frame from the first screen */}
      <figure className={styles.inset}>
        <div className={`frame ${styles.insetFrame}`}>
          <Image
            src={inset.src}
            alt={inset.alt}
            fill
            sizes="(min-width: 1024px) 18vw, 0px"
            style={{ objectPosition: inset.focus }}
          />
        </div>
        <figcaption>
          <span>The space</span>
          {SITE.address.line1}, {SITE.address.city}
        </figcaption>
      </figure>

      <dl className={`container ${styles.meta}`}>
        <div>
          <dt>Hours</dt>
          <dd>{SITE.hours.short}</dd>
        </div>
        <div>
          <dt>Find us</dt>
          <dd>Nakuru–Nairobi Highway</dd>
        </div>
        <div>
          <dt>Bookings</dt>
          <dd>
            <a href={LINKS.call}>{SITE.phone.display}</a>
          </dd>
        </div>
      </dl>
    </section>
  )
}
