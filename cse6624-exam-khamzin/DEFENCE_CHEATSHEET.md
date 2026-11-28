# CSE6624 Oral Defence Cheat Sheet & Practice Script
**Student:** Khamzin Daniyal (`070301552252`)  
**Course:** CSE6624 Introduction to Web Programming · Instructor: Temirlan Shoiynbek  
**Project:** Satbayev Online Chess Ladder (`niche-23`)  
**Allocated Defence Time:** 5 to 7 minutes

---

## 1. Step-by-Step 5-Minute Defence Script

### [0:00 – 0:30] Identity & Seed Verification (Have README.md open)
> *"Good day, Temirlan! My name is Khamzin Daniyal, student ID 070301552252.  
> My exam project is **Niche #23: Chess Club with Online Ladder**, tailored specifically as the Satbayev University Online Chess Ladder.  
> Based on my seed formula:  
> - Last two digits of ID: 52  
> - Birth month: March (3)  
> - Surname letter K: 11  
> - **Primary Hue:** `(52 * 7 + 3 * 13) % 360 = 43` &rarr; `hsl(43, 65%, 40%)` (warm tournament amber/gold).  
> - **Accent Hue:** `(43 + 40 + 11) % 360 = 94` &rarr; `hsl(94, 70%, 45%)` (tactical board green).  
> - **Watermark:** `CSE6624 | Khamzin Daniyal | 070301552252 | niche-23` is embedded in the footer of every page and in the README."*

---

### [0:30 – 1:30] Home Page Walkthrough (`index.html`)
> *"Here on the Home page, we have our brand header with a custom SVG chess knight piece and shared navigation.  
> The hero section immediately establishes our target audience: Satbayev University students competing in weekly campus derbies.  
> Down below, we have 3 feature pillar cards arranged using a 3-column CSS Grid: Real-Time Elo Ratings, 3-Rung Challenge Rule, and Weekly Campus Derbies in Room GUK 302.  
> In the footer, you can see our verified student watermark."*

---

### [1:30 – 3:00] Responsive Reflow Demo (Show DevTools)
> *(Open DevTools: press `Cmd + Option + I` or `F12`, click the mobile toggle icon, set width to ~375px)*  
> *"Now I'll demonstrate responsiveness:  
> On desktop (1200px), our cards are laid out in a 3-column grid via `grid-template-columns: repeat(3, 1fr)`.  
> As we resize down to tablet (900px), our media query shifts the grid to 2 columns.  
> On mobile width (375px), it cleanly collapses to a single 1fr column with zero horizontal overflow, and our flexbox navigation wraps neatly."*

---

### [3:00 – 4:30] JavaScript Interactivity Demo (Show 3 Features)
1. **Ladder Filtering (`ladder.html`):**
   > *"On our Ladder Board, we have 6 ranked student players. Watch how our JavaScript filter works:  
   > Clicking 'Premier', 'Rapid', or 'Rising Star' immediately filters cards by their `data-division` attribute.  
   > We also have real-time live search: typing 'Catalan' or 'Daniyal' filters the DOM elements instantly on the `input` event."*

2. **Interactive FIDE Elo Probability Calculator (`ladder.html`):**
   > *"Down here is our FIDE Elo calculator. If Player A is rated 2140 and Player B is rated 1950:  
   > As I change the numbers live, JS calculates the mathematical expected score using the official FIDE formula:  
   > `E = 1 / (1 + 10^((Rb - Ra) / 400))`  
   > It shows the win probabilities (75% vs 25%) and exact rating shifts (+5 for win, -5 for draw, -15 for loss with K=20)."*

3. **Form Validation & Queue (`challenge.html`):**
   > *"On our Challenge page, if I click 'Dispatch Challenge Slip' empty, our validation intercepts it via `e.preventDefault()`, highlighting all required fields in red.  
   > When I fill it with valid details:  
   > Name: `Daniyal Khamzin`, Email: `d.khamzin@satbayev.university`, Division: `Premier`, Opponent: `Arman Serikbay`, Date: `Tomorrow`, Checkbox: `Checked`  
   > And submit — a green success banner appears, the form resets, and the match is added to our 'Pending Challenges Queue' stored in `localStorage`, meaning it persists even if I refresh the page."*

4. **FAQ Accordion & Theme Toggle:**
   > *"On our Rules page, we have an accessible FAQ Accordion with `aria-expanded` attributes toggled via JS, and our Theme Toggle button in the header switches between light and dark modes."*

---

### [4:30 – 5:30] Show Code Structure
> *"Opening our code in VS Code:  
> - `css/styles.css`: pure custom CSS without any heavy frameworks. All seed colors are defined in `:root` and reused across buttons, cards, and borders.  
> - `js/main.js`: modular functions (`initThemeToggle`, `initLadderFilters`, `initEloCalculator`, `initChallengeQueue`, `initFaqAccordion`) attached to `DOMContentLoaded`.  
> - Zero node_modules, zero external runtime dependencies."*

---

## 2. Answers to Temirlan's Standard Questions

### Q1: "Why did you choose this niche / what is unique vs a classmate?"
> **Answer:**  
> *"My assigned seed index is 18 (mod 24 = 66 mod 24), which corresponds to #23 Chess Club with ladder board.  
> To make it genuinely unique and campus-flavored rather than a generic chess website, I built it as the **Satbayev University Chess Ladder**. It incorporates real club details: room GUK 302, local student names, divisions, and realistic FIDE touch-move challenge bylaws."*

---

### Q2: "Where is your seed used in CSS? Change the primary button color live."
> **Answer:**  
> *"Our seed colors are defined at the very top of `css/styles.css` on lines 7–19 in `:root`:  
> `--primary: hsl(var(--seed-hue), 65%, 40%)` where `--seed-hue: 43`.  
> `--accent: hsl(var(--seed-accent), 70%, 45%)` where `--seed-accent: 94`.  
> To change the primary button color live:  
> In DevTools or VS Code, I can simply change `--seed-hue: 43` to e.g. `200` (blue) or change `--primary` directly, and all headers, active buttons, borders, and badges across the entire site instantly update because they reference `var(--primary)`."*

---

### Q3: "Explain one JS function: what parameters, what DOM nodes does it touch?"
> **Answer (Pick `initLadderFilters` or `calculateElo`):**  
> *"Let's look at `initLadderFilters()`:  
> - It selects the search input via `document.getElementById('player-search')` and all cards via `document.querySelectorAll('.ladder-card')`.  
> - When a user types, the `input` event triggers `applyFilters()`.  
> - Inside `applyFilters()`, we loop through each card using `forEach`. For each card, we inspect `card.dataset.division` and compare `card.textContent.toLowerCase()` against the search string using `.includes()`.  
> - If both conditions match, we set `card.style.display = 'flex'`; otherwise `card.style.display = 'none'`."*

---

### Q4: "How does your form validation work? Break it on purpose and fix it live."
> **Answer:**  
> *"Inside `initChallengeQueue()`, we attach an event listener to the form's `submit` event.  
> - We call `e.preventDefault()` to stop browser page reloading.  
> - We maintain a boolean `let isValid = true`.  
> - For each input (name, email, division, opponent, date, rules agreement), we validate the value. For example, for email we test against the regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.  
> - If invalid, we write error text into `<small class="field-error">` and set `isValid = false`.  
> - If `isValid` is false, we show the red `#form-feedback` box and halt.  
> **To break it on purpose:** I can change `nameVal.length < 3` to `< 50` so any normal name fails, or remove `e.preventDefault()` so the page reloads. To fix it, I restore the condition."*

---

### Q5: "Which semantic tags did you use and why not only div?"
> **Answer:**  
> *"We strictly avoided 'div-soup' by using semantic HTML5 landmark tags:  
> - `<header>` and `<nav>` for the primary site bar and menus.  
> - `<main>` for the unique primary content of each page (critical for screen readers and search engines).  
> - `<section>` for thematic groupings (Bylaws, FAQ, Calculator, Roster).  
> - `<article>` for self-contained, independent items (each player card and rule card).  
> - `<figure>` and `<figcaption>` for the campus photo gallery.  
> - `<footer>` for the site metadata and mandatory anti-copy watermark.  
> Semantic tags provide accessibility for screen readers and keyboard navigation without relying on custom ARIA roles."*

---

### Q6: "Why did you choose CSS Grid for cards and Flexbox for navigation?"
> **Answer:**  
> *"CSS Grid is a **two-dimensional** layout system — it controls both columns and rows simultaneously. For player cards and rules, `grid-template-columns: repeat(3, 1fr)` ensures all cards have uniform widths and automatic gutter spacing via `gap: 1.5rem`.  
> Flexbox is a **one-dimensional** layout system — it aligns items along a single axis (either row or column). For the navigation bar, `display: flex; justify-content: space-between; align-items: center;` is ideal for distributing the logo on the left and navigation links with the theme button on the right."*

---

### Q7: "What would you add next week if this were a real client site?"
> **Answer:**  
> *"If this were deploying to production next week:  
> 1. Connect a real backend (Node.js/PostgreSQL) with user authentication so students log in with their university ID to challenge peers.  
> 2. Webhook integration with the Lichess API to automatically import PGNs and update ladder rungs automatically upon game completion.  
> 3. Push notifications or Telegram Bot integration to notify defenders when a 48-hour challenge clock begins."*

---

## 3. Quick Checklist Before Calling Temirlan
- [x] Website running locally in Chrome / Live Server.
- [x] VS Code open to `cse6624-exam-khamzin`.
- [x] README.md open in a tab or split pane.
- [x] DevTools open (`Cmd+Opt+I`) ready to demonstrate mobile width (~375px).
- [x] Remember your seed: **Hue 43, Accent 94, Niche 23, Watermark ready**.
