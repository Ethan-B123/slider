import Board from "../display/board";
import Logic from "../logic/logic";
import { KeyInput, MouseInput } from "../input/input";

export default ({ dimensions = { x: 4, y: 4 } }) => {
  let currentMouseSpot = null;
  let currentTileKey = null;
  let allowInput = false;

  const setAllowInput = newVal => (allowInput = newVal);

  const board = (window.board = new Board({
    containerSize: { x: 500, y: 500 },
    dimensions,
    containerDom: document.querySelector(".game-tile-container")
  }));

  const logic = (window.logic = new Logic({
    dimensions,
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
    element: document.querySelector(".game-tile-overlay"),
    onMouseMove: xy => {
      if (!allowInput) return;
      const mouseSpotObj = board.findDimension(xy);
      const nextTileKey = logic.tileKeyAtDimension(mouseSpotObj);
      if (!nextTileKey) return;
      const nextMouseSpot = `${mouseSpotObj.x},${mouseSpotObj.y}`;
      if (nextTileKey !== currentTileKey) {
        if (currentTileKey) {
          board.setTileStyle(currentTileKey, {
            borderWidth: "0px"
          });
        }
        board.setTileStyle(nextTileKey, {
          borderWidth: "7px"
        });
        currentMouseSpot = nextMouseSpot;
        currentTileKey = nextTileKey;
      }
    }, onMouseLeave: () => {
      if(currentTileKey) {
        board.setTileStyle(currentTileKey, {
          borderWidth: "0px"
        });
        currentTileKey = null;
      } else {
        throw "how..."
      }
    }
  }));

  function updateStyleAfter(fn) {
    // this is hacky
    return async () => {
      if (!allowInput) return;
      if (!currentMouseSpot) return;
      const x = parseInt(currentMouseSpot.split(",")[0]);
      const y = parseInt(currentMouseSpot.split(",")[1]);
      await board.finishTransition();
      board.setTileStyle(currentTileKey, {
        borderWidth: "0px"
      });
      fn();
      const nextTileKey = logic.tileKeyAtDimension({ x, y });
      currentTileKey = nextTileKey;
      board.setTileStyle(nextTileKey, {
        borderWidth: "7px"
      });
    };
  }

  return {
    endGame: () => {

      board.remove();
      keyInput.remove();
      mouseInput.remove();
    },
    shuffle: () => logic.shuffle(30),
    setAllowInput
  };
};
