// js/main.js for Attestation 1 & TSIS-4 progress

// 1. Mobile Navigation Toggle (DOM feature)
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when clicking a link
  const navLinks = mainNav.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 2. Ladder Challenge Form Submission Handling
const ladderForm = document.getElementById("ladder-form");
const formFeedback = document.getElementById("form-feedback");

if (ladderForm && formFeedback) {
  ladderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("challenger-name").value.trim();
    const email = document.getElementById("challenger-email").value.trim();
    const tier = document.getElementById("ladder-tier").value;
    const elo = document.getElementById("current-elo").value;

    if (!name || !email) {
      formFeedback.style.display = "block";
      formFeedback.className = "form-feedback";
      formFeedback.style.backgroundColor = "#fff5f5";
      formFeedback.style.color = "#c53030";
      formFeedback.textContent = "Please provide both challenger name and university email.";
      return;
    }

    formFeedback.style.display = "block";
    formFeedback.className = "form-feedback success";
    formFeedback.textContent = "Challenge logged! Player " + name + " (Elo: " + elo + ") entered into the " + tier + " queue. Confirmation dispatched to " + email + ".";

    ladderForm.reset();
  });
}

console.log("Satbayev Chess Ladder scripts initialized. Watermark: CSE6624 | Khamzin Daniyal | 070301552252 | niche-23");
