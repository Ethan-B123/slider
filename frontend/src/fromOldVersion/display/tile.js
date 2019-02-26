import "./display.css";

class Tile {
  constructor({
    dimension,
    pos,
    containerSize,
    rowsCols,
    customStyles,
    parent,
    css
  }) {
    this.bindFunctions();
    this.dimension = dimension;
    this.pos = pos;
    this.css = css;
    this.customStyles = customStyles;
    this.containerSize = containerSize;
    this.rowsCols = rowsCols;
    this.parent = parent;
    this.createDomTiles(pos, containerSize, rowsCols, parent);
    this.appendTo(parent);
    this.highlighted = this.onCorrectPos = false;
  }

  setHighlighted(bool) {
    this.highlighted = bool;
    this.applyStyle(
      this.css[this.highlighted ? "highlightedCss" : "unhighlightedCss"]
    );
    if (!bool) {
      this.applyStyle(
        this.css[this.onCorrectPos ? "correctCss" : "incorrectCss"]
      );
    }
  }

  setCorrectPos(bool) {
    this.onCorrectPos = bool;
    this.applyStyle(
      this.css[this.highlighted ? "highlightedCss" : "unhighlightedCss"]
    );
    this.applyStyle(
      this.css[this.onCorrectPos ? "correctCss" : "incorrectCss"]
    );
  }

  move(x, y) {
    this.pos = { x, y };
    this.updateDomTiles();
  }

  tileText() {
    return {
      char: String.fromCharCode(65 + this.dimension.y),
      int: this.dimension.x + 1
    };
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

  applyStyle(style) {
    ["dom_offX", "dom_offY", "dom_offXY", "dom_on"].forEach(domKey => {
      const tile = this[domKey];
      Object.assign(tile.style, style);
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
    const height = containerSize.y / rowsCols.y;
    const width = containerSize.x / rowsCols.x;
    const positions = makePositions(pos, containerSize);
    Object.keys(positions).forEach(posKey => {
      const pos = positions[posKey];
      const offscreen =
        pos.x + width < 0 ||
        pos.y + height < 0 ||
        pos.x > containerSize.x ||
        pos.y > containerSize.y;
      updateStyle(posKey, pos, width, height, offscreen);
    });
    this.updateNames();
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
    const containerTopLeft = document.createElement("div");
    const containerBottomRight = document.createElement("div");
    const charEl = document.createElement("p");
    const intEl = document.createElement("p");
    const { char, int } = this.tileText();
    charEl.innerHTML = char;
    intEl.innerHTML = int;
    containerTopLeft.appendChild(charEl);
    containerBottomRight.appendChild(intEl);
    tile.appendChild(containerTopLeft);
    tile.appendChild(containerBottomRight);
    tile.classList.add("game-tile");
    return tile;
  }

  updateStyle(posKey, pos, width, height, offscreen) {
    const tile = this["dom_" + posKey];
    tile.style.left = pos.x + "px";
    tile.style.top = pos.y + "px";
    tile.style.width = width + "px";
    tile.style.height = height + "px";
    tile.style.zIndex = offscreen ? -1 : 1;
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

  findOff(pos, containerSize = this.containerSize) {
    const result = { x: false, y: false };
    if (pos.x < 0 || pos.x >= containerSize.x) {
      result.x = true;
    }
    if (pos.y < 0 || pos.y >= containerSize.y) {
      result.y = true;
    }
    return result;
  }

  updateNames() {
    const old = {};
    const updated = {};
    ["offX", "offY", "offXY", "on"].forEach(key => {
      const node = this["dom_" + key];
      old["dom_" + key] = node;
    });
    ["offX", "offY", "offXY", "on"].forEach(key => {
      const node = this["dom_" + key];
      const pos = {
        x: parseInt(node.style.left),
        y: parseInt(node.style.top)
      };
      const { x: offX, y: offY } = this.findOff(pos);
      if (offX && offY) {
        updated["dom_offXY"] = node;
      } else if (offX) {
        updated["dom_offX"] = node;
      } else if (offY) {
        updated["dom_offY"] = node;
      } else {
        updated["dom_on"] = node;
        this.pos.x = parseInt(node.style.left);
        this.pos.y = parseInt(node.style.right);
      }
    });
    Object.assign(this, updated);
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
