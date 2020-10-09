import { Character } from "./Character";
export const Enemy = (function () {
  class Enemy extends Character.Character {
    constructor(x, y, canvas) {
      super(x, y, 64, 2, 10, canvas);
      this.radius = this.size / 2;
    }
    hasCollidedWithCharacter(character = new Character.Character()) {
      return (
        this.yPos - this.radius >= character.yPos && // ceiling
        this.yPos + this.radius <= character.yPos && // floor
        this.xPos + this.radius <= character.xPos && // right barrier
        this.xPos - this.radius >= character.xPos // left barrier
      );
    }
    collisionTest(square) {
      this.hasCollided =
        this.hasCollidedWithCharacter(square) ||
        square.hasCollidedWithCharacter(this);
      return this;
    }
    render() {
      this.context.beginPath();
      this.context.arc(
        this.xPos,
        this.yPos,
        this.radius,
        0 * Math.PI,
        2 * Math.PI,
        true
      );
      this.context.fillStyle = "#9900ff";
      this.context.fill();
      this.context.closePath();
      return this;
    }
    followCharacter(squareMan = new Character.Character()) {
      if (this.xPos < squareMan.xPos) {
        this.moveRight();
      }
      if (this.xPos > squareMan.xPos) {
        this.moveLeft();
      }
      if (this.yPos < squareMan.yPos) {
        this.moveDown();
      }
      if (this.yPos > squareMan.yPos) {
        this.moveUp();
      }

      this.collisionTest(squareMan).render();
      return this;
    }
  }
  return {
    Enemy: Enemy,
  };
})();
