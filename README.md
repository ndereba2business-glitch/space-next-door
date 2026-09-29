# Space Next Door — website concept

A single-page website for **Space Next Door**, the sports bar, grill and
nightlife venue in the former Tuskys Building on the Nakuru–Nairobi Highway,
Kenya. Built by Forge Eleven as a client concept.

Every fact on the site comes from the venue's own public channels, and every
photo is theirs. See [`data/site.ts`](data/site.ts) and
[`IMAGE-CREDITS.md`](IMAGE-CREDITS.md).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
npm run typecheck
```

Requires Node 20.9+.

## Before launch (checklist for the venue)

Anything that still needs the venue's confirmation is marked `VERIFY` in the
data files.

- [ ] **Photography**: swap in original high-res photos and get written
      permission (see `IMAGE-CREDITS.md`).
- [ ] **Hours**: the site says "Open 24/7", taken from their Instagram and
      TikTok bios. Confirm, including kitchen hours (`data/site.ts`).
- [ ] **Weekly nights**: themes come from their recent posts. Confirm the
      current line-up (`data/venue.ts`).
- [ ] **Menu**: add real items and KES prices to `data/menu.ts`. The section
      switches from "get the menu on WhatsApp" to a price list automatically.
- [ ] **Map**: paste the exact Google Maps place link into `mapsQuery` /
      `LINKS.directions` (`data/site.ts`).
- [ ] **Domain**: set `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap
      and social previews point at the real domain.
- [ ] **Reviews**: none are shown. Add only real, attributed Google/Facebook
      reviews if the venue wants social proof.

## How it's built

- **Next.js 16** (App Router, Turbopack), fully static output.
- **CSS Modules** with design tokens in `app/globals.css`, with no CSS framework.
- **next/image** with static imports: AVIF/WebP, responsive `sizes`, blur
  placeholders; the hero image is preloaded.
- **Motion**: one client component (`components/layout/Motion.tsx`) runs
  Lenis smooth scrolling and GSAP ScrollTrigger reveals. Sections opt in with
  `data-reveal="up" | "lines" | "image"` and `data-speed` for parallax, so
  they stay server components. The hero entrance is pure CSS. Everything is
  off under `prefers-reduced-motion`.
- **SEO**: metadata, Open Graph card, `BarOrPub`/`NightClub` JSON-LD,
  robots.txt and sitemap.

```
app/                 layout, page, 404, icons, OG image, robots, sitemap
components/layout/   Header, Footer, MobileActionBar, Motion, StructuredData
components/sections/ Hero, Intro, Experience, Nights, Menu, Gallery, Visit, ClosingCta
components/ui/       SectionHead, icons
data/                site facts, venue content, menu, nav  ← edit content here
assets/venue/        photography (statically imported)
public/brand/        logo files
```

## Design

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0b0809` | background |
| `--paper` | `#f4efe9` | text |
| `--red` | `#d91f26` | logo red: fills, large type |
| `--red-hot` | `#ff4a4f` | red for small text (5.9:1) |
| Display | Big Shoulders | headings, uppercase |
| Body | Manrope | copy, UI |

## Deploy

Deploy as its own Vercel project and set `NEXT_PUBLIC_SITE_URL`. No other
environment variables are needed.
