import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Logs = ({ logs }) => {
  console.log({ logs });
  return (
    logs &&
    logs.map((log) => {
      return (
        <div
          key={log.id}
          className=" bg-yellow-500 flex flex-col h-screen md:flex-row justify-center  flex-wrap gap-3 mt-0  py-20"
        >
          <div className="bg-white h-80 w-72 shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="bg-indigo-500  flex h-20  items-center">
              <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">
                {log.id}
              </h1>
              <p className="ml-4 text-white uppercase">
                {format(new Date(log.date), "MMMM dd yy")}
              </p>
            </div>
            <p className="py-6 px-6 text-lg tracking-wide text-center">
              {log.workout_name}
            </p>
            <p className="py-6 px-6 text-lg tracking-wide text-center">
              {log.entry}
            </p>
            <Link to={`log/${log.id}`}>
              <div className="flex justify-center px-5 mb-2 text-sm ">
                <button
                  type="button"
                  className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                  More Info
                </button>
              </div>
            </Link>
          </div>
        </div>
      );
    })
  );
};

export default Logs;
