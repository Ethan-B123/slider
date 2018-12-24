import "./tile.css";

class Tile {
  constructor({ pos, containerSize, rowsCols, customStyles, parent }) {
    this.bindFunctions();
    this.pos = pos;
    this.customStyles = customStyles;
    this.containerSize = containerSize;
    this.rowsCols = rowsCols;
    this.parent = parent;
    this.createDomTiles(pos, containerSize, rowsCols, parent);
    this.appendTo(parent);
  }

  move(x, y) {
    this.pos = { x, y };
    this.updateDomTiles();
  }

  appendTo(domNode) {
    ["dom_offX", "dom_offY", "dom_offXY", "dom_on"].forEach(domKey => {
      domNode.appendChild(this[domKey]);
    });
  }

  removeFromDom() {
    ["dom_offX", "dom_offY", "dom_offXY", "dom_on"].forEach(domKey => {
      this[domKey].remove();
    });
  }

  applyCustomStyles(posKey, customStyles = this.customStyles) {
    const tile = this["dom_" + posKey];
    Object.assign(tile.style, customStyles);
  }

  updateDomTiles(
    pos = this.pos,
    containerSize = this.containerSize,
    rowsCols = this.rowsCols
  ) {
    const { makePositions, updateStyle, appendTo, parent } = this;
    const height = containerSize.y / rowsCols.x;
    const width = containerSize.x / rowsCols.y;
    const positions = makePositions(pos, containerSize);
    Object.keys(positions).forEach(posKey => {
      updateStyle(posKey, positions[posKey], width, height);
    });
  }

  createDomTiles(
    pos = this.pos,
    containerSize = this.containerSize,
    rowsCols = this.rowsCols,
    parent = this.parent
  ) {
    const {
      applyCustomStyles,
      updateDomTiles,
      createDomTile,
      makePositions
    } = this;
    const positions = makePositions(pos, containerSize);
    Object.keys(positions).forEach(posKey => {
      this["dom_" + posKey] = createDomTile();
      applyCustomStyles(posKey);
    });
    updateDomTiles(...arguments);
  }

  createDomTile() {
    const tile = document.createElement("div");
    tile.classList.add("game-tile");
    return tile;
  }

  updateStyle(posKey, pos, width, height) {
    const tile = this["dom_" + posKey];
    tile.style.left = pos.x + "px";
    tile.style.top = pos.y + "px";
    tile.style.width = width + "px";
    tile.style.height = height + "px";
  }

  makePositions(pos, containerSize = this.containerSize) {
    const result = {};
    const { offset, wrap } = this;
    result.offX = offset(pos, true, containerSize);
    result.offY = offset(pos, false, containerSize);
    result.offXY = offset(
      offset(pos, true, containerSize),
      false,
      containerSize
    );
    const current = { ...pos };
    result.on = current;
    ["offX", "offY", "offXY", "on"].forEach(key => {
      result[key].x = wrap(result[key].x, true, containerSize);
      result[key].y = wrap(result[key].y, false, containerSize);
    });
    return result;
  }

  offset(pos, xAxis, containerSize = this.containerSize) {
    const axis = xAxis ? "x" : "y";
    const offset = containerSize[axis];
    const oldValue = pos[axis];
    return { ...pos, [axis]: oldValue + offset };
  }

  wrap(value, xAxis, containerSize = this.containerSize) {
    const axis = xAxis ? "x" : "y";
    const offset = containerSize[axis];
    const halfOffet = offset / 2;
    const oldValue = value;
    let shifted = (halfOffet + oldValue) % (offset * 2);
    if (shifted < 0) shifted += offset * 2;
    return shifted - halfOffet;
  }

  bindFunctions() {
    this.move = this.move.bind(this);
    this.updateDomTiles = this.updateDomTiles.bind(this);
    this.createDomTiles = this.createDomTiles.bind(this);
    this.createDomTile = this.createDomTile.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.makePositions = this.makePositions.bind(this);
    this.offset = this.offset.bind(this);
    this.wrap = this.wrap.bind(this);
    this.appendTo = this.appendTo.bind(this);
    this.removeFromDom = this.removeFromDom.bind(this);
    this.applyCustomStyles = this.applyCustomStyles.bind(this);
  }
}

export default Tile;
