import "./tile.css";

class Tile {
  constructor({ pos, containerSize, rowsCols }) {
    this.bindFunctions();
    this.pos = pos;
    this.containerSize = containerSize;
    this.rowsCols = rowsCols;
    this.parent = document.querySelector(".game-tile-container"); // Deff bad...?
    this.createDomTiles(pos, containerSize, rowsCols);
  }

  move(x, y) {
    this.pos = { x, y };
    this.updateDomTiles();
  }

  updateDomTiles(
    pos = this.pos,
    containerSize = this.containerSize,
    rowsCols = this.rowsCols
  ) {
    const { makePositions, updateStyle } = this;
    const height = containerSize.y / rowsCols.rows;
    const width = containerSize.x / rowsCols.cols;
    const positions = makePositions(pos, containerSize);
    Object.keys(positions).forEach(posKey => {
      updateStyle(posKey, positions[posKey], width, height);
    });
  }

  createDomTiles(
    pos = this.pos,
    containerSize = this.containerSize,
    rowsCols = this.rowsCols
  ) {
    const { updateDomTiles, createDomTile, makePositions } = this;
    const positions = makePositions(pos, containerSize);
    Object.keys(positions).forEach(posKey => {
      this["dom_" + posKey] = createDomTile();
    });
    updateDomTiles(...arguments);
  }

  createDomTile() {
    const tile = document.createElement("div");
    tile.classList.add("game-tile");
    this.parent.appendChild(tile); // Maybe bad...?
    return tile;
  }

  updateStyle(posKey, pos, width, height) {
    const tile = this["dom_" + posKey];
    tile.style.left = pos.x + "px";
    tile.style.top = pos.y + "px";
    tile.style.width = width + "px";
    tile.style.height = height + "px";
  }

  // setDomStyles(keyValues) {

  // }

  makePositions(pos, containerSize) {
    const result = {};
    const { wrap } = this;
    result.offX = wrap(pos, containerSize, true);
    result.offY = wrap(pos, containerSize, false);
    result.offXY = wrap(wrap(pos, containerSize, true), containerSize, false);
    result.on = { ...pos };
    return result;
  }

  wrap(pos, screenSize, xAxis) {
    const axis = xAxis ? "x" : "y";
    const offset = screenSize[axis];
    const halfOffet = offset / 2;
    const oldValue = pos[axis];
    const newValue =
      ((halfOffet + oldValue + offset) % (offset * 2)) - halfOffet;
    return { ...pos, [axis]: newValue };
  }

  bindFunctions() {
    this.move = this.move.bind(this);
    this.updateDomTiles = this.updateDomTiles.bind(this);
    this.createDomTiles = this.createDomTiles.bind(this);
    this.createDomTile = this.createDomTile.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.makePositions = this.makePositions.bind(this);
    this.wrap = this.wrap.bind(this);
  }
}

export default Tile;
