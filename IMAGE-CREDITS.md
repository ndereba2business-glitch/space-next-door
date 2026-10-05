# Image credits and replacement guide

The site uses two groups of photographs, kept in separate folders and
declared separately in [`data/photos.ts`](data/photos.ts).

## 1. Venue photos (`assets/venue/`): Space Next Door's own

Stills taken from the venue's public TikTok posts
([@spacenextdoornkr](https://www.tiktok.com/@spacenextdoornkr)); the logo
comes from their Facebook page. They show the real building and rooms.

| File | Shows | Source post | Used in |
| --- | --- | --- | --- |
| `facade-portrait.jpg` | Red neon façade at night | TikTok video 7689945659025231111 (Sep 2026) | Hero inset |
| `facade-neon.jpg` | Neon ribs + wing sculpture | same | Venue intro, gallery, Nights |
| `main-hall.jpg` | Full main hall under neon | TikTok video 7689893369832639796 (Sep 2026) | The Space, gallery, Nights |
| `pool-lounge.jpg` | Pool table + sports screens | TikTok video 7632330643216567572 (Apr 2026) | The Space, gallery |
| `neon-spade.jpg` | Neon spade sign over the bar | TikTok video 7517179019603758341 (2025) | Gallery, Nights |
| `hall-lights.jpg` | Light rig and screens | TikTok video 7690569291506257172 (Sep 2026) | The Space, Nights |
| `public/brand/logo-*.png`, `app/icon.png`, `app/apple-icon.png` | Script logo / round emblem | Facebook page profile image | Header, footer, favicon |

Treatment: cropped for the layouts and lightly graded (saturation −6%,
contrast +6%, a touch of clarity). Nothing added, removed or retouched.
Close-ups of individual guests were deliberately not used.

**Before launch:** ask management for the original high-resolution photos
and written permission, then drop each into `assets/venue/` under the same
filename.

## 2. Demo food and drink photos (`assets/demo/`): stand-ins, NOT the venue

Space Next Door has not published food photography, so the hero, menu,
ordering and parts of the gallery use free-licence photos from Wikimedia
Commons. **They do not show Space Next Door's dishes or kitchen.** They are
there so the concept can be judged with food in it.

| File | Original | Author | Licence |
| --- | --- | --- | --- |
| `nyama-choma.jpg` | [Nyama choma barbeque](https://commons.wikimedia.org/wiki/File:Nyama_choma_barbeque.jpg) | safaritravelplus | CC0 1.0 |
| `grill-counter.jpg` | [Barbecue Kenya](https://commons.wikimedia.org/wiki/File:Barbecue_kenya.jpg) | safaritravelplus | CC0 1.0 |
| `open-grill.jpg` | [Charcoal grill](https://commons.wikimedia.org/wiki/File:Charcoal_grill.jpg) | T.Tseng | CC BY 2.0 |
| `coals.jpg` | [Small piece of meat](https://commons.wikimedia.org/wiki/File:Small_piece_of_meat_(5650576076).jpg) | Håkan Dahlström | CC BY 2.0 |
| `cocktail.jpg` | [A chilled cocktail on the bar](https://commons.wikimedia.org/wiki/File:DSCF0502_A_chilled_cocktail_on_the_bar_ice_clinking_and_neon_lights_blurring_into_a_colorful_night.jpg) | PattayaPatrol | CC BY-SA 4.0 |
| `wings.jpg` | [Home-made chicken wings](https://commons.wikimedia.org/wiki/File:Home-made_chicken_wings.jpg) | JIP | CC BY-SA 4.0 |
| `tilapia.jpg` | [Fried Tilapia, Ugali, Sukuma Wiki and Kachumbari](https://commons.wikimedia.org/wiki/File:Fried_Tilapia,_Ugali,_Sukuma_Wiki_and_Kachumbari_(From_Kisumu).JPG) | Napendakukula | CC BY-SA 4.0 |
| `burger.jpg` | [Cheeseburger and fries](https://commons.wikimedia.org/wiki/File:Cheeseburger_and_fries.jpg) | jeffreyw | CC BY 2.0 |

All were cropped and colour-graded. The CC BY and CC BY-SA licences require
attribution, which the site gives on its [`/credits`](app/credits/page.tsx)
page (linked from the footer). Cropped versions of the BY-SA photos remain
under CC BY-SA 4.0.

**Before launch:** replace every file in `assets/demo/` with the venue's own
food and drink photography (same filenames), then delete `DEMO_CREDITS` in
`data/photos.ts` and the `/credits` route.

## Removed earlier

The first build used Black Perch venue photos, AI-generated food, a Google
Lens screenshot and another hotel's lounge (with its watermark) as the hero.
All of it is gone from the repository.
