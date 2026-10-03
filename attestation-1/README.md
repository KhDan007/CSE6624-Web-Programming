# Satbayev Chess Ladder — Attestation 1 & TSIS Progress

**Student:** Khamzin Daniyal  
**Student ID:** 070301552252  
**Niche:** #23 Chess club with online ladder  
**Seed Values:** Hue = 43, Accent = 94  
**Watermark String:** `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## Completed TSIS Checks in this Directory

### TSIS-1 (Week 2): First Page & Setup (1.5 pts)
- Semantic HTML skeleton (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Site identity: *"Satbayev Chess Ladder — Collegiate League & Arena"*.
- Working GitHub tracking.
- Watermark displayed in footer.

### TSIS-2 (Week 5): CSS Layout & Box Model (1.5 pts)
- **Flexbox Navigation:** Sticky top header with `.brand` and horizontal `.nav-list` with hover transitions.
- **Hero Section:** High-impact banner styled with primary seed gradient and action buttons.
- **3-Card Grid:** `.cards-grid` using `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem`.
- **Seed Theming:** Strict usage of `--primary: hsl(43, 65%, 40%)` and `--accent: hsl(94, 70%, 45%)`.
- **Box Model Integrity:** Universal `* { box-sizing: border-box; }` with distinct padding, margins, and borders.
- **Responsive Breakpoints:** Visibly reflows into 2 columns at `900px` and 1 column at `600px`.

---

## How to Run & Verify

1. Open `attestation-1/index.html` with Live Server in VS Code.
2. Open DevTools (<kbd>F12</kbd> or <kbd>Cmd+Option+I</kbd>):
   - Inspect `.cards-grid` to demonstrate the CSS Grid layout.
   - Inspect any `.tier-card` to show the Box Model diagram.
   - Inspect `.site-footer .watermark` to confirm the watermark string.
