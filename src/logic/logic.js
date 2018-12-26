class Logic {
  constructor({ dimensions, onUpdate }) {
    this.dimensions = dimensions;
    this.onUpdate = onUpdate;
    this._onUpdate = () => this.onUpdate(this.cloneTiles());
    this.currentAxis = null;
    this.currentTile = null;
    this.tiles = {};
    for (let y = 0; y < dimensions.y; y++) {
      for (let x = 0; x < dimensions.x; x++) {
        this.tiles[`${x},${y}`] = [x, y];
      }
    }
  }

  shuffle(n) {
    for (let i = 0; i < n; i++) {
      const axis = randomInt(2);
      const move = [0,0]
      move[axis] = randomInt(2) === 0 ? -1 : 1;
      const tileLocation = `${randomInt(this.dimensions.x)},${randomInt(this.dimensions.y)}`
      this.fullMove(move[0], move[1], tileLocation, true);
    }
    this._onUpdate();
  }

  tileKeyAtDimension({ x, y }) {
    return Object.keys(this.tiles).find(
      key => this.tiles[key][0] === x && this.tiles[key][1] === y
    );
  }

  cloneTiles() {
    const tileClone = {};
    Object.keys(this.tiles).forEach(key => {
      tileClone[key] = this.tiles[key].slice();
    });
    return tileClone;
  }

  fullMove(x, y, tileLocation, skipUpdate = false) {
    if (!tileLocation) return;
    const axis = x ? "x" : "y";
    const amount = x || y;
    this.grab(axis, tileLocation);
    this.move(amount, skipUpdate);
    this.snap(skipUpdate);
  }

  grab(axis, tileLocation) {
    if (this.currentAxis || this.currentTile) throw "already grabbed";
    if (typeof tileLocation === "string")
      tileLocation = tileLocation.split(",").map(val => parseInt(val));
    this.currentAxis = axis;
    this.currentTile = Object.keys(this.tiles).find(
      key =>
        this.tiles[key][0] === tileLocation[0] &&
        this.tiles[key][1] === tileLocation[1]
    );
  }

  move(amount, skipUpdate = false) {
    if (!this.currentAxis || !this.currentTile) throw "not grabbed";
    const currentTileLocation = this.tiles[this.currentTile].slice();
    const axisIdx = this.currentAxis === "x" ? 0 : 1;
    const otherAxisIdx = 1 - axisIdx;
    const movingTiles = Object.keys(this.tiles).filter(
      key => this.tiles[key][otherAxisIdx] === currentTileLocation[otherAxisIdx]
    );
    movingTiles.forEach(key => {
      this.tiles[key][axisIdx] += amount;
      // while(this.tiles[key][axisIdx] < 0) {
      //   this.tiles[key][axisIdx] += this.dimensions[this.currentAxis]
      // }
    });
    if (!skipUpdate) this._onUpdate();
  }

  snap(skipUpdate = false) {
    if (!this.currentAxis || !this.currentTile) throw "not grabbed";
    const currentTileLocation = this.tiles[this.currentTile].slice();
    const axisIdx = this.currentAxis === "x" ? 0 : 1;
    const otherAxisIdx = 1 - axisIdx;
    const movingTiles = Object.keys(this.tiles).filter(
      key => this.tiles[key][otherAxisIdx] === currentTileLocation[otherAxisIdx]
    );
    movingTiles.forEach(key => {
      const currentAxisValue = this.tiles[key][axisIdx];
      let newAxisValue = Math.round(currentAxisValue);
      this.tiles[key][axisIdx] = this.posMod(
        newAxisValue,
        this.dimensions[this.currentAxis]
      );
    });
    this.currentAxis = null;
    this.currentTile = null;
    if (!skipUpdate) this._onUpdate();
  }

  posMod(val, base) {
    let newValue = val % base;
    if (newValue < 0 || Object.is(newValue, -0)) {
      return (base + newValue) % base;
    } else {
      return newValue;
    }
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

export default Logic;
