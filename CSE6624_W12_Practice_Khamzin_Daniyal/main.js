// main.js for Week 12 Practice

// 1. Counter functionality
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");

incBtn.addEventListener("click", function () {
  countEl.textContent = String(Number(countEl.textContent) + 1);
});

// 2. Note adder form functionality with preventDefault
const form = document.getElementById("form");
const item = document.getElementById("item");
const list = document.getElementById("list");
const clearAllBtn = document.getElementById("clear-all");

form.addEventListener("submit", function (e) {
  // Prevent native full page reload
  e.preventDefault();

  const text = item.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "del-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  item.value = "";
  item.focus();
});

// 3. Clear-all functionality
clearAllBtn.addEventListener("click", function () {
  list.innerHTML = "";
});
