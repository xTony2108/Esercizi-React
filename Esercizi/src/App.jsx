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

function App() {
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
      <Counter2 initialValue={0} incrementInterval={1000} incrementAmount={1} />
      <Counter3 initialValue={0} incrementInterval={1000} incrementAmount={1} />
    </>
  );
}

export default App;
