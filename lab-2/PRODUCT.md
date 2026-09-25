# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (single `index.html`, `styles.css`, `script.js`, `assets/`), required by the assignment brief, which is graded on hand-written semantic HTML5 with optional styling; no framework or build step.

## Users

The primary "user" is the course instructor grading the submission against the slide-25 lab checklist, and secondarily the student (Daniyal Khamzin) reusing the page as a real personal-portfolio landing page and demo of HTML5 fundamentals (structure, links, images, lists, tables, forms).

## Product Purpose

A single graded lab deliverable, `index.html`, that satisfies three assignment requirements on one landing page: (1) a personal portfolio section with full semantic structure, heading hierarchy, internal/external links, and two images (meaningful + decorative alt), (2) a data table of 5 programming languages with correct table semantics, and (3) an accessible contact form with required/pattern validation, while reading as a genuinely polished, presentable personal site rather than a bare classroom exercise.

## Positioning

Not a generic "Bootstrap card grid" student demo. A portfolio built around Daniyal's real identity (AI Engineer) that treats the assignment's required elements (nav links, image pair, table, form) as native parts of one coherent visual world instead of stapled-together sections.

## Operating Context

Graded by opening `index.html` directly in a browser and by inspecting the DOM/Network tab in DevTools (per the lecture's own live-demo instructions), so real semantic tags, working relative anchors, and real request payload on form submit all matter, not just visual appearance.

## Capabilities and Constraints

- Must be viewable by double-clicking `index.html` with no server or build step.
- Nav needs exactly 4 internal (same-page, relative/hash) links + 1 external link with `target="_blank"` + `rel="noopener"`.
- Exactly two `<img>`s: one with descriptive alt text, one purely decorative with `alt=""`.
- Table: 5 programming languages, columns Name/Year/Paradigm/Creator, using `caption`, `thead`, `tbody`, `th scope="col"`, `th scope="row"`.
- Form fields: name (text), email, subject (select), message (textarea), agree-to-terms (checkbox), submit button, plus a phone field with `pattern="[0-9]{10}"`. Every input has a linked `<label>`. Required fields marked `required`.
- Contact/social links: LinkedIn `https://www.linkedin.com/in/dansdailydare/`, GitHub `https://github.com/KhDan007`, contact email inferred from the account's own address (`kh.dan007@gmail.com`, consistent with the GitHub handle). Flagged to the user as an inference, swappable later.

## Brand Commitments

- Name/title: **Daniyal Khamzin, AI Engineer** (confirmed by the user).
- Bio, skill list, and project copy are Claude-authored placeholder content (user opted to have it drafted): realistic, not fabricated credentials/employers/testimonials, and clearly personal-site-appropriate; the user should swap in real project details before treating this as a live résumé site.

## Evidence on Hand

No existing screenshots, résumé, or project descriptions were supplied. All portfolio project entries, the bio paragraph, and skill list are authored placeholder content standing in for the user's real work. Labeled here so future edits know to replace them with real projects rather than preserve them as fact.

## Product Principles

1. The three graded requirements (portfolio, table, form) must read as one cohesive site, not three visually disconnected demo blocks.
2. Every element the lecture calls out by name (semantic landmarks, heading hierarchy, link types, alt-text pair, table scope, labeled inputs, pattern validation) must be mechanically present and correct, since grading inspects the markup itself.
3. Real, working relative anchors and a real (client-side, no backend) form submission path so the DevTools Network-tab check the lecture assigns actually has something to show.
4. Distinct visual identity over generic template look: earn "fabulous," not just "correct."

## Accessibility & Inclusion

No user-specific accessibility requirement was stated; hold the general standard the lecture itself teaches: real alt text, label-linked inputs, `scope`-correct tables, `rel="noopener"` on new-tab links, and visible focus states.
