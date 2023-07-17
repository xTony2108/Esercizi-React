import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const GithubUser = () => {
  const [data, setData] = useState(null);
  const { username } = useParams();

  const dataFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);

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
