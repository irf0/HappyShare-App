import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

const UserProfile = () => {
  const username = localStorage.getItem("username");
  const userpic = localStorage.getItem("profilePic");
  const useremail = localStorage.getItem("email");
  const navigate = useNavigate();

  const Logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
        navigate("/login");
      })
      .catch(console.error);
  };
  return (
    <div className="flex flex-col  mx-auto mt-14 rounded-lg bg-blue-400 w-1/3 h-87vh shadow-2xl gap-7 transition-all duration-700 ease-out animate-slide-in sm:w-10/12 sm:mt-5">
      <AiFillCloseCircle
        className="absolute right-1/4 mx-36 mt-3 text-2xl cursor-pointer sm:-right-24"
        onClick={() => navigate(-1)}
      />

      <div className="gap-4 flex flex-col justify-center mt-8 mx-52 w-4/5 sm:w-10/12 sm:justify-center sm:mx-28">
        <img src={userpic} alt={username} className="w-24 h-24 rounded-full" />
        <h1 className="font-semibold text-xl flex">{username}</h1>
        <p className="font-bold -ml-8">{useremail}</p>
        <button
          className="w-24 h-10 p-4 rounded-md items-center justify-center flex my-8 bg-red-600 text-white before:backdrop-brightness-50 before:bg-black"
          onClick={Logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
