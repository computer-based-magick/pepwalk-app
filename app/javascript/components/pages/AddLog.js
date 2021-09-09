import React from "react";
import { useHistory } from "react-router-dom";

export const AddLog = () => {
  let history = useHistory();
  const redirect = () => {
    history.push("/logs");
  };
  return (
    <div className=" bg-red-500  py-6 flex flex-col justify-center sm:py-12">
      <div className="flex-auto py-3 w-11/12  sm:mx-auto">
        <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
          <form className="w-full">
           
            <div className="mb-5 relative">
              <input
                type="date"
                id="date"
                className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                placeholder="password"
                autocomplete="off"
              />
              <label
                for="password"
                className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
              >
                Date
              </label>
            </div>

            <div className="mb-5 relative">
              <input
                type="email"
                id="email"
                className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                placeholder="name@example.com"
                autocomplete="off"
              />
              <label
                for="email"
                className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                What exercise have you done today if any?
              </label>
            </div>

            <div className="flex mb-5 relative ">
              <div className=" my-auto px-3  ">
                Are you sad?
              </div>
              <label className="flex radio p-5 cursor-pointer ">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group1"
                />
                <div className="title px-2">0</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group1"
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="group1"
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group1"
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group1"
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group1"
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="flex mb-5 relative ">
              <div className=" my-auto px-3  ">
                Are you happy?
              </div>
              <label className="flex radio p-5 cursor-pointer ">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group2"
                />
                <div className="title px-2">0</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group2"
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="group2"
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group2"
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group2"
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group2"
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="flex mb-5 relative ">
              <div className="my-auto px-3  ">
                Do you feel energetic?
              </div>
              <label className="flex radio p-5 cursor-pointer ">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group3"
                />
                <div className="title px-2">0</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group3"
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="group3"
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group3"
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group3"
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group3"
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="flex mb-5 relative ">
              <div className="my-auto px-3  ">
                How did you sleep?
              </div>
              <label className="flex radio p-5 cursor-pointer ">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group4"
                />
                <div className="title px-2">0</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group4"
                />
                <div className="title px-2">1</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  className="my-auto transform scale-125"
                  type="radio"
                  name="group4"
                />
                <div className="title px-2">2</div>
              </label>

              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group4"
                />
                <div className="title px-2">3</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group4"
                />
                <div className="title px-2">4</div>
              </label>
              <label className="flex radio p-5 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="group4"
                />
                <div className="title px-2">5</div>
              </label>
            </div>

            <div className="mb-5 relative">
              <input
                type="email"
                id="email"
                className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                placeholder="happy"
                autocomplete="off"
              />
              <label
                for="email"
                className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
              >
                Any details you want to add about your mood or your day?
              </label>
            </div>

            <button
              onClick={redirect}
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
