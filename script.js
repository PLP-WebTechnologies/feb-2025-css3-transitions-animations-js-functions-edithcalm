const button = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// Load saved color on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('buttonColor');
  if (savedColor) {
    button.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
});

// Save new color preference
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  button.style.backgroundColor = selectedColor;
  localStorage.setItem('buttonColor', selectedColor);
});

// Trigger animation on button click
button.addEventListener('click', () => {
  button.classList.add('animate');
  setTimeout(() => {
    button.classList.remove('animate');
  }, 500); // Match animation duration
});
