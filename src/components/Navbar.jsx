import React, { useState } from "react";
import navConstants from "../constants/navConstants";
import ThemeBtn from "./ThemeBtn";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const navlinks = navConstants.NAVLINKS;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex gap-6 justify-between items-center px-7 py-5 bg-bg-card text-text-primary fixed top-0 w-screen z-50 shadow-sm">
      <div className="z-50">
        <Link
          className="heading-3xl highlight flex gap-2 items-center cursor-pointer"
          to={navConstants.HOME}
        >
          &lt;shubh/&gt;
        </Link>
      </div>
      <div className="hidden [@media(min-width:950px)]:flex justify-between items-center gap-12">
        {navlinks?.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `${
                isActive ? "after:w-full" : ""
              } para-md relative after:bg-primary text-text-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
            }
          >
            {label}
          </NavLink>
        ))}
        <ThemeBtn />
      </div>
      <div className="flex justify-between items-center gap-6 [@media(min-width:950px)]:hidden w-fit">
        <div className="[@media(min-width:950px)]:hidden flex gap-5 sm:gap-8 items-center z-50 text-text-primary">
          <ThemeBtn />
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <X className="h-7 w-7 text-primary rotate-0 transition-all" />
            ) : (
              <Menu className="h-7 w-7 text-primary rotate-0 transition-all" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full bg-bg-card overflow-hidden flex flex-col  [@media(min-width:950px)]:hidden gap-12 top-0 left-0 duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8 py-16 pt-24">
          <div className="flex flex-col h-[calc(100dvh-120px)] justify-center items-center gap-8 font-bold tracking-wider">
            {navlinks?.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive ? "after:w-full" : ""
                  } para-md relative after:bg-primary text-text-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                }
                onClick={() => setToggleMenu(false)}
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
