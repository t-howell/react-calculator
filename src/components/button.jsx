import React, { Component } from "react";

class Button extends Component {
  state = {
    value: this.props.value
  };
  render() {
    return (
      <button className={this.getButtonClasses()} key={this.state.value}>
        {this.state.value}
      </button>
    );
  }
  getButtonClasses() {
    let classes = "button ";
    if (isNumeric(this.state.value)) {
      classes += "number";
      if (this.state.value == 0) {
        classes += " 0";
      }
    } else {
      if (this.state.value == "AC" || "%" || "+/-") {
        classes += "orange";
      } else {
        classes += "light-grey";
      }
    }
  }
}
