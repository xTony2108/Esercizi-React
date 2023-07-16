import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    setError(null);
    setLoading(true);
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
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    dataFetch();
  }, [username]);

  return { data, error, loading };
};
