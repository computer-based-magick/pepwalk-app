import React from "react";

const Logs = () => {
  return (
    <div className=" bg-yellow-500 flex  flex-col h-screen md:flex-row justify-center  flex-wrap gap-3 mt-10  py-40">
      <div className="">
        <div className="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div className="bg-indigo-500  flex h-20  items-center">
            <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">1</h1>
            <p className="ml-4 text-white uppercase">September 4 2021</p>
          </div>
          <p className="py-6 px-6 text-lg tracking-wide text-center">
            Went for a bike ride in Julian feeling enlightened
          </p>
          <div className="flex justify-center px-5 mb-2 text-sm ">
            <button
              type="button"
              className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              edit
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-green-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div className="h-20 bg-green-500 flex items-center ">
            <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">2</h1>
            <p className=" text-white text-base ml-4 uppercase">September 5 2021</p>
          </div>
          <p className="py-6 px-6 text-lg tracking-wide text-center">
            Went swimming at Sunset Cliffs feeling amazing
          </p>
          <div className="flex justify-center px-5 mb-2 text-sm ">
            <button
              type="button"
              className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
            >
              edit
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-red-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div className="h-20 bg-red-500 flex items-center ">
            <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">3</h1>
            <p className=" text-white text-base ml-4 uppercase">September 6 2021</p>
          </div>
          <p className="py-6  px-6 text-lg tracking-wide text-center">
            No exercise today feeling meh
          </p>
          <div className="flex justify-center px-5 mb-2 text-sm ">
            <button
              type="button"
              className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
