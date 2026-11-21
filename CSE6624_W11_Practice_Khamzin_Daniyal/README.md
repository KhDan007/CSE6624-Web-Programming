# CSE6624 Week 11 Practice — Functions, arrays, objects

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 11 — Functions, arrays, objects  
**Topic:** Satbayev University Campus Clubs Directory  

---

## How to Run

1. Open folder `CSE6624_W11_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Open Developer Tools (<kbd>F12</kbd> or <kbd>Cmd+Option+I</kbd>) and check the **Console** tab to view the tabular data rendered by `console.table(clubs)`.
4. Observe the dynamic `<li>` elements populated into `<ul id="list">`.

---

## Deliverables Checklist

- [x] `const clubs = [ { name, room }, ... ]` defined with $\ge 3$ objects (4 campus clubs included).
- [x] `function renderClubs(list)` clears and builds `<li>` elements using `createElement` and `appendChild`.
- [x] Render invoked automatically on-load and via button click.
- [x] `console.table(clubs)` executed in Console.
- [x] Safe DOM practice: uses `textContent` to avoid XSS vulnerabilities.

---

## Concept Note: What an Object Property Is (Done Criteria Defense)

An **object property** is an association between a key (or name) and a value within a JavaScript object. For instance, in `{ name: "Varsity Volleyball Team", room: "GUK-Arena" }`, `name` and `room` are property keys whose corresponding values can be accessed using dot notation (`club.name`) or bracket notation (`club["name"]`).

---

## AI Disclosure

- **AI used for:** Scaffolding the starter template.
- **I rewrote/verified:** Array data structure, `renderClubs` function logic, DOM append workflow, and `console.table` invocation.
