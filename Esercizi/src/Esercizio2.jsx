import React from "react";

export class Welcome extends React.Component {
  render() {
    return <span>Welcome {this.props.name}</span>;
  }
}
