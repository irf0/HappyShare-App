import React, { useRef, useState } from "react";
import logo from "../Assets/logo2.png";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";

const Navbar = ({ handleSearchInput, handleSearch }) => {
  const userpic = localStorage.getItem("profilePic");
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  return (
    <>
      <div className="relative p-2 gap-5 sm:gap-1 w-full h-20 flex justify-evenly sm:hidden flex-row items-center shadow-md">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 relative cursor-pointer"
          />
        </Link>

        <div className="flex">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchInput}
              onClick={() => navigate("/search")}
              className="absolute rounded-3xl p-2 w-64 sm:w-28 bg-gray-300 text-center outline-none"
            />
            <BiSearch className="relative mt-3 ml-2" />
          </form>
        </div>
        {/* Search done.. */}
        <div
          className="flex ml-36 cursor-pointer items-center"
          onClick={() => navigate("/create-pin")}
        >
          <Tooltip title="Create Post">
            <IconButton>
              <h2 className="font-bold mr-2 text-base">Create</h2>
            </IconButton>
          </Tooltip>
        </div>

        <NavLink to="/user-profile">
          <Tooltip title="My Profile">
            <IconButton>
              <div className="flex items-center ">
                {userpic && (
                  <img
                    src={userpic}
                    alt="user-pic"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
              </div>
            </IconButton>
          </Tooltip>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
