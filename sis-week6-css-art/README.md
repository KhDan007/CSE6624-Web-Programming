# CSE6624 — Khamzin Daniyal — 070301552252

Niche: #23 Chess club with online ladder  
Seed: Hue=43, Accent=94  
Watermark: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`  
Assignment: **SIS-2 · Week 6 · CSS art from seed colors**

---

## Seed Calculations

- **Student ID:** `070301552252` -> `ID2 = 52`
- **Birth Month:** `March` -> `M = 3`
- **Surname letter:** `K` -> `L = 11`
- **Primary Hue:** `(52 * 7 + 3 * 13) mod 360 = (364 + 39) mod 360 = 403 mod 360 = 43`
  - `--primary: hsl(43, 65%, 40%)`
- **Accent:** `(43 + 40 + 11) mod 360 = 94`
  - `--accent: hsl(94, 70%, 45%)`
- **Dark shade:** `hsl(43, 65%, 25%)`
- **Light tint:** `hsl(43, 65%, 85%)`

---

## What was built

1. **Chess Rook (Castle) CSS Art:**
   - Built with 6 stacked HTML sections: crenels (`.crenels` with 3 teeth), roof bar (`.tower-top`), neck (`.neck`), tower body (`.tower-body`), base ring (`.base-ring`), and pedestal (`.base-bottom`).
   - Pure CSS using flexbox, border-radius, and borders. No images or SVG files.
2. **Palette & Layout:**
   - Only seed colors and their tints/shades used in `:root`.
   - Simple Flexbox layout placing the art area next to the palette notes.
   - Reflows into a single column on phone widths (`@media (max-width: 600px)`).
3. **Hover Animation:**
   - Soft hover lift (`transform: translateY(-4px)`) on `.art-frame`.
4. **Watermark & Identification:**
   - Name and ID in `<title>`.
   - Exact watermark string in `<footer>`: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`.
   - Caption explaining the rook's relevance to our ladder system.

---

## How to Run

1. Open `sis-week6-css-art/index.html` in VS Code.
2. Right click -> Open with Live Server.

---

## AI Disclosure

- **AI used for:** Checking the seed arithmetic and giving ideas for simple CSS piece construction.
- **I rewrote:** All CSS classes, dimensions, colors, HTML layout, and rook piece structure to keep it clean, realistic, and defensible in class.
