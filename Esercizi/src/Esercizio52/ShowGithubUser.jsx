import { useGithubUser } from "./useGithubUser";

export const ShowGithubUser4 = () => {
  const { data, manualFetchGituser } = useGithubUser("xTony2108");

  return (
    <div>
      <p>Username: {data && data.login}</p>
      <p>ID: {data && data.id}</p>

      <button onClick={manualFetchGituser}>Fetch</button>
    </div>
  );
};
