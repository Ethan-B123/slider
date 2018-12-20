import Tile from "./display/tile";

window.Tile = Tile;

window.makeTile = () =>
  new Tile({
    pos: { x: 0, y: 0 },
    containerSize: { x: 300, y: 300 },
    rowsCols: { rows: 3, cols: 3 }
  });

console.log("howdy");
