import React from "react";

export class ClickTracker extends React.Component {
  state = {
    lastButton: "",
  };

  handleButtonClick = (event) => {
    this.setState((state) => {
      return (state.lastButton = event.target.innerText);
    });
  };
  render() {
    return (
      <div>
        <h1>Last button pressed was: {this.state.lastButton}</h1>
        <button onClick={this.handleButtonClick}>Button 1</button>
        <button onClick={this.handleButtonClick}>Button 2</button>
        <button onClick={this.handleButtonClick}>Button 3</button>
      </div>
    );
  }
}
