# Figma design spec: Dimple Kumar portfolio

Use this to rebuild or review the design in Figma. Import `design-tokens.json` with the Tokens Studio plugin to create colour, radius and type styles (Light and Dark modes).

## Frames
Desktop 1440 (12-col grid, 24 gutter, 120 margin) · Tablet 768 (8-col) · Mobile 390 (4-col, 20 margin). Sections stacked in this order: Hero, About, Skills, Experience, Projects, Education + Career interests, Contact, Footer. Section padding: 96 desktop, 64 mobile.

## Type (Sora; JetBrains Mono for labels)
H1 64/1.15 bold · H2 42/1.15 bold · H3 18–22 semibold · Body 16/1.65 · Eyebrow 13 mono, 0.14em tracking, uppercase, accent colour.

## Components (create as variants)
Button: Primary (gradient accent to accent2), Secondary (glass); states default/hover/focus. Glass card: card fill, 1px border, 20 radius, background blur 14. Chip, Tab (selected/unselected), Timeline node, Project card (diagram area 170 high + body), Input (default/focus), Nav (top, scrolled, mobile sheet), Theme and back-to-top icon buttons.
Hero: left text column, right orbit visual (core 32% of a 440 square, inner ring 3 nodes, outer ring 4 nodes). The background is gradient + network lines only, never text or the name.

## Motion spec (build with Smart Animate)
| Element | Trigger | Motion | Duration / easing |
|---|---|---|---|
| Loader | page load | 3 concentric rings spin, core pulses, then fades | 0.9s, linear |
| Hero text | load | stagger fade + rise 24px, 0.12s apart | 0.7s ease-out |
| Orbit | always | inner ring 26s, outer ring 42s opposite direction; labels stay upright; core floats ±8px, ripple every 3.4s | linear / ease-in-out |
| Sections, cards | scroll into view | fade + rise 28px, once | 0.8s (0.2, 0.7, 0.2, 1) |
| Skill cards | tab change / hover | pop-in staggered 60ms; 3D tilt ±14° on hover | 0.5s / 0.2s |
| Project card | hover | lift 8px + neon glow; dashed flow line animates | 0.35s |
| Buttons, chips | hover | lift 3px + glow | 0.2s |
| Cursor (desktop) | mouse move | dot follows instantly, ring lerps 16%, grows on links | continuous |
| Theme switch | click | colour tokens swap | 0.3s |
Reduced motion: replace all movement with instant fades.
