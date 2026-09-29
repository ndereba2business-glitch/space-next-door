// components/sections/Intro.tsx
import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { PHOTOS } from '@/data/venue'
import { SITE } from '@/data/site'
import styles from './Intro.module.css'

// Facts only — each one is published by the venue itself (see data/site.ts).
const FACTS = [
  { label: 'Open', value: '24/7' },
  { label: 'Since', value: 'Feb ’24' },
  { label: 'Screens', value: 'Live sports' },
  { label: 'Stage', value: 'DJs & live acts' },
]

export default function Intro() {
  return (
    <section id="venue" className="section" aria-labelledby="venue-title" tabIndex={-1}>
      <div className={`container ${styles.grid}`}>
        <SectionHead
          num="01"
          label="The Venue"
          id="venue-title"
          className={styles.head}
          lines={[
            'One address.',
            <>
              Every kind of <span className="accent">night.</span>
            </>,
          ]}
        />

        <div className={styles.copy}>
          <p className="lead" data-reveal="up">
            Since February 2024, the former Tuskys Building on the Nakuru–Nairobi Highway has been
            home to {SITE.name}: a sports bar and grill by day, one of Nakuru’s busiest nights
            out after dark.
          </p>
          <p className="body" data-reveal="up">
            Catch the match on the big screens, rack up a game of pool, eat from the grill and settle
            in. When the lights drop, the DJs, MCs and live acts take over the main hall. The doors
            don’t close. It runs 24 hours a day, seven days a week.
          </p>

          <dl className={styles.facts}>
            {FACTS.map((f) => (
              <div key={f.label} data-reveal="up">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className={styles.figure}>
          <div className={`frame grain ${styles.frame}`} data-reveal="image">
            <div className={styles.parallax} data-speed="0.14">
              <Image
                src={PHOTOS.facadeNeon.src}
                alt={PHOTOS.facadeNeon.alt}
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                placeholder="blur"
              />
            </div>
          </div>
          <figcaption className={styles.caption}>
            <span>The façade</span>
            <span>Nakuru–Nairobi Highway</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
