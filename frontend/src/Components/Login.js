import React, { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import bg from "../Assets/bg.png";
import mbg from "../Assets/mbg.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        client.createIfNotExists({
          _id: user.uid,
          _type: "user",
          username: user.displayName,
          image: user.photoURL,
        });
        localStorage.setItem("profilePic", user.photoURL);
        localStorage.setItem("email", user.email);
        localStorage.setItem("username", user.displayName);
        localStorage.setItem("userId", user.uid);

        console.log(user);
        if (!user) {
          navigate("/login");
        } else {
          navigate("/");
        }
      })

      .catch(console.error);
  };

  return (
    <>
      <div>
        <img
          className="absolute object-cover object-center bg-no-repeat md:hidden sm:hidden w-full h-full"
          src={bg}
          alt="image"
        />

        <img
          className="object-cover object-center bg-no-repeat sm:absolute md:absolute lg:hidden xl:hidden w-full h-full"
          src={mbg}
          alt="image"
        />

        <button
          className="absolute w-130px h-12 bg-white flex justify-center items-center top-3/4 xl:left-1/2 xl:-ml-24 md:ml-24 sm:-mt-14 sm:ml-24 p-3 rounded-md"
          onClick={googleLogin}
        >
          <FcGoogle className="flex justify-center items-center mr-2" />
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default Login;
