import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleIncrementButton = () => {
    this.setState((state) => {
      return (state.count += 1);
    });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrementButton}>Increment</button>
      </div>
    );
  }
}
