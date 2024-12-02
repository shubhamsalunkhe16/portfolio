import React, { useState } from "react";
import navConstants from "../constants/navStrings";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as MenuBar } from "../assets/icons/menu-bar.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import ThemeBtn from "./ThemeBtn";

const navlinks = navConstants.NAVLINKS;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => navigate(navConstants.HOME);

  return (
    <nav className="flex gap-6 justify-between items-center px-7 py-5 bg-bg-card text-text-primary fixed top-0 w-screen z-50 shadow-sm">
      <div className="z-50 cursor-pointer">
        <h1
          className="heading-3xl highlight flex gap-2 items-center"
          onClick={navigateToHome}
        >
          &lt;shubh/&gt;
        </h1>
      </div>
      <div className="hidden lg:flex justify-between items-center gap-12">
        {navlinks?.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `para-md ${
                isActive ? "active-route highlight" : "text-text-primary"
              } relative after:bg-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
            }
          >
            {label}
          </NavLink>
        ))}
        <ThemeBtn />
      </div>
      <div className="flex justify-between items-center gap-6 lg:hidden w-fit">
        <div className="lg:hidden flex gap-5 sm:gap-8 items-center z-50 text-text-primary">
          <ThemeBtn />
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <Close className="h-6 fill-primary" />
            ) : (
              <MenuBar className="h-6 fill-primary" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full bg-bg-card overflow-hidden flex flex-col lg:hidden gap-12 top-0 left-0 duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8 py-16 pt-24">
          <div className="flex flex-col items-center gap-8 font-bold tracking-wider">
            {navlinks?.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `para-md ${
                    isActive ? "active-route highlight" : "text-text-primary"
                  } relative after:bg-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
