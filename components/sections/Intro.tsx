// components/sections/Intro.tsx
import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { DEMO, VENUE } from '@/data/photos'
import { SITE } from '@/data/site'
import styles from './Intro.module.css'

const FACTS = [
  { figure: '24/7', label: 'The doors don’t close' },
  { figure: '2024', label: 'On the highway since February' },
  { figure: 'Thu–Sun', label: 'DJs and live acts in the main hall' },
]

export default function Intro() {
  return (
    <section id="venue" className="section theme-light" aria-labelledby="venue-title" tabIndex={-1}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <SectionHead
            num="01"
            label="The Venue"
            id="venue-title"
            lines={['One address.', <em key="e">Every kind of night.</em>]}
          />
          <p className="lead" data-reveal="up">
            A sports bar and grill by day. One of Nakuru’s busiest nights out after dark.
          </p>
          <p className="body" data-reveal="up">
            Since February 2024, the former Tuskys Building on the Nakuru–Nairobi Highway has been
            home to {SITE.name}. Catch the match on the big screens, eat from the grill and settle
            in. When the lights drop, the DJs take the main hall.
          </p>
        </div>

        <div className={styles.media}>
          <div className={`frame ${styles.tall}`} data-reveal="image">
            <div className={styles.parallax} data-speed="0.12">
              <Image
                src={VENUE.facadeNeon.src}
                alt={VENUE.facadeNeon.alt}
                fill
                sizes="(min-width: 1024px) 34vw, 78vw"
                placeholder="blur"
                style={{ objectPosition: VENUE.facadeNeon.focus }}
              />
            </div>
          </div>
          <div className={`frame ${styles.small}`} data-reveal="image">
            <Image
              src={DEMO.coals.src}
              alt={DEMO.coals.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 46vw"
              placeholder="blur"
              style={{ objectPosition: DEMO.coals.focus }}
            />
          </div>
        </div>

        <dl className={styles.facts}>
          {FACTS.map((f) => (
            <div key={f.figure} data-reveal="up">
              <dt>{f.label}</dt>
              <dd>{f.figure}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
