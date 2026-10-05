// data/photos.ts
//
// Every photograph the site uses, in two clearly separate groups.
//
// VENUE — Space Next Door's own images: stills from their public TikTok
// posts (@spacenextdoornkr), cropped and lightly graded. Swap each file in
// /assets/venue for the venue's original high-resolution photo and nothing
// else needs to change.
//
// DEMO — free-licence food and drink photos from Wikimedia Commons, used as
// stand-ins because the venue has not published food photography. They do
// NOT show Space Next Door's dishes. Replace every file in /assets/demo
// with the venue's own before launch, then delete DEMO_CREDITS and the
// /credits page. See IMAGE-CREDITS.md.

import type { StaticImageData } from 'next/image'

import facadePortrait from '@/assets/venue/facade-portrait.jpg'
import facadeNeon from '@/assets/venue/facade-neon.jpg'
import mainHall from '@/assets/venue/main-hall.jpg'
import poolLounge from '@/assets/venue/pool-lounge.jpg'
import neonSpade from '@/assets/venue/neon-spade.jpg'
import hallLights from '@/assets/venue/hall-lights.jpg'

import nyamaChoma from '@/assets/demo/nyama-choma.jpg'
import grillCounter from '@/assets/demo/grill-counter.jpg'
import openGrill from '@/assets/demo/open-grill.jpg'
import coals from '@/assets/demo/coals.jpg'
import cocktail from '@/assets/demo/cocktail.jpg'
import wings from '@/assets/demo/wings.jpg'
import tilapia from '@/assets/demo/tilapia.jpg'
import burger from '@/assets/demo/burger.jpg'

export type Photo = {
  src: StaticImageData
  alt: string
  /** CSS object-position that keeps the subject in frame when cropped */
  focus?: string
}

export const VENUE = {
  facadePortrait: {
    src: facadePortrait,
    alt: 'Space Next Door’s façade at night, lit by tall red neon ribs, with cars parked out front',
    focus: '50% 30%',
  },
  facadeNeon: {
    src: facadeNeon,
    alt: 'Red neon lines and a white wing sculpture across the Space Next Door building',
    focus: '40% 40%',
  },
  mainHall: {
    src: mainHall,
    alt: 'A full main hall at Space Next Door under pink and red neon, guests seated at high tables',
    focus: '60% 60%',
  },
  poolLounge: {
    src: poolLounge,
    alt: 'A guest lines up a shot on a blue pool table, with a wall of sports screens behind',
    focus: '50% 45%',
  },
  neonSpade: {
    src: neonSpade,
    alt: 'A glowing neon spade sign above the bar, framed by coloured stage lights',
    focus: '30% 40%',
  },
  hallLights: {
    src: hallLights,
    alt: 'Green light rig, disco lights and screens across the ceiling of the main hall at night',
    focus: '45% 50%',
  },
} satisfies Record<string, Photo>

export const DEMO = {
  nyamaChoma: {
    src: nyamaChoma,
    alt: 'Nyama choma, chunks of roast goat stacked on a charcoal grill',
    focus: '55% 55%',
  },
  grillCounter: {
    src: grillCounter,
    alt: 'Freshly grilled meat piled along the grill counter',
    focus: '82% 60%',
  },
  openGrill: {
    src: openGrill,
    alt: 'An open charcoal grill glowing with embers in a restaurant kitchen',
    focus: '50% 60%',
  },
  coals: {
    src: coals,
    alt: 'A cut of meat over white-hot coals',
    focus: '65% 50%',
  },
  cocktail: {
    src: cocktail,
    alt: 'A cocktail over ice on the bar, neon lights blurred behind it',
    focus: '55% 50%',
  },
  wings: {
    src: wings,
    alt: 'A plate of charred, glazed chicken wings',
    focus: '50% 55%',
  },
  tilapia: {
    src: tilapia,
    alt: 'Whole fried tilapia with ugali, sukuma wiki and kachumbari',
    focus: '45% 55%',
  },
  burger: {
    src: burger,
    alt: 'A cheeseburger with seasoned fries',
    focus: '70% 50%',
  },
} satisfies Record<string, Photo>

// Attribution required by the Creative Commons licences. Shown at /credits.
export const DEMO_CREDITS = [
  {
    title: 'Nyama choma barbeque',
    author: 'safaritravelplus',
    licence: 'CC0 1.0',
    source: 'https://commons.wikimedia.org/wiki/File:Nyama_choma_barbeque.jpg',
  },
  {
    title: 'Barbecue Kenya',
    author: 'safaritravelplus',
    licence: 'CC0 1.0',
    source: 'https://commons.wikimedia.org/wiki/File:Barbecue_kenya.jpg',
  },
  {
    title: 'Charcoal grill',
    author: 'T.Tseng',
    licence: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Charcoal_grill.jpg',
  },
  {
    title: 'Small piece of meat',
    author: 'Håkan Dahlström',
    licence: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Small_piece_of_meat_(5650576076).jpg',
  },
  {
    title: 'A chilled cocktail on the bar',
    author: 'PattayaPatrol',
    licence: 'CC BY-SA 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:DSCF0502_A_chilled_cocktail_on_the_bar_ice_clinking_and_neon_lights_blurring_into_a_colorful_night.jpg',
  },
  {
    title: 'Home-made chicken wings',
    author: 'JIP',
    licence: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Home-made_chicken_wings.jpg',
  },
  {
    title: 'Fried Tilapia, Ugali, Sukuma Wiki and Kachumbari (From Kisumu)',
    author: 'Napendakukula',
    licence: 'CC BY-SA 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:Fried_Tilapia,_Ugali,_Sukuma_Wiki_and_Kachumbari_(From_Kisumu).JPG',
  },
  {
    title: 'Cheeseburger and fries',
    author: 'jeffreyw',
    licence: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Cheeseburger_and_fries.jpg',
  },
] as const
