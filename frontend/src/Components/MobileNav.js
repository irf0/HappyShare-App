import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo2.png";
import {
  AiFillPlusSquare,
  AiOutlineArrowUp,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import ColorAlerts, { ColorAlertsTwo } from "./Alert";

const MobileNav = () => {
  const userpic = localStorage.getItem("profilePic");
  const [scroll, setScroll] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  setTimeout(() => {
    setShowAlert(false);
  }, 3000);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScroll(true);
  };

  return (
    <>
      <div className="flex lg:hidden xl:hidden md:hidden justify-center items-center ml-14 shadow-md">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-22 absolute cursor-pointer rounded-lg  -ml-20"
          />
        </NavLink>
      </div>
      <div className=" flex absolute right-4 items-center my-6 lg:hidden xl:hidden">
        <img
          src={userpic}
          alt="userpic"
          className="w-8 h-8 rounded-full border-2 border-gray-400 relative mr-2"
        />
      </div>

      {/* Scroll to Top */}
      <button
        className=" fixed sm:bottom-24 bottom-16 z-10 right-6  bg-red-500 w-10 h-10 rounded-full justify-center items-center flex text-white outline-none sm:focus:outline-none sm:scroll-smooth"
        onClick={handleScroll}
      >
        <AiOutlineArrowUp />
      </button>

      <div className="fixed flex lg:hidden xl:hidden items-center justify-evenly w-full mb-4 border-x-gray-200 border-x-2 border-t-2  shadow-lg bottom-0 p-5 rounded-3xl z-10 bg-white">
        <NavLink to="/">
          <HomeIcon />
        </NavLink>
        <NavLink to={`/search`}>
          <SearchIcon />
        </NavLink>
        <NavLink to="/create-pin">
          <AiOutlinePlusSquare className="rounded-md" fontSize={25} />
        </NavLink>
        <NavLink to="/user-profile">
          <PersonIcon />
        </NavLink>

        <div onClick={() => setShowAlert(true)}>
          <ShareIcon />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
