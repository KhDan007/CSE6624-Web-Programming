// main.js for Week 13 Practice

const KEY = "cse6624-w13-note";
const input = document.getElementById("input");
const out = document.getElementById("out");

function show() {
  out.textContent = localStorage.getItem(KEY) || "(empty)";
}

// Initial load check
show();

document.getElementById("save").addEventListener("click", function () {
  const text = input.value.trim();
  if (text) {
    localStorage.setItem(KEY, text);
    show();
    input.value = "";
  }
});

document.getElementById("clear").addEventListener("click", function () {
  localStorage.removeItem(KEY);
  show();
});
