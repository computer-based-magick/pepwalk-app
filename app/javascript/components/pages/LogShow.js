import React from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns' 

 const LogShow = ({ log }) => {
  console.log("LOG!!!", log);
  return (
    <div className=" bg-yellow-500 flex flex-col h-screen md:flex-row justify-center  flex-wrap gap-3 mt-0  py-4">
      <div className="bg-white w-96 shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
        <div className="bg-indigo-500  flex h-20  items-center">
          <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">
            {log && log.id}
          </h1>
          <p className="ml-4 text-white uppercase">{log && format(new Date(log.date), 'MMMM dd yy')}</p>
        </div>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          {log && log.workout_name}
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          Happy Level {log && log.happy}
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          Sad Level {log && log.sad}
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          Energetic Rating {log && log.energetic}
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          Lethargic Rating {log && log.lethargic}
        </p>
        <p className="py-6 px-6 text-lg tracking-wide text-center">
          Overall Rating {log && log.entry}
        </p>
        <div className="flex justify-center px-5 mb-2 text-sm ">
          <button
            type="button"
            className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            edit
          </button>
          <Link to="/logs">
            <button
              type="button"
              className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
            >
              back to your logs
            </button>
          </Link>
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
export default LogShow;
