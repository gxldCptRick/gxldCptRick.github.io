var timeSpace = document.getElementById("timer"),
  gameStartButton = document.getElementById("gameStart"),
  canvas = document.getElementById("stuff"),
  context = canvas.getContext("2d"),
  gameInterval,
  timerInterval,
  seconds = 0,
  minutes = 0,
  hours = 0,
  speed = 3,
  movement = {
    a: false,
    w: false,
    s: false,
    d: false,
  },
  maxHeight = canvas.height,
  maxWidth = canvas.width,
  hasCollided = false,
  main_bad_guy = new Enemy.Enemy(40, 40),
  enemies = [main_bad_guy],
  hiddenClassName = "hidden";

SquareMan.defaultSquare = new SquareMan.Player(
  canvas.width - 10,
  canvas.height - 10,
  4
);

function drawEnemy(listOfEnemy) {
  for (let enemy of listOfEnemy) {
    enemy.followCharacter(SquareMan.defaultSquare);
  }
}
function timer() {
  seconds++;
  minutes = minutes + Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = hours + Math.floor(minutes / 60);
  minutes = minutes % 60;
  updateTime();
}

const padZeros = (num, zeroes = 2) => num.toString().padStart(zeroes, "0");
const updateTime = () =>
  (timeSpace.innerHTML = `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
    seconds
  )}`);

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  SquareMan.defaultSquare.transitionOnInput();
  SquareMan.defaultSquare.render();
  drawEnemy(enemies);
  if (hasCollided) {
    clearGameIntervals();
    gameStartButton.classList.remove(hiddenClassName);
  }
}

const clearGameIntervals = () => {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
};
const resetCharacters = (characters = []) => {
  for (let character of characters) {
    character.xPos = character.originX;
    character.yPos = character.originY;
  }
};
const startGameIntervals = () => {
  gameInterval = setInterval(draw, 10);
  timerInterval = setInterval(timer, 1000);
};
const resetTimer = () => (hours = minutes = seconds = 0);
function gameStart() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  hasCollided = false; // lessons from a lazy programmer lol
  resetTimer();
  resetCharacters([SquareMan.defaultSquare, main_bad_guy]);
  startGameIntervals();
  gameStartButton.classList.add(hiddenClassName);
}
document.addEventListener("keydown", function (e) {
  movement[e.key] = true;
});
document.addEventListener("keyup", function (e) {
  movement[e.key] = false;
});
