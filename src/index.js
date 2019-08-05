import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class App extends React.Component {
  render() {
    return <div>Hell o test</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
