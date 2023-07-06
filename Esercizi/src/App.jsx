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
    </>
  );
}

export default App;
