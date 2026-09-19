// data/menu.ts
//
// PLACEHOLDER MENU — Space Next Door demo (space-next-door-demo branch).
// No real menu, dish names, or prices could be publicly verified for this
// venue, so every item below is a clearly-labeled placeholder rather than
// an invented dish. Replace with the client's real menu (names, descriptions,
// prices, photos) before this demo goes live. Category keys are unchanged
// from the original site (see types/menu.ts) to avoid touching MenuFilter/
// MenuCard component logic; only their display labels are re-themed for a
// sports bar & grill.
//
// Swap the `image` paths for real photography once it's shot — everything
// else (cards, filters, badges) reads from here, nothing is hardcoded in
// the components.

import type {
  DietaryTag,
  MenuBadgeType,
  MenuFilterCategory,
  MenuItem,
} from '@/types/menu'

export const CATEGORY_LABELS: Record<MenuFilterCategory, string> = {
  all: 'All Selection',
  breakfast: 'Bar Bites & Starters',
  mains: 'Grill & Mains',
  'pizzas-burgers': 'Pizzas & Burgers',
  cocktails: 'Cocktails & Spirits',
}

export const MENU_CATEGORIES: MenuFilterCategory[] = [
  'all',
  'breakfast',
  'mains',
  'pizzas-burgers',
  'cocktails',
]

export const BADGE_LABELS: Record<MenuBadgeType, string> = {
  'chefs-selection': "Chef's Selection",
  'house-favourite': 'House Favourite',
  'signature-dish': 'Signature Dish',
  'premium-cut': 'Premium Cut',
  'wine-pairing': 'Wine Pairing Available',
}

export const DIETARY_TAG_META: Record<DietaryTag, { label: string; icon: string }> = {
  vegetarian: { label: 'Vegetarian', icon: '🌿' },
  'gluten-free': { label: 'Gluten Free', icon: '🌾' },
  'contains-nuts': { label: 'Contains Nuts', icon: '🥜' },
  dairy: { label: 'Dairy', icon: '🥛' },
  spicy: { label: 'Hot / Spicy', icon: '🌶' },
}

// Dish titles come straight from the photography filenames dropped into
// public/images/menu — that's the client's real menu naming, so it's used
// as-is rather than invented. `description`, `rating` and `price` are still
// unconfirmed, so they stay clearly-labeled placeholders (price "TBC")
// until the client supplies copy and pricing.
export const MENU_ITEMS: MenuItem[] = [
  // ── Bar Bites & Starters ───────────────────────────────────────
  {
    id: 'artisan-french-toast-flight',
    title: 'Artisan French Toast Flight',
    category: 'breakfast',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/artisan-french-toast-flight.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'golden-croissant-benedict',
    title: 'Golden Croissant Benedict',
    category: 'breakfast',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/golden-croissant-benedict.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'truffle-avocado-toast',
    title: 'Truffle Avocado Toast',
    category: 'breakfast',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/truffle-avocado-toast.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },

  // ── Grill & Mains ────────────────────────────────────────────
  {
    id: 'creamy-garlic-chicken',
    title: 'Creamy Garlic Chicken',
    category: 'mains',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/creamy-garlic-chicken.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'creamy-truffle-pasta',
    title: 'Creamy Truffle Pasta',
    category: 'mains',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/creamy-truffle-pasta.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'slow-braised-lamb-shank',
    title: 'Slow-Braised Lamb Shank',
    category: 'mains',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/slow-braised-lamb-shank.jpeg',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'pan-seared-nile-perch',
    title: 'Pan-Seared Nile Perch',
    category: 'mains',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/pan-seared-nile-perch.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'ugali-and-fish',
    title: 'Ugali & Fish',
    category: 'mains',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/ugali-and-fish.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },

  // ── Pizzas & Burgers ─────────────────────────────────────────
  {
    id: 'smoked-bbq-pulled-pork-pizza',
    title: 'Smoked BBQ Pulled Pork Pizza',
    category: 'pizzas-burgers',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/smoked-bbq-pulled-pork-pizza.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'wagyu-smash-burger',
    title: 'Wagyu Smash Burger',
    category: 'pizzas-burgers',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/wagyu-smash-burger.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },

  // ── Cocktails & Spirits ──────────────────────────────────────
  {
    id: 'black-perch-old-fashioned',
    title: 'Black Perch Old Fashioned',
    category: 'cocktails',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/black-perch-old-fashioned.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'golden-hour-spritz',
    title: 'Golden Hour Spritz',
    category: 'cocktails',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/golden-hour-spritz.png',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
  {
    id: 'smoked-whiskey-sour',
    title: 'Smoked Whiskey Sour',
    category: 'cocktails',
    description: '[Add real description once the menu is confirmed]',
    image: '/images/menu/smoked-whiskey-sour.jpeg',
    rating: 0,
    price: 0,
    currency: 'TBC',
  },
]
