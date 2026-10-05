// data/menu.ts
//
// DEMO CONTENT — Space Next Door hasn't published a menu online, so every
// dish, description and price below is a plausible stand-in written for
// the pitch, not the venue's real menu. Replace all of it with their
// actual dishes and KES prices before the site goes live.
//
//   { name: 'Dish name', description: 'Optional one-liner', price: 950 }
//
// The homepage shows the first HOME_ITEMS dishes of each section as its
// signatures; the full list lives at /menu. Section photos are DEMO
// stand-ins too (see data/photos.ts).

import { DEMO, type Photo } from './photos'

export type MenuItem = {
  name: string
  description?: string
  price?: number
}

export type MenuSection = {
  id: string
  /** Short label for the category tabs */
  tab: string
  title: string
  blurb: string
  photo: Photo
  items: MenuItem[]
}

export const HOME_ITEMS = 4

export const MENU: MenuSection[] = [
  {
    id: 'grill',
    tab: 'Grill',
    title: 'From the grill',
    photo: DEMO.grillCounter,
    blurb: 'Hot off the grill, for match days and long nights.',
    items: [
      {
        name: 'Nyama Choma',
        description: 'Slow-roasted goat, kachumbari, ugali. Half kilo.',
        price: 1200,
      },
      {
        name: 'Space Mixed Grill',
        description: 'Goat ribs, beef, chicken and sausages for the table.',
        price: 3800,
      },
      {
        name: 'Flame-Grilled Chicken',
        description: 'Half chicken, lemon and herb or peri-peri.',
        price: 1100,
      },
      {
        name: 'Beef Short Ribs',
        description: 'Sticky smoked barbecue glaze, masala chips.',
        price: 1650,
      },
      {
        name: 'Pork Chops',
        description: 'Charred, with grilled pineapple and pili pili.',
        price: 1350,
      },
      {
        name: 'Mshikaki Skewers',
        description: 'Marinated beef, three skewers, tamarind dip.',
        price: 750,
      },
    ],
  },
  {
    id: 'kitchen',
    tab: 'Kitchen',
    title: 'From the kitchen',
    photo: DEMO.wings,
    blurb: 'Plates to share, and plates you won’t.',
    items: [
      {
        name: 'Space Wings',
        description: 'Ten wings: honey-chilli, barbecue or dry rub.',
        price: 850,
      },
      {
        name: 'Loaded Masala Chips',
        description: 'Tossed in house masala, coriander, lime.',
        price: 450,
      },
      {
        name: 'Next Door Burger',
        description: 'Double beef, cheddar, caramelised onion, chips.',
        price: 950,
      },
      {
        name: 'Tilapia Fry',
        description: 'Whole fried tilapia, sukuma wiki, ugali.',
        price: 1250,
      },
      {
        name: 'Chicken Tikka Pizza',
        description: 'Stone-baked, twelve inch, built for sharing.',
        price: 1100,
      },
      {
        name: 'Match-Day Platter',
        description: 'Wings, samosas, sausages, chips. Feeds four.',
        price: 2600,
      },
    ],
  },
  {
    id: 'bar',
    tab: 'Bar',
    title: 'From the bar',
    photo: DEMO.cocktail,
    blurb: 'Cocktails, cold beer and bottles.',
    items: [
      {
        name: 'The Space To Be',
        description: 'House signature: gin, hibiscus, lime, tonic.',
        price: 750,
      },
      {
        name: 'Dawa',
        description: 'Vodka, honey, muddled lime, crushed ice.',
        price: 600,
      },
      {
        name: 'Neon Mojito',
        description: 'White rum, mint, passion fruit, soda.',
        price: 700,
      },
      {
        name: 'Whisky Highball',
        description: 'Blended Scotch, ginger ale, long and cold.',
        price: 650,
      },
      {
        name: 'Beer Bucket',
        description: 'Six ice-cold local lagers for the table.',
        price: 1800,
      },
      {
        name: 'Bottle Service',
        description: 'Premium spirits with mixers. Ask your host.',
      },
    ],
  },
]

export const MENU_CURRENCY = 'KES'
