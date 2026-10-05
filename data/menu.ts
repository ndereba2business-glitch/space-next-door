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
    title: 'Bar',
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
