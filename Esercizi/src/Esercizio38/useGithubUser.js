import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
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

  return { data };
};
