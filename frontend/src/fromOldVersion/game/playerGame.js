import Board from "../display/board";
import Logic from "../logic/logic";
import { KeyInput, MouseInput } from "../input/input";
import Memory from "../logic/memory";

window.Memory = Memory;

export default ({ dimensions = { x: 4, y: 4 }, domNode = null }) => {
  let currentMouseSpot = null;
  let currentTileKey = null;
  let allowInput = false;
  let containerDom = domNode || document.querySelector(".game-tile-container");

  const setAllowInput = newVal => (allowInput = newVal);

  const board = (window.board = new Board({
    containerSize: { x: 500, y: 500 },
    dimensions,
    containerDom,
    highlightedCss: { borderWidth: "7px" },
    unhighlightedCss: { borderWidth: null },
    correctCss: {
      borderColor: "#fff",
      borderWidth: "1px",
      // opacity: 0.8
      // clipPath:
      //   "polygon(4px 4px, calc(100% - 4px) 4px, calc(100% - 4px) calc(100% - 4px), 4px calc(100% - 4px))"
    },
    incorrectCss: {
      borderColor: "#000",
      borderWidth: "0px",
      // clipPath: "polygon(-1% -1%, 101% -1%, 101% 101%, -1% 101%)",
      // opacity: 1
    }
  }));

  const logic = (window.logic = new Logic({
    dimensions,
    onUpdate: (newGrid, grabLocation, movement, useMemory) => {
      if (useMemory) memory.makeMove({ grabLocation, movement });
      board.updateGrid(newGrid);
    }
  }));

  const memory = new Memory({
    onChange: ({ grabLocation, movement }) => {
      logic.fullMove(
        movement.x,
        movement.y,
        { ...grabLocation },
        { useMemory: false }
      );
    }
  });
  window.memory = memory;

  const keyInput = (window.keyInput = new KeyInput({
    element: document,
    a: updateStyleAfter(() =>
      logic.fullMove(-1, 0, currentMouseSpot, { useMemory: true })
    ),
    d: updateStyleAfter(() =>
      logic.fullMove(1, 0, currentMouseSpot, { useMemory: true })
    ),
    w: updateStyleAfter(() =>
      logic.fullMove(0, -1, currentMouseSpot, { useMemory: true })
    ),
    s: updateStyleAfter(() =>
      logic.fullMove(0, 1, currentMouseSpot, { useMemory: true })
    )
  }));

  const mouseInput = (window.mouseInput = new MouseInput({
    element: domNode,
    onMouseMove: xy => {
      if (!allowInput) return;
      const mouseSpotObj = board.findDimension(xy);
      const nextTileKey = logic.tileKeyAtDimension(mouseSpotObj);
      if (!nextTileKey) return;
      const nextMouseSpot = `${mouseSpotObj.x},${mouseSpotObj.y}`;
      if (nextTileKey !== currentTileKey) {
        if (currentTileKey) {
          board.setHighlighted(currentTileKey, false);
        }
        board.setHighlighted(nextTileKey, true);
        currentMouseSpot = nextMouseSpot;
        currentTileKey = nextTileKey;
      }
    },
    onMouseLeave: () => {
      if (currentTileKey) {
        board.setHighlighted(currentTileKey, false);
        currentTileKey = currentMouseSpot = null;
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
      board.setHighlighted(currentTileKey, false);
      fn();
      const nextTileKey = logic.tileKeyAtDimension({ x, y });
      currentTileKey = nextTileKey;
      board.setHighlighted(nextTileKey, true);
    };
  }

  return {
    endGame: () => {
      board.remove();
      keyInput.remove();
      mouseInput.remove();
    },
    memory,
    shuffle: () => {
      logic.shuffle(30);
      memory.startGame(logic.tiles);
    },
    setAllowInput
  };
};
