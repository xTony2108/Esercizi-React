import React from "react";
import Message from "./Esercizio1";
import { Welcome } from "./Esercizio2";
import { Welcome2 } from "./Esercizio3";

function App() {
  return (
    <>
      <Message />
      <Welcome name="Tony" />
      <Welcome2 />
    </>
  );
}

export default App;
