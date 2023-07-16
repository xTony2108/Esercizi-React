import { useGithubUser } from "./useGithubUser";

export const GithubUserHook = () => {
  const { data, error, loading } = useGithubUser("xTony2108");

  return (
    <div>
      <p>Username: {data && data.login}</p>
      <p>ID: {data && data.id}</p>
    </div>
  );
};
