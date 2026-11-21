# CSE6624 Week 10 Lab — Tip calculator page (polished) + grade average tool

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 10 — Tip calculator page (polished) + grade average tool  
**Topic:** Satbayev Student Athlete Toolkit  

---

## Tool Explanations

- **Post-Match Meal Tip Calculator:** Takes a dining bill amount in KZT and an optional tip percentage, validating against empty or negative numbers, and computes the exact tip sum alongside the combined total formatted to two decimal places.
- **Academic Grade Average Calculator:** Computes the mathematical average of three user-supplied assignment grades (`(g1 + g2 + g3) / 3`) using the reusable `average3()` function, ensuring all three values exist within the range $0\text{--}100$ and providing visual error feedback if an input is missing.

---

## How to Run

1. Open folder `CSE6624_W10_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Test both tools:
   - Calculate tip with valid numbers and try clicking with blank inputs to observe the red error status box.
   - Enter three grades (e.g. 85, 90, 95) to see the average displayed cleanly as `90.00 / 100`.

---

## Deliverables Checklist

- [x] **Styled tip calculator (CSS):** Dedicated layout card with input focus states and dynamic status alert styling.
- [x] **Second tool:** 3 grade inputs (`g1`, `g2`, `g3`) with calculate button and formatted output.
- [x] **Guard against empty / invalid input:** User-visible error messages displayed inside `.result-box.error` without throwing unhandled exceptions.
- [x] **`average3(a, b, c)` function:** Implemented cleanly in `main.js`.
- [x] **Clean Console:** No runtime errors in DevTools Console.

---

## AI Disclosure

- **AI used for:** CSS boilerplate styling and markdown template structure.
- **I rewrote/verified:** Input validation logic, string trimming, `average3` math, `.toFixed(2)` float formatting, and athletic utility copy.
