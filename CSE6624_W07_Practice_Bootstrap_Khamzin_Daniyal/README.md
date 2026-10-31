# CSE6624 Week 07 Practice (Bootstrap 5 Edition)

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 07 Recreated with Bootstrap 5  
**Topic:** Satbayev Varsity Volleyball Net Defense Grid  

---

## Overview

This project recreates **Week 07 Practice** (originally built with custom CSS Grid `display: grid; grid-template-columns: repeat(3, 1fr)` and `@media (max-width: 600px)` breakpoint) using **Bootstrap 5.3 CDN** classes instead.

---

## Comparison: Custom CSS Grid vs. Bootstrap Grid

| Feature | Week 07 Original (Custom CSS) | Week 07 Recreated (Bootstrap 5) |
|---|---|---|
| **Grid system** | `display: grid; grid-template-columns: repeat(3, 1fr)` | `<div class="row row-cols-1 row-cols-md-3 g-4">` |
| **Gutter / gap** | `gap: 1rem` | `g-4` utility class (1.5rem) |
| **Mobile stacking** | `@media (max-width: 600px) { grid-template-columns: 1fr; }` | `row-cols-1` on mobile, switching to `row-cols-md-3` at $\ge 768\text{px}$ |
| **Equal-height cards** | Native grid stretch | `card h-100` flex stretch |
| **Styling overhead** | Required separate `styles.css` file | Zero custom CSS needed; utility classes via CDN |

---

## Bootstrap Classes Used

- `container`, `my-5`: Centered responsive container with vertical margins.
- `row`, `row-cols-1`, `row-cols-md-3`, `g-4`: Responsive grid row holding 3 equal columns on desktop and 1 column on mobile with consistent gutters.
- `col`: Grid column child element.
- `card`, `card-body`, `card-footer`, `h-100`, `shadow-sm`: Bootstrap card component with equal height and subtle shadow.
- `badge text-bg-primary`: Zone indicator badges.
- `bg-light`, `text-white`, `border-top`, `text-body-secondary`: Typography and background utility styling.

---

## How to Run

1. Open folder `CSE6624_W07_Practice_Bootstrap_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Resize the window or use DevTools device mode to observe 3 cards on desktop and 1 stacked column on mobile.

---

## AI Disclosure

- **AI used for:** Scaffold assistance converting CSS Grid declarations to Bootstrap 5 grid utilities.
- **I rewrote/verified:** Bootstrap class hierarchy, zone card descriptions, and responsive breakpoint verification.
