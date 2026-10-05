// components/sections/Space.tsx
//
// The room itself, in the venue's own photographs.

import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { PILLARS } from '@/data/venue'
import { LINKS } from '@/data/site'
import { IconArrowUpRight } from '@/components/ui/icons'
import styles from './Space.module.css'

export default function Space() {
  return (
    <section id="space" className="section theme-dark" aria-labelledby="space-title" tabIndex={-1}>
      <div className="container">
        <div className={styles.top}>
          <SectionHead
            num="04"
            label="The Space"
            id="space-title"
            lines={['Come for the game.', <em key="e">Stay for the night.</em>]}
          />
          <p className="body" data-reveal="up">
            One room that changes with the hour: screens and pool tables through the day, lights
            down and music up once the sun goes.
          </p>
        </div>

        <ol className={styles.grid}>
          {PILLARS.map((p, i) => (
            <li key={p.id} className={styles.item}>
              <div className={`frame ${styles.frame}`} data-reveal="image">
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 90vw"
                  placeholder="blur"
                  style={{ objectPosition: p.photo.focus }}
                />
              </div>
              <div className={styles.text} data-reveal="up">
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={styles.kicker}>{p.kicker}</p>
                <h3 className="h3">{p.title}</h3>
                <p className="body">{p.body}</p>
                {p.id === 'celebrate' && (
                  <a
                    href={LINKS.birthday}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link ${styles.cta}`}
                  >
                    Plan a birthday <IconArrowUpRight />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
