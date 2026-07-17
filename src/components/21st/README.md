# 21st.dev components

This directory holds UI components pulled from [21st.dev](https://21st.dev) (the
Magic registry). Setup is the **CLI / component path** — no MCP server required.

## How to add a component

1. Find a component on https://21st.dev and copy its source (or use the CLI):
   ```bash
   npx @21st-dev/magic@latest add <component-url-or-slug>
   ```
2. Drop the file into this directory (`src/components/21st/`).
3. If the component imports `cn` from `@/lib/utils`, it already resolves — the
   alias `@/*` → `src/*` is configured in `tsconfig.json`, and
   `src/lib/utils.ts` exports `cn` (clsx + tailwind-merge).
4. If the component imports icons, install `lucide-react` (already a dep) or
   remap to the project's `react-icons` if you prefer.

## Conventions for this project

- **Don't use `tailwindcss-animate`** — this repo is on Tailwind v4. Prefer
  Framer Motion (`framer-motion`, installed) for entrance/exit/state
  animations, and Tailwind's built-in `transition-*` utilities for simple
  hover/focus states.
- **Static export**: `next.config.ts` uses `output: 'export'`. Avoid any
  component that needs server-side data fetching or the Next.js image optimizer
  (images are `unoptimized: true` — use plain `<img>` or `next/image` with
  static imports).
- **Keep components presentational + client-only when animated**: mark
  `"use client"` at the top of any file that uses Framer Motion, `useState`,
  or browser APIs.

## Dependencies already installed

- `framer-motion` — animation
- `clsx` + `tailwind-merge` — the `cn` helper
- `lucide-react` — icon set used by most registry components
