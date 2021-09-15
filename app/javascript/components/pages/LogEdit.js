import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogEdit = ({ oldLog, updateLog  }) => {
  let history = useHistory();
  const redirect = () => {
    history.push("/logs");
  };

  const [log, setLog] = useState({});

  useEffect (() => {
    setLog({
      "happy": oldLog.happy,
      "entry": oldLog.entry,
      "sad": oldLog.sad,
      "lethargic": oldLog.lethargic,
      "engergetic": oldLog.energetic,
      "date": oldLog.date,
      "workout_name": oldLog.workout_name
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    createLog({ ...log, workout_id: -1 });
    redirect();
  };

  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  console.log(oldLog)
  console.log(log.happy);

  return (
    <div className=" bg-red-500  py-6 flex flex-col justify-center sm:py-12">
      <div className="flex-auto py-3 w-11/12  sm:mx-auto">
        <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
          <form className="w-full">
            <div className="mb-5 relative" onChange={handleChange}>
              <input
                type="date"
                name="date"
                className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 "
              />
              <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                Date
              </label>
            </div>

            <div className="flex mb-5 relative " onChange={handleChange}>
              <div className=" my-auto px-3  ">Are you sad?</div>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="sad"
                  checked={log.sad === 1}
                  value={1}
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="sad"
                  checked={log.sad === 2}
                  value={2}
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="sad"
                  checked={log.sad === 3}
                  value={3}
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="sad"
                  checked={log.sad === 4}
                  value={4}
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="sad"
                  checked={log.sad === 5}
                  value={5}
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="flex mb-5 relative " onChange={handleChange}>
              <div className=" my-auto px-3  ">Are you happy?</div>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="happy"
                  checked={log.happy === 1}
                  value={1}
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="happy"
                  checked={log.happy === 2}
                  value={2}
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="happy"
                  checked={log.happy === 3}
                  value={3}
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="happy"
                  checked={log.happy === 4}
                  value={4}
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="happy"
                  checked={log.happy === 5}
                  value={5}
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="flex mb-5 relative " onChange={handleChange}>
              <div className="my-auto px-3  ">Do you feel energetic?</div>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="energetic"
                  checked={log.energetic === 1}
                  value={1}
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="energetic"
                  checked={log.energetic === 2}
                  value={2}
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="energetic"
                  checked={log.energetic === 3}
                  value={3}
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="energetic"
                  checked={log.energetic === 4}
                  value={4}
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="energetic"
                  checked={log.energetic === 5}
                  value={5}
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="flex mb-5 relative " onChange={handleChange}>
              <div className="my-auto px-3  ">Do you feel lethargic?</div>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="lethargic"
                  checked={log.lethargic === 1}
                  value={1}
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="lethargic"
                  checked={log.lethargic === 2}
                  value={2}
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="lethargic"
                  checked={log.lethargic === 3}
                  value={3}
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="lethargic"
                  checked={log.lethargic === 4}
                  value={4}
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="lethargic"
                  checked={log.lethargic === 5}
                  value={5}
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="mb-5 relative" onChange={handleChange}>
              <input
                name="workout_name"
                type="text"
                className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 "
              />
              <label
                for="exercise name"
                className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                What exercise have you done today if any?
              </label>
            </div>

            <div className="mb-5 relative" onChange={handleChange}>
              <input
                type="text"
                name="entry"
                className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
              />
              <label
                for="entry"
                className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
              >
                Describe your overall mood for your day?
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white p-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogEdit;
