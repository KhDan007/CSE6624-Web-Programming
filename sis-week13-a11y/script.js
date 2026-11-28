// CSE6624 | Khamzin Daniyal | 070301552252 | niche-23
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const question = document.querySelector('#question').value.trim();

  if (!name || !question) {
    status.textContent = 'Please enter your name and question.';
    return;
  }

  const subject = encodeURIComponent('Question about the chess club');
  const body = encodeURIComponent(`Hello,\n\n${question}\n\nFrom: ${name}\nEmail: ${email}`);
  status.textContent = 'Opening your email app. Review the draft before sending it.';
  window.location.href = `mailto:chess@example.com?subject=${subject}&body=${body}`;
});
