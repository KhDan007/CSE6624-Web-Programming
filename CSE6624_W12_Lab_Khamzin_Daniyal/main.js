// main.js for Week 12 Lab — Todo-lite with DOM only

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");

// Helper to update empty state visibility
function updateEmptyState() {
  if (todoList.children.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

// Function to add a new task item
function addTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "del-btn";
  delBtn.textContent = "Delete";

  // li click toggles .done class
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // delBtn click uses stopPropagation so delete doesn't trigger li click
  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    updateEmptyState();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  updateEmptyState();
}

// Form submit event
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  addTask(text);
  todoInput.value = "";
  todoInput.focus();
});

// Seed starter tasks
addTask("Review setter eye-tracking video");
addTask("50 lateral 3-step swing block reps");
addTask("Vertical jump reach baseline measurement");
