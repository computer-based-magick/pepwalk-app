import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggle }) => {
  return (
    <nav className="flex  justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
      <Link to="/" className="pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>{" "}
        <h3 className="flex flex-col ">PepWalk</h3>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/logs">
          Logs
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
        <Link className="p-4" to="/addlog">
          Add a Log
        </Link>
        <Link className="p-4" to="http://localhost:3000/users/sign_in">
          Login
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
