<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# House rules for this site

These are not preferences to weigh; they are hard rules. `tests/unit/design-rules.test.ts`
and the "house rules" block in `tests/e2e/page.spec.ts` enforce most of them, so
breaking one fails the build.

Never use:

- purple gradients, or gradient fills of any kind (flat colour only)
- pill-shaped buttons, chips or badges (`rounded-md` or square)
- fake reviews, testimonials or invented metrics
- vague hero copy; say what was built, for whom, with what
- emoji as icons (lucide line icons instead)
- em dashes, in copy or in comments
- looping or cascading scroll animation (one short fade per block is the ceiling)
- AI-generated stock photography, filler copy, or typewriter/cursor effects

Before launch, all of these must be true:

1. custom domain connected, with `NEXT_PUBLIC_SITE_URL` pointing at it
2. favicon in place (`src/app/icon.tsx`, `src/app/apple-icon.tsx`)
3. no "made with AI" badge anywhere in the UI
4. `/[locale]/privacy` published
5. `/[locale]/terms` published
