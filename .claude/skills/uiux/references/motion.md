# Motion

Motion is **grammar, not decoration**. Each animation must either communicate
state change, guide the eye, or give feedback. If it's only there to "look
nice," cut it.

Stack: `framer-motion` (v11+, the `motion` package re-exported). Components that
animate must start with `"use client"`.

## Global config

Wrap the app (or a section) in `MotionConfig` so reduced-motion is handled once:

```tsx
"use client";
import { MotionConfig } from "framer-motion";

<MotionConfig reducedMotion="user">
  {/* ... */}
</MotionConfig>
```

`reducedMotion="user"` makes Framer Motion respect `prefers-reduced-motion`
automatically — entrance/exit animations collapse to opacity-only or instant.
**Always set this.** Put it in `src/app/layout.tsx` (a server component can
render the client `MotionConfig` wrapper as a child client component).

For CSS `transition-*` utilities, gate heavy ones with `motion-safe:`:
`motion-safe:transition-all motion-reduce:transition-none`.

## Duration scale

Three durations, no more:

| Token     | ms   | Use                                  |
|-----------|------|--------------------------------------|
| `fast`    | 150  | micro feedback (hover, toggle, color)|
| `normal`  | 250  | entrance, layout shifts              |
| `slow`    | 400  | hero entrance, large element reveal  |

Framer Motion: `duration: 0.15` / `0.25` / `0.4`. CSS: `duration-150/250/400`.
Avoid >600ms — it feels sluggish.

## Easings

- Default UI: `ease` (Framer's default `easeOut`-ish). Fine 90% of the time.
- Entrance from below/side: `[0.16, 1, 0.3, 1]` (decelerating, "settle").
- Avoid `linear` and bouncy springs for general UI. Springs only for
  drag/tactile feedback where overshoot reads as physical.

## Common patterns (copy these)

### Entrance on scroll (in-view once)

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  {children}
</motion.div>
```

`once: true` is important — don't re-animate on scroll-back-up (feels broken).

### Stagger children

```tsx
<motion.ul initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  }}>
  {items.map((it, i) => (
    <motion.li key={i}
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
      {it}
    </motion.li>
  ))}
</motion.ul>
```

Stagger 40–80ms. More than 100ms feels slow on long lists.

### Hover lift (cards)

```tsx
<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.15 }}>
```

Or pure CSS: `transition-transform hover:-translate-y-1 motion-reduce:translate-y-0`.

### Tap feedback (buttons)

```tsx
<motion.button whileTap={{ scale: 0.97 }} transition={{ duration: 0.1 }}>
```

## Don'ts

- **No layout thrash.** Animating `width`/`height`/`top`/`left` triggers layout
  and jank. Animate `transform` (`x`,`y`,`scale`) and `opacity` only.
- **No autoplay loops** on content the user reads (pulsing text, infinite
  spinners next to copy). Loops draw the eye away from reading.
- **No parallax on text.** Backgrounds can parallax subtly; foreground copy
  must stay still.
- **Respect reduced motion.** Without `MotionConfig reducedMotion="user"`, you
  will make some users motion-sick. See `a11y.md`.
