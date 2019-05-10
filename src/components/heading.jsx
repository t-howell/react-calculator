import React, { Component } from "react";

class Heading extends Component {
  //   state = {
  //     title: this.props.title
  //   };
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

export default Heading;
