
import React, { Component } from "react";
import makePlayerGame from '../fromOldVersion/game/playerGame'

class GameContainer extends Component {
  
  componentDidMount() {
    // console.log(this.divRef);
    // await new Promise(requestAnimationFrame);
    // console.log(this.divRef);
    
    const {setAllowInput} = makePlayerGame({domNode: this.divRef})
    setAllowInput(true);
  }
  
  render() {
    return <div className="game-tile-container" ref={ref => this.divRef = ref} />;
  }
}

export default GameContainer;
