var score = 0;

function updateScore() {
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = "Score: " + score;
}

function moveCircle() {
  var gameContainer = document.getElementById("game-container");
  var circle = document.getElementById("circle");

  var maxWidth = gameContainer.offsetWidth - circle.offsetWidth;
  var maxHeight = gameContainer.offsetHeight - circle.offsetHeight;

  var randomX = Math.floor(Math.random() * maxWidth);
  var randomY = Math.floor(Math.random() * maxHeight);

  circle.style.left = randomX + "px";
  circle.style.top = randomY + "px";
}

function increaseScore() {
  score++;
  updateScore();
  moveCircle();
}

var circle = document.getElementById("circle");
circle.addEventListener("click", increaseScore);

updateScore();
moveCircle();
