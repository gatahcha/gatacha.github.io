---
name: uiux
description: UI/UX craftsmanship for this Next.js + React 19 + Tailwind v4 + Framer Motion site. Read BEFORE building or restyling any component, section, or layout — covers design tokens, spacing/typography rhythm, color, motion, accessibility, and visual hierarchy. Use for any task that produces or changes visible UI: cards, sections, navbars, hero, forms, buttons, hover/transition styling, dark mode, responsive breakpoints.
---

# UI/UX "pro max" — how to build polished UI in this repo

This skill is the single source of truth for visual quality here. Read it before
writing or editing any UI. It encodes the design system + the craft rules that
make output look intentional rather than assembled.

**Stack**: Next.js 16 (`output: 'export'` static export), React 19, Tailwind v4
(`@import "tailwindcss"`, CSS-first `@theme`), Framer Motion (`framer-motion`),
`lucide-react` + `react-icons`, `cn()` from `@/lib/utils`.

## Non-negotiables (apply every time)

1. **Use `cn()` for every composed className.** Never string-concatenate or
   template-literal Tailwind classes — `twMerge` dedupes conflicts. Import:
   `import { cn } from "@/lib/utils";`
2. **Respect `prefers-reduced-motion`.** Framer Motion `MotionConfig` with
   `reducedMotion: "user"`, and gate CSS transitions behind
   `motion-safe:` where it matters. See `references/motion.md`.
3. **Dark mode is the default aesthetic here.** The site is dark-first
   (`#0a0a0a` bg). Always design the dark variant first; light is secondary.
4. **Static-export safe.** No server components fetching data, no dynamic route
   params in UI. Animated/interactive components start with `"use client"`.
5. **Icons at text size, stroke-aligned.** `lucide-react` icons inherit
   `currentColor` and `1em` sizing — set size via `className="size-4"`, not
   inline `width`.
6. **Spacing from the scale, never arbitrary.** No `p-[13px]`. Use the token
   scale below. Arbitrary values only for one-off hero flourishes.
7. **Tap targets ≥ 44px.** Buttons/links get `min-h-11` on mobile.
8. **One accent, used sparingly.** The existing accent is `#10E8CC` (mint/teal).
   Don't introduce a second hue without intent — see color rules.

## Workflow when building UI

1. Identify the component's job → pick a layout primitive (flex/grid/stack).
2. Apply spacing rhythm from `references/tokens.md`.
3. Apply type scale + color from tokens.
4. Add motion only where it communicates state or guides the eye
   (`references/motion.md`). Motion is grammar, not decoration.
5. Run the a11y checklist in `references/a11y.md`.
6. Verify at `sm` (375px), `md` (768px), `lg` (1280px). Check dark + light.

## Reference files (read the relevant one before implementing)

- `references/tokens.md` — spacing / type / color / radius / shadow scale + how
  to extend `@theme` in `globals.css`.
- `references/motion.md` — durations, easings, reduced-motion, common Framer
  Motion patterns that match this codebase.
- `references/a11y.md` — accessibility checklist (focus, contrast, semantics,
  reduced motion, keyboard nav).
- `references/layout.md` — visual hierarchy, density, responsive breakpoints,
  section rhythm.

## Quick tokens (memorize these)

- **Radius**: cards `rounded-xl`/`rounded-2xl`; pills `rounded-full`.
- **Shadow**: `shadow-sm` default, `shadow-lg` on hover-elevated.
- **Border**: `border border-white/10` (dark) — never solid gray on dark bg.
- **Padding**: cards `p-4 sm:p-6`; sections `py-16 sm:py-24`.
- **Type**: body `text-sm`/`text-base`, section title `text-2xl sm:text-4xl`,
  eyebrow `text-xs uppercase tracking-widest`.
- **Accent**: `#10E8CC` → use as `text-[#10E8CC]` or add to `@theme` as
  `--color-accent` then `text-accent`.

## When in doubt

Less density, more whitespace, one accent, motion that explains. If a screen
feels busy, remove something — restraint reads as "pro".
