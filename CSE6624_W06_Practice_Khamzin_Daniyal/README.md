# CSE6624 Week 06 Practice — Flexbox — nav + cards row

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 06 — Flexbox — nav + cards row  
**Topic:** Satbayev Varsity Volleyball Middle Blocker Drills  

---

## How to Run

1. Open folder `CSE6624_W06_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Resize the browser window to observe cards wrapping dynamically onto new rows.

---

## Deliverables Checklist

- [x] `header.top` uses `display: flex`, `align-items: center`, and `justify-content: space-between` (title on left, nav on right).
- [x] `.cards` uses `display: flex`, `flex-wrap: wrap`, and `gap: 1rem`.
- [x] `.card` has flex basis defined (`flex: 1 1 200px`) along with padding and border.
- [x] Contains $\ge 3$ cards (4 cards included with volleyball middle blocker drills).
- [x] `.nav` utilizes `display: flex` with `gap: 1rem`.

---

## Flexbox Wrapping & Alignment (Done Criteria)

- When viewed on a wide screen, the title and navigation links remain aligned in a single horizontal row with maximum spacing between them (`space-between`).
- When the browser viewport narrows, `.cards` automatically wraps (`flex-wrap: wrap`) cards onto the next line once their width reaches the `200px` minimum basis, preventing horizontal scrolling and layout breakage.

---

## AI Disclosure

- **AI used for:** Scaffolding the flexbox layout rules and markdown documentation.
- **I rewrote/verified:** All flex properties (`flex`, `flex-wrap`, `justify-content`, `gap`), HTML semantic structure, and niche volleyball drill content.
