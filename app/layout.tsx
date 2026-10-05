// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileActionBar from '@/components/layout/MobileActionBar'
import Motion from '@/components/layout/Motion'
import StructuredData from '@/components/layout/StructuredData'
import { MOTION_BOOT_SCRIPT } from '@/lib/motion'
import { SITE, siteUrl } from '@/data/site'

// Variable Fraunces with its optical-size and softness axes: light, warm
// and a little characterful at display sizes.
const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT'],
  display: 'swap',
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const title = `${SITE.name} Nakuru | Sports Bar, Grill & Nightlife`
const description =
  'Space Next Door is a sports bar, grill and nightlife venue in the former Tuskys Building on the Nakuru–Nairobi Highway. Live sports, food, drinks, DJs and live music, open 24/7. Reserve on WhatsApp.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s | ${SITE.name} Nakuru` },
  description,
  applicationName: SITE.name,
  keywords: [
    'Space Next Door',
    'Nakuru nightlife',
    'sports bar Nakuru',
    'Nakuru club',
    'bar and grill Nakuru',
    'Nakuru–Nairobi Highway',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: SITE.name,
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#18120f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
        <StructuredData />
      </head>
      <body className="theme-light">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileActionBar />
        <Motion />
      </body>
    </html>
  )
}
