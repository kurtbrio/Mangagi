import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SearchContext } from "../context/SearchContext";
import SearchResult from "./SearchResult";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(SearchContext);
  const { loading, q, results } = state;

  const [isFocused, setIsFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen h-fit px-2.5 py-2 flex items-center justify-around gap-5 z-999 transition-colors duration-300 ${
        isScrolled
          ? theme === "light"
            ? "bg-white shadow-md"
            : "bg-[#3a3951] shadow-md"
          : "bg-none"
      }`}
    >
      <h1
        className={`text-4xl font-bold ${
          theme === "light" ? "!text-[#3a3951]" : "!text-white"
        } `}
      >
        Mangagi
      </h1>
      <div className="hidden sm:flex items-center justify-between w-[80%]">
        <form className="flex items-center relative">
          <input
            type="text"
            placeholder="Search manga..."
            value={q}
            className="min-w-72 h-10 font-medium text-md p-5"
            onChange={(e) =>
              dispatch({
                type: "SET_QUERY",
                payload: e.target.value.replace(/\s+/g, " "),
              })
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />

          <a
            href="/filter"
            className={`absolute text-xl top-1/2 right-5 translate-x-1/2 -translate-y-1/2 ${
              theme === "light" ? "!text-white " : "!text-[#3a3951]"
            }`}
          >
            <i className="bx bxs-filter-alt"></i>
          </a>

          {/* display search result */}
          {isFocused && q.length > 2 && (
            <SearchResult data={results} isLoading={loading} />
          )}
        </form>

        <ul className="flex gap-2">
          <li className="bg-blue-400 rounded-full">
            <a
              href="https://x.com/kurtbrio"
              className="w-8 h-8 text-xl flex items-center justify-center !text-white"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li className="bg-black rounded-full">
            <a
              href="https://github.com/kurtbrio"
              className="w-8 h-8 text-xl flex items-center justify-center !text-white"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="bg-[#2A475E] rounded-full">
            <a
              href="https://steamcommunity.com/profiles/76561199133854221/"
              className="w-8 h-8 text-xl flex items-center justify-center !text-white"
            >
              <i className="bx bxl-steam"></i>
            </a>
          </li>
        </ul>
        <ul className="flex gap-5 text-center">
          <li className="text-2xl">
            <button className="!text-[#ffbade] !bg-transparent">
              <i className="bx bx-scatter-chart"></i>
              <p className="text-sm">Random</p>
            </button>
          </li>
          <li className="text-2xl">
            <button
              onClick={toggleTheme}
              className="!text-[#ffbade] !bg-transparent"
            >
              {theme === "dark" ? (
                <i className="bx bxs-moon"></i>
              ) : theme === "light" ? (
                <i className="bx bxs-sun"></i>
              ) : (
                ""
              )}
              <p className="text-sm">Mode</p>
            </button>
          </li>
        </ul>
        <button className="primary-btn rounded-md font-bold w-20 h-10">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
