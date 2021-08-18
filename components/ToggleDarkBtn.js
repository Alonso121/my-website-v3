import React from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";

const ToggleDarkBtn = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center">
      <IoMdSunny className="w-6 h-6 mr-1 text-text" />
      <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          value={theme}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="absolute block w-6 h-6 bg-gray-200 border-4 rounded-full appearance-none cursor-pointer border-primary toggle-checkbox"
        />
        <label
          htmlFor="toggle"
          className="block h-6 overflow-hidden rounded-full cursor-pointer bg-hv toggle-label"
        />
      </div>
      <IoMoonSharp className="w-5 h-5 ml-0.5 text-text" />
    </div>
  );
};

export default ToggleDarkBtn;
