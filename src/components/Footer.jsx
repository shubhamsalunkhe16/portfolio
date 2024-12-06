import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import userMeta from "../constants/userMeta";
import openLink from "../utils/openLink";
import { Link } from "react-scroll";

const Footer = () => {
  const { socialLinks } = userMeta;
  return (
    <div className="text-center border-t-2 border-text-secondary pt-6 bg-bg-card">
      <h1 className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
        <Link
          to="hero_section"
          offset={-90}
          spy={true}
          smooth={true}
          duration={300}
          className="heading-3xl highlight flex gap-2 items-center cursor-pointer"
        >
          &lt;shubh/&gt;
        </Link>
      </h1>

      <span className="block text-sm text-center text-text-secondary">
        © All Rights Reserved. Built with&nbsp;
        <a href="https://react.dev/" className="text-primary">
          React
        </a>
        &nbsp;and&nbsp;
        <a href="https://tailwindcss.com" className="text-primary">
          Tailwind CSS
        </a>
        .
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <button
            className="text-text-secondary hover:text-primary"
            onClick={() => openLink(socialLinks.linkedin)}
          >
            <Linkedin />
          </button>
        </li>
        <li>
          <button
            href="#"
            className="text-text-secondary hover:text-primary"
            onClick={() => openLink(socialLinks.github)}
          >
            <Github />
          </button>
        </li>
        <li>
          <button
            href="#"
            className="text-text-secondary hover:text-primary"
            onClick={() => openLink(socialLinks.instagram)}
          >
            <Instagram />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
