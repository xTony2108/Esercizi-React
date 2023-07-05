import React from "react";

export class Welcome4 extends React.Component {
  render() {
    //<Welcome4 name={<strong>Tony</strong>} />; ho passato questo in app.jsx
    return <p>Welcome {this.props.name}</p>;
  }
}
