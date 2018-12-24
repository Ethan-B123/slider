import Tile from "./display/tile";
import Board from "./display/board";
import Logic from "./logic/logic";

window.Tile = Tile;

window.makeTile = () =>
  new Tile({
    pos: { x: 0, y: 0 },
    containerSize: { x: 500, y: 500 },
    rowsCols: { rows: 5, cols: 5 },
    customStyles: {
      border: "1px solid #005"
    },
    parent: document.querySelector(".game-tile-container")
  });
window.makeBoard = () =>
  new Board({
    containerSize: { x: 500, y: 500 },
    dimensions: { x: 5, y: 5 },
    containerDom: document.querySelector(".game-tile-container")
  });

window.makeGame = () => {
  window.board = new Board({
    containerSize: { x: 500, y: 500 },
    dimensions: { x: 5, y: 5 },
    containerDom: document.querySelector(".game-tile-container")
  });

  window.logic = new Logic({
    dimensions: { x: 5, y: 5 },
    onUpdate: window.board.updateGrid.bind(window.board)
  });
};

document.addEventListener("DOMContentLoaded", () => window.makeGame());
