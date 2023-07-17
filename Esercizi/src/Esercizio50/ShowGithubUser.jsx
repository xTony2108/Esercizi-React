import { useGithubUser } from "./useGithubUser";

export const ShowGithubUser2 = () => {
  const { data } = useGithubUser("xTony2108");

  return (
    <div>
      <p>Username: {data && data.login}</p>
      <p>ID: {data && data.id}</p>
    </div>
  );
};
