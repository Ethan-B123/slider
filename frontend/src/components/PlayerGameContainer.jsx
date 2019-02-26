import React, { Component } from "react";
import makePlayerGame from "../fromOldVersion/game/playerGame";

class PlayerGameContainer extends Component {
  componentDidMount() {
    const { setAllowInput } = makePlayerGame({ domNode: this.divRef });
    setAllowInput(true);
  }

  render() {
    return (
      <div className="game-tile-container" ref={ref => (this.divRef = ref)} />
    );
  }
}

export default PlayerGameContainer;
