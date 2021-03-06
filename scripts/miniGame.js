import { Enemy } from "./miniGame_Scripts/Enemy";
import { SquareMan } from "./miniGame_Scripts/Player";
const loadingEvent = () => {
  let timeSpace = document.getElementById("timer"),
    gameStartButton = document.getElementById("gameStart"),
    canvas = document.getElementById("stuff"),
    context = canvas.getContext("2d"),
    gameInterval,
    timerInterval,
    seconds = 0,
    minutes = 0,
    hours = 0,
    movement = {
      a: false,
      w: false,
      s: false,
      d: false,
    },
    translateKey = {
      ArrowUp: "w",
      ArrowDown: "s",
      ArrowLeft: "a",
      ArrowRight: "d",
      a: "a",
      s: "s",
      d: "d",
      w: "w",
    },
    main_bad_guy = new Enemy.Enemy(40, 40, canvas),
    enemies = [main_bad_guy],
    hiddenClassName = "hidden";

  SquareMan.defaultSquare = new SquareMan.Player(
    canvas.width - 10,
    canvas.height - 10,
    4,
    canvas
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
    SquareMan.defaultSquare.transitionOnInput(movement);
    SquareMan.defaultSquare.render();
    drawEnemy(enemies);
    if (enemies.some((e) => e.hasCollided)) {
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
    resetTimer();
    resetCharacters([SquareMan.defaultSquare, ...enemies]);
    enemies.forEach((e) => (e.hasCollided = false));
    startGameIntervals();
    gameStartButton.classList.add(hiddenClassName);
  }
  document.addEventListener("keydown", function (e) {
    movement[translateKey[e.key] || "unmapped"] = true;
  });
  document.addEventListener("keyup", function (e) {
    movement[translateKey[e.key] || "unmapped"] = false;
  });
  gameStartButton.addEventListener("click", gameStart);
  console.log("loaded game");
};
window.addEventListener("load", loadingEvent);
document.addEventListener("load", loadingEvent);
