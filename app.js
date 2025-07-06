document.addEventListener('DOMContentLoaded', () => {
  const statsSentences = [
    'So far 33% of students are Doctor Bou Hareb – the future is bright',
    'Only 4 brave souls matched Doc Sobhye. Are you next?',
    '30% of you got Dr. Zaghrini, yet you all show up in football clothes. Cheaters for sure.',
    '40% of you are Dr. Ballouz. Stop skipping your classes!',
    '10% of you got Dr. Jardak and he strongly disapproves'
  ];

  let statsIndex = -1;
  const statsBtn = document.getElementById('statsBtn');
  const statsText = document.getElementById('statsText');

  if (statsBtn && statsText) {
    statsBtn.addEventListener('click', () => {
      statsIndex = (statsIndex + 1) % statsSentences.length;
      statsText.textContent = statsSentences[statsIndex];
      statsBtn.textContent = statsIndex === 0 ? 'Show another stat' : 'Show another stat';
    });
  }
});
