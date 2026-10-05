// app/credits/page.tsx
//
// Attribution for the free-licence stand-in food photography, as the
// Creative Commons licences require. Delete this route (and DEMO_CREDITS)
// once the venue's own food photos replace /assets/demo.

import type { Metadata } from 'next'
import Link from 'next/link'
import { DEMO_CREDITS } from '@/data/photos'
import { SITE } from '@/data/site'
import styles from './credits.module.css'

export const metadata: Metadata = {
  title: 'Photo credits',
  description: `Photography credits for the ${SITE.name} website.`,
  alternates: { canonical: '/credits' },
  robots: { index: false },
}

export default function CreditsPage() {
  return (
    <main id="main" tabIndex={-1} className={`theme-light ${styles.page}`}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">
          <span className="eyebrow__num">{SITE.name}</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          Photography
        </p>
        <h1 className="h2">
          Photo <em>credits.</em>
        </h1>
        <p className="body">
          Photographs of the building, main hall, bar and pool lounge are {SITE.name}’s own. The
          food and drink photographs are by the photographers below, used under Creative Commons
          licences via Wikimedia Commons, and have been cropped and colour-graded.
        </p>

        <ul className={styles.list}>
          {DEMO_CREDITS.map((c) => (
            <li key={c.source}>
              <a href={c.source} target="_blank" rel="noopener noreferrer">
                {c.title}
              </a>
              <span>
                {c.author} · {c.licence}
              </span>
            </li>
          ))}
        </ul>

        <Link href="/" className="link">
          Back to the homepage
        </Link>
      </div>
    </main>
  )
}
