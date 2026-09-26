# CSE6624 Week 04 Lab — Registration form + data table

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 04 — Registration form + data table  
**Theme:** Satbayev Varsity Volleyball Roster & Tryout/Clinic Registration  

---

## How to Run

1. Open folder `CSE6624_W04_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. View the roster data table and interact with the registration form controls (radio buttons, dropdown selector, and required waiver checkbox).

---

## Deliverables Checklist

- [x] Information table with $\ge 4$ rows (5 player rows with jersey numbers, positions, and specialties).
- [x] `<fieldset>` and `<legend>` wrapping the "Year of study" radio buttons group (`name="year"`).
- [x] `<select>` element with $\ge 3$ options (Middle Blocker, Outside Hitter, Setter, Libero).
- [x] `<input type="checkbox">` required for agreement to the team code of conduct.
- [x] Clean semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- [x] All controls properly bound with labels and validation attributes.

---

## Purpose of Each Form Control

1. **`input id="reg-name"` (`type="text"`)**: Captures the candidate athlete's full legal name (`required`).
2. **`input id="reg-email"` (`type="email"`)**: Captures contact email for schedule and confirmation communications (`required`).
3. **`fieldset` / `legend` with `input type="radio"` (`name="year"`):** Groups mutually exclusive study years (1st through 4th year) into a single accessible choice, required for student eligibility verification.
4. **`select id="position-track"` (`<option>` list):** Allows candidates to designate their primary tactical specialization on the volleyball court.
5. **`input type="checkbox"` (`name="agree"`):** Enforces mandatory student acknowledgment of the university athletic conduct and physical waiver before registration submission.

---

## AI Disclosure

- **AI used for:** Scaffolding the boilerplate HTML structure and documenting form control behaviors.
- **I rewrote/verified:** Table schema, fieldset/legend semantics, radio group grouping attributes, and athletic domain details.
