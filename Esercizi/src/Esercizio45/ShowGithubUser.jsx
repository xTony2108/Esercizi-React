import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export const ShowGithubUser = () => {
  const { username } = useParams();

  /*
  IN APP

  <Routes>
    <Route path="users/:username" element={<ShowGithubUser />} />
  </Routes>
  */

  const { data, error, loading } = useGithubUser(username);

  return (
    <div>
      <p>Username: {data && data.login}</p>
      <p>ID: {data && data.id}</p>
    </div>
  );
};
