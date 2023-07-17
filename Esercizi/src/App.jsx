import React from "react";
import { CounterFunc3 } from "./Esercizio42/CounterFunc3";
import { Link, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1";
import { ShowGithubUser } from "./Esercizio45/ShowGithubUser";
import { NotFound } from "./Esercizio47/NotFound";
import { GithubUserList } from "./Esercizio48/GithubUserList";
import { GithubUser } from "./Esercizio48/GithubUser";
import { ShowGithubUser2 } from "./Esercizio50/ShowGithubUser";
import { ShowGithubUser3 } from "./Esercizio51/ShowGithubUser";
import { ShowGithubUser4 } from "./Esercizio52/ShowGithubUser";

class App extends React.Component {
  render() {
    return (
      <>
        {/*Esercizio 46*/}
        <Link to={"/"}>Homepage</Link>
        <Link to={"counter"}>Counter</Link>
        <Link to={"users/xTony2108"}>User</Link>
        <Link to={"usersEs48"}>Users ES 48</Link>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="counter" element={<CounterFunc3 />} />
          <Route path="users/:username" element={<ShowGithubUser />} />

          {/*Esercizio 47*/}
          <Route path="*" element={<NotFound />} />

          {/*Esercizio 48*/}
          <Route path="usersEs48" element={<GithubUserList />}>
            {/*Esercizio 49 */}
            <Route index element={<p>Add a user and select it</p>} />

            <Route path=":username" element={<GithubUser />} />
          </Route>
          <Route path="es50" element={<ShowGithubUser2 />} />
          <Route path="es51" element={<ShowGithubUser3 />} />
          <Route path="es52" element={<ShowGithubUser4 />} />
        </Routes>
      </>
    );
    //Riga 14 è l'esercizio 45 => React Router - Add the `users/:username` path
  }
}

export default App;
