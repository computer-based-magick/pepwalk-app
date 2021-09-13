import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="flex  justify-between items-center h-18 bg-white text-black relative shadow-sm font-mono">
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
      <div className="px-4 cursor-pointer md:hidden" onClick={props.toggle}>
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
        <h3 className="p-4 flex justify-end">
          {props.logged_in && props.current_user.email}
        </h3>
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
        {props.logged_in && (
          <a className="p-4" href={props.sign_out_route}>
            Logout
          </a>
        )}
        {!props.logged_in && (
          <a className="p-4" href={props.sign_in_route}>
            Login
          </a>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
