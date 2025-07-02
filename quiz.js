const QUIZ_QUESTIONS = [
  {
    title: "Q1. What specialty did you choose?",
    options: [
      "a) Ahamma chi mch coding",
      "b) Programmer",
      "c) fortt",
      "d) else."
    ],
    points: [
      ["jardak", "ballouz"],
      ["rima", "zaghrini", "lise"],
      ["bouHareb"],
      []
    ]
  },
  // You can continue with the rest of your questions here...
];

const form = document.getElementById("quizForm");
const progressBar = document.getElementById("progressBar");
let currentIndex = 0;
let userAnswers = [];

function renderQuestion() {
  if (currentIndex >= QUIZ_QUESTIONS.length) {
    calculateResult();
    return;
  }

  const question = QUIZ_QUESTIONS[currentIndex];
  form.innerHTML = `
    <h3 class="mb-4">${question.title}</h3>
    ${question.options
      .map(
        (opt, i) => `
      <div class="form-check text-start mb-2">
        <input class="form-check-input" type="radio" name="q" id="opt${i}" value="${i}">
        <label class="form-check-label" for="opt${i}">${opt}</label>
      </div>
    `
      )
      .join("")}
    <button type="submit" class="btn btn-primary mt-3">Next</button>
  `;

  const percent = ((currentIndex / QUIZ_QUESTIONS.length) * 100).toFixed(0);
  progressBar.style.width = `${percent}%`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selected = form.querySelector("input[name='q']:checked");
  if (!selected) return alert("Choose an answer to continue!");
  userAnswers.push(parseInt(selected.value));
  currentIndex++;
  renderQuestion();
});

function calculateResult() {
  const scores = {};
  for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
    const answerIndex = userAnswers[i];
    const doctors = QUIZ_QUESTIONS[i].points[answerIndex] || [];
    doctors.forEach((doc) => {
      scores[doc] = (scores[doc] || 0) + 1;
    });
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const winner = sorted.length > 0 ? sorted[0][0] : null;

  if (winner) {
    window.location.href = `result_${winner}.html`;
  } else {
    alert("Hmm, no clear result. Try again?");
  }
}

renderQuestion();
