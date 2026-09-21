// data/menu.ts
//
// Menu content for Space Next Door / Black Perch. Real dish photography
// lives in /public/images/menu; every item below points at one of those
// files. Copy, prices (KES), badges, dietary tags and pairings are not yet
// client-confirmed — see the note above MENU_ITEMS for provenance — so
// double-check everything here against the client's actual menu before
// this goes live.

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

// Descriptions, prices (KES), badges, dietary tags and pairings below are
// restored from this repo's own history (see space-next-door-demo-phase-a.patch)
// — an earlier commit had this same copy before it was stripped to
// placeholders pending client verification. Two exceptions carry fresh,
// still-unverified copy: `creamy-truffle-pasta` has no prior history at all,
// and `black-perch-old-fashioned` was historically written up as a bourbon
// cocktail, but its actual photo is a chargrilled mixed-grill sharing
// platter — so it's re-titled/re-described to match the photo and moved to
// Mains. None of this has been confirmed with the client — verify before
// this goes live.
export const MENU_ITEMS: MenuItem[] = [
  // ── Bar Bites & Starters ───────────────────────────────────────
  {
    id: 'golden-croissant-benedict',
    title: 'Golden Croissant Benedict',
    category: 'breakfast',
    description:
      'Butter-laminated croissant, slow-poached egg, hollandaise, smoked salmon ribbons.',
    image: '/images/menu/golden-croissant-benedict.png',
    badge: 'chefs-selection',
    dietaryTags: ['dairy'],
    pairing: 'Fresh Orange Press',
    rating: 4.8,
    price: 950,
  },
  {
    id: 'truffle-avocado-toast',
    title: 'Truffle Avocado Toast',
    category: 'breakfast',
    description:
      'Charred sourdough, whipped avocado, black truffle oil, chili flake, microgreens.',
    image: '/images/menu/truffle-avocado-toast.png',
    badge: 'house-favourite',
    dietaryTags: ['vegetarian'],
    rating: 4.7,
    price: 850,
  },
  {
    id: 'artisan-french-toast-flight',
    title: 'Artisan French Toast Stack',
    category: 'breakfast',
    description:
      'Golden French toast stacked with crispy smoked bacon, whipped mascarpone and fresh chives.',
    image: '/images/menu/artisan-french-toast-flight.png',
    badge: 'signature-dish',
    dietaryTags: ['dairy'],
    rating: 4.9,
    price: 900,
  },

  // ── Grill & Mains ────────────────────────────────────────────
  {
    id: 'creamy-garlic-chicken',
    title: 'Creamy Garlic Chicken',
    category: 'mains',
    description:
      'Pan-fried artisan chicken with garlic butter cream, fresh coriander, walnuts.',
    image: '/images/menu/creamy-garlic-chicken.png',
    badge: 'chefs-selection',
    dietaryTags: ['dairy', 'contains-nuts'],
    pairing: 'Chardonnay',
    rating: 4.9,
    price: 1200,
  },
  {
    id: 'creamy-truffle-pasta',
    title: 'Creamy Truffle Pasta',
    category: 'mains',
    description:
      'Hand-tossed linguine in a silky parmesan cream, finished with shaved black truffle and cracked pepper.',
    image: '/images/menu/creamy-truffle-pasta.png',
    badge: 'house-favourite',
    dietaryTags: ['vegetarian', 'dairy'],
    pairing: 'Chardonnay',
    rating: 4.7,
    price: 1300,
  },
  {
    id: 'slow-braised-lamb-shank',
    title: 'Slow-Braised Lamb Shank',
    category: 'mains',
    description:
      'Twelve-hour braise, red wine jus, root vegetable purée, rosemary oil.',
    image: '/images/menu/slow-braised-lamb-shank.jpeg',
    badge: 'premium-cut',
    dietaryTags: ['gluten-free'],
    pairing: 'Malbec',
    rating: 4.8,
    price: 1800,
  },
  {
    id: 'pan-seared-nile-perch',
    title: 'Pan-Seared Nile Perch',
    category: 'mains',
    description:
      'Crisp-skin perch, brown butter, capers, charred lemon, seasonal greens.',
    image: '/images/menu/pan-seared-nile-perch.png',
    badge: 'house-favourite',
    dietaryTags: ['gluten-free', 'dairy'],
    pairing: 'Sauvignon Blanc',
    rating: 4.7,
    price: 1450,
  },
  {
    id: 'ugali-and-fish',
    title: 'Ugali and Fish',
    category: 'mains',
    description: 'Well cooked maize flour with a side of vegetables and fish.',
    image: '/images/menu/ugali-and-fish.png',
    badge: 'chefs-selection',
    dietaryTags: ['gluten-free'],
    rating: 4.8,
    price: 800,
  },
  {
    id: 'black-perch-old-fashioned',
    title: 'Signature Mixed Grill Platter',
    category: 'mains',
    description:
      'A sharing platter of chargrilled meat skewers, spiced potatoes, coconut rice, kachumbari and pili pili sauce.',
    image: '/images/menu/black-perch-old-fashioned.png',
    badge: 'signature-dish',
    pairing: 'Craft Lager',
    rating: 4.8,
    price: 3200,
  },

  // ── Pizzas & Burgers ─────────────────────────────────────────
  {
    id: 'wagyu-smash-burger',
    title: 'Wagyu Smash Burger',
    category: 'pizzas-burgers',
    description:
      'Double-smashed wagyu, aged cheddar, caramelized onion, truffle aioli, brioche bun.',
    image: '/images/menu/wagyu-smash-burger.png',
    badge: 'signature-dish',
    dietaryTags: ['dairy'],
    rating: 4.9,
    price: 1350,
  },
  {
    id: 'smoked-bbq-pulled-pork-pizza',
    title: 'Smoked BBQ Pulled Pork Pizza',
    category: 'pizzas-burgers',
    description:
      'Twelve-hour smoked pork, house BBQ glaze, pickled red onion, smoked mozzarella.',
    image: '/images/menu/smoked-bbq-pulled-pork-pizza.png',
    badge: 'house-favourite',
    dietaryTags: ['spicy', 'dairy'],
    rating: 4.6,
    price: 1250,
  },

  // ── Cocktails & Spirits ──────────────────────────────────────
  {
    id: 'golden-hour-spritz',
    title: 'Golden Hour Spritz',
    category: 'cocktails',
    description:
      'Frozen strawberry & passion fruit spritz layered over a citrus base, finished with fresh strawberry and mint.',
    image: '/images/menu/golden-hour-spritz.png',
    badge: 'house-favourite',
    rating: 4.7,
    price: 850,
  },
  {
    id: 'smoked-whiskey-sour',
    title: 'Smoked Whiskey Sour',
    category: 'cocktails',
    description:
      'Rye whiskey, fresh lemon, egg white foam, applewood smoke finish.',
    image: '/images/menu/smoked-whiskey-sour.jpeg',
    rating: 4.8,
    price: 1050,
  },
]
