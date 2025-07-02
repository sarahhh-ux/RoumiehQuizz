

document.addEventListener('DOMContentLoaded', () => {
  // === Highlight active nav-link ===
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // ensure only one is active
    }
  });

  // === Stats button logic for index.html ===
  const statsSentences = [
    'So far 33% of students are doctor Bou Hareb - the future is bright',
    'Only 4 brave souls matched doc Sobhye. Are you next?',
    '30% of you got Dr Zaghrini, yet you all show up in football clothes, cheaters for sure.',
    '40% of you are Dr Ballouz. Stop skipping your classes!',
    '10% of you got Dr Jardak and he strongly disapproves'
  ];

  let statsIndex = -1;
  const statsBtn = document.getElementById('statsBtn');
  const statsPara = document.getElementById('statsPara');

  if (statsBtn && statsPara) {
    statsBtn.textContent = 'Take a peek at your friends';
    statsPara.textContent = '';

    statsBtn.addEventListener('click', () => {
      statsIndex = (statsIndex + 1) % statsSentences.length;
      statsPara.textContent = statsSentences[statsIndex];

      if (statsIndex === 0) {
        statsBtn.textContent = 'Show another stat';
      }
    });
  }
});



const statsSentences = [
  "So far 33% of students are Doctor Bou Hareb – the future is bright",
  "Only 4 brave souls matched Doc Sobhye. Are you next?",
  "30% of you got Dr. Zaghrini, yet you all show up in football clothes. Cheaters for sure.",
  "40% of you are Dr. Ballouz. Stop skipping your classes!",
  "10% of you got Dr. Jardak and he strongly disapproves"
];

let statsIndex = 0;

function showStats() {
  const statsText = document.getElementById("statsText");

  // Show the first message and cycle through them
  statsText.textContent = statsSentences[statsIndex];

  // Loop back to the beginning
  statsIndex = (statsIndex + 1) % statsSentences.length;
}
<button id="statsBtn" class="btn btn-outline-primary">Take a peek @ your friends</button>
const sentences = [
  "So far 33% of students are doctor Bou Hareb - the future is bright",
  "Only 4 brave souls matched doc Sobhye. Are you next?",
  "30% of you got Dr Zaghrini, yet you all show up in football clothes, cheaters for sure.",
  "40% of you are Dr Ballouz. Stop skipping your classes!",
  "10% of you got Dr Jardak and he strongly disapproves"
];

let index = 0;

const statsBtn = document.getElementById("statsBtn");
const statsText = document.getElementById("statsText");

if (statsBtn && statsText) {
  statsBtn.addEventListener("click", () => {
    statsText.textContent = sentences[index];
    index = (index + 1) % sentences.length;
  });
}
