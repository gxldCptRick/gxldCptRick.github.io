import { Character } from "./Character";
export const SquareMan = (function () {
  const directions = {
    up: "w",
    down: "s",
    left: "a",
    right: "d",
  };
  class Player extends Character.Character {
    constructor(x, y, speed, canvas) {
      super(x, y, 20, speed, 10, canvas);
    }
    transitionOnInput(movement) {
      for (const direction in directions) {
        let directionCapitalized =
          direction[0].toUpperCase() + direction.substr(1);

        if (movement[directions[direction]]) {
          this[`move${directionCapitalized}`]();
        }
      }
      this.render();
    }
    render() {
      this.context.beginPath();
      this.context.rect(this.xPos, this.yPos, this.size, this.size);
      this.context.fillStyle = "#000";
      this.context.fill();
      this.context.closePath();
    }
  }
  return {
    Player,
  };
})();
