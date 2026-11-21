# CSE6624 Week 10 Practice — JavaScript basics (console + tip calc snippet)

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 10 — JavaScript basics  
**Topic:** Satbayev Athletics Cafe Post-Game Tip Calculator  

---

## How to Run

1. Open folder `CSE6624_W10_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Open Developer Tools (<kbd>F12</kbd> or <kbd>Cmd+Option+I</kbd>) and view the **Console** tab:
   - Notice the two logs on load: `"W10 practice loaded - Satbayev Athletics Cafe Calculator"` and `"typeof 42 => number"`.
4. Test with default values (`Bill = 1000`, `Tip = 10%`):
   - Output displays: `Tip: 100.00 KZT`, `Total: 1100.00 KZT`.
5. Enter invalid inputs to verify error guarding (`"Please enter valid numbers."`).

---

## Deliverables Checklist

- [x] `index.html` + `styles.css` + `main.js` linked properly.
- [x] Console displays at least two `console.log` lines on load.
- [x] Number inputs for bill and tip percent; button triggers calculation.
- [x] Output pre-formatted block displays tip amount and total.
- [x] Zero red errors in DevTools Console.

---

## Concept Note: What `Number()` Does (Done Criteria Defense)

`Number(value)` converts a primitive value or string (such as the text string retrieved from an input element's `.value`) into a JavaScript numeric type. If the string contains non-convertible characters or is invalid, it returns `NaN` (Not-a-Number), which can be safely checked using `Number.isNaN()`.

---

## AI Disclosure

- **AI used for:** Scaffolding the starter files and markdown structure.
- **I rewrote/verified:** DOM element wiring, input validation guards, calculation formatting with `.toFixed(2)`, and console log verification.
