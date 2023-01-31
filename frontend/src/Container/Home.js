import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "../Components/MobileNav";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";

const Home = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [sidebarRef, setOpen]);

  return (
    <>
      <div>
        {/* Sidebar Layout */}
        <div
          ref={sidebarRef}
          className={`${
            open ? "w-96 sm:w-64" : "w-0"
          } h-97vh sm:h-87vh mt-0.5 bg-white z-10 absolute transition-all duration-500 ease-out animate-slide-in shadow-xl `}
        >
          <GiHamburgerMenu
            className={`${
              open
                ? "hidden"
                : "ml-5 text-3xl cursor-pointer my-6 hover:text-gray-600"
            }`}
            onClick={() => setOpen(true)}
          />

          <div className={`${open ? "flex" : "hidden"}`}>
            <Sidebar closeSidebar={setOpen} />
          </div>
        </div>
      </div>

      <MobileNav openSidebar={setOpen} />

      {/* Feeds here⤵ */}
      <Feed />
    </>
  );
};

export default Home;
