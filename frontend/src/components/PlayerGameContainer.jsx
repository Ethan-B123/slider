import React, { Component } from "react";
import makePlayerGame from "../fromOldVersion/game/playerGame";
import { connect } from "react-redux";
import { addReplay } from "../redux/actions/replayActions";

class PlayerGameContainer extends Component {
  componentDidMount() {
    const {
      setAllowInput,
      endGame,
      getMemoryInfo,
      memory,
      shuffle,
      setOnWin
    } = makePlayerGame({
      domNode: this.divRef
    });
    this.setAllowInput = setAllowInput;
    this.endGame = endGame;
    this.getMemoryInfo = getMemoryInfo;
    this.shuffle = shuffle;
    this.setOnWin = setOnWin;

    // shuffle();
    setAllowInput(true);
    setOnWin(() => console.log("win"))
    window.logMem = () => console.log(getMemoryInfo());
  }

  render() {
    return (
      <div className="game-tile-container" ref={ref => (this.divRef = ref)} />
    );
  }
}

const MDP = dispatch => ({
  saveReplay: replay => dispatch(addReplay(replay))
});

export default connect(
  null,
  MDP
)(PlayerGameContainer);
