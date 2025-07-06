// quiz.js — Full Quiz Logic (Full version with all questions and Lise removed)

const QUIZ_QUESTIONS = [
  {
    question: "What specialty did you choose?",
    options: [
      { text: "Ahamma chi mch coding", points: ["jardak", "ballouz"] },
      { text: "Programmer", points: ["rima", "zaghrini"] },
      { text: "fortt", points: ["bouHareb"] },
      { text: "else.", points: [] },
    ],
  },
  {
    question: "How many times a week do you go to the gym?",
    options: [
      { text: "Every day", points: ["zaghrini", "ballouz"] },
      { text: "2–3 times", points: [] },
      { text: "Once", points: [] },
      { text: "Does walking to class count?", points: ["bouHareb", "jardak", "rima", "sobhye"] },
    ],
  },
  {
    question: "What’s your bench press PR (personal record)?",
    options: [
      { text: "100+ kg", points: ["zaghrini"] },
      { text: "60–90 kg", points: ["ballouz"] },
      { text: "40 kg", points: [] },
      { text: "I don’t lift", points: [] },
    ],
  },
  {
    question: "How many stars do you have at Roumieh?",
    options: [
      { text: "1 star", points: ["rima"] },
      { text: "2 stars", points: [] },
      { text: "I am a general", points: [] },
      { text: "I am the whole military", points: [] },
    ],
  },
  {
    question: "How many years have you failed?",
    options: [
      { text: "None", points: ["ballouz", "bouHareb", "jardak", "rima", "sobhye"] },
      { text: "One", points: [] },
      { text: "More than one", points: [] },
      { text: "Still counting", points: [] },
    ],
  },
  {
    question: "How long do you take to choose your outfit?",
    options: [
      { text: "The night before", points: ["zaghrini"] },
      { text: "20 minutes", points: ["rima", "bouHareb", "sobhye"] },
      { text: "Whatever is on my chair", points: ["jardak", "ballouz"] },
      { text: "5 minutes", points: [] },
    ],
  },
  {
    question: "Have you been caught cheating?",
    options: [
      { text: "no I’m a pro", points: [] },
      { text: "Yes and I still denied it.", points: [] },
      { text: "Yes", points: [] },
      { text: "No, because I don’t cheat", points: ["zaghrini"] },
    ],
  },
  {
    question: "Do you skip classes?",
    options: [
      { text: "Never.", points: ["jardak", "bouHareb"] },
      { text: "If I have to", points: ["zaghrini", "rima"] },
      { text: "50/50 chance", points: [] },
      { text: "Bas botla3 aal barbecue", points: ["ballouz"] },
    ],
  },
  {
    question: "Do you want to live abroad?",
    options: [
      { text: "Yes, 100%", points: [] },
      { text: "Only for studies", points: ["ballouz", "jardak"] },
      { text: "Maybe later", points: ["rima", "bouHareb"] },
      { text: "No", points: ["zaghrini"] },
    ],
  },
  {
    question: "Do you laugh at your own jokes?",
    options: [
      { text: "Absolutely", points: ["zaghrini", "jardak"] },
      { text: "Sometimes", points: [] },
      { text: "Only in private", points: [] },
      { text: "Never", points: [] },
    ],
  },
  {
    question: "You plug in your project and it starts smoking. What’s your reaction?",
    options: [
      { text: "Calmly unplug", points: ["zaghrini", "jardak", "bouHareb"] },
      { text: "Unplug w beftah chebbek el lab la ma yaarif el dr", points: ["ballouz"] },
      { text: "Film it", points: [] },
      { text: "panic", points: ["rima"] },
    ],
  },
  {
    question: "You have a break. What do you do?",
    options: [
      { text: "Go to LIME w bjib croissant", points: ["jardak"] },
      { text: "Bremmenaa", points: ["ballouz"] },
      { text: "Study in the library", points: ["rima", "sobhye"] },
      { text: "Hang out bel parking", points: ["zaghrini", "bouHareb"] },
    ],
  },
  {
    question: "What’s your vibe?",
    options: [
      { text: "serious and tough", points: ["sobhye"] },
      { text: "parental and loving", points: ["bouHareb", "rima"] },
      { text: "Cool and young", points: ["ballouz", "zaghrini"] },
      { text: "Loving and light bullying", points: ["jardak"] },
    ],
  },
  {
    question: "Your ideal lecture pace is:",
    options: [
      { text: "Fast", points: ["ballouz", "rima", "sobhye"] },
      { text: "Slow with dad jokes", points: ["zaghrini", "bouHareb"] },
      { text: "Half lecture, half story time", points: ["jardak"] },
      { text: "No lecture", points: ["ballouz"] },
    ],
  },
  {
    question: "If you were a resistor, what would your resistance be?",
    options: [
      { text: "1 Ω", points: ["zaghrini"] },
      { text: "10 kΩ", points: ["rima"] },
      { text: "∞", points: ["jardak", "sobhye"] },
      { text: "What kind of nerd wrote this question?", points: ["ballouz"] },
    ],
  },
  {
    question: "What’s your role in a group project?",
    options: [
      { text: "I bring the vibes", points: ["ballouz"] },
      { text: "I'm a loner", points: ["zaghrini"] },
      { text: "A3melloun Carry", points: ["rima", "bouHareb", "jardak"] },
      { text: "Report and ppt designer", points: ["rima"] },
    ],
  },
  {
    question: "Are you a morning person?",
    options: [
      { text: "Up with the sun", points: ["zaghrini", "rima", "bouHareb", "sobhye"] },
      { text: "Talk to me before 10 AM and die", points: ["jardak"] },
      { text: "I can be", points: [] },
      { text: "What’s morning?", points: ["ballouz"] },
    ],
  },
  {
    question: "What’s your average sleep time during finals week?",
    options: [
      { text: "12 hours", points: [] },
      { text: "8 hours", points: ["zaghrini", "bouHareb"] },
      { text: "3 hours", points: ["jardak"] },
      { text: "Sleep?", points: ["rima", "sobhye", "ballouz"] },
    ],
  },
  {
    question: "Your lab report is due at midnight. When do you start?",
    options: [
      { text: "Two days before", points: ["jardak", "zaghrini", "bouHareb", "sobhye"] },
      { text: "Same morning", points: ["rima"] },
      { text: "lol my teammate byaamlo", points: [] },
      { text: "Haven’t started", points: ["ballouz"] },
    ],
  },
  {
    question: "How do you take your coffee?",
    options: [
      { text: "Coffee? I drink Matcha", points: ["zaghrini"] },
      { text: "Black.", points: ["bouHareb", "sobhye", "jardak"] },
      { text: "90% sugar 10% coffee", points: [] },
      { text: "IV drip", points: ["rima"] },
    ],
  },
];

function calculateScores(userAnswers) {
  const scores = {};
  QUIZ_QUESTIONS.forEach((question, index) => {
    const choice = userAnswers[index];
    if (choice >= 0 && choice < question.options.length) {
      question.options[choice].points.forEach(doctor => {
        scores[doctor] = (scores[doctor] || 0) + 1;
      });
    }
  });
  return scores;
}

function determineResult(scores) {
  let maxScore = -1;
  let topDoctor = null;
  for (const [doctor, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      topDoctor = doctor;
    }
  }
  return topDoctor;
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quizForm');
  if (!form) return;

  QUIZ_QUESTIONS.forEach((q, i) => {
    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('mb-4');

    const legend = document.createElement('legend');
    legend.classList.add('fw-bold');
    legend.textContent = `${i + 1}. ${q.question}`;
    fieldset.appendChild(legend);

    q.options.forEach((opt, j) => {
      const div = document.createElement('div');
      div.classList.add('form-check');

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${i}`;
      input.value = j;
      input.id = `q${i}_opt${j}`;
      input.classList.add('form-check-input');

      const label = document.createElement('label');
      label.setAttribute('for', input.id);
      label.classList.add('form-check-label');
      label.textContent = opt.text;

      div.appendChild(input);
      div.appendChild(label);
      fieldset.appendChild(div);
    });

    form.appendChild(fieldset);
  });

  const submit = document.createElement('button');
  submit.classList.add('btn', 'btn-primary');
  submit.textContent = 'See Results';
  form.appendChild(submit);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const userAnswers = QUIZ_QUESTIONS.map((q, i) => {
      const selected = form.querySelector(`input[name=q${i}]:checked`);
      return selected ? parseInt(selected.value) : -1;
    });

    const scores = calculateScores(userAnswers);
    const result = determineResult(scores);

    if (result) {
      window.location.href = `result_${result}.html`;
    } else {
      alert('Please answer all questions to get your result.');
    }
  });
});
