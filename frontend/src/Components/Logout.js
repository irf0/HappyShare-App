//This will be used in Homepage Navbar later

import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import UserProfile from "./UserProfile";

const Logout = () => {
  const navigate = useNavigate();
  auth
    .signOut()
    .then(() => {
      console.log("User signed out");
      navigate("/login");
    })
    .catch(console.error);

  return (
    <>
      <UserProfile Logout={Logout} />
    </>
  );
};

export default Logout;
