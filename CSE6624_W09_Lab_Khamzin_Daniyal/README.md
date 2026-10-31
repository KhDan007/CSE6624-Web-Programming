# CSE6624 Week 09 Lab — Bootstrap landing: navbar + cards + form

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 09 — Bootstrap landing: navbar + cards + form  
**Topic:** Satbayev Varsity Volleyball Performance Hub Landing Page  

---

## How to Run

1. Open folder `CSE6624_W09_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Click the navbar links to smoothly jump between `#hero`, `#features`, and `#contact`.
4. Test the responsive navbar toggler on small screens (e.g. 375px in DevTools) and try submitting the form to verify HTML5 required validation.

---

## Deliverables Checklist

- [x] **Navbar with $\ge 2$ links**: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` with brand and 3 links (`#hero`, `#features`, `#contact`) and responsive mobile collapse toggler.
- [x] **Hero section with `btn btn-primary` / hero classes**: Styled with `p-5 mb-4 bg-primary text-white rounded-3 shadow` container with prominent heading, subtitle, and action button.
- [x] **Card row**: 3-column card grid (`col-md-4`) containing structured feature cards with titles, text, and metadata.
- [x] **Form using `form-control` and `btn`**: Bootstrap-styled form utilizing `form-label`, `form-control`, `form-select`, `row g-3`, and `btn btn-primary`.
- [x] **Bootstrap bundle JS included**: `bootstrap.bundle.min.js` loaded before `</body>` enabling the navbar toggle behavior.
- [x] **Hero + cards + form combined on one cohesive page**: Satisfies the Done criteria.

---

## Bootstrap Components & Utilities Used (Done Criteria Defense)

1. **Navigation:** `navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-dark`, `navbar-toggler`, `collapse navbar-collapse`, `navbar-nav`.
2. **Hero Block:** `p-5`, `mb-4`, `bg-primary`, `text-white`, `rounded-3`, `shadow`, `display-5`, `fw-bold`.
3. **Card Grid:** `row g-4`, `col-md-4`, `card h-100 shadow-sm border-0`, `card-body`, `card-footer`.
4. **Form Controls:** `form-label`, `form-control`, `form-select`, `btn btn-primary btn-lg`.
5. **Spacing & Helpers:** `container`, `my-4`, `my-5`, `p-4`, `shadow-sm`, `badge`, `d-none d-sm-inline`.

---

## AI Disclosure

- **AI used for:** Scaffolding the Bootstrap 5.3 CDN tags and form layout template.
- **I rewrote/verified:** All component wiring, anchors (`#features`, `#contact`), middle blocker content, and script integrity hashes.
