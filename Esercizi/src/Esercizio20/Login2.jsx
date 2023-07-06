import React from "react";

export class Login2 extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleResetButton = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <form onSubmit={() => this.props.onLogin(event, this.state)}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="passoword"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        {this.state.username === "" || this.state.password === "" ? (
          <button disabled={true}>Login</button>
        ) : (
          <button>Login</button>
        )}
        <button type="reset" onClick={this.handleResetButton}>
          Reset
        </button>
      </form>
    );
  }
}
