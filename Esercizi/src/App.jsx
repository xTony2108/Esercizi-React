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
import { TodoList } from "./Esercizio23/TodoList";
import { TodoList2 } from "./Esercizio24/TodoList2";
import { TodoList3 } from "./Esercizio25/TodoList3";
import { TodoList4 } from "./Esercizio26/TodoList4";
import { TodoList5 } from "./Esercizio27/TodoList5";
import { Context, LanguageContext } from "./Esercizio28/LanguageContext";
import { ClickCounterFunc } from "./Esercizio30/ClickCounterFunc";
import { FormFunc } from "./Esercizio31/FormFunc";
import { ClickCounterFunc2 } from "./Esercizio32/ClickCounterFunc2";
import { CounterFunc } from "./Esercizio33/CounterFunc";
import { GithubUser } from "./Esercizio34/GithubUser";

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

  state = {
    count: 0,
  };

  onCounterChange = (count) => {
    console.log(count);
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
        <TodoList />
        <TodoList2 />
        <TodoList3 />
        <TodoList4 />
        <TodoList5
          render={(state, handleRemoveButton) => {
            return state.items.map((items, i) => {
              return (
                <li key={items + i}>
                  <span>{items}</span>
                  <button onClick={() => handleRemoveButton(items, i)}>
                    Remove
                  </button>
                </li>
              );
            });
          }}
        />
        <Context />
        <ClickCounterFunc />
        <FormFunc />
        <ClickCounterFunc2 onCounterChange={this.onCounterChange} />
        <CounterFunc />
        <GithubUser username="xTony2108" />
      </>
    );
  }
}

export default App;
