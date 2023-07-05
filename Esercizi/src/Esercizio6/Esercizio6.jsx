import React from "react";
import { Age } from "./Age";

export class Welcome5 extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        <Age age={this.props.age} />
      </div>
    );
  }
}
