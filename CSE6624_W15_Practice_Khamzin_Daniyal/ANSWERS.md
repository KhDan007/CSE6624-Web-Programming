# ANSWERS.md — Defence Question Bank Answers (1–5)

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 15 — Final project defence prep  

---

### Question 1: Walk me through your folder structure.
> **Answer:**  
> The project root contains semantic HTML entry points (`index.html` and `tactics.html`) alongside dedicated subdirectories:
> - `css/styles.css`: External unified stylesheet containing layout rules, CSS variables, and media queries.
> - `js/main.js`: Vanilla JavaScript DOM logic loaded before `</body>`.
> - `images/`: Local, optimized media assets referenced via relative paths.
> - `README.md` & `DEMO_SCRIPT.md`: Setup instructions and technical defense outlines.  
> There are zero heavy node_modules, build tools, or broken absolute paths.

---

### Question 2: Where is your responsive breakpoint defined?
> **Answer:**  
> Our primary mobile breakpoint is declared in `css/styles.css` at line `@media (max-width: 768px)`. When triggered, it adjusts `.content-grid` from `repeat(2, 1fr)` to a single stacked `1fr` column, converts the header flex direction to column, and scales hero padding and font sizes for mobile screens.

---

### Question 3: Why did you choose Flexbox vs Grid here?
> **Answer:**  
> We deliberately chose **Flexbox** for the navigation header (`.header-inner`) and footer because they represent one-dimensional layouts along a single axis requiring clean distribution (`justify-content: space-between`). Conversely, we chose **CSS Grid** for `.content-grid` because it manages two-dimensional card layouts where uniform column widths and row gap alignments are essential across breakpoints.

---

### Question 4: What happens when this button is clicked? (point to code)
> **Answer:**  
> When the user clicks the submit button, the browser intercepts the event. In our JavaScript:
> 1. `e.preventDefault()` halts the default form submission and prevents a destructive page reload.
> 2. The script validates input fields to ensure required values exist.
> 3. It generates dynamic feedback or appends elements directly into the DOM tree, keeping the user in the active context.

---

### Question 5: Change this color/spacing live.
> **Answer:**  
> In `css/styles.css`, I can immediately update any style live:
> - To alter primary branding: change `--primary` or `header` background from `#1a365d` to `#2c5282` or any requested hex value.
> - To alter card spacing: adjust the `gap: 1.5rem` on `.content-grid` or `padding: 1.5rem` on `.card`.
> Live Server reflects the updated layout in the browser instantly upon saving (<kbd>Cmd+S</kbd>).
