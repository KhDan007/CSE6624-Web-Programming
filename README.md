# CSE6624 — Khamzin Daniyal — 070301552252

Niche: #23 Chess club with online ladder  
Seed: Hue=43, Accent=94  
Watermark: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## Seed Arithmetic & Calculations (Section 4)

- **Student ID:** `070301552252` $\rightarrow$ `ID2 = 52` (last 2 digits)
- **Birth Month:** `March` $\rightarrow$ `M = 3`
- **Surname:** `Khamzin` $\rightarrow$ First letter `K` $\rightarrow$ `L = 11` (A=1 ... K=11 ... Z=26)

### Formulas & Values:
1. **Hue:**
   $$\text{Hue} = (ID2 \times 7 + M \times 13) \pmod{360} = (52 \times 7 + 3 \times 13) \pmod{360} = 403 \pmod{360} = \mathbf{43}$$
   - Primary HSL: `hsl(43, 65%, 40%)`
2. **Accent:**
   $$\text{Accent} = (\text{Hue} + 40 + L) \pmod{360} = (43 + 40 + 11) \pmod{360} = \mathbf{94}$$
   - Accent HSL: `hsl(94, 70%, 45%)`
3. **Niche Index:**
   $$\text{Niche Index} = (ID2 + M + L) \pmod{24} = (52 + 3 + 11) \pmod{24} = 66 \pmod{24} = 18$$
   - Chosen Niche: **#23: Chess club with online ladder**
4. **Watermark String:**
   `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## How to Open

Open `attestation-1/index.html` in your browser (using VS Code Live Server at `http://127.0.0.1:5500/attestation-1/index.html`).

---

## Deliverables in this Repo

```text
cse6624-khamzin/
├── README.md                          <- Root project metadata & seed record
├── sis-week3-business-card/           <- SIS-1: Digital Business Card
│   ├── index.html
│   ├── styles.css
│   └── README.md
└── attestation-1/                     <- Main Evolving Site (TSIS-1, TSIS-2, Att1)
    ├── index.html                     <- TSIS-1 (HTML page) & TSIS-2 (Flex/Grid layout)
    ├── css/
    │   └── styles.css                 <- TSIS-2 CSS: seed variables, Box Model, Grid/Flex
    ├── js/                            <- Reserved for TSIS-4 & Attestation 1
    ├── images/                        <- Media assets
    └── README.md                      <- TSIS & Attestation technical documentation
```

---

## TSIS Milestones Summary & Defence Answers

### TSIS-1 · Week 2 · Setup & First Page (1.5 pts)
- **Demo Requirements:** VS Code project folder structure initialized, `index.html` rendered in browser, GitHub repository tracked, README with name/ID/niche/seed.
- **Defence Question Answers:**
  - *Q: What is the difference between `<div>` and `<section>`?*  
    **A:** A `<section>` is a semantic HTML5 landmark tag indicating a thematic grouping of content with its own heading, aiding screen readers and search engines. A `<div>` is a generic non-semantic container used purely for styling and CSS layout grouping.
  - *Q: Where will your watermark live?*  
    **A:** In the persistent page footer (`<footer class="site-footer">`), styled with a monospace badge containing `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`.
  - *Q: What is your niche and seed hue?*  
    **A:** Niche #23 (*Chess club with online ladder*), Primary Hue = `43` (`hsl(43, 65%, 40%)`), Accent = `94` (`hsl(94, 70%, 45%)`).

### TSIS-2 · Week 5 · CSS Layout Check (1.5 pts)
- **Demo Requirements:** Flexbox navigation bar, centered hero banner with call-to-actions, 3-card Grid layout (`repeat(3, 1fr)`) showing tournament formats, DevTools Box Model check.
- **Defence Question Answers:**
  - *Q: When would you choose Grid over Flexbox?*  
    **A:** Choose CSS Grid for two-dimensional layouts where alignment across both columns and rows is necessary (such as the 3 tournament cards grid). Choose Flexbox for one-dimensional layouts along a single axis (such as the header navigation bar distributing logo and links).
  - *Q: How did seed colors enter your CSS?*  
    **A:** In `:root` inside `css/styles.css` using `--primary: hsl(43, 65%, 40%)` and `--accent: hsl(94, 70%, 45%)`. All surface tints and borders reference these custom properties (`var(--primary)` and `var(--accent)`).
  - *Q: What breaks on a narrow phone width right now?*  
    **A:** Nothing breaks because responsive `@media` rules are included: at `900px` the card grid adjusts to 2 columns, and below `600px` it collapses to a single column while the header switches to a vertical flex column.

---

## AI Disclosure

- **AI used for:** Assisting with layout scaffolding and markdown documentation.
- **I rewrote/verified:** All CSS variables, HSL seed mathematics, Grid/Flexbox dimensions, Box Model rules, and niche chess tournament content.
