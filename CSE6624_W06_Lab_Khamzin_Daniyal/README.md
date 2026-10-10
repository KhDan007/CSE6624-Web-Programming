# CSE6624 Week 06 Lab — Product / club cards + flex footer

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 06 — Product / club cards + flex footer  
**Topic:** Satbayev Athletics Fair — Varsity Volleyball Skills Booths  

---

## How to Run

1. Open folder `CSE6624_W06_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Resize the window to verify that the 4 booth cards wrap cleanly and the footer columns align to the left and right edges.

---

## Deliverables Checklist

- [x] **Hero Section with Flex Alignment:** `.hero` uses `display: flex`, `align-items: center`, `justify-content: center`, with `min-height: 160px`, blue background (`#2c5282`), and white text.
- [x] **$\ge 4$ Cards in Wrapping Flex Row:** `.cards-wrapper` with `flex-wrap: wrap` and `gap: 1.5rem` containing 4 detailed booth cards with titles, descriptions, and fake fees/times.
- [x] **Flex Footer with `space-between`:** `footer.site-footer` has `display: flex; justify-content: space-between;` with two columns: left "Contact" and right "Coordinator & © 2026".
- [x] **Consistent Gap Usage:** Utilized CSS `gap` property across header navigation, card grid, and card metadata.
- [x] **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>`.

---

## Flex Behavior Verification (Done Criteria)

- **Cards Wrapping:** On desktop viewports, the 4 cards span horizontally across the container. On narrower viewports (tablets and phones), each `.card` maintains its `min-width: 230px` and wraps neatly onto 2 rows or a single column without horizontal overflows.
- **Footer Spacing:** The two footer divisions remain pinned to opposite edges of the screen (`justify-content: space-between`) on wide displays, reflowing gracefully on mobile screens.

---

## AI Disclosure

- **AI used for:** Scaffolding the flexbox CSS and generating documentation.
- **I rewrote/verified:** All flexbox rules, hero dimensioning, footer alignment, and volleyball skills fair content.
