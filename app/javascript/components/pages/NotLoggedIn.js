import React from "react";

const NotLoggedIn = () => {
  return (
    <div className="bg-purple-500 h-screen flex flex-col justify-center items-center w-screen">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white font-black mb-14">
        PepWalk
      </h1>
      <br />
      <h1 className="lg:text-xl md:text-7xl sm:text-5xl text-3xl text-center text-white font-black mb-14 w-4/6 ">
        Welcome to PepWalk an app to motivate you through your fitness journey
        by adding a visual representation to what goes on internally when you
        exercise vs when you don't please sign up to get started!
      </h1>

      <br />

      <a
        className="py-6 px-10  bg-white rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce text-black font-extralight "
        href="/users/sign_in"
      >
        Login
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
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </a>

      <br />

      <a
        className="py-6 px-10  bg-white rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce text-black font-extralight "
        href="/users/sign_up"
      >
        Sign Up
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
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </a>

      <br />
    </div>
  );
};

export default NotLoggedIn;
