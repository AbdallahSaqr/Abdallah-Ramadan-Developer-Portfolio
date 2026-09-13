# Abdallah Ramadan — Portfolio

Personal portfolio: a single animated landing page served in English and Arabic
(RTL), with light/dark themes and no backend.

Built with **Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Motion ·
next-themes · TypeScript**, tested with **Vitest + Testing Library** and
**Playwright**.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script                  | What it does                                     |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Dev server                                       |
| `npm run build`         | Production build                                 |
| `npm start`             | Serve the production build                       |
| `npm run lint`          | ESLint (next/core-web-vitals + TypeScript)       |
| `npm run typecheck`     | `tsc --noEmit`                                   |
| `npm test`              | Unit + component tests (Vitest)                  |
| `npm run test:coverage` | Same, with an 80 % coverage gate                 |
| `npm run test:e2e`      | Playwright suite against a fresh production build |
| `npm run check`         | Lint + typecheck + unit tests — run before push  |

`npm run test:e2e` builds the app and serves it on port 3100; the first run
needs `npx playwright install chromium`.

## Routing and locales

- `/en` and `/ar` are prerendered at build time; `/` redirects to whichever the
  visitor's `lang` cookie, then their `Accept-Language` header, then English
  suggests (`src/proxy.ts`).
- The locale segment drives `<html lang>`/`dir`, the copy, the metadata and the
  `hreflang` alternates, so both languages are indexable and shareable.
- The language toggle navigates between the two routes and stores the choice in
  the `lang` cookie.

## Configuration

`NEXT_PUBLIC_SITE_URL` sets the absolute origin used for canonical URLs, Open
Graph tags, `sitemap.xml` and `robots.txt`. On Vercel it is inferred from the
deployment URL, so it is only needed for a custom domain. See `.env.example`.

## Project layout

```
src/
  app/
    [locale]/
      layout.tsx          Root layout: fonts, metadata, locale from the route
      page.tsx            Section composition
      opengraph-image.tsx Social card, generated at build time
    globals.css           Theme tokens, base styles, reduced-motion rules
    robots.ts / sitemap.ts
  proxy.ts                Locale redirect for `/`
  assets/                 Images imported by next/image (blur placeholders)
  components/
    providers/            Theme, locale and motion context
    site/                 Page sections (hero, about, work, …)
    ui/                   Presentational primitives
  lib/
    site-config.ts        Content: profile, projects, skills, experience
    i18n.ts               EN/AR strings; English keys define the contract
    motion.ts             Shared easings and variants
    use-*.ts              Small client hooks
tests/
  unit/                   Vitest + Testing Library (components, hooks, config)
  e2e/                    Playwright (routing, SEO, headers, a11y, mobile menu)
```

## Editing content

- **Profile, projects, skills, experience:** `src/lib/site-config.ts`
- **Copy in both languages:** `src/lib/i18n.ts` — English is the source of
  truth; a key missing from Arabic is a type error.
- **Project screenshots:** `src/assets/previews/` (imported, not `/public`, so
  they get dimensions and blur placeholders automatically).
- **Client wordmarks:** `src/assets/logos/`, attached to a project via its
  `logo` field.
- **Portrait:** `src/assets/abdallah.jpg` — the frame follows the image's own
  aspect ratio, so any replacement fits.
- **CV:** `public/abdallah-ramadan-cv.pdf`

## Testing

- Unit and component tests run in jsdom; images are stubbed as
  `StaticImageData` and `IntersectionObserver`/`matchMedia` are faked in
  `tests/setup.ts`.
- The Playwright suite runs on desktop and mobile viewports and covers locale
  routing, metadata, security headers, image optimisation, the mobile menu's
  focus trap, and axe-core accessibility scans in both themes and locales.

## Notes

- Security headers (CSP, HSTS, frame/referrer/permissions policies) are set in
  `next.config.ts`.
- Sections use `content-visibility: auto`; `HashScroll` compensates so deep
  links such as `/en#work` still land on the right section.
