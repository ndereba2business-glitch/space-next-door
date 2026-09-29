// data/site.ts
//
// Single source of truth for every business fact on the site. Each value
// notes where it was verified (Space Next Door's own public channels, as
// of September 2026). Anything marked VERIFY should be confirmed with
// management before launch — change it here and it updates everywhere,
// including the structured data search engines read.

const PHONE_E164 = '+254140524140'

export const SITE = {
  name: 'Space Next Door',
  // Poster artwork + Instagram/TikTok bios: "Space Next Door Sports Bar and Grill"
  legalName: 'Space Next Door Sports Bar & Grill',
  // Brand hashtag used across their posts: #thespacetobe
  tagline: 'The Space To Be',
  // Facebook page intro, verbatim.
  intro:
    'We offer a serene, peaceful getaway experience with delicious food, drinks, nightclub and great live music.',
  // Instagram + TikTok bio: "Kenya's No.1 sports and entertainment avenue."
  category: 'Sports bar, grill & nightlife',

  // Instagram launch post (23 Jan 2024) + Nation Media report of opening night.
  openedISO: '2024-02-03',
  openedLabel: 'February 2024',

  // TikTok bio "RSVP 0140524140"; birthday poster "Text or WhatsApp 0140 524 140".
  phone: {
    display: '0140 524 140',
    e164: PHONE_E164,
    tel: `tel:${PHONE_E164}`,
  },
  whatsapp: {
    number: PHONE_E164.slice(1),
    reserveMessage: "Hi Space Next Door, I'd like to reserve a table.",
    menuMessage: "Hi Space Next Door, could you send me today's menu?",
    birthdayMessage:
      "Hi Space Next Door, I'd like to book a birthday celebration. Date: , Guests: ",
  },

  // Event posters: "Former Tuskys Building, along Nakuru – Nairobi Highway".
  // TikTok bio: "We are located at section 5/8, Nakuru" (Section 58).
  address: {
    line1: 'Former Tuskys Building',
    line2: 'Along Nakuru–Nairobi Highway',
    area: 'Section 58',
    city: 'Nakuru',
    region: 'Nakuru County',
    country: 'Kenya',
    countryCode: 'KE',
  },

  // Instagram + TikTok bio: "Operating 24/7 hours".
  // VERIFY: confirm kitchen hours and whether 24/7 applies every day.
  hours: {
    summary: 'Open 24 hours, 7 days',
    short: 'Open 24/7',
  },

  // Birthday reservation poster (2026).
  birthdays: {
    perk: 'Free birthday cake',
    condition: 'Book at least a day in advance',
  },

  social: {
    instagram: {
      handle: '@spacenextdoor_nakuru',
      url: 'https://www.instagram.com/spacenextdoor_nakuru/',
    },
    tiktok: {
      handle: '@spacenextdoornkr',
      url: 'https://www.tiktok.com/@spacenextdoornkr',
    },
    facebook: {
      handle: 'Space Next Door Nakuru',
      url: 'https://www.facebook.com/p/Space-Next-Door-Nakuru-61553804610351/',
    },
  },

  // VERIFY: drop the exact Google Maps place link here once the client
  // shares it; the search query below resolves in the meantime.
  mapsQuery: 'Space Next Door, Nakuru',

  // Alcohol notice printed on their own event posters.
  responsibleDrinking:
    'Alcohol is not for sale to persons under the age of 18. Drink responsibly.',
} as const

export const LINKS = {
  reserve: whatsappUrl(SITE.whatsapp.reserveMessage),
  menu: whatsappUrl(SITE.whatsapp.menuMessage),
  birthday: whatsappUrl(SITE.whatsapp.birthdayMessage),
  call: SITE.phone.tel,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`,
} as const

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`
}

// Canonical origin. Set NEXT_PUBLIC_SITE_URL once the domain is live;
// Vercel's production URL is used automatically before that.
export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}
