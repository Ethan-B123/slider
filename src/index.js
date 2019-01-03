import makePlayerGame from "./game/playerGame";
import "./index.css";

let globalEndGame = null;
let globalShuffle = null;
let globalSetAllowInput = null;

window.makeGame = () => {
  const { endGame, shuffle, setAllowInput } = makePlayerGame({});
  globalEndGame = endGame;
  globalShuffle = shuffle;
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
    document.querySelector(".game-tile-overlay").style.cursor = "pointer";
    document.querySelector(".game-tile-overlay").style.opacity = "0";
  });
  document.querySelector("#btn-restart-game").addEventListener("click", () => {
    restart();
  });
}
