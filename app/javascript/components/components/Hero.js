import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-purple-500 h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white font-black mb-14">
        PepWalk
      </h1>
      <h1 className="lg:text-xl md:text-7xl sm:text-5xl text-3xl text-center text-white font-black mb-14 w-4/6">
        Welcome to PepWalk to get started create an entry by clicking add a log
        button down below. If you don't have a workout in mind feel free to use
        our get a workout button to give you some inspiration.
      </h1>
      <br />

      <Link
        className="py-6 px-10  bg-white rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce text-black font-extralight "
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
      <br />

      <Link
        className="py-6 px-10  bg-white rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce text-black font-extralight "
        to="/workout"
      >
        Get A Workout
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
