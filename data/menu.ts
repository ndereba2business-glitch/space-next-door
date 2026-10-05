// data/menu.ts
//
// DEMO CONTENT — Space Next Door hasn't published a menu online, so every
// dish, description and price below is a plausible stand-in written for
// the pitch, not the venue's real menu. Replace all of it with their
// actual dishes and KES prices before the site goes live.
//
//   { name: 'Dish name', description: 'Optional one-liner', price: 950 }
//
// Sections with no items are hidden; if every section is empty the Menu
// section falls back to a "get today's menu on WhatsApp" state.

export type MenuItem = {
  name: string
  description?: string
  price?: number
}

export type MenuSection = {
  id: string
  title: string
  blurb: string
  items: MenuItem[]
}

export const MENU: MenuSection[] = [
  {
    id: 'grill',
    title: 'From the Grill',
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
    title: 'Kitchen',
    blurb: 'Plates to share, and plates you won’t.',
    items: [],
  },
  {
    id: 'bar',
    title: 'Bar',
    blurb: 'Bottles, rounds and the drinks that start the night.',
    items: [],
  },
]

export const MENU_CURRENCY = 'KES'
