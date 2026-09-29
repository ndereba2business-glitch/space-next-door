// data/menu.ts
//
// Space Next Door hasn't published a menu online, so nothing here is
// invented. The Menu section shows a "request today's menu" state until
// items are added below, then it renders them as an editorial price list
// automatically.
//
// To go live: fill `items` for each section with the venue's real dishes
// and prices (KES). Empty sections are hidden.
//
//   { name: 'Dish name', description: 'Optional one-liner', price: 950 }

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
    items: [],
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
