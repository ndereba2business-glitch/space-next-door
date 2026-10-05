// components/layout/StructuredData.tsx
//
// schema.org data so search engines understand this is a bar/nightlife
// venue in Nakuru. Everything comes from data/site.ts (verified facts).

import { SITE, siteUrl } from '@/data/site'

export default function StructuredData() {
  const url = siteUrl()
  const data = {
    '@context': 'https://schema.org',
    '@type': ['BarOrPub', 'NightClub'],
    '@id': `${url}/#venue`,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.intro,
    url,
    image: `${url}/opengraph-image.jpg`,
    logo: `${url}/brand/logo-red.png`,
    telephone: SITE.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.area}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    foundingDate: SITE.openedISO,
    servesCuisine: ['Grill', 'Kenyan'],
    hasMenu: `${url}/menu`,
    acceptsReservations: true,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`,
    sameAs: Object.values(SITE.social).map((s) => s.url),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
