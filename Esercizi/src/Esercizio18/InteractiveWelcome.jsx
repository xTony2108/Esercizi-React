import React from "react";
import { Welcome } from "../Esercizio2";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  inputStateChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputStateChange}
        />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}
