import React from "react";
import LogCard from "../components/LogCard";
import { Link } from "react-router-dom"


const Logs = ({ logs }) => {
  return (
    <>
    <Link to="/barchart">
            <button
              type="button"
              className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              View your progress
            </button>
          </Link>
            <div className=" bg-yellow-500 flex flex-col h-screen md:flex-row justify-center  flex-wrap gap-3 mt-0  py-20">
      {logs && logs.map((log) => <LogCard log={log} />)}
      </div>
      </>
  );
};

export default Logs;
