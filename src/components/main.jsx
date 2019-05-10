import React, { Component } from "react";
import ButtonPanel from "./buttonPanel";
import OutputScreen from "./outputScreen";

class Main extends Component {
  render() {
    return (
      <main>
        <OutputScreen />
        <ButtonPanel />
      </main>
    );
  }
}

export default Main;
