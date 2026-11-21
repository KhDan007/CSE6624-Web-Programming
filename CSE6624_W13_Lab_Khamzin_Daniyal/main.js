// main.js for Week 13 Lab — fetch local JSON + render cards (+ optional save)

const root = document.getElementById("list");
const favStatus = document.getElementById("fav-status");
const FAVORITE_KEY = "cse6624-w13-fav-facility";

function updateFavBadge(title) {
  if (title) {
    favStatus.textContent = "Favorite: " + title;
  } else {
    favStatus.textContent = "No favorite saved yet";
  }
}

async function load() {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const items = await res.json();

    const savedFavId = localStorage.getItem(FAVORITE_KEY);
    root.innerHTML = "";

    let currentFavTitle = null;

    for (const item of items) {
      const li = document.createElement("li");
      li.className = "facility-card";
      if (String(item.id) === savedFavId) {
        li.classList.add("is-favorite");
        currentFavTitle = item.title;
      }

      const headDiv = document.createElement("div");
      headDiv.className = "card-head";

      const titleEl = document.createElement("span");
      titleEl.className = "facility-title";
      titleEl.textContent = item.title;
      headDiv.appendChild(titleEl);

      const p = document.createElement("p");
      p.className = "card-blurb";
      p.textContent = item.blurb;

      const favBtn = document.createElement("button");
      favBtn.type = "button";
      favBtn.className = "btn-fav";
      favBtn.textContent = String(item.id) === savedFavId ? "★ Favorited" : "☆ Save Favorite";

      favBtn.addEventListener("click", function () {
        if (localStorage.getItem(FAVORITE_KEY) === String(item.id)) {
          localStorage.removeItem(FAVORITE_KEY);
          updateFavBadge(null);
        } else {
          localStorage.setItem(FAVORITE_KEY, String(item.id));
          updateFavBadge(item.title);
        }
        load();
      });

      li.appendChild(headDiv);
      li.appendChild(p);
      li.appendChild(favBtn);
      root.appendChild(li);
    }

    updateFavBadge(currentFavTitle);
  } catch (err) {
    root.innerHTML = "";
    const errorLi = document.createElement("li");
    errorLi.className = "error-state";
    errorLi.textContent = "Could not load data.json — use Live Server (fetch requires http:// origin). " + err.message;
    root.appendChild(errorLi);
    console.error("Fetch error:", err);
  }
}

// Initial fetch invocation
load();
