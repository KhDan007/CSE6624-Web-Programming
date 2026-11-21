// js/main.js for Week 11 Lab

// Array of >= 5 club objects (6 objects representing campus clubs)
const clubs = [
  { name: "Varsity Volleyball Team", room: "GUK-Arena", category: "Athletics" },
  { name: "Satbayev Chess Club", room: "GUK302", category: "Board Games" },
  { name: "Robotics and Automation Society", room: "GUK201", category: "Engineering" },
  { name: "Debate & Public Speaking Society", room: "GUK105", category: "Humanities" },
  { name: "Web Developers Guild", room: "GUK714", category: "Technology" },
  { name: "Cybersecurity & CTF Team", room: "GUK412", category: "Technology" }
];

// DOM references
const listEl = document.getElementById("list");
const qEl = document.getElementById("q");
const countEl = document.getElementById("count");

// Renders an array of club items into the DOM
function renderClubs(items) {
  listEl.innerHTML = "";

  if (items.length === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty-message";
    emptyLi.textContent = "No clubs match your filter query.";
    listEl.appendChild(emptyLi);
    countEl.textContent = "Showing 0 organizations";
    return;
  }

  for (const club of items) {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "club-name";
    nameSpan.textContent = club.name;

    const roomSpan = document.createElement("span");
    roomSpan.className = "club-room";
    roomSpan.textContent = "Room " + club.room;

    li.appendChild(nameSpan);
    li.appendChild(roomSpan);
    listEl.appendChild(li);
  }

  countEl.textContent = "Showing " + items.length + " of " + clubs.length + " organizations";
}

// Initial render showing all items
renderClubs(clubs);

// Live filtering on 'input' event (case-insensitive)
qEl.addEventListener("input", function () {
  const q = qEl.value.trim().toLowerCase();

  const filtered = clubs.filter(function (club) {
    return club.name.toLowerCase().includes(q) || club.room.toLowerCase().includes(q);
  });

  renderClubs(filtered);
});
