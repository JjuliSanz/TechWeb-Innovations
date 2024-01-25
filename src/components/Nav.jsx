import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center sm:px-16 px-8 py-4 w-full mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      {/* Home */}
      <NavLink
        to="/"
        className="px-2 glassmorphism flex items-center justify-center font-bold text-2xl tracking-widest text-rose hover:scale-90 ease-in-out duration-300 border border-rose rounded-lg"
      >
        TI
      </NavLink>
      <ul className="flex text-lg gap-7 font-semibold">
        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-slate-100 bg-rose px-2 hover:scale-90 ease-in-out duration-300 border border-rose rounded-lg"
              : "text-slate-100 glassmorphism px-2 hover:scale-90 ease-in-out duration-300 border border-rose rounded-lg"
          }
        >
          About
        </NavLink>
        {/* Projects */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-slate-100 bg-rose px-2 hover:scale-90 ease-in-out duration-300 border border-rose rounded-lg"
              : "text-slate-100 glassmorphism px-2 hover:scale-90 ease-in-out duration-300 border border-rose rounded-lg"
          }
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
