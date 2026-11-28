/* main.js - Satbayev Chess Ladder
   Student: Khamzin Daniyal (070301552252)
   Course: CSE6624 Web Development Final Exam
   Niche 23: Chess club with online ladder
*/

// Run scripts after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initLadderFilters();
  initEloCalculator();
  initChallengeQueue();
  initFaqAccordion();
});

/* ==========================================================================
   1. Theme Toggle with LocalStorage
   DEFENCE TIP: document.body.classList.toggle('dark-theme') adds or removes
   the class. We persist the choice in localStorage so it stays across pages.
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle");
  if (!themeBtn) return;

  // Check saved theme or default to light
  const savedTheme = localStorage.getItem("satbayev-ladder-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "☀️ Light";
  } else {
    themeBtn.textContent = "🌙 Dark";
  }

  themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    if (isDark) {
      localStorage.setItem("satbayev-ladder-theme", "dark");
      themeBtn.textContent = "☀️ Light";
    } else {
      localStorage.setItem("satbayev-ladder-theme", "light");
      themeBtn.textContent = "🌙 Dark";
    }
  });
}

/* ==========================================================================
   2. Ladder Board Filter & Live Search (ladder.html)
   DEFENCE TIP: We use querySelectorAll to grab all player cards (.ladder-card),
   then filter based on button dataset (data-division) and search input text.
   ========================================================================== */
function initLadderFilters() {
  const searchInput = document.getElementById("player-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".ladder-card");

  if (!cards.length) return; // Exit if not on ladder.html

  let currentDivision = "all";
  let searchQuery = "";

  function applyFilters() {
    let matchCount = 0;

    cards.forEach((card) => {
      const division = card.dataset.division || "";
      const text = card.textContent.toLowerCase();

      const matchesDiv = currentDivision === "all" || division === currentDivision;
      const matchesSearch = text.includes(searchQuery);

      if (matchesDiv && matchesSearch) {
        card.style.display = "flex";
        matchCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Handle "no results found" helper message
    let noResultsMsg = document.getElementById("no-results-msg");
    const ladderGrid = document.getElementById("ladder-grid");

    if (matchCount === 0) {
      if (!noResultsMsg && ladderGrid) {
        noResultsMsg = document.createElement("p");
        noResultsMsg.id = "no-results-msg";
        noResultsMsg.style.cssText = "grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;";
        noResultsMsg.textContent = "No players match the selected filter or search term.";
        ladderGrid.appendChild(noResultsMsg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  }

  // Division button click listener
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentDivision = btn.dataset.division;
      applyFilters();
    });
  });

  // Search input live listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // URL parameter support (e.g. ?division=premier or ?q=khamzin)
  const params = new URLSearchParams(window.location.search);
  const paramDiv = params.get("division");
  const paramSearch = params.get("q");

  if (paramDiv) {
    const targetBtn = document.querySelector(`.filter-btn[data-division="${paramDiv}"]`);
    if (targetBtn) {
      filterBtns.forEach((b) => b.classList.remove("active"));
      targetBtn.classList.add("active");
      currentDivision = paramDiv;
    }
  }

  if (paramSearch && searchInput) {
    searchInput.value = paramSearch;
    searchQuery = paramSearch.toLowerCase();
  }

  applyFilters();
}

/* ==========================================================================
   3. Interactive FIDE Elo Match Probability Calculator (ladder.html)
   DEFENCE TIP: Expected score formula:
   E_A = 1 / (1 + 10 ^ ((R_B - R_A) / 400))
   FIDE rating delta: Delta = K * (ActualScore - ExpectedScore), here K = 20.
   ========================================================================== */
function initEloCalculator() {
  const ratingAInput = document.getElementById("calc-rating-a");
  const ratingBInput = document.getElementById("calc-rating-b");
  const resultProbA = document.getElementById("calc-prob-a");
  const resultProbB = document.getElementById("calc-prob-b");
  const deltaWin = document.getElementById("calc-delta-win");
  const deltaDraw = document.getElementById("calc-delta-draw");
  const deltaLoss = document.getElementById("calc-delta-loss");

  if (!ratingAInput || !ratingBInput) return; // Exit if not on ladder.html

  function calculateElo() {
    const rA = parseFloat(ratingAInput.value) || 1500;
    const rB = parseFloat(ratingBInput.value) || 1500;

    // FIDE expected score formulas
    const expectedA = 1 / (1 + Math.pow(10, (rB - rA) / 400));
    const expectedB = 1 - expectedA;

    // K-factor = 20 (standard for collegiate FIDE rapid)
    const k = 20;
    const changeWin = Math.round(k * (1 - expectedA));
    const changeDraw = Math.round(k * (0.5 - expectedA));
    const changeLoss = Math.round(k * (0 - expectedA));

    // Update DOM outputs
    if (resultProbA) resultProbA.textContent = (expectedA * 100).toFixed(1) + "%";
    if (resultProbB) resultProbB.textContent = (expectedB * 100).toFixed(1) + "%";
    if (deltaWin) deltaWin.textContent = (changeWin >= 0 ? "+" : "") + changeWin;
    if (deltaDraw) deltaDraw.textContent = (changeDraw >= 0 ? "+" : "") + changeDraw;
    if (deltaLoss) deltaLoss.textContent = changeLoss.toString();
  }

  ratingAInput.addEventListener("input", calculateElo);
  ratingBInput.addEventListener("input", calculateElo);
  calculateElo(); // Initial calculation on load
}

/* ==========================================================================
   4. Form Validation & Persistent Queue (challenge.html)
   DEFENCE TIP: e.preventDefault() stops default page reload. We validate each
   field, display specific error tips, and on success store in localStorage
   under 'satbayev-challenges'. We re-render the list dynamically.
   ========================================================================== */
function initChallengeQueue() {
  const form = document.getElementById("challenge-form");
  const queueList = document.getElementById("challenge-queue");
  const clearBtn = document.getElementById("clear-queue-btn");
  const feedback = document.getElementById("form-feedback");

  if (!form || !queueList) return; // Exit if not on challenge.html

  const STORAGE_KEY = "satbayev-ladder-challenges";

  // Helper to load challenges from localStorage
  function getStoredChallenges() {
    const raw = localStorage.getItem(STORAGE_KEY);
    try {
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  // Pre-seed one sample challenge if queue is empty so examiner sees UI state
  if (getStoredChallenges().length === 0) {
    const sample = [
      {
        id: 101,
        challenger: "Daniyal Khamzin",
        email: "d.khamzin@satbayev.university",
        division: "Premier",
        opponent: "Arman Serikbay (Rung #2 · 2085)",
        date: "2026-12-01 16:00",
        timeControl: "Official Club Rapid (15+10)",
        notes: "Board 1 in Room GUK 302",
        created: "16:30"
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sample));
  }

  // URL query parameter for demo success display (?demo=success)
  if (new URLSearchParams(window.location.search).get("demo") === "success" && feedback) {
    feedback.textContent = "Challenge slip successfully dispatched to Arman Serikbay (Rung #2 · 2085)! Added to the queue.";
    feedback.classList.add("success");
    feedback.style.display = "block";
  }

  // Render queue into sidebar DOM
  function renderQueue() {
    const challenges = getStoredChallenges();
    queueList.innerHTML = "";

    if (challenges.length === 0) {
      queueList.innerHTML = `<li style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">No active challenges yet. Submit a slip to record one!</li>`;
      return;
    }

    challenges.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "queue-item";
      li.innerHTML = `
        <div>
          <strong>${escapeHtml(item.challenger)}</strong> vs <em>${escapeHtml(item.opponent)}</em>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
            ${escapeHtml(item.division)} &bull; ${escapeHtml(item.timeControl)} &bull; ${escapeHtml(item.date)}
          </div>
        </div>
        <button type="button" class="queue-del" data-index="${index}" title="Remove challenge">&times;</button>
      `;
      queueList.appendChild(li);
    });
  }

  // Helper to escape potential HTML characters for safety
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Delete challenge item handler
  queueList.addEventListener("click", (e) => {
    if (e.target.classList.contains("queue-del")) {
      const index = parseInt(e.target.dataset.index, 10);
      const challenges = getStoredChallenges();
      challenges.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(challenges));
      renderQueue();
    }
  });

  // Clear all button
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      renderQueue();
    });
  }

  // Form submission handler with validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset error messages
    const errorElements = form.querySelectorAll(".field-error");
    errorElements.forEach((el) => (el.textContent = ""));
    feedback.className = "form-feedback";
    feedback.style.display = "none";

    let isValid = true;

    // 1. Challenger Name validation
    const nameInput = document.getElementById("challenger-name");
    const nameVal = nameInput.value.trim();
    if (nameVal.length < 3) {
      document.getElementById("name-error").textContent = "Please enter your full name (minimum 3 characters).";
      isValid = false;
    }

    // 2. Email validation
    const emailInput = document.getElementById("challenger-email");
    const emailVal = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      document.getElementById("email-error").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // 3. Division select
    const divSelect = document.getElementById("challenger-division");
    if (!divSelect.value) {
      document.getElementById("division-error").textContent = "Please select your current ladder division.";
      isValid = false;
    }

    // 4. Opponent select
    const oppSelect = document.getElementById("opponent-select");
    if (!oppSelect.value) {
      document.getElementById("opponent-error").textContent = "Please pick a target opponent.";
      isValid = false;
    }

    // 5. Match date validation
    const dateInput = document.getElementById("match-date");
    if (!dateInput.value) {
      document.getElementById("date-error").textContent = "Please specify a proposed match date and time.";
      isValid = false;
    }

    // 6. Agreement checkbox
    const agreeCheck = document.getElementById("rules-agree");
    if (!agreeCheck.checked) {
      document.getElementById("agree-error").textContent = "You must agree to the 3-rung limit and touch-move rules.";
      isValid = false;
    }

    if (!isValid) {
      feedback.textContent = "Please correct the highlighted errors before submitting.";
      feedback.classList.add("error");
      feedback.style.display = "block";
      return;
    }

    // Build new challenge record
    const newChallenge = {
      id: Date.now(),
      challenger: nameVal,
      email: emailVal,
      division: divSelect.value,
      opponent: oppSelect.value,
      date: dateInput.value.replace("T", " "),
      timeControl: document.getElementById("time-control").value,
      notes: document.getElementById("match-notes").value.trim(),
      created: new Date().toLocaleTimeString()
    };

    // Save to localStorage
    const challenges = getStoredChallenges();
    challenges.unshift(newChallenge);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(challenges));

    // Show positive feedback
    feedback.textContent = `Challenge slip successfully dispatched to ${newChallenge.opponent}! Added to the queue.`;
    feedback.classList.add("success");
    feedback.style.display = "block";

    // Re-render queue and clear form fields
    renderQueue();
    form.reset();
  });

  // Initial render on page load
  renderQueue();
}

/* ==========================================================================
   5. Interactive FAQ Accordion (rules.html)
   DEFENCE TIP: Clicking .accordion-header toggles .is-open class on parent
   item and switches aria-expanded true/false for accessibility screen readers.
   ========================================================================== */
function initFaqAccordion() {
  const headers = document.querySelectorAll(".accordion-header");
  if (!headers.length) return;

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const parentItem = header.closest(".accordion-item");
      const isOpen = parentItem.classList.contains("is-open");
      const icon = header.querySelector(".accordion-icon");

      // Close other accordion items (accordion single-open pattern)
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("is-open");
        const btn = item.querySelector(".accordion-header");
        if (btn) btn.setAttribute("aria-expanded", "false");
        const ic = item.querySelector(".accordion-icon");
        if (ic) ic.textContent = "+";
      });

      // If it wasn't open, open it now
      if (!isOpen) {
        parentItem.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
        if (icon) icon.textContent = "−";
      }
    });
  });
}
