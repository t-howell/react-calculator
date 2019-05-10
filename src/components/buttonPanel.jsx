import React, { Component } from "react";
import Button from "./button";
import Heading from "./heading";

class ButtonPanel extends Component {
  state = {
    buttons: [
      { id: "c", value: "C" },
      { id: "pm", value: "+/-" },
      { id: "per", value: "%" },
      { id: "divide", value: "÷" },
      { id: "n7", value: "7" },
      { id: "n8", value: "8" },
      { id: "n9", value: "9" },
      { id: "multiply", value: "×" },
      { id: "n4", value: "4" },
      { id: "n5", value: "5" },
      { id: "n6", value: "6" },
      { id: "minus", value: "-" },
      { id: "n1", value: "1" },
      { id: "n2", value: "2" },
      { id: "n3", value: "3" },
      { id: "plus", value: "+" },
      { id: "n0", value: "0" },
      { id: null, value: null },
      { id: "dot", value: "." },
      { id: "equals", value: "=" }
    ],
    heading: "Test"
  };
  render() {
    console.log(this.state.heading);
    return (
      <section className="buttonPanel">
        {/* <Heading>{this.state.heading}</Heading> */}
        {this.state.buttons.map(button => (
          <Button
            key={button.id}
            name={button.value}
            button={button}
            id={button.id}
          >
            {button.value}
          </Button>
        ))}
        {/* <div>
          <Button>C</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button>÷</Button>
        </div>
        <div>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>×</Button>
        </div>
        <div>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div>
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
        </div> */}
      </section>
    );
  }
}

export default ButtonPanel;
