# CSE6624 Week 13 Lab — fetch local JSON + render cards (+ optional save)

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 13 — fetch local JSON + render cards  
**Topic:** Satbayev Athletics Campus Facilities Hub  

---

## Important Runtime Requirement

> **Note:** As specified in the syllabus and workbook, **Live Server (or a local HTTP server) is mandatory** for this lab. Direct double-clicking (`file:///`) triggers browser CORS security policy and blocks local `fetch()` calls. Always open through `http://127.0.0.1:5500/...` or `http://localhost:...`.

---

## How to Run

1. Open folder `CSE6624_W13_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Open DevTools (<kbd>F12</kbd>) -> **Network** tab:
   - Verify `data.json` returns HTTP `200 OK`.
4. Observe the four cards rendered dynamically into `<ul id="list">`.
5. Click the **"Save Favorite"** button on any card:
   - Notice the selected card highlights with an orange accent border and updates the header badge.
   - Refresh the page (<kbd>F5</kbd>): the favorite persists via `localStorage`.
6. Teacher demo test: Renaming or moving `data.json` displays a clean user-visible error banner explaining that `data.json` could not be fetched.

---

## Deliverables Checklist

- [x] `data.json` containing array of 4 structured facility objects (`id`, `title`, `blurb`).
- [x] Asynchronous `fetch('./data.json')` handling response with `res.json()`.
- [x] Cards rendered dynamically into the DOM using safe `document.createElement()`.
- [x] Clean error message handled via `try/catch` block if fetch fails.
- [x] Optional save feature implemented: Favorite button persists selected item ID in `localStorage`.
- [x] README notes that Live Server is required for `fetch()`.

---

## AI Disclosure

- **AI used for:** Template scaffolding and styling layout.
- **I rewrote/verified:** Async/await fetch flow, HTTP status checking (`res.ok`), localStorage favorite toggling, and facilities dataset.
