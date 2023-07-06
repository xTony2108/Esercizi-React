import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  timeout = setInterval(() => {
    this.setState((state) => {
      return (state.count += 1);
    });
  }, 1000);

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
