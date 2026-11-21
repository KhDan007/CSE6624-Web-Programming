# CSE6624 Week 11 Lab — Filterable club directory

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 11 — Filterable club directory  
**Topic:** Satbayev University Student Organizations Live Directory  

---

## Data Shape Description

The clubs directory is stored in memory as an array of structured JavaScript objects:

```javascript
[
  {
    name: "Varsity Volleyball Team",   // String: official club designation
    room: "GUK-Arena",                  // String: campus meeting room identifier
    category: "Athletics"              // String: organizational activity domain
  },
  // ... 5 additional club records
]
```

Each record contains:
1. `name` (string): The public title of the student group.
2. `room` (string): The room in the GUK campus building where regular practices and meetings occur.
3. `category` (string): Domain descriptor used for organizational context.

---

## How to Run

1. Open folder `CSE6624_W11_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Type in the filter box (e.g. `volleyball`, `CHESS`, `web`, `guk201`):
   - Notice that the list updates live as you type on the `input` event.
   - Cleared/empty filter input instantly restores all 6 club objects.

---

## Deliverables Checklist

- [x] **$\ge 5$ club objects:** Source data contains 6 structured objects.
- [x] **Live filter as you type:** Implemented via `addEventListener("input", ...)` using case-insensitive matching (`toLowerCase()`).
- [x] **Empty filter shows all:** Clearing the search input renders the complete dataset.
- [x] **Safe DOM manipulation:** Dynamic `li` elements are created with `document.createElement()` and `textContent`.
- [x] **Data shape documented:** Described in this README.

---

## AI Disclosure

- **AI used for:** CSS boilerplate scaffolding and markdown structure.
- **I rewrote/verified:** Array filter callback logic, case-insensitive string conversions, dynamic span appending, and student club data records.
