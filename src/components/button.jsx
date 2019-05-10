import React, { Component } from "react";
import "../button.css";

class Button extends Component {
  //   state = {
  //     value: []
  //   };
  //   getButtonValue = () => {
  //     this.setState({ value: this.state });
  //   };
  render() {
    // console.log(this.state.value);
    return (
      <button
        className={this.getButtonClasses()}
        onClick={() => this.handleButtonClick()}
      >
        {this.props.children}
      </button>
    );
    // return <button className={this.getButtonClasses()} />;
  }
  getButtonClasses() {
    let classes = "button ";
    if (!isNaN(this.props.button.value) || this.props.button.value === ".") {
      classes += "number";
      if (this.props.button.value === "0") {
        classes += " long";
      }
      if (this.props.button.value == null) {
        classes += " hidden";
      }
    } else {
      console.log(this.props.button.id);
      if (
        this.props.button.id === "c" ||
        this.props.button.value === "%" ||
        this.props.button.value === "+/-"
      ) {
        classes += "light-grey";
      } else {
        classes += "orange";
      }
    }
    return classes;
  }
}

export default Button;
