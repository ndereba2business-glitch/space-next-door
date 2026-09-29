// components/ui/SectionHead.tsx
//
// Numbered eyebrow + masked multi-line display heading, shared by every
// section so the rhythm stays identical down the page.

import type { ReactNode } from 'react'

type Props = {
  num: string
  label: string
  id: string
  lines: ReactNode[]
  className?: string
}

export default function SectionHead({ num, label, id, lines, className }: Props) {
  return (
    <div className={className}>
      <p className="eyebrow" data-reveal="up">
        <span className="eyebrow__num">{num}</span>
        <span className="eyebrow__rule" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="h2" data-reveal="lines" style={{ marginTop: '24px' }}>
        {lines.map((line, i) => (
          // Trailing space keeps "Line one. Line two." as separate words for
          // screen readers and search engines; the lines are display:block.
          <span className="line" key={i}>
            <span>{line}</span>{' '}
          </span>
        ))}
      </h2>
    </div>
  )
}
