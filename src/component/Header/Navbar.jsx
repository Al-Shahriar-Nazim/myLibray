import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="m-2">
        Home
      </NavLink>
      <NavLink to="/listed" className="m-2">
        Listed Book
      </NavLink>
      <NavLink to="/pageRead" className="m-2">
        Page to Read
      </NavLink>
      {/* <NavLink to="/">Home</NavLink> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-3xl font-semibold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end text-white">
        <button className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95 mr-2">Sign In</button>
        <button className="px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-65 bg-blue-500 text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
