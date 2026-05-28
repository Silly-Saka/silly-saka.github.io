const hoverCard = document.querySelector('.hover-card');
const projectButtons = document.querySelectorAll('.project-button');

function showDescription(button) {
  const description = button.dataset.description;

  if (!description) return;

  hoverCard.textContent = description;
  hoverCard.classList.add('show');
}

function hideDescription() {
  hoverCard.classList.remove('show');
}

projectButtons.forEach((button) => {
  button.addEventListener('mouseenter', () => showDescription(button));
  button.addEventListener('focus', () => showDescription(button));

  button.addEventListener('mouseleave', hideDescription);
  button.addEventListener('blur', hideDescription);
});
