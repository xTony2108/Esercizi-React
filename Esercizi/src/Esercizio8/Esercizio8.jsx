import React from "react";
import { Age } from "./Age";

export class Welcome7 extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        {this.props.age && <Age age={this.props.age} />}
      </div>
    );
  }
}
