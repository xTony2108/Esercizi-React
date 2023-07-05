import React from "react";
import Message from "./Esercizio1";
import { Welcome } from "./Esercizio2";
import { Welcome2 } from "./Esercizio3";
import { Welcome3 } from "./Esercizio4";
import { Welcome4 } from "./Esercizio5";
import { Welcome5 } from "./Esercizio6/Esercizio6";

function App() {
  return (
    <>
      <Message />
      <Welcome name="Tony" />
      <Welcome2 />
      <Welcome3 name="Tony" age={23} />
      <Welcome4 name={<strong>Tony</strong>} />
      <Welcome5 name="Tony" age={23} />
    </>
  );
}

export default App;
