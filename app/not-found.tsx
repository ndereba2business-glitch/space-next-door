import type { Metadata } from 'next'
import Link from 'next/link'
import { LINKS } from '@/data/site'

export const metadata: Metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <main
      id="main"
      className="container theme-light"
      style={{ minHeight: '80svh', display: 'grid', alignContent: 'center', gap: 24, paddingTop: 120 }}
    >
      <p className="eyebrow">
        <span className="eyebrow__num">404</span>
        <span className="eyebrow__rule" aria-hidden="true" />
        Wrong door
      </p>
      <h1 className="h2">
        This isn’t <em>the space.</em>
      </h1>
      <p className="body">The page you’re looking for doesn’t exist, but the night’s still on.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Link href="/" className="btn btn--primary">
          Back to the homepage
        </Link>
        <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
          Reserve a table
        </a>
      </div>
    </main>
  )
}
