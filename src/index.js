import Tile from "./display/tile";
import Board from "./display/board";
import Logic from "./logic/logic";
import { KeyInput, MouseInput } from "./input/input";
import "./index.css";

window.Tile = Tile;

window.KeyInput = KeyInput;

window.makeGame = () => {
  let currentMouseSpot = null;
  let currentTileKey = null;

  const board = (window.board = new Board({
    containerSize: { x: 500, y: 500 },
    dimensions: { x: 4, y: 4 },
    containerDom: document.querySelector(".game-tile-container")
  }));

  const logic = (window.logic = new Logic({
    dimensions: { x: 4, y: 4 },
    onUpdate: window.board.updateGrid.bind(window.board)
  }));

  const keyInput = (window.keyInput = new KeyInput({
    element: document,
    a: updateStyleAfter(() => logic.fullMove(-1, 0, currentMouseSpot)),
    d: updateStyleAfter(() => logic.fullMove(1, 0, currentMouseSpot)),
    w: updateStyleAfter(() => logic.fullMove(0, -1, currentMouseSpot)),
    s: updateStyleAfter(() => logic.fullMove(0, 1, currentMouseSpot))
  }));

  const mouseInput = (window.mouseInput = new MouseInput({
    element: document.querySelector(".game-tile-container"),
    onMouseMove: xy => {
      const mouseSpotObj = board.findDimension(xy);
      const nextTileKey = logic.tileKeyAtDimension(mouseSpotObj);
      if (!nextTileKey) return;
      const nextMouseSpot = `${mouseSpotObj.x},${mouseSpotObj.y}`;
      if (nextTileKey !== currentTileKey) {
        if (currentTileKey) {
          board.setTileStyle(currentTileKey, {
            border: "0px solid #fff"
          });
        }
        board.setTileStyle(nextTileKey, {
          border: "10px solid #fff"
        });
        currentMouseSpot = nextMouseSpot;
        currentTileKey = nextTileKey;
      }
    }
  }));

  function updateStyleAfter(fn) {
    // this is hacky
    return async () => {
      if (!currentMouseSpot) return;
      const x = parseInt(currentMouseSpot.split(",")[0]);
      const y = parseInt(currentMouseSpot.split(",")[1]);
      // console.log(mouseSpotObj);
      await board.finishTransition();
      board.setTileStyle(currentTileKey, {
        border: "0px solid #fff"
      });
      fn();
      const nextTileKey = logic.tileKeyAtDimension({ x, y });
      currentTileKey = nextTileKey;

      // console.log({ x, y });
      // console.log(nextTileKey);

      board.setTileStyle(nextTileKey, {
        border: "10px solid #fff"
      });
    };
  }
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
