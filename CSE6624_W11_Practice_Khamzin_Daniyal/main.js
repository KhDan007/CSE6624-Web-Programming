// js/main.js for Week 11 Practice

// Array of objects with >= 3 objects
const clubs = [
  { name: "Robotics Club", room: "GUK201" },
  { name: "Debate Society", room: "GUK105" },
  { name: "Varsity Volleyball Team", room: "GUK-Arena" },
  { name: "Web Dev Guild", room: "GUK714" }
];

const list = document.getElementById("list");
const renderBtn = document.getElementById("render-btn");

// Function that builds <li> elements using createElement and textContent
function renderClubs(items) {
  list.innerHTML = "";
  for (const club of items) {
    const li = document.createElement("li");
    li.textContent = club.name + " — Room " + club.room;
    list.appendChild(li);
  }
}

// On-load initial render
renderClubs(clubs);

// Demonstrate console.table once per rubric
console.table(clubs);

// Button re-render listener
renderBtn.addEventListener("click", function () {
  renderClubs(clubs);
});
