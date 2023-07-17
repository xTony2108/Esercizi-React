import React from "react";
import { CounterFunc3 } from "./Esercizio42/CounterFunc3";
import { Link, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1";
import { ShowGithubUser } from "./Esercizio45/ShowGithubUser";
import { NotFound } from "./Esercizio47/NotFound";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="counter" element={<CounterFunc3 />} />
          <Route path="users/:username" element={<ShowGithubUser />} />

          {/*Esercizio 47*/}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/*Esercizio 46*/}
        <Link to={"/"}>Homepage</Link>
        <Link to={"counter"}>Counter</Link>
        <Link to={"users/xTony2108"}>User</Link>
      </>
    );
    //Riga 14 è l'esercizio 45 => React Router - Add the `users/:username` path
  }
}

export default App;
