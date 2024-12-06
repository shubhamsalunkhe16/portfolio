import React, { useState } from "react";
import navConstants from "../constants/navStrings";
import { ReactComponent as MenuBar } from "../assets/icons/menu-bar.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import ThemeBtn from "./ThemeBtn";
import { Link } from "react-scroll";

const navlinks = navConstants.NAVLINKS;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const homeNav = [
    { label: "Home", to: "hero_section", offset: -300 },
    { label: "About", to: "my_story", offset: -160 },
    { label: "Skills", to: "skills", offset: -140 },
    { label: "Experience", to: "experience", offset: -140 },
    { label: "Projects", to: "projects", offset: -140 },
    { label: "Contact", to: "contact", offset: -160 },
  ];

  return (
    <nav className="flex gap-6 justify-between items-center px-7 py-5 bg-bg-card text-text-primary fixed top-0 w-screen z-50 shadow-sm">
      <div className="z-50 cursor-pointer">
        <Link
          className="heading-3xl highlight flex gap-2 items-center"
          to={homeNav[0].to}
          offset={homeNav[0].offset}
          spy={true}
          smooth={true}
          duration={300}
        >
          &lt;shubh/&gt;
        </Link>
      </div>
      <div className="hidden lg:flex justify-between items-center gap-12">
        {homeNav?.map(({ label, to, offset }) => (
          <Link
            key={label}
            to={to}
            activeClass="after:w-full"
            spy={true}
            smooth={true}
            offset={offset}
            duration={300}
            className="para-md relative after:bg-primary text-text-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            {label}
          </Link>
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
          <div className="flex flex-col h-[calc(100dvh-120px)] justify-center items-center gap-8 font-bold tracking-wider">
            {homeNav?.map(({ label, to, offset }) => (
              <Link
                key={label}
                to={to}
                activeClass="after:w-full"
                spy={true}
                smooth={true}
                offset={offset}
                duration={300}
                className={`para-md relative text-text-primary after:bg-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
                onClick={() => setToggleMenu(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
