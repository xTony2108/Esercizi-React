import React from "react";
import Message from "./Esercizio1";
import { Welcome } from "./Esercizio2";
import { Welcome2 } from "./Esercizio3";
import { Welcome3 } from "./Esercizio4";
import { Welcome4 } from "./Esercizio5";
import { Welcome5 } from "./Esercizio6/Esercizio6";
import { Welcome6 } from "./Esercizio7/Esercizio7";
import { Welcome7 } from "./Esercizio8/Esercizio8";
import { Welcome8 } from "./Esercizio9/Esercizio9";
import { Welcome9 } from "./Esercizio10/Esercizio10";
import { Welcome10 } from "./Esercizio11/Esercizio11";
import { Counter } from "./Esercizio12/Counter";
import { Counter2 } from "./Esercizio13/Counter2";
import { Counter3 } from "./Esercizio14/Counter3";
import { Counter4 } from "./Esercizio15/Counter4";
import { ClickCounter } from "./Esercizio16/ClickCounter";
import { ClickTracker } from "./Esercizio17/ClickTracker";
import { InteractiveWelcome } from "./Esercizio18/InteractiveWelcome";
import { Login } from "./Esercizio19/Login";
import { Login2 } from "./Esercizio20/Login2";
import { UncontrolledLogin } from "./Esercizio21/Login3";
import { UncontrolledLogin2 } from "./Esercizio22/UncontrolledLogin";

class App extends React.Component {
  onLogin = (event, state) => {
    event.preventDefault();
    const username = event.target?.elements.username.value;
    const password = event.target?.elements.password.value;
    state = {
      username: username,
      password: password,
    };
    this.setState({ username: username, password: password });
  };

  onLoginUncontrolled = (event, state) => {
    event.preventDefault();
    const username = event.target?.elements.username.value;
    const password = event.target?.elements.password.value;
    state = {
      username: username,
      password: password,
    };
    this.setState({ username: username, password: password });
  };

  render() {
    return (
      <>
        <Message />
        <Welcome name="Tony" />
        <Welcome2 />
        <Welcome3 name="Tony" age={23} />
        <Welcome4 name={<strong>Tony</strong>} />
        <Welcome5 name="Tony" age={23} />
        <Welcome6 name="Tony" age={23} />
        <Welcome7 name="Tony" age={23} />
        <Welcome8 name="Tony" age={23} />
        <Welcome9 name="John" age={23} />
        <Welcome10 name="John" age={17} />
        <Counter />
        <Counter2
          initialValue={0}
          incrementInterval={1000}
          incrementAmount={1}
        />
        <Counter3
          initialValue={0}
          incrementInterval={1000}
          incrementAmount={1}
        />
        <Counter4
          initialValue={0}
          incrementInterval={1000}
          incrementAmount={1}
        />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <Login2 onLogin={this.onLogin} />
        <UncontrolledLogin onLogin={this.onLoginUncontrolled} />
        <UncontrolledLogin2 onLogin={this.onLoginUncontrolled} />
      </>
    );
  }
}

export default App;
