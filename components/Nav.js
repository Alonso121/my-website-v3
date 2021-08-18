import React, { useState } from "react";
import Link from "next/link";
import { Link as LinkS } from "react-scroll";
import { useTheme } from "next-themes";

import { navLinks } from "../lib/data";
import ToggleDarkBtn from "./ToggleDarkBtn";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed z-30 flex items-center justify-between w-full h-16 px-6 bg-customlight dark:bg-darkgray">
      {/* Logo */}
      <Link href="/">
        <div className="text-2xl transition-all duration-300 cursor-pointer lg:link-underline text-text hover:text-primary">
          Alison Tahiri
        </div>
      </Link>

      <ToggleDarkBtn theme={theme} setTheme={setTheme} />

      {/* Links screen > 768px */}
      <div className="hidden space-x-3 text-xl md:flex text-text">
        {navLinks.map((link) => {
          const { name, href, offset } = link;
          return (
            <LinkS
              to={href}
              offset={offset}
              spy={true}
              activeClass="active"
              key={name}
              className="cursor-pointer link-underline"
            >
              {name}
            </LinkS>
          );
        })}
        <a
          href="/alison-tahiri-resume.pdf"
          target="_blank"
          rel="noopener"
          aria-label="link to my resume"
          className="font-semibold transition-colors duration-300 cursor-pointer text-text hover:text-primary"
        >
          CV
        </a>
      </div>
      {/* Links screen < 768px */}
      <div
        className={`${
          open ? "" : "-translate-y-72"
        }  transition-all duration-300 absolute left-0 flex flex-col items-center justify-around w-full py-4 text-xl  bg-primary text-white top-16 text-text md:hidden`}
      >
        {navLinks.map((link) => {
          const { name, href, offset } = link;
          return (
            <LinkS
              onClick={() => {
                setOpen(false);
              }}
              to={href}
              offset={-60}
              spy={true}
              activeClass="active"
              key={name}
              className="m-2 cursor-pointer link-underline"
            >
              {name}
            </LinkS>
          );
        })}

        <a
          href="/alison-tahiri-resume.pdf"
          target="_blank"
          rel="noopener"
          aria-label="link to my resume"
          className="font-bold text-white transition-colors duration-300 cursor-pointer"
        >
          CV
        </a>
      </div>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle mobile menu"
        type="button"
        className="relative order-3 w-5 h-6 cursor-pointer md:hidden group"
      >
        <span
          className={`transition-all duration-300 absolute h-1 w-full bg-primary group-hover:bg-hv hover:bg-hv rounded-lg left-0 top-1 ${
            open ? "rotate-135 top-3" : "rotate-0"
          }`}
        ></span>
        <span
          className={`absolute transition-all duration-300 h-1 w-full bg-primary group-hover:bg-hv rounded-lg left-0 top-3 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`transition-all duration-300 absolute h-1 w-full group-hover:bg-hv bg-primary rounded-lg left-0 ${
            open ? "-rotate-135 top-3" : "rotate-0 top-5"
          }`}
        ></span>
      </button>
    </nav>
  );
};

export default Nav;
