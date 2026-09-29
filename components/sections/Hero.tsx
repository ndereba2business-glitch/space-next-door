// components/sections/Hero.tsx
//
// First screen: what the place is, where it is, how to book. The entrance
// is pure CSS so it starts before hydration and never delays the LCP image.

import Image from 'next/image'
import { PHOTOS } from '@/data/venue'
import { LINKS, SITE } from '@/data/site'
import { IconArrowRight, IconWhatsapp } from '@/components/ui/icons'
import styles from './Hero.module.css'

export default function Hero() {
  const photo = PHOTOS.facadePortrait

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title" tabIndex={-1}>
      {/* Desktop ambience: the same photo, blurred into a glow behind the type */}
      <div className={styles.glow} aria-hidden="true">
        <Image src={photo.src} alt="" fill sizes="40vw" quality={75} />
      </div>

      <div className={`${styles.media} grain`}>
        <div className={styles.mediaInner} data-speed="0.12">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            preload
            sizes="(min-width: 900px) 44vw, 100vw"
            placeholder="blur"
            style={{ objectPosition: '50% 30%' }}
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
          <span className="sr-only">{SITE.name}: </span>
          <span className={styles.line}>
            <span>The Space</span>
          </span>{' '}
          <span className={styles.line}>
            <span>
              To Be<span className="accent">.</span>
            </span>
          </span>
        </h1>

        <p className={`lead ${styles.lead}`}>
          Big games, good food, cold drinks and live music under one roof on the Nakuru–Nairobi
          Highway. Come for the match, stay for the night.
        </p>

        <div className={styles.ctas}>
          <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <IconWhatsapp />
            Reserve a table
            <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
          </a>
          <a href="#experience" className="btn btn--ghost">
            Explore the experience
            <IconArrowRight />
          </a>
        </div>

        <dl className={styles.meta}>
          <div>
            <dt>Hours</dt>
            <dd>{SITE.hours.short}</dd>
          </div>
          <div>
            <dt>Find us</dt>
            <dd>{SITE.address.line1}</dd>
          </div>
          <div>
            <dt>Bookings</dt>
            <dd>
              <a href={LINKS.call}>{SITE.phone.display}</a>
            </dd>
          </div>
        </dl>
      </div>

      <a href="#venue" className={styles.scroll}>
        <span className="sr-only">Scroll to the venue introduction</span>
        <span className={styles.scrollTrack} aria-hidden="true" />
        <span aria-hidden="true">Scroll</span>
      </a>
    </section>
  )
}
