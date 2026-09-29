# Image credits and replacement guide

Every photograph on this site belongs to **Space Next Door, Nakuru**. They are
stills taken from the venue's own public TikTok posts
([@spacenextdoornkr](https://www.tiktok.com/@spacenextdoornkr)), and the logo
comes from their Facebook page. They are here so the concept can be shown to
the venue with its real space, not stock or AI imagery.

**Before launch:** ask management for the original, high-resolution photos
and written permission to use them. Then drop each replacement into
`assets/venue/` under the same filename. Nothing else needs to change, and
Next.js regenerates every responsive size and the blur placeholders.

| File | Shows | Source post | Used in |
| --- | --- | --- | --- |
| `assets/venue/facade-portrait.jpg` | Red neon façade at night | TikTok video 7689945659025231111 (Sep 2026) | Hero |
| `assets/venue/facade-neon.jpg` | Neon ribs + wing sculpture (square crop) | same | Venue intro, gallery, Nights preview |
| `assets/venue/main-hall.jpg` | Full main hall under neon | TikTok video 7689893369832639796 (Sep 2026) | Celebrations, gallery, closing CTA |
| `assets/venue/pool-lounge.jpg` | Pool table + sports screens | TikTok video 7632330643216567572 (Apr 2026) | Sports bar pillar, gallery |
| `assets/venue/neon-spade.jpg` | Neon spade sign over the bar | TikTok video 7517179019603758341 (2025) | Grill & bar pillar, gallery |
| `assets/venue/hall-lights.jpg` | Light rig and screens | TikTok video 7690569291506257172 (Sep 2026) | Nightlife pillar, gallery |
| `public/brand/logo-*.png`, `app/icon.png`, `app/apple-icon.png` | Script logo / round emblem | Facebook page profile image | Header, footer, favicon |
| `app/opengraph-image.jpg` | Share card (façade + logo) | composed from the above | Link previews |

## What was done to them

- Cropped for the layouts: portrait for the hero, 4:5 and square for cards,
  a landscape crop of the light rig that stops above the guests.
- Light grade only: saturation −6%, contrast +6%, a touch of clarity. Clipped
  neon is tamed; nothing is added, removed or retouched.
- The venue's own corner watermark was cropped out of the pool photo.
- Close-ups of individual guests were deliberately not used. Only room,
  crowd-at-distance and detail shots appear.

## Removed

The previous build used Black Perch venue photos, AI-generated food, a Google
Lens screenshot and another hotel's lounge (with its watermark) as the hero.
All of it is gone from the repository.
