import Tile from "./display/tile";
import Board from "./display/board";
import Logic from "./logic/logic";
import "./index.css"

window.Tile = Tile;

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

window.run = () => {
  let axis = "x";
  let moves = 0;
  const fn = () => {
    setTimeout(fn, 400);
    window.logic.grab(axis, [moves%5, moves%5]);
    window.logic.move(1);
    window.logic.snap();
    moves++;
    axis = axis === "x" ? "y" : "x";
  }
  fn();
}

document.addEventListener("DOMContentLoaded", () => window.makeGame());
