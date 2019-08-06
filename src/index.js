import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class App extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
