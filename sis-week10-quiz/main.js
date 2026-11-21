// main.js for SIS-3 Interactive Chess Niche Quiz

// 5 Niche-specific questions about chess rules, online ladder, and rating mechanics
const questions = [
  {
    question: "In the Satbayev Chess Club online ladder, how many rungs above your current rank can you challenge?",
    options: [
      "Exactly 1 rung",
      "Up to 3 rungs",
      "Any player in the club without restriction",
      "Only unrated players"
    ],
    answer: 1
  },
  {
    question: "What is the standard time control for the Satbayev Blitz Arena ladder matches?",
    options: [
      "1 minute bullet with no increment",
      "3 minutes + 2 seconds increment",
      "15 minutes + 10 seconds rapid",
      "60 minutes classical"
    ],
    answer: 1
  },
  {
    question: "Which piece movement rule is uniquely capable of jumping over other pieces during opening development?",
    options: [
      "The Bishop along diagonal paths",
      "The Rook along straight ranks and files",
      "The Knight via an L-shaped leap",
      "The King during pawn promotion"
    ],
    answer: 2
  },
  {
    question: "If a player receives an official ladder challenge and fails to schedule or contest within 48 hours, what occurs?",
    options: [
      "The match is permanently cancelled with zero consequence",
      "The challenged player forfeits points and trades rungs with the challenger",
      "The club arbiter bans both accounts",
      "The board rank freezes for the rest of the semester"
    ],
    answer: 1
  },
  {
    question: "What rating system is used to compute live ranking changes after each verified collegiate ladder match?",
    options: [
      "Elo Rating System",
      "Goal Difference Metric",
      "Round-Robin Bracket System",
      "Single-Elimination Score"
    ],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;

// DOM references
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionTracker = document.getElementById("question-tracker");
const scoreTracker = document.getElementById("score-tracker");
const nextBtn = document.getElementById("next-btn");
const quizBody = document.getElementById("quiz-body");
const resultsScreen = document.getElementById("results-screen");
const finalScoreText = document.getElementById("final-score-text");
const feedbackText = document.getElementById("feedback-text");
const resetBtn = document.getElementById("reset-btn");

function loadQuestion(index) {
  const currentQ = questions[index];
  questionTracker.textContent = "Question " + (index + 1) + " of " + questions.length;
  questionText.textContent = currentQ.question;
  optionsContainer.innerHTML = "";
  nextBtn.style.display = "none";

  currentQ.options.forEach(function (optionText, optIndex) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.textContent = optionText;

    btn.addEventListener("click", function () {
      handleAnswer(optIndex, currentQ.answer);
    });

    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, correctIndex) {
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(function (b) {
    b.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    buttons[selectedIndex].classList.add("correct");
    score++;
  } else {
    buttons[selectedIndex].classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

  scoreTracker.textContent = "Score: " + score + " / " + questions.length;
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion(currentIndex);
  } else {
    showResults();
  }
});

function showResults() {
  quizBody.style.display = "none";
  nextBtn.style.display = "none";
  resultsScreen.style.display = "block";

  finalScoreText.textContent = "You scored " + score + " out of " + questions.length + " (" + Math.round((score / questions.length) * 100) + "%).";

  if (score === 5) {
    feedbackText.textContent = "Masterclass! You know the Satbayev Chess Club rules inside out. Ready for the Premier League.";
  } else if (score >= 3) {
    feedbackText.textContent = "Solid tactical knowledge! Review the ladder bylaws to prepare for active tournament play.";
  } else {
    feedbackText.textContent = "Keep studying the club rules and challenge protocols before entering the rated arena.";
  }
}

resetBtn.addEventListener("click", function () {
  currentIndex = 0;
  score = 0;
  scoreTracker.textContent = "Score: 0 / " + questions.length;
  resultsScreen.style.display = "none";
  quizBody.style.display = "block";
  loadQuestion(0);
});

// Initial startup
loadQuestion(0);
console.log("SIS-3 Chess Quiz loaded. Student: Khamzin Daniyal (070301552252) | Watermark: CSE6624 | Khamzin Daniyal | 070301552252 | niche-23");
