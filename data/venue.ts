// data/venue.ts
//
// Photography, experience pillars and the weekly rhythm.
//
// PHOTOGRAPHY — every image is Space Next Door's own, taken from stills of
// their public TikTok posts (@spacenextdoornkr) and lightly graded/cropped
// for the web (see IMAGE-CREDITS.md). They are demo stand-ins: swap each
// file in /assets/venue for the original high-resolution photo from the
// venue and nothing else needs to change.

import type { StaticImageData } from 'next/image'
import facadePortrait from '@/assets/venue/facade-portrait.jpg'
import facadeNeon from '@/assets/venue/facade-neon.jpg'
import mainHall from '@/assets/venue/main-hall.jpg'
import poolLounge from '@/assets/venue/pool-lounge.jpg'
import neonSpade from '@/assets/venue/neon-spade.jpg'
import hallLights from '@/assets/venue/hall-lights.jpg'

export type Photo = { src: StaticImageData; alt: string }

export const PHOTOS = {
  facadePortrait: {
    src: facadePortrait,
    alt: 'Space Next Door’s façade at night, lit by tall red neon ribs, with cars parked out front',
  },
  facadeNeon: {
    src: facadeNeon,
    alt: 'Red neon lines and a white wing sculpture across the Space Next Door building',
  },
  mainHall: {
    src: mainHall,
    alt: 'A full main hall at Space Next Door under pink and red neon, guests seated at high tables',
  },
  poolLounge: {
    src: poolLounge,
    alt: 'A guest lines up a shot on a blue pool table, with a wall of sports screens behind',
  },
  neonSpade: {
    src: neonSpade,
    alt: 'A glowing neon spade sign above the bar, framed by coloured stage lights',
  },
  hallLights: {
    src: hallLights,
    alt: 'Green light rig, disco lights and screens across the ceiling of the main hall at night',
  },
} satisfies Record<string, Photo>

export type Pillar = {
  id: string
  kicker: string
  title: string
  body: string
  photo: Photo
}

// Each claim maps to something the venue shows or says publicly:
// sports screens + pool tables (TikTok, Apr 2026), "food, drinks, nightclub
// and great live music" (Facebook intro), DJs/MCs/live bands (event posts),
// birthday packages (reservation poster).
export const PILLARS: Pillar[] = [
  {
    id: 'game',
    kicker: 'Sports Bar',
    title: 'Game on',
    body: 'Big screens for the match, pool tables when you’d rather play than watch, and a room that reacts to every goal.',
    photo: PHOTOS.poolLounge,
  },
  {
    id: 'grill',
    kicker: 'Grill & Bar',
    title: 'Plates & pours',
    body: 'Food and drinks around the clock, from a quiet afternoon plate to rounds for the whole table once the night gets going.',
    photo: PHOTOS.neonSpade,
  },
  {
    id: 'night',
    kicker: 'Nightlife',
    title: 'After dark',
    body: 'DJs, hype MCs, live bands and guest performers. The lights come down and the main hall fills up.',
    photo: PHOTOS.hallLights,
  },
  {
    id: 'celebrate',
    kicker: 'Celebrations',
    title: 'Your night, hosted',
    body: 'Birthdays, groups and big occasions. Book a day ahead for a birthday and the cake is on the house.',
    photo: PHOTOS.mainHall,
  },
]

export type Night = { day: string; name: string; detail: string }

// Taken from the venue's recurring post hashtags/captions (2025–2026).
// VERIFY: themes rotate — confirm the current weekly line-up with the venue.
export const NIGHTS: Night[] = [
  {
    day: 'Thursday',
    name: 'Upscale Thursdays',
    detail: 'The week’s first real night out, with guest crews and a dressed-up crowd.',
  },
  {
    day: 'Friday',
    name: 'Live on Stage',
    detail: 'One mic, one stage. Live performances and headline DJs.',
  },
  {
    day: 'Saturday',
    name: 'Sold-Out Saturdays',
    detail: 'The big one. DJs and MCs, a packed hall, going till late.',
  },
  {
    day: 'Sunday',
    name: 'Afrobeat & Amapiano',
    detail: 'Afrobeats and amapiano on the decks to close out the weekend.',
  },
]

export const GALLERY: (Photo & { caption: string })[] = [
  { ...PHOTOS.facadeNeon, caption: 'The façade' },
  { ...PHOTOS.mainHall, caption: 'Main hall' },
  { ...PHOTOS.poolLounge, caption: 'Pool & screens' },
  { ...PHOTOS.neonSpade, caption: 'The bar' },
  { ...PHOTOS.hallLights, caption: 'The light rig' },
]
