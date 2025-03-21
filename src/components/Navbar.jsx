import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen h-fit px-2.5 py-5 flex items-center justify-around ">
      <h1 className="!text-4xl font-bold">Mangagi</h1>
      <div className="hidden sm:flex items-center justify-between w-[80%] gap-5">
        <form className="flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search manga..."
            className="bg-black w-96 h-12 text-gray-500 !text-xl"
          />
        </form>
        <ul className="flex gap-1">
          <li>X</li>
          <li>Ig</li>
          <li>Steam</li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <button>Random</button>
          </li>
          <li>
            <button>Theme</button>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
