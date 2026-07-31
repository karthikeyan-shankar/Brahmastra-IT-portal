# Bramastra — Among Us themed pass (v1)

Yes — we can do it safely. The plan is a **theme swap only**, done in a way that is fully reversible: the current Obsidian & Crimson look stays recoverable because all colors live in one place (`src/styles.css` tokens) and the layout/components don't change structurally.

## Step 1 — Among Us pass (what you'll see)

**Palette (token swap only)**
- Base: deep space purple-navy (near-black, slightly blue).
- Accents: crewmate red/coral as primary, cyan as secondary, lime as a small highlight.
- Glass panels keep the current translucent pane treatment, just tinted to the new base.

**Identity, not assets**
- One small crewmate silhouette SVG (reuse the existing sigil slot in the hero) — pure vector, a few hundred bytes, no images.
- Section labels get a light "task / report / emergency" flavour in wording only (e.g. Events -> "Tasks", Register -> "Emergency Meeting"), kept tasteful so it still reads as a college tech fest page.
- Event cards get a small colored crewmate dot instead of a generic bullet.

**Interaction (CSS-only, no new libraries)**
- Cards: existing PixelCard shimmer stays; hover/tap adds a thin colored rim in the card's accent.
- A single CSS "scan sweep" line that crosses a card on tap — one transform animation, no JS.
- Hero: slow drifting starfield built from 2 CSS radial-gradient layers (no canvas, no particles).

**Weight budget**
- No new dependencies, no images, no sprite sheets, no GSAP.
- Only new markup: one inline SVG. Everything else is token + utility edits.
- Animations limited to `transform`/`opacity`, paused on `prefers-reduced-motion`.

## Step 2 — Space + Apple glass (only if you don't like v1)

Same structure, different tokens: void navy base, Apple-style light frosted panels, cyan/violet accents, the same starfield, no crewmate. This is a follow-up turn, not part of this one.

## Fallback

If neither lands, we restore the current Obsidian & Crimson tokens — a one-file revert.

## Technical notes

- `src/styles.css`: replace the color tokens (background, foreground, primary, accent, border) and retune `panel` / `glass-soft` tints to the new base. Add a `starfield` utility and a `scan-sweep` keyframe.
- `src/components/AstraSigil.tsx`: swap the weapon glyph for a crewmate silhouette path (same component API, same size).
- `src/components/EventCard.tsx`: crewmate dot marker, accent rim on hover/focus.
- `src/routes/index.tsx`: section label wording, hero starfield wrapper.
- `src/data/events.ts`: unchanged — the four real events stay as they are.
