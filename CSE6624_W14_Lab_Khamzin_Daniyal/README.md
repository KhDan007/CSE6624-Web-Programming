# CSE6624 Week 14 Lab — Polish pass for your project

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 14 — Polish pass for your project  
**Topic:** Satbayev Varsity Volleyball Performance Portal  

---

## Features

- **Multi-Page Semantic Architecture:** Clean division between `index.html` (portal overview & tryout registration) and `tactics.html` (tactical keys & weekly training schedule).
- **Responsive CSS Grid & Flexbox:** Reflows seamlessly from wide desktop to mobile phone viewports (`@media (max-width: 768px)`).
- **Interactive Form Validation:** Complete tryout registration form with matching labels and native required constraints.
- **Structured Data Table:** Weekly training arena schedule with accessible `thead`, `tbody`, and `th scope="col"`.
- **Performance Optimized Assets:** Compressed, high-quality images with strict fluid dimensioning (`img { max-width: 100%; height: auto; }`).

---

## How to Run

1. Open folder `CSE6624_W14_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Use the navigation to explore both pages.
4. Press <kbd>F12</kbd> to inspect the **Console** tab: confirm zero errors on load and execution.

---

## Accessibility Notes

- Unified color palette restricted to 3 intentional colors (Satbayev Navy `#1a365d`, Court Blue `#2b6cb0`, Alert Accent `#dd6b20`) plus neutrals to guarantee WCAG AA contrast compliance.
- Explicit label-to-input associations across all form fields.
- Descriptive `alt` attributes on all images.
- High-visibility keyboard focus rings (`:focus-visible`) across all interactive links, buttons, and inputs.

---

## Deliverables Checklist

- [x] Compressed / reasonably sized images with `max-width: 100%`.
- [x] Consistent spacing and typography across all pages.
- [x] Clean DevTools Console without warnings or errors.
- [x] README updated with comprehensive feature list.
- [x] Screenshots folder containing desktop and mobile captures (`screenshots/desktop-capture.png`, `screenshots/mobile-capture.png`).

---

## AI Disclosure

- **AI used for:** Template scaffolding and styling layout.
- **I rewrote/verified:** Unified design system palette, navigation active states, form accessibility tags, and volleyball content.
