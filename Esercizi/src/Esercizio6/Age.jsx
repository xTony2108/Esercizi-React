import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <div>
        <p>Your age is {this.props.age}!</p>
      </div>
    );
  }
}
