/* Daniyal Khamzin — portfolio console
   Small, focused behaviors only: mobile nav toggle, footer year,
   and one consistent reveal-on-scroll moment (skipped for users who
   asked for reduced motion). No framework, no dependencies. */

(() => {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("primary-nav");
  const iconMenu = document.querySelector(".icon-menu");
  const iconClose = document.querySelector(".icon-close");

  const setNavOpen = (open) => {
    if (!navLinks || !toggle) return;
    navLinks.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    if (iconMenu) iconMenu.hidden = open;
    if (iconClose) iconClose.hidden = !open;
  };

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      setNavOpen(navLinks.dataset.open !== "true");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinks.dataset.open === "true") {
        setNavOpen(false);
        toggle.focus();
      }
    });

    const mq = window.matchMedia("(min-width: 721px)");
    mq.addEventListener("change", (event) => {
      if (event.matches) setNavOpen(false);
    });
  }

  /* ---------- Reveal on scroll (one grammar, everywhere) ---------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".section-head, .about-grid, .project-card, .table-scroll, .contact-layout"
    );

    revealTargets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }

  /* ---------- Contact form: friendly inline confirmation ---------- */
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", () => {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.style.opacity = "0.7";
      }
      // Native submission proceeds to thank-you.html so the request
      // (and its payload) is visible in DevTools → Network, per the lab.
    });
  }
})();
