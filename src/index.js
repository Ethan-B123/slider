import makePlayerGame from "./game/playerGame";
import makeReplayGame from "./game/replayGame";
import "./index.css";

let globalEndGame = null;
let globalShuffle = null;
let globalSetAllowInput = null;
let globalMemory = null;

window.makeGame = () => {
  const { endGame, shuffle, setAllowInput, memory } = makePlayerGame({});
  globalMemory = memory;
  globalEndGame = endGame;
  globalShuffle = shuffle;
  document.querySelector(".game-tile-overlay").style.cursor = "no-drop";
  document.querySelector(".game-tile-overlay").style.opacity = "1";
  window.endGame = endGame;
  globalSetAllowInput = setAllowInput;
};

window.makeReplayGame = memoryObj => {
  return makeReplayGame({
    containerDom: document.querySelectorAll(".game-tile-container")[1],
    history: memoryObj.history,
    startingState: memoryObj.startingState
  });
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
