import Board from "../display/board";
import Logic from "../logic/logic";
import MemoryController from "../logic/memoryController";

window.makeMemoryController = history => {
  return (window.memoryController = new MemoryController({
    onMove: (move, lastMove) => {
      console.log(move);
      globalLogic.fullMove(
        move.movement.x,
        move.movement.y,
        move.grabLocation,
        { useMemory: false }
      );
      if (lastMove) console.log("done");
    },
    history
  }));
};

export default ({
  containerDom,
  startingState,
  history,
  dimensions = { x: 4, y: 4 }
}) => {
  const board = new Board({
    containerSize: {
      x: containerDom.clientWidth,
      y: containerDom.clientHeight
    },
    dimensions,
    containerDom,
    highlightedCss: { borderWidth: "7px" },
    unhighlightedCss: { borderWidth: null },
    correctCss: {
      borderColor: "#fff",
      borderWidth: "1px",
      opacity: 0.8
      // clipPath:
      //   "polygon(4px 4px, calc(100% - 4px) 4px, calc(100% - 4px) calc(100% - 4px), 4px calc(100% - 4px))"
    },
    incorrectCss: {
      borderColor: "#000",
      borderWidth: "0px",
      // clipPath: "polygon(-1% -1%, 101% -1%, 101% 101%, -1% 101%)",
      opacity: 1
    }
  });

  const logic = new Logic({
    dimensions,
    onUpdate: newGrid => {
      board.updateGrid(newGrid);
    }
  });

  logic.tiles = startingState;
  logic._onUpdate(false);

  const memoryController = new MemoryController({
    onMove: (move, lastMove) => {
      updateStyleAfter(() =>
        logic.fullMove(move.movement.x, move.movement.y, move.grabLocation, {})
      );
      if (lastMove) console.log("done");
    },
    history
  });

  async function updateStyleAfter(fn) {
    // this is hacky
    await board.finishTransition();
    fn();
  }

  return {
    start: () => memoryController.start(),
    end: () => {
      board.remove();
      memoryController.end();
    }
  };
};
