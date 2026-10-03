# CSE6624 Week 05 Lab — Themed two-column card layout (box model deep dive)

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 05 — Themed two-column card layout (box model deep dive)  
**Theme:** Satbayev Varsity Volleyball Middle Blocker Technical Deck  

---

## How to Run

1. Open folder `CSE6624_W05_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Hover over the `.panel` cards to view the interactive state transitions.
4. Open Chrome DevTools (`F12`) to inspect the Box Model (`margin`, `border`, `padding`, `width`).

---

## Deliverables Checklist

- [x] Global box-sizing applied: `* { box-sizing: border-box; }`.
- [x] Centered `main` container with `max-width: 900px` and `margin: 0 auto`.
- [x] At least 3 `.panel` blocks inside `.layout` with distinct padding, margins, and borders.
- [x] Hover pseudo-class (`:hover`) on `.panel` elements transitioning background color (`#ebf8ff`).
- [x] Clear semantic structure (`<header>`, `<main>`, `<section>`, `<footer>`).

---

## Color Palette Rationale

The palette is anchored in Satbayev collegiate athletic identity: deep navy (`#1a365d`) and cobalt blue (`#2b6cb0`) representing authority and precision, balanced with crisp neutral backgrounds (`#f7fafc`, `#ffffff`) and high-contrast dark slate typography (`#1a202c`, `#2d3748`) to ensure effortless legibility.

---

## Technical Notes: Box Model & `border-box` (Defence Criteria)

- **`content-box` (Default):** Width only applies to the content. Adding padding and borders increases the total rendered width of the element, which frequently leads to unexpected horizontal overflow scrollbars.
- **`border-box` (`box-sizing: border-box`):** The declared `width` includes content, padding, and border. This guarantees that `max-width: 900px` will never expand beyond 900px regardless of inner padding.

---

## AI Disclosure

- **AI used for:** Scaffolding the CSS template and documentation formatting.
- **I rewrote/verified:** Box-sizing rules, hover interaction timing, layout centering constraints, and volleyball middle blocker technical specs.
