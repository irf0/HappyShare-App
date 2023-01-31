import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo2.png";
import { AiOutlineRight } from "react-icons/ai";
import Pins from "./Pins";
import UserProfile from "./UserProfile";
import { GiHamburgerMenu } from "react-icons/gi";

const categories = [
  { name: "Animals" },
  { name: "Automobile" },
  { name: "Technology" },
  { name: "Gaming" },
  { name: "Coding" },
  { name: "Nature" },
];

const Sidebar = ({ closeSidebar }) => {
  const userpic = localStorage.getItem("profilePic");
  const username = localStorage.getItem("username");

  const [active, setActive] = useState(false);

  const handleClose = (e) => {
    if (closeSidebar) closeSidebar(false);
    e.stopPropagation();
  };
  return (
    <>
      <div>
        <div className="flex">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-22 cursor-pointer relative -mt-2 sm:ml-20 ml-32"
          />

          <div className="flex items-center">
            <GiHamburgerMenu
              className="absolute left-5 sm:ml-0 -mt-2 hover:text-gray-600 text-3xl  cursor-pointer duration-1000 animate-slide-in ease-out "
              onClick={handleClose}
            />
          </div>
        </div>

        {/* Contents of Sidebar begins here⤵ */}

        <div className="flex items-center flex-col ml-1 text-left">
          <div className="flex items-center p-2 text-lg border-black left-0 -ml-12">
            {/* 1.Home */}
            <HiHome className="mr-3 my-2 " fontSize={30} />
            <NavLink to="/">
              <h1
                className={`${active ? "font-bold" : "font-normal"}`}
                onClick={() => setActive(true)}
              >
                HOME
              </h1>
            </NavLink>
          </div>

          {/* 2.Categories->Need to map inside the DB to retieve categories data */}
          <div className="flex text-left flex-col gap-2">
            <h1 className="cursor-pointer">Discover Categories</h1>
            {categories.map((category) => (
              <NavLink to={`/category/${category.name}`} key={category.name}>
                <h3
                  className={`${
                    active
                      ? "font-semibold border-r-8 rounded-r-md"
                      : "font-normal text-gray-600 cursor-pointer "
                  }`}
                  onClick={() => setActive(true)}
                >
                  {category.name}
                </h3>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mx-10 flex mt-3 -mb-4">
          <h1 className="font-bold text-xl">Profile</h1>
        </div>
        <NavLink to="/user-profile">
          <div className="flex gap-2 mx-6 p-4 items-center cursor-pointer">
            <img
              src={userpic}
              alt="user-pic"
              className="w-8 h-8 rounded-full"
            />
            <h2 className="text-lg">{username}</h2>
            <AiOutlineRight />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
