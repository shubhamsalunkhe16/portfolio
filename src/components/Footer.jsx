import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";

const SocialLinks = {
  linkedin: "https://www.linkedin.com/in/shubhamsalunkhe16/",
  github: "https://github.com/shubhamsalunkhe16",
  instagram:
    "https://www.instagram.com/salunkheshubham16?igsh=dnJzaG9kaHFsZjRn",
};

const Footer = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div class="text-center border-t-2 border-text-secondary pt-6">
      <a
        href="#"
        class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
      >
        <h1 className="heading-3xl highlight flex gap-2 items-center">
          &lt;shubh/&gt;
        </h1>
      </a>

      <span class="block text-sm text-center text-text-secondary">
        © 2024-2025 Shubh. All Rights Reserved. Built with&nbsp;
        <a href="https://react.dev/" class="text-primary">
          React
        </a>
        &nbsp;and&nbsp;
        <a href="https://tailwindcss.com" class="text-primary">
          Tailwind CSS
        </a>
        .
      </span>

      <ul class="flex justify-center mt-5 space-x-5">
        <li>
          <button
            href="#"
            class="text-text-secondary hover:text-primary"
            onClick={() => openLink(SocialLinks.linkedin)}
          >
            <Linkedin />
          </button>
        </li>
        <li>
          <button
            href="#"
            class="text-text-secondary hover:text-primary"
            onClick={() => openLink(SocialLinks.github)}
          >
            <Github />
          </button>
        </li>
        <li>
          <button
            href="#"
            class="text-text-secondary hover:text-primary"
            onClick={() => openLink(SocialLinks.instagram)}
          >
            <Instagram />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
