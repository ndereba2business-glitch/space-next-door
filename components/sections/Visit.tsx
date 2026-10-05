// components/sections/Visit.tsx
import SectionHead from '@/components/ui/SectionHead'
import { LINKS, SITE } from '@/data/site'
import {
  IconArrowUpRight,
  IconCake,
  IconClock,
  IconMapPin,
  IconPhone,
  IconWhatsapp,
} from '@/components/ui/icons'
import styles from './Visit.module.css'

export default function Visit() {
  return (
    <section id="visit" className="section" aria-labelledby="visit-title" tabIndex={-1}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <SectionHead
            num="06"
            label="Visit"
            id="visit-title"
            lines={[
              <>
                Find <span className="accent">us.</span>
              </>,
            ]}
          />

          <dl className={styles.details}>
            <div data-reveal="up">
              <dt>
                <IconMapPin /> Address
              </dt>
              <dd>
                <address>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.area}, {SITE.address.city}
                </address>
                <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="link">
                  Get directions <IconArrowUpRight />
                </a>
              </dd>
            </div>
            <div data-reveal="up">
              <dt>
                <IconClock /> Hours
              </dt>
              <dd>
                {SITE.hours.summary}
                <ul className={styles.hours}>
                  {SITE.hours.detail.map((row) => (
                    <li key={row.area}>
                      <span>{row.area}</span>
                      <span>{row.times}</span>
                    </li>
                  ))}
                </ul>
                <span className={styles.sub}>Weekends fill up. Book ahead for groups.</span>
              </dd>
            </div>
            <div data-reveal="up">
              <dt>
                <IconPhone /> Bookings
              </dt>
              <dd>
                <a href={LINKS.call} className={styles.phone}>
                  {SITE.phone.display}
                </a>
                <span className={styles.sub}>Call, text or WhatsApp</span>
              </dd>
            </div>
          </dl>

          <div className={styles.ctas} data-reveal="up">
            <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <IconWhatsapp />
              Reserve on WhatsApp
            </a>
            <a href={LINKS.call} className="btn btn--ghost">
              <IconPhone />
              Call now
            </a>
          </div>
        </div>

        <div className={styles.side}>
          <div className={styles.map} data-reveal="up">
            {/* Shown until the map paints over it, or if the embed is blocked */}
            <div className={styles.mapFallback}>
              <IconMapPin width={28} height={28} />
              <p>
                {SITE.address.line1}, {SITE.address.city}
              </p>
              <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="link">
                Open in Google Maps <IconArrowUpRight />
              </a>
            </div>
            <iframe
              src={LINKS.mapEmbed}
              title={`Map showing ${SITE.name}, ${SITE.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <aside className={styles.birthday} data-reveal="up" aria-labelledby="birthday-title">
            <IconCake width={32} height={32} className={styles.cake} />
            <div>
              <h3 id="birthday-title" className={styles.birthdayTitle}>
                Birthdays at Space
              </h3>
              <p className="body">
                {SITE.birthdays.perk} for the birthday table. {SITE.birthdays.condition}.
              </p>
            </div>
            <a href={LINKS.birthday} target="_blank" rel="noopener noreferrer" className="link">
              Book a birthday <IconArrowUpRight />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
