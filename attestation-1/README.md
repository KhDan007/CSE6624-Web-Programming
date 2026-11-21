# Satbayev Chess Ladder — Attestation 1 & TSIS (Weeks 2, 5, 8, 11)

**Student:** Khamzin Daniyal  
**Student ID:** 070301552252  
**Niche:** #23 Chess club with online ladder  
**Seed Arithmetic:**
- `ID2 = 52`, `M = 3`, `L = 11`
- `Hue = (52 * 7 + 3 * 13) mod 360 = 43` $\rightarrow$ `--primary: hsl(43, 65%, 40%)`
- `Accent = (43 + 40 + 11) mod 360 = 94` $\rightarrow$ `--accent: hsl(94, 70%, 45%)`
- `Watermark:` `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`

---

## Progress across All TSIS Milestones (Weeks 2, 5, 8, 11)

### TSIS-1 (Week 2): First Page & Setup
- Semantic HTML document initialized with structured layout.
- Niche identity: Satbayev Chess Ladder.
- Permanent watermark embedded in the page footer.

### TSIS-2 (Week 5): CSS Layout Check
- Flexbox navigation and 3-card CSS Grid (`repeat(3, 1fr)`) layout.
- Strictly themed using seed color CSS custom properties.
- DevTools Box Model compliance.

### TSIS-3 (Week 8): Attestation 1 Progress (Midterm Mini-Site)
- **$\ge 4$ Sections:** Hero, Tournament Tiers Grid, Club Rules, Media Gallery, and Official Challenge Form.
- **Form with Labels:** Official challenge request form with explicit `<label for="...">` pairing and native HTML5 validation constraints.
- **Images with Alt Text:** 3 local images wrapped inside `<figure>` and `<figcaption>` elements with descriptive alternative text.
- **Responsive Mobile Breakpoint:** `@media (max-width: 768px)` reflowing grid cards to 1 column and converting navigation into a mobile dropdown menu.

### TSIS-4 (Week 11): JS DOM Progress
- **Mobile Nav Toggle:** Dynamic classList toggling (`is-open`) with `aria-expanded` state tracking.
- **Dynamic Form Interception:** `e.preventDefault()` halts page reloads, verifies challenger inputs, and injects personalized feedback directly into `#form-feedback`.
- **Console Log Identification:** Startup log includes the student's exact watermark string.

---

## How to Run & Verify

1. Open `attestation-1/index.html` with Live Server in VS Code.
2. In mobile device mode (e.g. 375px), click the hamburger menu icon to test the JS navigation drawer.
3. Submit a ladder challenge to verify the dynamic DOM feedback and input clearing.
4. Check the footer to view the verification watermark badge.
