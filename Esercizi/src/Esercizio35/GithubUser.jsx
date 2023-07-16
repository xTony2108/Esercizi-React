import { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);

  const dataFetch = async () => {
    if (!data) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    dataFetch();
  }, [username]);

  return (
    <div>
      <p>Username: {data && data.login}</p>
      <p>ID: {data && data.id}</p>
    </div>
  );
};
