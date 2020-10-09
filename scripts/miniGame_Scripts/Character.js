var Character = (function () {
  const axisToDimension = { x: "width", y: "height" };
  class Character {
    constructor(x, y, size, speed = 10, defaultBuffer = 10) {
      this.size = size;
      this.xPos = x;
      this.yPos = y;
      this.originX = x;
      this.originY = y;
      this.speed = speed;
      this.defaultBuffer = defaultBuffer;
    }
    resetPositionX() {
      this.resetPosition("x");
    }
    resetPositionY() {
      this.resetPosition("y");
    }
    resetPosition(axis) {
      let key = `${axis}Pos`;
      let dimension = axisToDimension[axis];
      if (this[key] < 0) {
        this[key] = canvas[dimension] - this.size;
      } else if (
        this[key] - this.size + this.defaultBuffer >
        canvas[dimension]
      ) {
        this[key] = 0;
      }
    }
    moveUp(spaces = 1) {
      this.yPos -= spaces * this.speed;
      this.resetPositionY();
    }
    moveDown(spaces = 1) {
      this.yPos += spaces * this.speed;
      this.resetPositionY();
    }
    moveRight(spaces = 1) {
      this.xPos += spaces * this.speed;
      this.resetPositionX();
    }
    moveLeft(spaces = 1) {
      this.xPos -= spaces * this.speed;
      this.resetPositionX();
    }

    hasCollidedWithCharacter(character = new Character()) {
      return (
        this.xPos <= character.xPos &&
        this.xPos + this.size >= character.xPos &&
        this.yPos <= character.yPos &&
        this.yPos + this.size >= character.yPos
      );
    }

    render() {
      throw new Error("Not Implemented");
    }
  }
  return {
    Character,
  };
})();
