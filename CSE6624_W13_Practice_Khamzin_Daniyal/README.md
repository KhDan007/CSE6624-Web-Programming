# CSE6624 Week 13 Practice — localStorage basics

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 13 — localStorage basics  
**Topic:** Court Rotation Note Persistence  

---

## How to Run

1. Open folder `CSE6624_W13_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Type a message into the input field and click **"Save to localStorage"**.
4. Press <kbd>F5</kbd> to refresh the page: notice that the text remains visible and persisted.
5. Open DevTools (<kbd>F12</kbd>) -> **Application** tab -> **Storage** -> **Local Storage** -> your origin: confirm `cse6624-w13-note` exists with your value.
6. Click **"Clear Note"**: notice the key is removed and the output reverts to `(empty)`.

---

## Deliverables Checklist

- [x] Save button writes input value to localStorage.
- [x] On page load, value is retrieved via `localStorage.getItem()` and displayed in `#out`.
- [x] Clear button executes `localStorage.removeItem(KEY)`.
- [x] Verified in DevTools Application panel under Local Storage.
- [x] Tested with full browser page refresh.

---

## AI Disclosure

- **AI used for:** Template scaffolding and styling layout.
- **I rewrote/verified:** LocalStorage read/write cycle, storage key management, and UI text synchronization.
