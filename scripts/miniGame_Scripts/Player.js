var SquareMan = (function () {
  const directions = {
    up: "w",
    down: "s",
    left: "a",
    right: "d",
  };
  class Player extends Character.Character {
    constructor(x, y, speed) {
      super(x, y, 20, speed, 10);
    }
    transitionOnInput() {
      for (const direction in directions) {
        let directionCapitalized =
          direction[0].toUpperCase() + direction.substr(1);

        if (movement[directions[direction]]) {
          console.log(
            directionCapitalized,
            movement[directions[direction]],
            directions[direction]
          );
          this[`move${directionCapitalized}`]();
        }
      }
      this.render();
    }
    render() {
      context.beginPath();
      context.rect(this.xPos, this.yPos, this.size, this.size);
      context.fillStyle = "#000";
      context.fill();
      context.closePath();
    }
  }
  return {
    Player,
    defaultSquare: new Player(0, 0, 1),
  };
})();
