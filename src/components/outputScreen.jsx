import React, { Component } from "react";

class OutputScreen extends Component {
  state = {
    output: 0
  };
  render() {
    return (
      <div>
        <p>{this.state.output}</p>
      </div>
    );
  }
}
export default OutputScreen;
