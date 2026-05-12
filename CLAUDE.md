# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Astro dev server on `http://localhost:4321` |
| `npm run build` | Production build into `./dist/` (runs the inline-CSS post-build step) |
| `npm run preview` | Preview the production build locally |
| `npm start` | Run the built SSR server (`node ./dist/server/entry.mjs`, listens on `PORT` or 80) |
| `npm run check` | `astro check` — type-check `.astro` files and TS |
| `npm run lint` | ESLint across `.js .mjs .ts .tsx .astro` |
| `npm run lint:fix` | ESLint with `--fix` |
| `npm run format` | Prettier write-in-place |
| `npm run format:check` | Prettier dry-run (CI-friendly) |

There is no test suite. Type-checking is `astro check` only.

## Architecture

**Astro 5 SSR site** (`output: 'server'`) using `@astrojs/node` in `standalone` mode — the build emits `dist/server/entry.mjs`, which is what `npm start` runs. No static export.

**Routing entry points are `src/pages/en/index.astro` and `src/pages/es/index.astro`.** The top-level `src/pages/index.astro` is empty on purpose: i18n is configured with `prefixDefaultLocale: true` + `redirectToDefaultLocale: true`, so `/` redirects into `/en/`. Adding routes means creating them inside *both* `en/` and `es/` directories — do not put content at the top-level `index.astro`.

**i18n is label-based, not route-based.** `src/i18n/ui.ts` holds a flat `labels` object keyed by locale (`en`, `es`) → string key. Components/layouts read the current locale via `Astro.currentLocale` and call `useTranslations(lang)(key)` from `src/i18n/utils.ts`. When adding copy, add the key to *both* `en` and `es` blocks in `ui.ts` — `useTranslations` falls back to `en` if a key is missing in the requested locale.

**`src/layouts/Layout.astro` is the single shared shell** and owns: SEO meta, Open Graph/Twitter cards, hreflang/canonical, Schema.org JSON-LD, Google Analytics (loaded via `requestIdleCallback` to avoid blocking), the animated multi-layer star background, font preload/async-load, and a `setTheme` helper on `window`. Pages render their sections inside this layout's slot.

**`astro.config.mjs` defines a custom `inlineSmallCSS` integration** that runs on `astro:build:done`: it walks `dist/`, finds `<link rel="stylesheet" href=".../\_astro/*.css">` references in built HTML, and inlines any CSS file under 25 kB as a `<style>` tag. Render-blocking CSS requests are eliminated this way — be aware that `npm run build` rewrites HTML files in place after Astro finishes.

**Backend URL injection.** `BACKEND_URL_PROD` (env var, defaults to `localhost:3000/email/send/`) is baked into the client bundle at build time via Vite `define` as `globalThis.BACKEND_URL`. The contact form (`KeepInTouch.astro`) uses this for email submission. CI provides it via the `BACKEND_URL_PROD` secret.

**Content lives in two places (today):**
- Static structured data (work experience, technologies, certifications, social/roadmap/navigation links) → `src/constants/*.ts`, re-exported from `src/constants/index.ts`.
- Translatable strings → `src/i18n/ui.ts`.

> Planned: migrate `src/constants/` → `src/content/` collections (Zod-validated) and reorganize `src/components/` into domain folders (`ui/`, `layout/`, `sections/`, `galaxy/`). See "Pending Refactors" below.

## Style Guide — Galaxy Theme

The visual system is dark-only ("space"). Tokens live in `src/styles/global.css` `:root` (single source of truth) and in `tailwind.config.mjs`. **Do not hard-code these colors inline** — reference the variable or the Tailwind utility.

### Color Palette

| Token | Hex / value | Use |
| --- | --- | --- |
| `--primary-color` | `#3245ff` | Primary CTAs, link accents, gradient start, focus rings |
| `--secondary-color` | `#bc52ee` | Gradient end, secondary accents, scrollbar |
| `--bg-color` | `#0a0b14` | Page background ("deep space") |
| `--card-bg` | `#1a1b25` | Card / panel surfaces |
| `--text-color` | `#e5e7eb` | Body copy |
| `--accent-color` | `#9ca3af` | Muted/meta text |
| `--border-color` | `rgba(50, 69, 255, 0.2)` | Card borders, default outlines |
| `--hover-bg` | `rgba(50, 69, 255, 0.1)` | Hover tint |
| `--card-shadow` | `0 4px 20px rgba(50, 69, 255, 0.2)` | Card elevation |
| `--star-color` | `#ffffff` | Star background dots |

**Tailwind custom palettes** (`tailwind.config.mjs`): `pink.{400..950}` and `violet.{400..950}` — use these in addition to Tailwind defaults; avoid introducing new ad-hoc hex values.

**Signature gradient:** `linear-gradient(var(--primary-color), var(--secondary-color))`. Used on the scrollbar, mobile-menu underlines, and key accents.

**Nebula glow:** `radial-gradient(circle at center, rgba(50,69,255,0.1) 0%, rgba(188,82,238,0.1) 50%, transparent 100%)` — already applied via `.nebula` in `Layout.astro`. Don't re-create per-component.

### Typography

| Family | Source | Where |
| --- | --- | --- |
| **Roboto** (400/system fallback chain) | local `public/fonts/*.woff2`, preloaded | body text (`html { font-family: 'Roboto', ... }`) |
| **Merriweather** (serif) | local woff2 | headings (`h1`–`h5`) |
| **Audiowide** | Google Fonts, async-loaded | display / hero accents only |

Heading sizes (desktop / ≤480px): `h1` 2.6rem → 1.9rem · `h2` 2rem → 1.5rem · `h3` 1.25rem → 1.1rem. Body: 1rem · line-height 1.8 · letter-spacing 0.01em.

**Use `font-heading` (Tailwind) or `<h*>` tags** for serifs — don't manually set `font-family`. Use Audiowide sparingly (hero word marks); it's not preloaded.

### Motion & Effects

- Star layers (`#stars` … `#stars5`) and `.nebula` are mounted once in `Layout.astro`. Don't re-instantiate.
- Float / shooting-star / section-fade animations are global utilities in `global.css`. Reuse them.
- **All motion respects `prefers-reduced-motion: reduce`** — verify any new animation honors the media query block at the bottom of `global.css`.

### Responsive Breakpoints (Mobile-First)

Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536. Plus two CSS-only breakpoints in `global.css`:

- `@media (max-width: 1023px)` → buttons get `min-height: 44px` (touch targets).
- `@media (max-width: 480px)` → reduced heading sizes.

Design and write classes mobile-first. Default = mobile; layer up with `sm:` / `md:` / `lg:`.

## Naming Conventions

### Files

- **Astro components** — `PascalCase.astro` (`HeaderNavbar.astro`, `Hero.astro`).
- **Framework components (React/Solid/Svelte/Vue)** — `PascalCase.{tsx,svelte,vue}`. None today; if you add one, place it next to the Astro component that imports it and import explicitly. Always pair with the correct `client:*` directive (see below).
- **TypeScript modules** — `kebab-case.ts` (`work-experience.ts`, `social-links.ts`).
- **Style files** — `kebab-case.css`.
- **Pages** — `index.astro` inside the locale folder (`pages/en/`, `pages/es/`); dynamic params use `[slug].astro`.

### Identifiers

- **Types & interfaces** — `PascalCase`, interfaces prefixed `I` to match existing convention (`ISocialLink`, `IWorkExperience`).
- **Constants** — exported getters use `camelCase` (`getSocialLinks`); compile-time literals `SCREAMING_SNAKE_CASE`.
- **i18n keys** — `dot.namespaced.snake` (e.g. `hero.launch_mission`, `project.equasystems.title`). Add to both `en` and `es` in `src/i18n/ui.ts`.
- **CSS variables** — `--kebab-case` in `:root` only. Add a row to the Style Guide table above when introducing a new token.
- **Tailwind class order** — let `prettier-plugin-tailwindcss` sort. Don't bikeshed manually.

### `client:*` Directives (use sparingly)

Astro ships zero JS by default. Only opt into hydration when interactivity demands it. Pick the **lightest** directive that works:

| Directive | When |
| --- | --- |
| (none) | Static markup — default. Use for 95% of components. |
| `client:idle` | Non-critical interactivity (analytics widgets, prefs panels). |
| `client:visible` | Below-the-fold interactive widgets (form, carousel). **Preferred** when above-the-fold isn't needed. |
| `client:load` | Above-the-fold interactivity required immediately (rare here). |
| `client:media="(min-width: 768px)"` | Desktop-only interactive features. |
| `client:only="react"` | Component that crashes during SSR (browser-only APIs). Last resort. |

Inline `<script>` blocks inside `.astro` files are fine and are bundled by Vite — prefer them over framework islands for trivial interactivity (theme toggle, menu open/close).

## Pre-flight Checklist

Run through this before every commit. **All boxes must check** — if one fails, fix it or note the deferral in the commit message.

### Build & Quality
- [ ] `npm run build` succeeds with no warnings introduced by your change.
- [ ] `npm run check` (astro + TS) passes.
- [ ] `npm run lint` passes (or `lint:fix` applied for trivial fixes).
- [ ] `npm run format:check` passes (or `format` applied).

### SEO
- [ ] Any new page sets `<title>` and `<meta name="description">` via translation keys in `src/i18n/ui.ts` (both `en` and `es`).
- [ ] `<link rel="canonical">` is correct and absolute.
- [ ] Both `hreflang="en"` and `hreflang="es"` plus `x-default` are emitted (handled in `Layout.astro` — verify it's still in the chain).
- [ ] Open Graph image (`og:image`) is absolute URL, ≥1200×630, alt set.
- [ ] Schema.org JSON-LD is valid (paste into [validator.schema.org](https://validator.schema.org/) when you touch the block).
- [ ] No `noindex` accidentally added; `robots.txt` and (when added) `sitemap.xml` reference the live host.
- [ ] All `<img>` have meaningful `alt` (decorative images use `alt=""`).
- [ ] Every `<a>` has discernible text or `aria-label`.

### Responsive (Mobile-First)
Test at 320, 375, 768, 1024, 1440 px. The dev server's responsive mode is fine.
- [ ] No horizontal scroll at 320 px.
- [ ] Touch targets ≥44 × 44 px on mobile (buttons get this automatically via `global.css`; verify links/icons too).
- [ ] Text remains readable (no overflow, no 10px fonts) at 320 px.
- [ ] Hero image / LCP element loads before fold on mobile.
- [ ] Layout uses Flex/Grid with proper wrapping — no fixed widths that force overflow.

### Performance / Core Web Vitals
- [ ] Lighthouse mobile score ≥ 90 for Performance, Accessibility, SEO, Best Practices on the page you changed.
- [ ] No new `client:load` directive without justification (prefer `client:visible` or `client:idle`).
- [ ] Above-the-fold images use `loading="eager"` + `fetchpriority="high"`; below-the-fold use `loading="lazy"`.
- [ ] No new render-blocking `<link rel="stylesheet">` larger than 25 kB (the `inlineSmallCSS` integration only handles ≤25 kB).
- [ ] New fonts are local + `font-display: swap`, or async-loaded like Audiowide in `Layout.astro`.

### Accessibility (A11y)
- [ ] Keyboard tab order is logical; `:focus-visible` is styled (not removed).
- [ ] Color contrast ≥ 4.5:1 for body text, 3:1 for large text — check any new color against the palette.
- [ ] Interactive elements use semantic tags (`<button>`, `<a>`, `<nav>`) before reaching for `role=`.
- [ ] Animations respect the `prefers-reduced-motion: reduce` block in `global.css`.
- [ ] ARIA labels added for icon-only buttons.

### i18n
- [ ] Every new user-visible string has a key in **both** `labels.en` and `labels.es`.
- [ ] No hard-coded English in `.astro` files outside of translation lookups.

### Git Hygiene
- [ ] No `console.log`, debugger statements, or commented-out blocks left behind.
- [ ] No secrets, tokens, or `.env` content in the diff.
- [ ] Commit message follows the repo style (`feat:`, `fix:`, `chore:` prefix — see `git log --oneline`).

## Deployment

CI (`.github/workflows/deploy.yml`) builds on every push/PR to `master`; on push it then POSTs a deployment trigger to Seenode's API. Secrets required: `BACKEND_URL_PROD`, `SEENODE_API_TOKEN`, `SEENODE_APPLICATION_ID`. There is no Docker setup in the current tree (an earlier nginx/Dockerfile approach was replaced by the Node SSR adapter — see commit `db98604`).

## Shared Design System

The visual language is codified in three places. **Do not bypass these** — drift here is what produced the inconsistencies you saw before.

### `.skill-card` (in `src/styles/global.css`)

The base card. Glassmorphism + gradient-mask border that lights up on hover + 2px lift. Used by **every** card on the site via `<Card>`, by `ProjectCard`, and by the contact form panel in `KeepInTouch.astro`. If you need a card, you reach for this class — don't reinvent. Reduced-motion is honored.

Tokens it depends on (in `:root`):
- `--ease-premium` — the standard easing curve for all motion (`cubic-bezier(0.22, 1, 0.36, 1)`).
- `--primary-color-rgb`, `--secondary-color-rgb` — RGB component tokens so `rgba(var(--*-rgb), alpha)` works in shadows and gradient overlays.
- `--card-shadow`, `--card-shadow-hover` — resting and hover elevation.

### `<Card>` (`src/components/shared/Card.astro`)

The semantic card with a gradient icon-circle on the right. Slot API (stable across the codebase):
- `title` — replaces the default `<h3>` (e.g. when you need a date + role + company stack)
- `icon` — what goes inside the gradient circle (img / svg / emoji)
- `actions` — footer buttons
- default slot — the body. Renders only when no `description` prop is passed.

Props: `title?`, `description?`, `icon?`, `summary?`, `tags?: string[]`, `className?`.

Consumers today: `Experience`, `Courses`, `Technologies`, `RoadmapChallenges`. The `<ProjectCard>` is a sibling, not a `<Card>` consumer, because it has a fundamentally different shape (cover-image-first, full-clickable button trigger).

### `<SectionHeader>` (`src/components/shared/SectionHeader.astro`)

The eyebrow + gradient-title pattern that opens every section. Props: `eyebrow`, `title`, `align?: 'center' | 'left'`. Used by `Experience`, `Technologies`, `Courses`, `RoadmapChallenges`, `KeepInTouch`, and `ProjectsSection`. **Never hand-roll the H2/eyebrow pair** — it was duplicated in 5 files before this and drifted across each.

### `<Button>` (`src/components/shared/Button.astro`)

The gradient primary action. Many sections (Courses, RoadmapChallenges, KeepInTouch) currently still hand-roll the gradient classes inline — that's drift that should migrate to `<Button>` over time. Pending refactor.

### What does NOT belong in a card

- The `.float` bobbing animation. It was being applied to every card and looked chaotic in a grid. `.float` is now reserved for the Hero portrait (intentional brand element) and Error404. **Do not add `.float` to cards.**
- Per-component hover or transition logic. The `.skill-card` class owns all of it.
- Manually duplicated gradient borders. The `::before` mask gradient is on `.skill-card`; ProjectCard has its own only because its hover state composes with the cover-image zoom.

## Featured Projects (Content Collection)

The "Featured Projects" section is the first piece of data driven by **Astro Content Collections**. All files live under `src/components/projects/` (self-contained — can move when the broader reorg happens) and read from `src/content/projects/*.md`.

### Adding a New Project

1. Drop a markdown file into `src/content/projects/<slug>.md`. The filename becomes the project `id` used for modal anchors.
2. Frontmatter shape (enforced by Zod in `src/content.config.ts`):
	- `title`, `summary`, `description` — each is **`{ en, es }`**. ES is required; the layout renders the current locale and there's no fallback at the schema level.
	- `images` — array of paths under `/images/projects/...`. First image is the card cover; all images render in the modal carousel.
	- `stack` — array of Simple Icons slugs. Must match a key in `src/components/projects/icons.ts` or you'll get the dashed-fallback chip.
	- `githubUrl`, `liveUrl` — optional. Action buttons are conditionally rendered.
	- `featured` (bool) — only `featured: true` projects render. Use this to hide WIPs without deleting them.
	- `order` (number) — ascending sort within the section.
3. To add a new tech icon: paste the SVG path from [simpleicons.org](https://simpleicons.org/) into `src/components/projects/icons.ts` under its slug. The default viewBox is `0 0 24 24`; override `viewBox` only if Simple Icons specifies otherwise.
4. Real project screenshots go in `public/images/projects/<slug>/`. The current `placeholder-0{1,2,3}.svg` files are gradient stand-ins and should be replaced before launch.

### Modal Animation & Interaction Logic

The modal is a native `<dialog>` element — ESC and focus-restore are partly browser-provided; everything else is in `src/components/projects/ProjectsSection.astro`'s inline script. Keep these invariants when editing:

- **Open** sets `document.documentElement.style.overflow = 'hidden'` to prevent body scroll, captures `document.activeElement` into `lastFocused`, then `dialog.showModal()`. Focus moves to the close button in the next animation frame so screen readers announce it.
- **Close** must always (a) restore `documentElement.overflow`, (b) restore `lastFocused.focus()`, and (c) tear down the focus-trap listener returned by `trapFocus()`. The `cancel` event (ESC) is preventDefault'd so we close through the same code path.
- **Focus trap** is a tabindex-cycle on Tab / Shift+Tab over the live `FOCUSABLE` selector list. Don't bypass it for "small" UI tweaks — adding a focusable element outside the dialog while it's open will leak focus.
- **Click-outside-to-close** uses the panel's bounding container, not `dialog::backdrop` — the dialog backdrop is transparent here because we render our own nebula-tinted `.project-modal__backdrop` for the visual effect.
- **Staggered tech chips** use a single CSS keyframe (`chipIn`) with per-chip `--stagger-delay` set inline (60 ms steps). To change the rhythm, edit the multiplier in `ProjectModal.astro`. Do not introduce JS for this — CSS staggering preserves animation timing under reduced-motion overrides.
- **Magnetic action buttons** are JS-driven (`pointermove` translates the element toward the cursor with `STRENGTH = 14`). Guarded by `(hover: hover) and (pointer: fine)` + `prefers-reduced-motion: no-preference`. Never run on touch or reduced-motion.
- **Card parallax tilt** uses the same gating. The transform on the card is set inline via `requestAnimationFrame` to avoid layout thrash, and cleared on `pointerleave`.
- **Carousel** is CSS scroll-snap. Active-dot tracking happens via a debounced `scroll` listener (100 ms) so manual swipes also update pagination. Arrow keys work when focus is anywhere inside the carousel root.

### Pending Refactors

1. **Component reorganization** — move the remaining `src/components/*.astro` into `src/components/{ui,layout,sections,galaxy}/`. The new `projects/` folder is precedent for the pattern.
2. **Content collections expansion** — migrate `src/constants/*.ts` (work-experience, technologies, certifications, roadmap, social, navigation) to additional collections under `src/content/`. The projects collection in `src/content.config.ts` is the template.
3. **PDFViewer iframe** has a known a11y lint error (missing `title`). Pre-existing, not blocking.
4. **Layout.astro inline GA script** uses `var`/`arguments` (lint errors). Could be modernized but the script is intentionally inlined for early execution.
5. **Replace placeholder projects** — `src/content/projects/*.md` files point at `https://example.com` and the GitHub profile root. Must be swapped for real project URLs before launch.
6. **OG image** — currently `og:image` resolves to the portrait photo (`carlos-velasquez.jpg`). For better social preview cards, replace with a dedicated 1200×630 image showing name + role + brand. Path stays the same: `public/images/carlos-velasquez.jpg` (or update the path in `Layout.astro`).

### SEO Infrastructure (in place)

- **`SITE_URL`** env var (defaults to `https://carlos-velasquez.dev`) drives the `site` in `astro.config.mjs` and is consumed by `@astrojs/sitemap`. Override per environment.
- **`sitemap-index.xml`** is generated at build by `@astrojs/sitemap` with `hreflang` cross-links between `/`, `/en/`, `/es/`. Referenced from `public/robots.txt`.
- **Schema.org JSON-LD** in `Layout.astro` uses `@graph` to link `Person` and `WebSite` entities. Includes `worksFor`, `email`, `knowsAbout`, `sameAs`. Validate at [validator.schema.org](https://validator.schema.org/) when touched.
- **Skip-to-content link** in `Layout.astro` targets `#main`. The `<main>` in each locale's `index.astro` must keep `id="main"` for this to work.
- **Hero `<h1>`** is the visible name "Carlos Velasquez" — do NOT replace it with the brand tagline. Tagline belongs in the eyebrow `<p>` above it.

## Tooling Notes

- **Prettier config**: `.prettierrc.mjs` — tabs, single quotes, 100-col, `prettier-plugin-astro` + `prettier-plugin-tailwindcss`. JSON/YAML use 2-space override.
- **ESLint config**: `eslint.config.mjs` — flat config; `@eslint/js`, `typescript-eslint`, `eslint-plugin-astro` recommended + `jsx-a11y-recommended`.
- **EditorConfig**: `.editorconfig` — tabs (4-wide), LF, UTF-8, trim trailing whitespace. JSON/YAML overridden to 2-space.
- The repo has 40 files that don't yet match the Prettier config (legacy formatting). Run `npm run format` to bulk-fix when you're ready to take that diff.
