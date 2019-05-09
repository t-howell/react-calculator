import React, { Component } from "react";
import "../button.css";
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
    if (Number.isInteger(this.state.value)) {
      classes += "number";
      if (this.state.value == 0) {
        classes += " long";
      }
    } else {
      if (this.state.value == "AC" || "%" || "+/-") {
        classes += "orange";
      } else {
        classes += "light-grey";
      }
    }
    return classes;
  }
}

export default Button;
