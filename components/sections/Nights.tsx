// components/sections/Nights.tsx
import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { NIGHTS, PHOTOS } from '@/data/venue'
import { SITE, whatsappUrl } from '@/data/site'
import { IconArrowUpRight, IconInstagram } from '@/components/ui/icons'
import styles from './Nights.module.css'

const PREVIEWS = [PHOTOS.hallLights, PHOTOS.neonSpade, PHOTOS.mainHall, PHOTOS.facadeNeon]

export default function Nights() {
  return (
    <section id="nights" className="section" aria-labelledby="nights-title" tabIndex={-1}>
      <div className="container">
        <div className={styles.top}>
          <SectionHead
            num="03"
            label="The Week"
            id="nights-title"
            lines={[
              <>
                Pick your <span className="accent">night.</span>
              </>,
            ]}
          />
          <p className="body" data-reveal="up">
            The weekend starts Thursday. Tap a night to hold a table for it.
          </p>
        </div>

        <ul className={styles.list}>
          {NIGHTS.map((night, i) => (
            <li key={night.day} data-reveal="up">
              <a
                className={styles.row}
                href={whatsappUrl(
                  `Hi ${SITE.name}, I'd like to reserve a table for ${night.name} (${night.day}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.day}>{night.day}</span>
                <span className={styles.name}>{night.name}</span>
                <span className={styles.detail}>{night.detail}</span>
                <span className={styles.go} aria-hidden="true">
                  <IconArrowUpRight width={22} height={22} />
                </span>
                <span className="sr-only"> Reserve on WhatsApp (opens in a new tab)</span>
                <span className={styles.preview} aria-hidden="true">
                  <Image src={PREVIEWS[i].src} alt="" fill sizes="280px" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.note} data-reveal="up">
          Line-ups and guest acts change week to week.
          <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer" className="link">
            <IconInstagram /> This week on {SITE.social.instagram.handle}
          </a>
        </p>
      </div>
    </section>
  )
}
