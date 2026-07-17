# Design tokens

The site uses Tailwind v4 with CSS-first `@theme` config in
`src/app/globals.css`. Extend tokens there — never hardcode hex in components
when a token exists.

## Spacing scale (Tailwind defaults — use these)

`0.5` (2px) · `1` (4px) · `1.5` (6px) · `2` (8px) · `3` (12px) · `4` (16px) ·
`5` (20px) · `6` (24px) · `8` (32px) · `10` (40px) · `12` (48px) · `16` (64px) ·
`20` (80px) · `24` (96px).

- Inline gaps: `gap-2`–`gap-4`. Stack gaps: `gap-4`–`gap-8`.
- Card padding: `p-4 sm:p-6`. Tight pill (see `skillcard`): `px-3 py-1.5`.
- Section vertical rhythm: `py-16 sm:py-24` between major sections. Consistency
  here is what makes the page feel designed.

## Type scale

| Token        | Size     | Use                         |
|--------------|----------|-----------------------------|
| `text-xs`    | 12px     | eyebrows, captions, meta     |
| `text-sm`    | 14px     | body secondary, card labels  |
| `text-base`  | 16px     | body default                 |
| `text-lg`    | 18px     | lead / card titles           |
| `text-xl`    | 20px     | subsection titles            |
| `text-2xl`   | 24px     | section titles (mobile)       |
| `text-3xl`   | 30px     | section titles               |
| `text-4xl`   | 36px     | section titles (desktop)      |
| `text-5xl`+  | 48px+    | hero only                    |

- Body line-height: `leading-relaxed` (1.625) for paragraphs, `leading-tight`
  for titles.
- Weight: `font-medium` (500) for labels, `font-semibold` (600) for titles,
  `font-bold` (700) reserved for hero.
- Eyebrow pattern: `text-xs uppercase tracking-widest text-accent`.

## Color

**Dark-first.** Background `#0a0a0a`, foreground `#ededed`.

- Surfaces: use `bg-white/5`, `bg-white/[0.03]` over solid colors — translucency
  reads richer on dark and adapts to content beneath.
- Borders on dark: `border border-white/10` (or `/15`). Avoid `border-gray-700`
  as a solid — it flattens. (The existing `skillcard.tsx` uses `border-gray-700`
  + `bg-[#1E293B]` — that's the legacy pattern; prefer `white/10` for new work.)
- Text hierarchy: `text-white` (primary) → `text-white/70` (secondary) →
  `text-white/50` (tertiary). This single-axis opacity ladder is cleaner than
  juggling `gray-300/400/500`.

### Accent (`#10E8CC` mint/teal)

Used as a single accent throughout (hover states, eyebrows, glow). To make it
available as a token, add to `@theme inline` in `globals.css`:

```css
@theme inline {
  --color-accent: #10E8CC;
  --color-accent-foreground: #0a0a0a;
}
```

Then use `text-accent`, `bg-accent`, `border-accent`. **Add this before using
`text-accent` in a component** — Tailwind v4 generates the utility from the
`@theme` var. Until then, fall back to `text-[#10E8CC]`.

## Radius

- Buttons / pills: `rounded-full` (existing skillcard style) or `rounded-lg`.
- Cards: `rounded-xl` (12px) for compact, `rounded-2xl` (16px) for feature
  cards.
- Containers/sections: `rounded-3xl` for big surfaces.

Consistency within a category matters more than the exact value — every card on
a page should share a radius.

## Shadow / elevation

- Default surface: `shadow-sm`.
- Hover-elevated card: `shadow-lg` + `hover:-translate-y-1`.
- Glow (the existing skillcard pattern): a blurred pseudo-element behind the
  card using accent at low opacity, e.g. `bg-accent/20 blur-xl`. Use for the
  one element you want the eye drawn to — not everywhere.

## Extending `@theme`

Add new tokens in `src/app/globals.css` under `@theme inline`. Tailwind v4 reads
these and emits matching utilities (`--color-foo` → `bg-foo`/`text-foo`, etc.).
Prefer extending tokens over one-off arbitrary values.
