# CSE6624 Week 07 Lab — Landing page: grid layout + responsive polish

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 07 — Landing page: grid layout + responsive polish  
**Topic:** CSE6624 Student Landing — Satbayev Varsity Volleyball Performance Hub  

---

## Breakpoints

- **Breakpoint 1 (`@media (max-width: 900px)`):** Tablet view reflows the 3-column `.features` grid into a balanced 2-column layout (`repeat(2, 1fr)`).
- **Breakpoint 2 (`@media (max-width: 600px)`):** Mobile phone view reduces `.features` to 1 full-width column (`1fr`), tightens hero padding (`padding: 2rem 1rem`), scales headline typography down to `1.75rem`, and switches the header navigation into a centered vertical flow.

---

## Deliverables Checklist

- [x] **Grid Sections:** Features section utilizes CSS Grid with responsive columns and consistent gap (`1.5rem`).
- [x] **Two Breakpoints Demonstrated:** Defined at `900px` (2 columns) and `600px` (1 column).
- [x] **Fluid Images:** `img { max-width: 100%; height: auto; }` configured, ensuring zero layout overflows.
- [x] **Readable on Phone Width:** Tested at 375px mobile viewport in DevTools.
- [x] **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.

---

## How to Run

1. Open folder `CSE6624_W07_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Resize the browser window or use DevTools Device Mode (<kbd>Cmd+Shift+M</kbd>) across 1200px, 768px, and 375px to observe the layout transitions.

---

## AI Disclosure

- **AI used for:** CSS boilerplate scaffolding and markdown documentation.
- **I rewrote/verified:** All CSS Grid rules, breakpoint values, fluid image behavior, and volleyball athlete content.
