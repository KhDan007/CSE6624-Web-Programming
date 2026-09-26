# CSE6624 Week 04 Practice — Tables and forms basics

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 04 — Tables and forms basics  
**Theme:** Satbayev Varsity Volleyball Weekly Training Schedule & Contact Form  

---

## How to Run

1. Open folder `CSE6624_W04_Practice_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. Inspect the table layout and try submitting the contact form empty to observe native HTML5 form validation.

---

## Deliverables Checklist

- [x] Table with `<thead>`, `<tbody>`, and 3 data rows (Day, Time, Session Type, Location) with `th scope="col"`.
- [x] Accessible form using `<label for="...">` matching input `id` attributes.
- [x] Input elements for `type="text"`, `type="email"`, and `<textarea>`.
- [x] `required` attribute enforced on Name and Email fields.
- [x] Submit button inside `form method="get" action="#"`.

---

## Defence Criteria Reference

- **Label/For Pairing:** Every `<label for="x">` strictly matches `<input id="x">`, ensuring that clicking the text label focuses the corresponding input element for assistive technologies and touchscreen usability.
- **Native Form Validation:** The browser validates `type="email"` pattern matching and blocks empty submission on inputs with the `required` boolean attribute without requiring custom JavaScript.

---

## AI Disclosure

- **AI used for:** Scaffolding the HTML markup structure and documentation template.
- **I rewrote/verified:** Table content, accessible label associations, input validations, and volleyball team details.
