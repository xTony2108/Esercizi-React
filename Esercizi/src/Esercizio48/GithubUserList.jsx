import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const GithubUserList = () => {
  const [input, setInput] = useState("");

  const [username, setUsername] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const searchUser = () => {
    setUsername((prevUser) => {
      return [...prevUser, input];
    });
  };

  return (
    <div>
      <label htmlFor="username">
        Search user:
        <input
          type="text"
          name="username"
          value={input}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={searchUser}>Search</button>
      <div>
        {/* APP
            <Route path="usersEs48" element={<GithubUserList />}>
              <Route path=":username" element={<GithubUser />} />
            </Route>
         */}
        {username &&
          username.map((user) => {
            return (
              <Link to={user} key={user}>
                {user}
              </Link>
            );
          })}
        <Outlet />
      </div>
    </div>
  );
};
