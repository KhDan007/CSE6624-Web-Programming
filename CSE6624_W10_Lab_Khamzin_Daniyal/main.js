// js/main.js for Week 10 Lab

// Reusable 3-number average calculation function
function average3(a, b, c) {
  return (a + b + c) / 3;
}

// -------------------------------------------------------------
// Tool 1: Tip Calculator Wiring
// -------------------------------------------------------------
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const tipBtn = document.getElementById("tip-btn");
const tipResult = document.getElementById("tip-result");

tipBtn.addEventListener("click", function () {
  const billVal = billInput.value.trim();
  const tipVal = tipInput.value.trim();

  // Guard against empty / invalid input with a user-visible message
  if (billVal === "" || tipVal === "") {
    tipResult.className = "result-box error";
    tipResult.textContent = "Please fill in both the bill amount and tip percentage.";
    return;
  }

  const bill = Number(billVal);
  const tipPct = Number(tipVal);

  if (Number.isNaN(bill) || Number.isNaN(tipPct) || bill < 0 || tipPct < 0) {
    tipResult.className = "result-box error";
    tipResult.textContent = "Please enter non-negative numeric values.";
    return;
  }

  const tipAmount = bill * (tipPct / 100);
  const total = bill + tipAmount;

  tipResult.className = "result-box active";
  tipResult.textContent = "Calculated Tip: " + tipAmount.toFixed(2) + " KZT | Total Bill: " + total.toFixed(2) + " KZT";
});

// -------------------------------------------------------------
// Tool 2: Grade Average Wiring
// -------------------------------------------------------------
const g1Input = document.getElementById("g1");
const g2Input = document.getElementById("g2");
const g3Input = document.getElementById("g3");
const gradeBtn = document.getElementById("grade-btn");
const gradeResult = document.getElementById("grade-result");

gradeBtn.addEventListener("click", function () {
  const g1Val = g1Input.value.trim();
  const g2Val = g2Input.value.trim();
  const g3Val = g3Input.value.trim();

  // Guard against empty input
  if (g1Val === "" || g2Val === "" || g3Val === "") {
    gradeResult.className = "result-box error";
    gradeResult.textContent = "Please provide all three grades before calculating.";
    return;
  }

  const g1 = Number(g1Val);
  const g2 = Number(g2Val);
  const g3 = Number(g3Val);

  // Validate numbers between 0 and 100
  if (Number.isNaN(g1) || Number.isNaN(g2) || Number.isNaN(g3) || g1 < 0 || g2 < 0 || g3 < 0 || g1 > 100 || g2 > 100 || g3 > 100) {
    gradeResult.className = "result-box error";
    gradeResult.textContent = "Each grade must be a number between 0 and 100.";
    return;
  }

  const avg = average3(g1, g2, g3);

  gradeResult.className = "result-box active";
  gradeResult.textContent = "Three-Grade Average: " + avg.toFixed(2) + " / 100";
});
