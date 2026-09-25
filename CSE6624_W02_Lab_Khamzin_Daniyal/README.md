# CSE6624 Week 02 Lab — Two-page semantic mini-site

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** LAB 02 — Two-page semantic mini-site  
**Topic:** Satbayev Varsity Volleyball & Middle Blocker Tactics  

---

## File Structure

- [`index.html`](file:///Users/dan/Documents/Lectures/Web/CSE6624_W02_Lab_Khamzin_Daniyal/index.html): Home page introducing the Satbayev Varsity Volleyball program.
- [`about.html`](file:///Users/dan/Documents/Lectures/Web/CSE6624_W02_Lab_Khamzin_Daniyal/about.html): About & Tactics page breaking down the middle blocker role, footwork, and training regimen.
- [`README.md`](file:///Users/dan/Documents/Lectures/Web/CSE6624_W02_Lab_Khamzin_Daniyal/README.md): Project overview, files list, and instructions.

---

## How to Run

1. Open the project folder `CSE6624_W02_Lab_Khamzin_Daniyal` in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"** (or click **Go Live**).
3. Live Server will open the local URL (e.g. `http://127.0.0.1:5500/index.html`).
4. Click **"About & Tactics"** to navigate to `about.html`, and click **"Home"** to return.

---

## Deliverables & Technical Compliance

- **Semantic HTML5 Landmarks:** Both pages use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>`.
- **Shared Navigation:** Both pages share a consistent `<nav aria-label="Primary">` with relative links.
- **Two-way Relative Navigation:**
  - `index.html` links to `about.html` via `<a href="about.html">About & Tactics</a>`.
  - `about.html` links to `index.html` via `<a href="index.html">Home</a>`.
  - Strictly relative URLs (no `file:///` hardcoded paths).
- **Unique Metadata & Headings:**
  - `index.html`: `<title>Satbayev Varsity Volleyball — Home</title>` with `<h1>Satbayev Varsity Volleyball Program</h1>`.
  - `about.html`: `<title>Satbayev Varsity Volleyball — About & Middle Blocker Tactics</title>` with `<h1>About Our Program & Tactics</h1>`.

---

## What a Relative Path Means (Defence Criteria)

A **relative path** specifies the location of a file or resource relative to the directory of the current document, rather than starting from the root of the file system or a full domain. For instance, `about.html` tells the browser to look in the same folder where the current HTML file is hosted.

---

## AI Disclosure

- **AI used for:** Scaffolding the multi-page structure and formatting markdown.
- **I rewrote/verified:** All HTML landmarks, shared nav consistency, relative link targets, and volleyball middle blocker technical descriptions.
