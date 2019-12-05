import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  set() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello from {this.props.name}</h1>
        <h2>mon compteur {this.state.count}</h2>
        <button onClick={() => this.set()}>Ajouter</button>
      </div>
    );
  }
}

export default App;
