import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter3 extends React.Component {
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
    return <CounterDisplay count={this.state.count} />;
  }
}
