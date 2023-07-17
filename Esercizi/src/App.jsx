import React from "react";
import { CounterFunc3 } from "./Esercizio42/CounterFunc3";
import { Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/counter" element={<CounterFunc3 />} />
        </Routes>
      </>
    );
  }
}

export default App;
