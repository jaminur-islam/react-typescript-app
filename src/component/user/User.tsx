import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};

const User = () => {
  // const [user, setUser] = useState<authUser | null>(null);
  const [user, setUser] = useState<authUser>({} as authUser);
  return (
    <div>
      <h1>
        user name {user?.name} Email {user?.email}{" "}
      </h1>
      <button
        onClick={() => {
          setUser({
            name: "sagor",
            email: "jaminurisla@gmail.com",
          });
        }}
      >
        login
      </button>
      {/* <button onClick={() => setUser({})}>LogOut</button> */}
    </div>
  );
};

export default User;
