// data/venue.ts
//
// Editorial content: what the space offers, the weekly rhythm, the gallery.
// Photos come from data/photos.ts (VENUE = theirs, DEMO = stand-ins).

import { DEMO, VENUE, type Photo } from './photos'

export type Pillar = {
  id: string
  kicker: string
  title: string
  body: string
  photo: Photo
}

// Each claim maps to something the venue shows or says publicly: sports
// screens + pool tables (TikTok, Apr 2026), DJs/MCs/live bands (event
// posts), birthday packages (reservation poster).
export const PILLARS: Pillar[] = [
  {
    id: 'game',
    kicker: 'By day',
    title: 'Game on',
    body: 'Big screens for the match, pool tables when you’d rather play than watch, and a room that reacts to every goal.',
    photo: VENUE.poolLounge,
  },
  {
    id: 'night',
    kicker: 'After dark',
    title: 'The hall fills up',
    body: 'DJs, hype MCs, live bands and guest performers. The lights come down and the night takes over.',
    photo: VENUE.hallLights,
  },
  {
    id: 'celebrate',
    kicker: 'Occasions',
    title: 'Your night, hosted',
    body: 'Birthdays, groups and big occasions. Book a day ahead for a birthday and the cake is on the house.',
    photo: VENUE.mainHall,
  },
]

export type Night = { day: string; name: string; detail: string; photo: Photo }

// Taken from the venue's recurring post hashtags/captions (2025–2026).
// VERIFY: themes rotate — confirm the current weekly line-up with the venue.
export const NIGHTS: Night[] = [
  {
    day: 'Thursday',
    name: 'Upscale Thursdays',
    detail: 'The week’s first real night out, with guest crews and a dressed-up crowd.',
    photo: VENUE.hallLights,
  },
  {
    day: 'Friday',
    name: 'Live on Stage',
    detail: 'One mic, one stage. Live performances and headline DJs.',
    photo: VENUE.neonSpade,
  },
  {
    day: 'Saturday',
    name: 'Sold-Out Saturdays',
    detail: 'The big one. DJs and MCs, a packed hall, going till late.',
    photo: VENUE.mainHall,
  },
  {
    day: 'Sunday',
    name: 'Afrobeat & Amapiano',
    detail: 'Afrobeats and amapiano on the decks to close out the weekend.',
    photo: VENUE.facadeNeon,
  },
]

// Order matters: the gallery grid places tiles by position.
export const GALLERY: (Photo & { caption: string })[] = [
  { ...VENUE.facadeNeon, caption: 'The façade' },
  { ...DEMO.openGrill, caption: 'On the fire' },
  { ...VENUE.neonSpade, caption: 'The bar' },
  { ...DEMO.cocktail, caption: 'First pour' },
  { ...VENUE.mainHall, caption: 'Main hall' },
  { ...DEMO.tilapia, caption: 'Tilapia, ugali, sukuma' },
  { ...VENUE.poolLounge, caption: 'Pool & screens' },
]
