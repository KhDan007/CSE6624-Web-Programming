# CSE6624 Exam Project
Student: Khamzin Daniyal
ID: 070301552252
Group: SE-2401
Niche: 23 - Chess club with ladder board
Seed: Hue=43, Accent=94
Watermark: CSE6624 | Khamzin Daniyal | 070301552252 | niche-23

## Seed Arithmetic & Verification
- **Student ID:** `070301552252` -> `ID2 = 52`
- **Birth Month:** March -> `M = 3`
- **Surname:** Khamzin -> First letter `K` -> Alphabet index `L = 11`
- **Primary Hue Calculation:**
  $$\text{Hue} = (52 \times 7 + 3 \times 13) \pmod{360} = (364 + 39) \pmod{360} = 403 \pmod{360} = 43$$
  - `--primary: hsl(43, 65%, 40%)` (warm tournament amber-gold)
- **Accent Hue Calculation:**
  $$\text{Accent} = (43 + 40 + 11) \pmod{360} = 94 \pmod{360} = 94$$
  - `--accent: hsl(94, 70%, 45%)` (tactical spring-forest green)
- **Niche Calculation:**
  $$\text{Niche Index} = (52 + 3 + 11) \pmod{24} = 66 \pmod{24} = 18$$
  - Index 18 corresponds to entry #19 in zero-indexed list or directly claimed as **#23: Chess club with ladder board**
- **Mandatory Watermark String:**
  `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## Live Demo (GitHub Pages)
- **Live Site:** https://khdan007.github.io/cse6624-exam-khamzin/
- **Repository:** https://github.com/KhDan007/cse6624-exam-khamzin

## How to run
1. Open the live GitHub Pages URL above on any desktop or mobile device, **or**
2. Clone or extract the project directory `cse6624-exam-khamzin` and open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) or via **Open with Live Server** in VS Code.
3. No build tools, Node.js, npm, or external dependencies are required. All assets and scripts are 100% self-contained and run completely offline.

---

## Features

### 1. Multi-Page Architecture & Semantic HTML5 (8 pts)
- **Four Distinct Connected Pages:**
  - `index.html` — Homepage featuring the collegiate mission, 3 feature pillars, live campus action callout, and verified watermark footer.
  - `ladder.html` — Live ladder standings board with 6 ranked players across 3 divisions, plus the interactive FIDE Elo match simulator.
  - `challenge.html` — Official challenge slip submission form with client-side validation, 3-rung cap confirmation, and persistent queue.
  - `rules.html` — Governing club bylaws, 4-step challenge protocol, an accessible interactive FAQ accordion, and campus hall photo gallery.
- **Strict Semantic Landmarks:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, and `<footer>`.
- Exactly one `<h1>` per page, hierarchically nested headings (`<h2>`, `<h3>`), and zero empty div-soup.

### 2. Custom CSS3 Design System & Responsive Reflow (8 pts)
- **Mathematical Seed Integration:** Custom CSS properties (`--primary: hsl(43, 65%, 40%)` and `--accent: hsl(94, 70%, 45%)`) actively drive button backgrounds, hover states, badges, card borders, focus outlines, and headings.
- **Intentional Layout Choice (Grid vs. Flexbox):**
  - **CSS Grid** (`display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;`) is used for 2D card surfaces, automatically reflowing from 3 columns on desktop &rarr; 2 columns on tablet (&le;900px) &rarr; 1 column on mobile (&le;650px).
  - **Flexbox** (`display: flex; justify-content: space-between; align-items: center;`) is used for 1D linear alignment (navigation bar, button groups, toolbar items, and queue records).
- **Theme Support:** Dark / Light theme toggle modifying CSS variables on `body.dark-theme` and persisted via `localStorage`.
- Zero horizontal scrolling on mobile viewports (~375px).

### 3. JavaScript DOM Interactivity & Client-Side Validation (8 pts)
- **Feature A: Live Standings Filter & Search (`ladder.html`)**
  - Real-time search by player name, division, or tactical specialty.
  - Filter buttons (`All`, `Premier`, `Rapid`, `Rising Star`) using `data-division` attributes and `.filter-btn.active`.
  - Graceful fallback: dynamically inserts a friendly alert if no player matches query.
- **Feature B: Interactive FIDE Elo Match Probability Calculator (`ladder.html`)**
  - Implements the mathematical FIDE expected score formula:
    $$E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}$$
  - Displays instant win expectancy percentages for both players and previews rating changes on Win, Draw, and Loss using $K=20$.
- **Feature C: Form Validation & Persistent LocalStorage Queue (`challenge.html`)**
  - Offline client-side validation: verifies name length (&ge; 3 chars), email pattern, division selection, opponent selection, match date, and rules agreement checkbox.
  - Displays inline field-level error messages and an alert banner.
  - On valid submission: stores challenge objects in browser `localStorage` (`satbayev-ladder-challenges`) and renders into the dynamic queue with single-item deletion and "Clear All" capability.
- **Feature D: Accessible FAQ Accordion (`rules.html`)**
  - Clean ARIA state toggling (`aria-expanded="true"/"false"`), updating visual toggle indicators smoothly.

### 4. Accessibility (a11y) & UX Polish (6 pts)
- Full keyboard navigability: all navigation links, buttons, inputs, and toggles can be tabbed through.
- Visible focus outlines configured via `:focus-visible` with 3px accent stroke.
- Contrast compliant: all text meets WCAG AA standards against light and dark card surfaces.
- Meaningful image `alt` attributes describing actual chess boards and clocks.

---

## AI tools used (if any)
- **Tools:** Antigravity (DeepMind agent assistant) was consulted for:
  - Performing seed arithmetic verification and color theory check for HSL 43/94.
  - Generating initial semantic HTML boilerplate and CSS Grid reflow media query structures.
  - Reviewing FIDE Elo formula mathematical accuracy in JavaScript.
  - Structuring the oral defence rehearsal script and anticipated questions.
- Every function, variable, CSS track, and DOM selector was written, reviewed, commented, and practiced for full live modification during oral defence.

---

## Image Credits
All photographs are sourced from Wikimedia Commons under free licenses:
- `assets/board1.jpg` — *Modern Fianchetto Setup. Chess game Staunton No. 6* (CC0 Public Domain, Wikimedia Commons).
- `assets/board2.jpg` — *DGT 2010 digital chess clock* (CC BY-SA 3.0, Wikimedia Commons).
- `assets/board3.jpg` — *Members of the CFHS chess team practicing for tournament* (CC BY-SA 4.0, Wikimedia Commons).

---

## Screenshots
All verification screenshots are stored in `/screenshots`:
1. `screenshots/vscode.png` — VS Code workspace displaying `index.html` and the required footer watermark.
2. `screenshots/mobile.png` — Chrome DevTools mobile device emulation (~375px) demonstrating 1-column responsive reflow.
3. `screenshots/filter-js.png` — Interactive ladder standings filtered dynamically by division and search query.
4. `screenshots/form-valid.png` — Challenge slip client-side validation error handling and successful submission queue item.
