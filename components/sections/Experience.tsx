// components/sections/Experience.tsx
import Image from 'next/image'
import SectionHead from '@/components/ui/SectionHead'
import { PILLARS } from '@/data/venue'
import { LINKS } from '@/data/site'
import { IconArrowUpRight } from '@/components/ui/icons'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section
      id="experience"
      className={`section ${styles.section}`}
      aria-labelledby="experience-title"
      tabIndex={-1}
    >
      <div className="container">
        <div className={styles.top}>
          <SectionHead
            num="02"
            label="The Experience"
            id="experience-title"
            lines={[
              'Come for the game.',
              <>
                Stay for the <span className="accent">night.</span>
              </>,
            ]}
          />
          <p className="body" data-reveal="up">
            Four ways into the same room, and most nights you get all of them.
          </p>
        </div>

        <ol className={styles.grid}>
          {PILLARS.map((p, i) => (
            <li key={p.id} className={styles.item}>
              <div className={`frame grain ${styles.frame}`} data-reveal="image">
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  sizes="(min-width: 768px) 44vw, 90vw"
                  placeholder="blur"
                />
              </div>
              <div className={styles.text} data-reveal="up">
                <p className={styles.kicker}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {p.kicker}
                </p>
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
