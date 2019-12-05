import React,{Component} from "react";



class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Hello from {this.props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
  }
}

export default App