const rulesBtn = document.getElementById('rules-btn');
const rules = document.getElementById('rules');
const closeBtn = document.getElementById('close-btn');

// Event listeners
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
});
