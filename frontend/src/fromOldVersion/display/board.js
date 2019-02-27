import Tile from "./tile.js";

class Board {
  constructor({
    containerSize,
    dimensions,
    containerDom,
    highlightedCss,
    unhighlightedCss,
    correctCss,
    incorrectCss
  }) {
    this.bindFunctions();
    this.grid = {};
    this.dimensions = dimensions;
    this.containerSize = containerSize;
    this.containerDom = containerDom;
    const size = {
      x: containerSize.x / dimensions.x,
      y: containerSize.y / dimensions.y
    };
    this.css = {
      highlightedCss,
      unhighlightedCss,
      correctCss,
      incorrectCss
    };
    for (let y = 0; y < dimensions.y; y++) {
      for (let x = 0; x < dimensions.x; x++) {
        this.grid[`${x},${y}`] 
        = new Tile({
          pos: { x: x * size.x, y: y * size.y },
          dimension: { x, y },
          rowsCols: { ...dimensions },
          containerSize: { ...containerSize },
          customStyles: this.createCustomStyle(x, y),
          css: this.css,
          parent: containerDom
        });
      }
    }
  }

  setHighlighted(dimensionLocation, bool) {
    this.grid[dimensionLocation].setHighlighted(bool)
  }

  setCorrectPlaceStyle(dimensionLocation, newPosition) {
    const [x, y] = dimensionLocation.split(",").map(str => parseInt(str));
    const [currentX, currentY] = newPosition;
    if (x === currentX && y === currentY) {
      this.grid[dimensionLocation].setCorrectPos(true)
    } else {
      this.grid[dimensionLocation].setCorrectPos(false)
    }
  }

  remove() {
    Object.keys(this.grid).forEach(key => {
      const tile = this.grid[key];
      tile.removeFromDom();
    });
  }

  findDimension({ x, y }) {
    return {
      x: Math.floor((x / this.containerSize.x) * this.dimensions.x),
      y: Math.floor((y / this.containerSize.y) * this.dimensions.y)
    };
  }

  createCustomStyle(x, y, dimX = this.dimensions.x, dimY = this.dimensions.y) {
    return {
      backgroundColor: `hsl(${(y / dimY) * 255},${100 - (y / dimY) * 50}%,${30 +
        (x / dimX) * 50}%)`
    };
  }

  setTileStyle(tileKey, styles) {
    this.grid[tileKey].applyStyle(styles);
  }

  updateGrid(newGrid) {
    Object.keys(newGrid).forEach(key => {
      const tile = this.grid[key];
      this.setCorrectPlaceStyle(key, newGrid[key]);
      tile.move(
        newGrid[key][0] * (this.containerSize.x / this.dimensions.x),
        newGrid[key][1] * (this.containerSize.y / this.dimensions.y)
      );
    });
  }

  async finishTransition() {
    Object.keys(this.grid).forEach(key => {
      this.grid[key].applyStyle({
        transition: "none"
      });
    });
    Object.keys(this.grid).forEach(key => {
      this.grid[key].applyStyle({
        transition: null
      });
    });
  }

  bindFunctions() {
    this.findDimension = this.findDimension.bind(this);
    this.createCustomStyle = this.createCustomStyle.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
  }
}

export default Board;
