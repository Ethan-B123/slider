import Tile from "./display/tile";
import Board from "./display/board";
import Logic from "./logic/logic";
import { KeyInput, MouseInput } from "./input/input";
import "./index.css";

window.Tile = Tile;

window.KeyInput = KeyInput;

window.makeGame = () => {
  let currentMouseSpot = null;
  const board = (window.board = new Board({
    containerSize: { x: 500, y: 500 },
    dimensions: { x: 5, y: 5 },
    containerDom: document.querySelector(".game-tile-container")
  }));

  const logic = (window.logic = new Logic({
    dimensions: { x: 5, y: 5 },
    onUpdate: window.board.updateGrid.bind(window.board)
  }));

  const keyInput = (window.keyInput = new KeyInput({
    element: document,
    a: () => window.logic.fullMove(-1, 0, currentMouseSpot),
    d: () => window.logic.fullMove(1, 0, currentMouseSpot),
    w: () => window.logic.fullMove(0, -1, currentMouseSpot),
    s: () => window.logic.fullMove(0, 1, currentMouseSpot)
  }));
  const mouseInput = (window.mouseInput = new MouseInput({
    element: document.querySelector(".game-tile-container"),
    onMouseMove: xy => {
      const mouseSpotObj = board.findDimension(xy);
      currentMouseSpot = `${mouseSpotObj.x},${mouseSpotObj.y}`;
    }
  }));
};

window.run = () => {
  let axis = "x";
  let moves = 0;
  const fn = () => {
    setTimeout(fn, 400);
    window.logic.grab(axis, [moves % 5, moves % 5]);
    window.logic.move(1);
    window.logic.snap();
    moves++;
    axis = axis === "x" ? "y" : "x";
  };
  fn();
};

document.addEventListener("DOMContentLoaded", () => window.makeGame());
