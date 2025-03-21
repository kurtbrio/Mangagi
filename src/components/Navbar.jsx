import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SearchContext } from "../context/SearchContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { q, result, dispatch } = useContext(SearchContext);

  console.log(q);

  return (
    <nav className="w-screen h-fit px-2.5 py-5 flex items-center justify-around gap-5">
      <h1 className="!text-4xl font-bold">Mangagi</h1>
      <div className="hidden sm:flex items-center justify-between w-[80%]">
        <form className="flex items-center relative">
          <input
            type="text"
            value={q}
            placeholder="Search manga..."
            className="w-96 h-12 text-gray-500 !text-xl p-5"
            onChange={(e) =>
              dispatch({ type: "SET_QUERY", payload: e.target.value })
            }
          />
          <p className="absolute text-xl top-0 right-5 translate-x-1/2 translate-y-1/2">
            <a href="/filter">
              <i class="bx bxs-filter-alt"></i>
            </a>
          </p>
        </form>
        <ul className="flex gap-2">
          <li className="text-white bg-blue-400 rounded-full ">
            <a
              href="https://x.com/kurtbrio"
              className="w-8 h-8 text-xl flex items-center justify-center"
            >
              <i class="bx bxl-twitter"></i>
            </a>
          </li>
          <li className="text-white bg-black rounded-full">
            <a
              href="https://github.com/kurtbrio"
              className="w-8 h-8 text-xl flex items-center justify-center"
            >
              <i class="bx bxl-github"></i>
            </a>
          </li>
          <li className="text-white bg-[#2A475E] rounded-full">
            <a
              href="https://steamcommunity.com/profiles/76561199133854221/"
              className="w-8 h-8 text-xl flex items-center justify-center"
            >
              <i class="bx bxl-steam"></i>
            </a>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li className="text-2xl">
            <button>
              <i class="bx bx-scatter-chart"></i>
              <p className="text-sm">Random</p>
            </button>
          </li>
          <li className="text-2xl">
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <i class="bx bxs-moon"></i>
              ) : theme === "light" ? (
                <i class="bx bxs-sun"></i>
              ) : (
                ""
              )}
              <p className="text-sm">Mode</p>
            </button>
          </li>
        </ul>
        <button className="w-20 h-10 bg-red-50">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
