# Layout & visual hierarchy

Spacing and hierarchy do most of the work that beginners try to do with color
and borders. Get these right and the UI already looks "pro".

## Container rhythm

- Page max width: `max-w-5xl` (64rem / 1024px) for text-forward sections,
  `max-w-6xl`/`max-w-7xl` for image/grid sections. Wrap sections in
  `<section className="mx-auto max-w-6xl px-4 sm:px-6">`.
- Section vertical rhythm: `py-16 sm:py-24`. All sections the same — rhythm
  > variation.
- Horizontal gutter: `px-4` mobile, `px-6` ≥ sm, never less than 16px on phone.

## Visual hierarchy (the single most important thing)

The eye should know in 1 second: (1) what this is, (2) what to do. Achieve with
**contrast**, in priority order:

1. **Size** — the biggest text is the most important.
2. **Weight** — `font-semibold`/`bold` outranks `font-normal`.
3. **Color** — `text-white` primary vs `text-white/50` secondary.
4. **Space** — more space above a heading signals a new section.

Don't fight two elements to the same prominence. If title and subtitle are the
same size/weight, the hierarchy is broken.

## Density

- Default to **less density, more whitespace**. A common beginner failure is
  cramming. If a card feels tight, increase padding before adding borders.
- Line length: body copy 60–80 characters (`max-w-prose` or `max-w-2xl`). Long
  lines hurt readability; don't let paragraphs span full `max-w-6xl`.

## Alignment

- One grid. Elements on the same visual axis. Eyebrow → title → body all
  left-aligned (or all centered — pick one per section, don't mix).
- Optical alignment > mathematical: icons and lowercase text sit slightly low;
  nudge with `translate-y-px` when something looks off.

## Responsive

Breakpoints (Tailwind, mobile-first): `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280.

- Design mobile first, then add `sm:`/`lg:` overrides. Never start desktop and
  squeeze down.
- Test three widths: **375px** (phone), **768px** (tablet), **1280px** (laptop).
  The existing codebase uses `sm:` and `lg:` mostly — match that.
- Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Don't go past 3–4 columns.
- Hide non-essential decoration on mobile (large glows, hero side art) —
  `hidden sm:block` / `sm:hidden`.

## Hiding things on mobile

```tsx
<div className="hidden lg:block">{decorative}</div>      // desktop only
<div className="lg:hidden">{compact}</div>                // mobile only
```

## Component composition

- Cards: pick a consistent radius + border + padding across the page. Copy
  `skillcard.tsx`'s hover-glow pattern for the single hero element you want to
  emphasize — don't glow every card.
- Buttons: one primary (filled accent), one secondary (outline/ghost) per group.
  More than two button styles per section = inconsistent.
- Use the same gap everywhere within a tier: items in a card `gap-2`, cards in a
  grid `gap-4`/`gap-6`, sections `gap-16`.

## The "is it done?" test

Squint at the screen. If the hierarchy still reads (one clear focal point,
sections distinguishable by spacing), you're close. If it's a flat wall of
equally-loud elements, add whitespace and pick a focal point.
