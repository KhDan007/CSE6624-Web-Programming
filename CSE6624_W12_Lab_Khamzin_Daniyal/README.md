# CSE6624 Week 12 Lab — Todo-lite with DOM only

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 12 — Todo-lite with DOM only  
**Topic:** Satbayev Varsity Volleyball Training Task Checklist  

---

## How to Run

1. Open folder `CSE6624_W12_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Add a new drill task using the input form.
4. Click on any task item text: notice the strikethrough line and opacity change (`.done` class).
5. Click the red **"Delete"** button: notice the item is removed without toggling the `done` state because of `e.stopPropagation()`.
6. Delete all items to reveal the empty-state banner.

---

## Deliverables Checklist

- [x] **Add via form:** Tasks added dynamically on submit without page reload.
- [x] **Toggle done:** Clicking the `li` toggles CSS `.done` class (`text-decoration: line-through; opacity: 0.6`).
- [x] **`e.stopPropagation()` on delete:** Prevents event bubbling up to the `li`, cleanly deleting the node.
- [x] **Empty-state message:** Displays `"No tasks remaining. All training items complete!"` when list is empty.
- [x] **No frameworks used:** 100% vanilla JavaScript DOM APIs.

---

## AI Disclosure

- **AI used for:** Template scaffolding and styling layout.
- **I rewrote/verified:** Event bubbling containment with `e.stopPropagation()`, classList toggling, and dynamic empty-state checking logic.
