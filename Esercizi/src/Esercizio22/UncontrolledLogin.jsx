import React, { createRef } from "react";

export class UncontrolledLogin2 extends React.Component {
  usernameRef = createRef();
  passwordRef = createRef();

  state = {
    username: "",
    password: "",
  };

  handleInputChange = () => {
    this.setState({
      username: this.usernameRef.current.value,
      password: this.passwordRef.current.value,
    });
  };

  componentDidMount() {
    if (this.usernameRef.current) {
      this.usernameRef.current.focus();
    }
  }

  // un altro modo poteva essere inserire autofocus come attributo dell'input

  render() {
    return (
      <form
        onSubmit={() => {
          this.props.onLogin(event, this.state);
        }}
      >
        <input
          type="text"
          name="username"
          ref={this.usernameRef}
          onChange={this.handleInputChange}
        />
        <input
          type="passoword"
          name="password"
          ref={this.passwordRef}
          onChange={this.handleInputChange}
        />
        {this.state.username === "" || this.state.password === "" ? (
          <button disabled={true}>Login</button>
        ) : (
          <button>Login</button>
        )}
        <button type="reset">Reset</button>
      </form>
    );
  }
}
