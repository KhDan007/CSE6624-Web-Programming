// js/main.js for Week 10 Practice

// Console shows at least two console.log lines on load
console.log("W10 practice loaded - Satbayev Athletics Cafe Calculator");
console.log("typeof 42 =>", typeof 42);

// Element references
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const out = document.getElementById("out");
const btn = document.getElementById("btn");

// Calculate on click
btn.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const tipPct = Number(tipEl.value);

  // Guard against empty / NaN input
  if (Number.isNaN(bill) || Number.isNaN(tipPct) || bill < 0 || tipPct < 0) {
    out.textContent = "Please enter valid numbers.";
    return;
  }

  const tipAmount = bill * (tipPct / 100);
  const total = bill + tipAmount;

  out.textContent = "Tip: " + tipAmount.toFixed(2) + " KZT\nTotal: " + total.toFixed(2) + " KZT";
});
