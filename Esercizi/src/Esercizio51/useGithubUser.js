import useSWR from "swr";

const dataFetch = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const useGithubUser = (username) => {
  const { data } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    dataFetch
  );

  return { data };
};
