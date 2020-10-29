import React, { useContext } from "react";
import NavBar from "./NavBar";
import UserContext from "./UserContext";

const HomeScreen = () => {
  const userContext = useContext(UserContext);

  const { user } = userContext;

  console.log(user);

  return (
    <>
      <NavBar />
      <div className="m-4">
        <h1>HomeScreen</h1>
        <hr />

        <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
    </>
  );
};

export default HomeScreen;
