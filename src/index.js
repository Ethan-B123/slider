import makePlayerGame from "./game/playerGame";
import MemoryController from "./logic/memoryController";
import "./index.css";

let globalEndGame = null;
let globalShuffle = null;
let globalSetAllowInput = null;
let globalMemory = null;
let globalLogic = null;

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

window.makeGame = () => {
  const { endGame, shuffle, setAllowInput, memory, logic } = makePlayerGame({});
  globalMemory = memory;
  globalEndGame = endGame;
  globalShuffle = shuffle;
  globalLogic = logic;
  document.querySelector(".game-tile-overlay").style.cursor = "no-drop";
  document.querySelector(".game-tile-overlay").style.opacity = "1";
  window.endGame = endGame;
  globalSetAllowInput = setAllowInput;
};

document.addEventListener("DOMContentLoaded", () => {
  window.makeGame();
  attachListeners();
});

function restart() {
  globalEndGame();
  window.makeGame();
}

function attachListeners() {
  document.querySelector("#btn-start-game").addEventListener("click", () => {
    globalShuffle();
    globalSetAllowInput(true);
    globalMemory.startTimer();
    document.querySelector(".game-tile-overlay").style.cursor = "pointer";
    document.querySelector(".game-tile-overlay").style.opacity = "0";
  });
  document.querySelector("#btn-restart-game").addEventListener("click", () => {
    restart();
  });
  document.querySelector("#btn-undo").addEventListener("click", () => {
    globalMemory.undo();
  });
  document.querySelector("#btn-redo").addEventListener("click", () => {
    globalMemory.redo();
  });
}
