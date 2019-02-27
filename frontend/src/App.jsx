import React, { Component } from "react";
import PlayerGameContainer from "./components/PlayerGameContainer";

class App extends Component {
  componentDidMount() {
    if(this.playerGameRef) {
      console.log(this.playerGameRef);
    }
  }

  render() {
    console.log(this.playerGameFunctions);
    return (
      <div className="App">
        <PlayerGameContainer ref={ref => this.playerGameRef = ref} />
      </div>
    );
  }
}

export default App;
