import React from "react";
import { FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import ThemeButton from "./ThemeButton";

const NavbarComponent = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">My Portfolio</a>
      </div>
      <div className="navbar-end">
        <ThemeButton />
        <a
          href="https://github.com/damienmagdangal"
          target="__blank"
          className="btn btn-ghost btn-circle"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jean-damien-magdangal-221a2a17b/"
          target="__blank"
          className="btn btn-ghost btn-circle"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default NavbarComponent;
