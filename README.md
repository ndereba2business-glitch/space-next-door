# Space Next Door — website concept

A website for **Space Next Door**, the sports bar, grill and nightlife venue
in the former Tuskys Building on the Nakuru–Nairobi Highway, Kenya. Built by
Forge Eleven as a client concept.

**This is a pitch demo.** The venue's identity, location, contact details
and photos of the building are real. The menu, prices, per-area hours,
delivery details and all food photography are stand-ins, marked `DEMO` in
the code. See the checklist below.

Live: https://space-next-door.vercel.app

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
npm run typecheck
```

Requires Node 20.9+.

## Before launch (replace the demo content)

Search the repo for `DEMO` and `VERIFY`.

- [ ] **Menu**: replace every dish and price in `data/menu.ts`.
- [ ] **Food photography**: replace `assets/demo/*` with the venue's own
      (same filenames), then delete `DEMO_CREDITS` in `data/photos.ts` and
      the `/credits` route. See [`IMAGE-CREDITS.md`](IMAGE-CREDITS.md).
- [ ] **Venue photography**: swap `assets/venue/*` for original high-res
      files and get written permission to use them.
- [ ] **Hours**: "Open 24/7" comes from the venue's bios; the per-area
      times in `data/site.ts` are invented. Confirm both.
- [ ] **Ordering and delivery**: the three steps and "delivery within
      Nakuru town" in `data/site.ts` are invented. Confirm area, fees, hours.
- [ ] **Weekly nights**: themes come from the venue's recent posts. Confirm
      the current line-up (`data/venue.ts`).
- [ ] **Map**: paste the exact Google Maps place link into `mapsQuery`
      (`data/site.ts`).
- [ ] **Domain**: set `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap
      and social previews point at the real domain.
- [ ] **Reviews**: none are shown. Add only real, attributed reviews.

## Pages

| Route | What |
| --- | --- |
| `/` | Hero, venue, menu showcase, ordering, the space, weekly nights, gallery, visit, reservation CTA |
| `/menu` | The full menu, by category |
| `/credits` | Attribution for the demo food photos (required by their licences) |

## How it's built

- **Next.js 16** (App Router, Turbopack), fully static output.
- **CSS Modules** with design tokens and section themes in
  `app/globals.css`, with no CSS framework. A section sets `.theme-light`,
  `.theme-dark` or `.theme-ember` and everything inside reads the same
  semantic tokens (`--bg`, `--fg`, `--fg-dim`, `--line`, `--accent-text`).
- **next/image** with static imports: AVIF/WebP, responsive `sizes`, blur
  placeholders; the hero image is preloaded. Each photo carries a `focus`
  point so crops keep the subject in frame.
- **Motion**: one client component (`components/layout/Motion.tsx`) runs
  Lenis smooth scrolling and GSAP ScrollTrigger reveals. Sections opt in with
  `data-reveal="up" | "lines" | "image"` and `data-speed` for parallax, so
  they stay server components. The hero entrance is pure CSS. Everything is
  off under `prefers-reduced-motion`.
- **Conversion**: every reserve/order/birthday/night button opens WhatsApp
  with a pre-filled message (`LINKS` in `data/site.ts`); phones get a
  floating Call / Reserve / Order bar.
- **SEO**: metadata, Open Graph card, `BarOrPub`/`NightClub` JSON-LD,
  robots.txt and sitemap.

```
app/                 layout, home, /menu, /credits, 404, icons, OG image, robots, sitemap
components/layout/   Header, Footer, MobileActionBar, Motion, StructuredData
components/sections/ Hero, Intro, MenuShowcase, Order, Space, Nights, Gallery, Visit, ClosingCta
components/ui/       SectionHead, MenuList, icons
data/                site facts, photos, venue content, menu, nav  ← edit content here
assets/venue/        the venue's own photography
assets/demo/         stand-in food photography (replace before launch)
public/brand/        logo files
```

## Design

Warm editorial base with the venue's red as the single accent.

| Token | Value | Use |
| --- | --- | --- |
| `--cream` / `--bone` | `#f5eee3` / `#ece2d2` | light sections |
| `--espresso` | `#18120f` | dark sections |
| `--red` | `#c81e25` | logo red: buttons, the ordering band |
| `--red-bright` | `#ff6a5e` | red for small text on dark |
| Display | Fraunces (light, with italics for emphasis) | headings |
| Body | Manrope | copy, labels, UI |

## Deploy

The GitHub repo is connected to Vercel: pushes to `main` deploy to
production, other branches get preview URLs. No environment variables are
required; set `NEXT_PUBLIC_SITE_URL` once there is a real domain.
