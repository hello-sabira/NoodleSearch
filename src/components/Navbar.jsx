import React from "react";
import { Link } from "react-router-dom";
import off from "../assets/off.png"
import on from "../assets/on.png"
import { Search } from "./Search";

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <p className="text-2xl bg-red-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-red-500  hover:shadow-xl">
          N<span className="text-sm">🍜🍜</span>dle
        </p>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="text dark:bg-gray-50 dark:text-gray-900 bg-white border-2 border-gray-300 rounded-full px-2 py-1 hover:shadow-xl "
      >
        {darkTheme ?<img src={off} />: <img src={on} />}
      </button>
    </div>
    <Search />
  </div>
);
