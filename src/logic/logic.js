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

  cloneTiles() {
    const tileClone = {};
    Object.keys(this.tiles).forEach(key => {
      tileClone[key] = this.tiles[key].slice();
    });
    return tileClone;
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

  move(amount) {
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
    this._onUpdate();
  }

  snap() {
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
    this._onUpdate();
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

export default Logic;
