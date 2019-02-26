import React, { Component } from 'react';

class TestingUC extends Component {
  state = {
    someValue: 0
  }

  onClick() {
    return () => {
      this.setState(({someValue}) => ({someValue: someValue + 1}));
    }
  }
  
  render() {
    return (
      <div>
        This also works
        {this.state.someValue}
        <button onClick={this.onClick()}>Press it</button>
        <div id="game" ref={ref => window.someRef = ref}></div>
      </div>
    );
  }
}

export default TestingUC;