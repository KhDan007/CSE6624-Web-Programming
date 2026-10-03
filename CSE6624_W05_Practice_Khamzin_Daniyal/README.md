# CSE6624 Week 05 Practice — CSS selectors, cascade, box model

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 05 — CSS selectors, cascade, box model  
**Theme:** Satbayev Varsity Volleyball Middle Blocker Tactics  

---

## How to Run

1. Open folder `CSE6624_W05_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Inspect elements using DevTools (<kbd>F12</kbd> or <kbd>Cmd+Option+I</kbd>) to observe the Box Model and rule cascade.

---

## Deliverables Checklist

- [x] `index.html` linked to external `styles.css`.
- [x] At least one class selector (`.card`, `.top`, `.nav`) and element selectors (`body`, `header`).
- [x] Visible padding (`1rem`) and border (`2px solid #2b6cb0`) on `.card`.
- [x] Navigation links styled (color `#bee3f8`, `text-decoration: none`, spacing).
- [x] Specificity demonstration: `header .nav a` overrides `.nav a` with `font-weight: bold`.

---

## Specificity & Cascade Explanation (Defence Criteria)

When two conflicting CSS rules target the same element, the browser decides which rule wins based on:
1. **Specificity Weight:** Calculated as `(IDs, Classes/Attributes/Pseudo-classes, Elements)`.
   - `.nav a` has specificity `(0, 1, 1)` (one class, one element).
   - `header .nav a` has specificity `(0, 1, 2)` (one class, two elements).
   - Therefore, `header .nav a` wins because it has higher specificity.
2. **Source Order (The Cascade):** If specificity and importance are equal, the rule appearing later in the stylesheet wins.
3. **Inheritance:** Direct target rules override inherited values.

---

## AI Disclosure

- **AI used for:** Scaffolding file boilerplate and markdown documentation.
- **I rewrote/verified:** CSS selectors, cascade hierarchy, card styling, and volleyball middle blocker technical descriptions.
