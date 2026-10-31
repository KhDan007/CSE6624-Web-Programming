# CSE6624 Week 09 Practice — Bootstrap 5 via CDN

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 09 — Bootstrap 5 via CDN  
**Topic:** Satbayev Varsity Volleyball Middle Blocker Focus Areas  

---

## How to Run

1. Open folder `CSE6624_W09_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. View the Bootstrap 5 responsive layout and resize the browser window to see the 3 cards stack on mobile.

---

## Deliverables Checklist

- [x] **Bootstrap 5.3 CSS CDN linked in `<head>`**: Uses official jsDelivr CDN link with `integrity` and `crossorigin` attributes.
- [x] **Navbar with custom brand name**: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` with brand set to `Khamzin Daniyal`.
- [x] **Container with row of 3 cards (`col-md-4`)**: `<div class="container py-4">` with `<div class="row g-3">` and three `<div class="col-md-4">` cards using `card h-100`.
- [x] **Bootstrap styling**: Styled purely with Bootstrap utility classes without needing a separate custom CSS file.
- [x] **Responsive behavior**: 3 columns in a row on desktop (`md` breakpoint and above); columns stack vertically on screens under 768px.

---

## Bootstrap Classes Used (Done Criteria Defense)

- `bg-light`, `navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-dark`: Dark navbar on light background page styling.
- `container`, `py-4`, `py-3`: Responsive centered container with vertical padding utilities.
- `row`, `g-3`: Flex-based grid row with 1rem gutter spacing between grid columns.
- `col-md-4`: Grid column taking 4 of 12 columns (one-third width) on medium screens ($\ge 768\text{px}$) and 100% width on smaller screens.
- `card`, `card-body`, `card-title`, `card-text`, `card-footer`, `h-100`, `shadow-sm`: Bootstrap card component styled to stretch to equal height.

---

## AI Disclosure

- **AI used for:** Setting up the starter template from the workbook snippets.
- **I rewrote/verified:** Bootstrap CDN integrity parameters, navbar branding, middle blocker card descriptions, and responsive stacking behavior.
