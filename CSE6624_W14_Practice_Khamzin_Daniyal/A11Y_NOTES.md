# A11Y_NOTES.md — Accessibility Audit Checks

**Student:** Khamzin Daniyal  
**Course:** CSE6624 - Introduction to Web Programming  
**Assignment:** PRACTICE 14 — Accessibility quick wins  

---

## 5 Accessibility Checks Performed

1. **Meaningful Image Alt Text:**
   - Evaluated `<img>` element to ensure it avoids generic placeholders (like `alt="image"`). Replaced with a concrete description: `"Satbayev varsity volleyball players in defensive stance ready for live serve receive"`.

2. **Explicit Label and Input Pairing:**
   - Verified that every single input control (`#athlete-name`, `#athlete-email`, `#athlete-position`, `#athlete-notes`) has an explicit `<label for="...">` matching its ID. Screen readers announce the exact field purpose, and clicking the label automatically focuses the input.

3. **Strict Heading Hierarchy:**
   - Enforced a single `<h1>` tag in the `<header>` for the main document context. All subsequent sections descend sequentially to `<h2>` without erratic level skips (e.g., no jumping from `<h1>` to `<h4>`).

4. **High-Contrast Text and Backgrounds:**
   - Verified that all text elements use dark slate (`#1a202c`, `#2d3748`) on crisp white and light-gray backgrounds (`#ffffff`, `#f7fafc`), well exceeding the WCAG 2.1 AA minimum contrast ratio of 4.5:1.

5. **Prominent `:focus-visible` Keyboard Navigation Indicators:**
   - Added high-visibility orange focus rings (`outline: 3px solid #dd6b20; outline-offset: 2px;`) across all interactive elements (`input`, `select`, `textarea`, `button`). Verified by pressing <kbd>Tab</kbd> to cycle through all controls without a mouse.
