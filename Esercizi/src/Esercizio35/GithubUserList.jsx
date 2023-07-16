import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export const GithubUserList = () => {
  const [data, setData] = useState(null);

  const [input, setInput] = useState("");

  const [username, setUsername] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };
  console.log(input);
  const searchUser = () => {
    setUsername((prevUser) => {
      return [...prevUser, input];
    });
  };

  console.log(username);

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
      {username &&
        username.map((user, i) => {
          return <GithubUser username={user} key={user + i} />;
        })}
    </div>
  );
};
