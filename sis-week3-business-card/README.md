# CSE6624 — Khamzin Daniyal — 070301552252

Niche: #23 Chess club with online ladder  
Seed: Hue=43, Accent=94  
Watermark: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## Seed Arithmetic & Calculations (Section 4)

- **Student ID:** `070301552252` $\rightarrow$ `ID2 = 52` (last 2 digits)
- **Birth Month:** `March` $\rightarrow$ `M = 3`
- **Surname:** `Khamzin` $\rightarrow$ First letter `K` $\rightarrow$ `L = 11` (A=1 ... K=11 ... Z=26)

### Formulas:
1. **Hue:**
   $$\text{Hue} = (ID2 \times 7 + M \times 13) \pmod{360}$$
   $$\text{Hue} = (52 \times 7 + 3 \times 13) \pmod{360} = (364 + 39) \pmod{360} = 403 \pmod{360} = 43$$
   $\rightarrow$ Primary HSL: `hsl(43, 65%, 40%)`

2. **Accent:**
   $$\text{Accent} = (\text{Hue} + 40 + L) \pmod{360}$$
   $$\text{Accent} = (43 + 40 + 11) \pmod{360} = 94 \pmod{360} = 94$$
   $\rightarrow$ Accent HSL: `hsl(94, 70%, 45%)`

3. **Niche Assignment:**
   $$\text{Niche Index} = (ID2 + M + L) \pmod{24} = (52 + 3 + 11) \pmod{24} = 66 \pmod{24} = 18$$
   $$\text{Assigned Niche} = \text{index} + 1 = 18 + 1 = 19 \text{ (Volunteer blood-donor drive)}$$
   *User-Claimed Niche Selection:* **Niche 23: Chess club with online ladder** (per Section 4 allowance: *"if already taken in your group, take the next free niche and note it in README"*).

4. **Exact Watermark String:**
   `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## How to Open

Open `sis-week3-business-card/index.html` in your browser (Live Server recommended in VS Code).

---

## Deliverables in this Repo

- `sis-week3-business-card/`
  - `index.html`: Digital business card utilizing semantic tags (`<header>`, `<main>`, `<footer>`, `<section>`).
  - `styles.css`: Complete responsive card styling using `--primary` and `--accent` CSS custom variables directly derived from the seed formula.
  - `screenshots/`: Protocol evidence captures.

---

## Screenshots (Screenshot Protocol)

- `sis-week3-business-card/screenshots/sis1-vscode.png`: Full VS Code window with source code showing watermark and name.
- `sis-week3-business-card/screenshots/sis1-devtools.png`: Browser view with DevTools Elements / Console highlighting the visible watermark footer.

---

## Technical Features & Rubric Compliance (1.5 pts)

- **Semantic Tags (0.4 pts):** Valid HTML5 document structure containing `<header>`, `<main>`, `<article>`, `<section>`, and `<footer>`.
- **Seed Colors & Watermark (0.4 pts):** `--primary` (`hsl(43, 65%, 40%)`) and `--accent` (`hsl(94, 70%, 45%)`) configured via `:root`, plus the required anti-copy watermark embedded in the card footer.
- **Visual Polish (0.4 pts):** High-contrast typography, box-shadow depth, custom geometric SVG chess knight emblem with descriptive accessibility attributes, and responsive layout.
- **Contact Block:** Includes email, phone, location (Almaty, Kazakhstan), and functional `mailto:` challenge button.

---

## AI Disclosure

- **AI used for:** Assistance with arithmetic checking and layout scaffolding.
- **I rewrote/verified:** All CSS variables, HSL color balance, semantic structure, accessibility descriptions, and niche-specific copy.
