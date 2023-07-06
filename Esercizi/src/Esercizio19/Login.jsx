import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
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
      </form>
    );
  }
}
