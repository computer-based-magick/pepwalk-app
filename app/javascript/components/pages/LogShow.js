import React from "react";

export const LogShow = () => {
  return (
    <div className=" bg-yellow-500 flex flex-col h-screen md:flex-row justify-center  flex-wrap gap-3 mt-0  py-4">
      <div className="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
        <div className="bg-indigo-500  flex h-20  items-center">
          <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">
            log.id
          </h1>
          <p className="ml-4 text-white uppercase">log.date</p>
        </div>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          log.workout_name
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          log.mood sad lethargic energetic sad
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          overall mood rating?
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">log.entry</p>
        <div className="flex justify-center px-5 mb-2 text-sm ">
          <button
            type="button"
            className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            edit
          </button>
          <button
            type="button"
            className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
