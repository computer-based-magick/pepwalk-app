import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({isOpen, toggle}) => {
  return (
    <div
      className={
        isOpen ? "grid rows-4 text-center items-center bg-yellow-500" : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/logs">
        Your Logs
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
    </div>
  );
};
export default DropDown;
