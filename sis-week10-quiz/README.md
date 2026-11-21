# CSE6624 — Khamzin Daniyal — 070301552252

Niche: #23 Chess club with online ladder  
Seed: Hue=43, Accent=94  
Watermark: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`  
Assignment: **SIS-3 · Week 10 · Interactive niche quiz or mini-game (1.5 pts)**

---

## Deliverables & Rubric Compliance (1.5 pts)

1. **Working Interactivity with Vanilla JS + DOM (0.6 pts):**
   - 5-question interactive quiz focused specifically on Satbayev Chess Club ladder bylaws, time controls, knight movement rules, and Elo calculation.
   - At least 3 distinct DOM update mechanisms implemented:
     - `document.createElement("button")` dynamically building answer options.
     - `classList.add("correct")` / `classList.add("wrong")` providing color-coded visual feedback.
     - `textContent` updating progress tracking, live score, and final percentage evaluation.
     - `style.display` controlling question view, next button, and result screen transitions.
   - Zero external libraries or frameworks used.

2. **Niche-Specific Content + Clear UI Feedback (0.4 pts):**
   - Questions directly reflect our niche (#23 Chess club with online ladder).
   - Immediate green/red visual response upon choosing an answer, preventing multiple guesses by disabling sibling buttons.

3. **Reset / Play Again Functionality:**
   - "Play Again" button resets index and score to zero and re-initializes the quiz cleanly.

4. **Code Clarity + Anti-Copy Evidence (0.5 pts):**
   - Page `<title>` contains student name and ID: `Khamzin Daniyal 070301552252 — SIS 3 Chess Quiz`.
   - Watermark permanently embedded in footer: `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23`.
   - Console logs student watermark upon load.

---

## How to Run

1. Open folder `sis-week10-quiz` in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. Answer the 5 questions, verify the score counter, and test the "Play Again" reset button.
