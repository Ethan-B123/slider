import Tile from "./tile.js";
import { debug } from "util";

class Board {
  constructor({ containerSize, dimensions, containerDom }) {
    this.grid = {};
    this.dimensions = dimensions;
    this.containerSize = containerSize;
    this.containerDom = containerDom;
    const size = {
      x: containerSize.x / dimensions.x,
      y: containerSize.y / dimensions.y
    };
    for (let y = 0; y < dimensions.y; y++) {
      for (let x = 0; x < dimensions.x; x++) {
        this.grid[`${x},${y}`] = new Tile({
          pos: { x: x * size.x, y: y * size.y },
          rowsCols: { ...dimensions },
          containerSize: { ...containerSize },
          customStyles: this.createCustomStyle(x, y),
          parent: containerDom
        });
      }
    }
  }

  createCustomStyle(x, y, dimX = this.dimensions.x, dimY = this.dimensions.y) {
    return {
      backgroundColor: `hsl(${(y / dimY) * 255},${100 - (y / dimY) * 50}%,${30 +
        (x / dimX) * 50}%)`
    };
  }

  updateGrid(newGrid) {
    Object.keys(newGrid).forEach(key => {
      const tile = this.grid[key];
      tile.move(
        newGrid[key][0] * (this.containerSize.x / this.dimensions.x),
        newGrid[key][1] * (this.containerSize.y / this.dimensions.y)
      );
    });
  }

  moveGroup(group, axis, amount) {
    group.forEach(key => {
      const tile = this.grid[key];
      const { x: oldX, y: oldY } = tile.pos;
      tile.move(
        oldX + (axis === "x" ? amount : 0),
        oldY + (axis === "y" ? amount : 0)
      );
    });
  }

  testingMove(dist) {
    for (let x = 0; x < this.dimensions.x; x++) {
      const tile = this.grid[`${x},1`];
      const { x: oldX, y } = tile.pos;
      tile.move(oldX + dist, y);
    }
  }
}

export default Board;