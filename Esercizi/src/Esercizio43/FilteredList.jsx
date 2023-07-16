import { useMemo, useState } from "react";

export const FilteredList = ({ userProp }) => {
  const [user, setUser] = useState(null);

  const filterList = () => {
    setUser(userProp.filter((user) => user.age > 18));
  };

  useMemo(() => {
    filterList();
  }, [userProp]);

  return (
    <div>
      {user &&
        user.map((user) => (
          <p key={user.id}>
            ID: {user.id}, Name: {user.name}, Age: {user.age}
          </p>
        ))}
    </div>
  );
};
