const button = document.getElementById('changeColorBtn');
const colorText = document.getElementById('colorCode');

function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return randomColor;
}

button.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});
