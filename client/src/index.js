import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
        <React.Fragment>
          <h1>Hello, React!</h1>
        </React.Fragment>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById("root"));