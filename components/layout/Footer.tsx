// components/layout/Footer.tsx
import Image from 'next/image'
import { NAV } from '@/data/nav'
import { LINKS, SITE } from '@/data/site'
import { IconFacebook, IconInstagram, IconTiktok } from '@/components/ui/icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/brand/logo-red.png" alt={SITE.name} width={538} height={344} sizes="180px" />
          <p>{SITE.tagline}.</p>
        </div>

        <div>
          <h2 className={styles.heading}>Visit</h2>
          <address className={styles.text}>
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.area}, {SITE.address.city}
          </address>
          <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className={styles.inline}>
            Get directions
          </a>
        </div>

        <div>
          <h2 className={styles.heading}>Hours & bookings</h2>
          <p className={styles.text}>{SITE.hours.summary}</p>
          <a href={LINKS.call} className={styles.inline}>
            {SITE.phone.display}
          </a>
          <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className={styles.inline}>
            WhatsApp us
          </a>
        </div>

        <div>
          <h2 className={styles.heading}>Explore</h2>
          <ul className={styles.list}>
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.inline}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Follow</h2>
          <ul className={styles.social}>
            <li>
              <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer">
                <IconInstagram width={18} height={18} />
                {SITE.social.instagram.handle}
              </a>
            </li>
            <li>
              <a href={SITE.social.tiktok.url} target="_blank" rel="noopener noreferrer">
                <IconTiktok width={18} height={18} />
                {SITE.social.tiktok.handle}
              </a>
            </li>
            <li>
              <a href={SITE.social.facebook.url} target="_blank" rel="noopener noreferrer">
                <IconFacebook width={18} height={18} />
                {SITE.social.facebook.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.base}`}>
        <p>
          © {new Date().getFullYear()} {SITE.legalName}, {SITE.address.city}
        </p>
        <p>{SITE.responsibleDrinking}</p>
        <p>Photography: {SITE.name}</p>
      </div>
    </footer>
  )
}
