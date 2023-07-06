import React from "react";

export class Counter2 extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  timeout = setInterval(() => {
    this.setState((state) => {
      return (state.count += this.props.incrementAmount);
    });
  }, this.props.incrementInterval);

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
