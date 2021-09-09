import React from "react";
import { Link } from "react-router-dom";

const WorkOut = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">Random Workout</h1>
        <br />
        <br />
        <br />
      </div>
      <div class="bg-yellow-300">
        <div class="flex flex-col justify-center items-center min-h-screen min-w-full">
          <div class="flex relative">
            <div class="w-72 h-40 bg-green-400 transform transition-all skew-x-12 -skew-y-12 absolute rounded-lg"></div>
            <div class="w-72 h-40 bg-yellow-400 transform transition-all skew-x-12 -skew-y-12 absolute -top-4 -left-4 rounded-lg"></div>
            <div class="w-72 h-40 bg-red-400 transform transition-all skew-x-12 -skew-y-12 absolute -top-8 -left-8 rounded-lg"></div>
            <div class="w-72 h-40 bg-black transform transition-all skew-x-12 -skew-y-12 absolute -top-12 -left-12 rounded-lg"></div>
            <div class="w-72 h-40 bg-purple-400 transform transition-all skew-x-12 -skew-y-12 absolute -top-16 -left-16 rounded-lg"></div>
            <div class="w-72 h-40 bg-white flex justify-center items-center border-2 border-black transform transition-all skew-x-12 -skew-y-12 absolute -top-20 -left-20 rounded-lg">
              <h1 className="uppercase font-black">500 air squats</h1>
            </div>
          </div>
        </div>

        <Link
          className="py-9 px-10  bg-white rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce text-black font-extralight "
          to="/addlog"
        >
          Add A Log
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default WorkOut;
