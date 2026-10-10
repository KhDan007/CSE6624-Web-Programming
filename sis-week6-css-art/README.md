# CSE6624 — Khamzin Daniyal — 070301552252

Niche: #23 Chess club with online ladder  
Seed: Hue=43, Accent=94  
Watermark: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`  
Assignment: **SIS-2 · Week 6 · CSS art from seed colors (1.5 pts)**

---

## Seed Arithmetic & Palette Values

- **Student ID:** `070301552252` $\rightarrow$ `ID2 = 52`
- **Birth Month:** `March` $\rightarrow$ `M = 3`
- **Surname:** `Khamzin` $\rightarrow$ `L = 11`
- **Primary Hue:** `(52 * 7 + 3 * 13) mod 360 = 43` $\rightarrow$ `--primary: hsl(43, 65%, 40%)`
- **Accent:** `(43 + 40 + 11) mod 360 = 94` $\rightarrow$ `--accent: hsl(94, 70%, 45%)`
- **Tints & Shades:**
  - `--primary-dark: hsl(43, 65%, 22%)`
  - `--primary-light: hsl(43, 65%, 82%)`
  - `--accent-dark: hsl(94, 70%, 28%)`
  - `--accent-light: hsl(94, 70%, 88%)`

---

## Deliverables & Rubric Compliance (1.5 pts)

1. **Recognizable Niche-Themed CSS Art (0.5 pts):**
   - Pure CSS *Tactical Chess Knight* composed of 8 individually positioned, shaped, and rotated HTML `div` elements (Pedestal bottom, collar tier, arching chest, mane, head, pointed ear, muzzle/snout, eye aperture).
   - **Zero external image files** used for the art.
2. **Seed Palette Only + Layout (0.4 pts):**
   - Strictly built with the calculated seed palette (`Hue 43`, `Accent 94`, and their mathematical tonal steps).
   - Layout surrounding the artwork is powered by **CSS Grid** (`grid-template-columns: 1.4fr 1fr`) and **Flexbox**, with responsive reflow on mobile.
3. **Caption, Watermark, & Anti-Copy (0.6 pts):**
   - Explanatory caption on what the knight signifies for the chess club ladder.
   - Page title includes name and student ID: `Khamzin Daniyal · 070301552252 — SIS-2 Pure CSS Art`.
   - Visible watermark embedded in footer: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`.
4. **Soft Hover Animation:**
   - Smooth transform (`translateY(-8px) scale(1.02)`) and depth shadow transition on `:hover` across the `.chess-canvas`.

---

## How to Run & Verify

1. Open `sis-week6-css-art/index.html` via VS Code Live Server (`http://127.0.0.1:5500/sis-week6-css-art/index.html`).
2. Hover over the chess canvas to observe the subtle elevation animation.
3. Open DevTools (<kbd>F12</kbd>) to inspect the 8 CSS shapes inside `.knight-figure` and verify the `:root` variables.

---

## Screenshots (Screenshot Protocol)

Per Page 5 of the student pack, capture the following into `sis-week6-css-art/screenshots/`:
- `sis2-vscode.png`: Full VS Code window with source code showing your name and watermark.
- `sis2-devtools.png`: Browser view with DevTools Elements panel inspecting the `.watermark` node.

---

## AI Disclosure

- **AI used for:** Assisting with trigonometric SVG-to-CSS shape geometry translation.
- **I rewrote/verified:** All CSS shape dimensions, rotation angles, HSL seed variables, layout grid rules, and niche caption text.
