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
3. **Niche Selection:**
   - Chosen Niche: **#23: Chess club with online ladder**
4. **Watermark String:**
   `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## Deliverables in this Repository

```text
CSE6624-Web-Programming/
├── README.md                          <- Root project metadata & seed records
├── sis-week3-business-card/           <- SIS-1: Digital Business Card
├── sis-week6-css-art/                 <- SIS-2: Pure CSS Art (Chess Rook)
├── sis-week10-quiz/                   <- SIS-3: Interactive 5-Question Chess Quiz
└── attestation-1/                     <- TSIS-1, TSIS-2, TSIS-3, TSIS-4 & Attestation 1
    ├── index.html                     <- 5-section responsive site with mobile nav & challenge form
    ├── css/styles.css                 <- Seed palette, strict Box Model, CSS Grid & Flexbox
    ├── js/main.js                     <- Mobile nav drawer toggle & challenge form interception
    ├── images/                        <- Board tournament images
    └── README.md                      <- Technical documentation & defense answers
```

---

## Summary of All Completed SIS and TSIS Tasks (Weeks 1 to 11)

### Part A: Student Independent Study (SIS)
1. **SIS-1 (Week 3): Digital Business Card**
   - Single-page card inside [`sis-week3-business-card/`](file:///Users/dan/Documents/Lectures/Web/sis-week3-business-card).
   - Seed palette `--primary: hsl(43, 65%, 40%)` and `--accent: hsl(94, 70%, 45%)`.
   - Contact block, custom chess knight emblem, and visible footer watermark.
2. **SIS-2 (Week 6): CSS Art from Seed Colors**
   - Pure CSS *Chess Rook (Castle)* inside [`sis-week6-css-art/`](file:///Users/dan/Documents/Lectures/Web/sis-week6-css-art) built using 6 HTML elements without external images.
   - Flexbox layout with soft hover animation and seed color palette guide.
3. **SIS-3 (Week 10): Interactive Niche Quiz**
   - 5-question interactive quiz inside [`sis-week10-quiz/`](file:///Users/dan/Documents/Lectures/Web/sis-week10-quiz) built with vanilla JS and DOM.
   - Dynamic answer buttons, score tracking, green/red answer highlighting, and play-again reset button.

---

### Part B: Teacher Supervised Independent Study (TSIS) & Attestation 1
All TSIS milestones live inside [`attestation-1/`](file:///Users/dan/Documents/Lectures/Web/attestation-1):
1. **TSIS-1 (Week 2): First Page & Setup**
   - Course structure setup, GitHub tracking, and semantic HTML shell.
2. **TSIS-2 (Week 5): CSS Layout Check**
   - Flexbox navigation, hero section, and 3-card tournament grid (`repeat(3, 1fr)`).
3. **TSIS-3 (Week 8): Attestation 1 Progress**
   - 5 navigable sections (Hero, Cards, Rules, Gallery, and Challenge Form).
   - Working challenge form with labeled inputs and validation.
   - 3 tournament photos with descriptive `alt` text.
   - Responsive breakpoint (`@media (max-width: 768px)`).
4. **TSIS-4 (Week 11): JS DOM Progress**
   - Mobile navigation hamburger toggle (`classList.toggle("is-open")` with `aria-expanded`).
   - Challenge form interception with `e.preventDefault()`, validation checks, and inline status feedback.
   - Console logs student watermark on startup.

---

### Part C: Final Exam Project (40 points)
The complete final exam project is located in [`cse6624-exam-khamzin/`](file:///Users/dan/Documents/Lectures/Web/cse6624-exam-khamzin):
- **4 Multi-Page Static Site:** `index.html` (Home), `ladder.html` (Standings & Elo Calculator), `challenge.html` (Challenge Slip & Queue), `rules.html` (Bylaws & FAQ Accordion).
- **Custom CSS3 (No Frameworks):** Pure custom CSS with `--primary: hsl(43, 65%, 40%)` and `--accent: hsl(94, 70%, 45%)`. Reflows from 3-column desktop grid &rarr; 2-column tablet &rarr; 1-column mobile (~375px) with zero horizontal overflow.
- **JavaScript DOM Interactivity:**
  1. Live Standings Filter & Real-Time Search.
  2. Interactive FIDE Elo match probability calculator ($E = 1 / (1 + 10^{(R_b - R_a) / 400})$).
  3. Client-side form validation and persistent `localStorage` Challenge Queue.
  4. Light / Dark theme toggle and accessible ARIA FAQ accordion.
- **Defence Materials:** Full 5–7 min oral defence script and Q&A answers in [`DEFENCE_CHEATSHEET.md`](file:///Users/dan/Documents/Lectures/Web/cse6624-exam-khamzin/DEFENCE_CHEATSHEET.md).
- **Screenshots:** 4 verification captures in [`screenshots/`](file:///Users/dan/Documents/Lectures/Web/cse6624-exam-khamzin/screenshots) (`vscode.png`, `mobile.png`, `filter-js.png`, `form-valid.png`).
- **Archive:** Submission archive [`CSE6624_Exam_Khamzin_Daniyal.zip`](file:///Users/dan/Documents/Lectures/Web/CSE6624_Exam_Khamzin_Daniyal.zip).

---

## AI Disclosure

- **AI used for:** Assistance with scaffolding templates, verifying arithmetic calculations, and documentation structure.
- **I rewrote/verified:** All HTML landmarks, CSS layout rules, DOM JavaScript functions, and niche-specific chess tournament copy.
