import React from "react";

export class Welcome2 extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome {name}!</p>;
  }
}

Welcome2.defaultProps = {
  name: "Tony",
};
