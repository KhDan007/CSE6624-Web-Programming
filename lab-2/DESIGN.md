# Design

<!-- impeccable:design-schema 1 -->

## World

Mission console, flight-deck instrumentation. The portfolio reads as a live engineering
console rather than a template: bracket-cornered HUD panels, a hairline grid backdrop,
and a two-tone signal palette carry the identity end to end, including into the required
table and form.

## Palette

Color strategy: full palette (named roles, not a single accent).

| Role | Value | Use |
|---|---|---|
| `--bg` | `#0a0d12` | Page ground |
| `--bg-panel` / `--bg-raised` | `#131924` / `#10151d` | Panel fills (bracket-cornered modules) |
| `--bg-input` | `#0d121a` | Form field fill |
| `--line` / `--line-soft` | `#232c39` / `#1a212c` | Hairline borders, dividers |
| `--ink` / `--ink-dim` / `--ink-faint` | `#e9edf3` / `#9aa4b5` / `#5b6577` | Text, descending emphasis |
| `--amber` | `#ffb020` | Primary/alert signal: primary buttons, top-left panel bracket, table header labels |
| `--cyan` | `#4fe0c8` | Data/status signal: status dot, focus glow, bottom-right panel bracket, links |
| `--red` | `#ff6b57` | Invalid-field state only |

Dark ground chosen for the use scene: a developer reading a portfolio at a desk, evenings
included, where an instrument-panel world reads naturally dark rather than by category
default.

## Type

Three families do the work. Unbounded (weights 500 to 800) is the display face,
geometric and weighty, carrying the h1/h2/h3 hierarchy. Manrope (400 to 800) is the body
face for paragraphs, nav, and buttons wherever the content isn't data. JetBrains Mono
handles status readouts, the table's year column, form field labels, tags, nav links, and
the table caption: genuine data and label content, not a "technical" costume layered onto
ordinary text.

## Recurring motifs

The bracket-cornered panel (`.panel`, drawn with `::before`/`::after`) is the one
load-bearing container motif: an amber top-left corner and a cyan bottom-right corner on
every HUD module (status bar, stat panel, project cards, table wrapper, contact form).
Don't introduce a second card style alongside it.

The status dot is an 8px cyan circle with a soft pulse animation, signaling "live" state
in the hero status bar. Reuse it only for genuine live/status meaning, never as plain
decoration.

The oscilloscope trace is the signature hero motion: an animated dashed SVG path behind
the hero, drifting left via `stroke-dashoffset`. Don't add a second, competing entrance
animation into the same viewport.

Corner radius stays small and deliberate throughout (`--radius` at 14px for panels,
`--radius-sm` at 8px for controls and tags). There are no fully-rounded pill shapes; the
original `.skill-list` tags used one, an `unslop-ui` scan flagged it, and it was fixed to
`--radius-sm` to match the rest of the system.

## Components

The nav is a fixed, translucent (`backdrop-filter: blur`) HUD bar whose link underline
slides in on hover and focus; it collapses to a toggled panel below `720px`.

Buttons come in two variants, both monospace and both carrying a matching glow-shadow on
hover or focus: `.btn-primary` (solid amber fill, dark ink text) and `.btn-ghost`
(outline, turns cyan on hover).

The table's `caption` reads as a console label. `thead` is amber, uppercase, on a raised
fill; `tbody` rows carry hairline dividers between `th`/`td`, and a hover tints the row
cyan.

The form uses dark-filled inputs with a cyan focus glow and a custom checkbox with an
amber check mark, inside the same bracket-panel wrapper as everything else. Validation is
native `required`/`pattern` only; there's no JS validation layer.

## Motion

`prefers-reduced-motion: reduce` disables the oscilloscope trace, the status-dot pulse,
and the scroll-reveal in `script.js` (all three gated in CSS/JS). Scroll-reveal is one
grammar (fade plus an 18px rise, `cubic-bezier(0.16,1,0.3,1)`), applied uniformly rather
than varied per section.

## Known constraints future edits should respect

Keep the nav at exactly 4 relative internal links (`index.html#section`) plus 1 external
`target="_blank" rel="noopener"` link; that's a grading-checklist requirement, see
PRODUCT.md.

The two `<img>` elements (`assets/dashboard-preview.svg` meaningful,
`assets/circuit-flourish.svg` decorative with `alt=""`) need to stay one meaningful plus
one decorative pair. Don't add a third without reconsidering that requirement.

All portfolio and project copy is placeholder (see PRODUCT.md, Evidence on Hand). Replace
it with real project details before treating this as a live résumé site.
