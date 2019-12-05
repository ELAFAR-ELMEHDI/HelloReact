import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  add() {
    this.setState({
      count: this.state.count + 1
    });
  }
  remove() {
    this.setState({
      count: this.state.count - 1
    });
  }
  rest() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello from {this.props.name}</h1>
        <h2>mon compteur {this.state.count}</h2>
        <button onClick={() => this.add()}>add</button>
        <button onClick={() => this.remove()}>remove</button>
        <button onClick={() => this.rest()}>Rest</button>
      </div>
    );
  }
}

export default App;
