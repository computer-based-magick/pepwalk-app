import React from "react";
import { Link } from "react-router-dom";

const WorkoutList = ({ workoutResults}) => {
console.log(workoutResults)
  return (
    <>
      <div className="flex justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">Workouts</h1>
        <br />
        <br />
        <br />
      </div>
      <div className="bg-yellow-300">
        <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
          {workoutResults && workoutResults.map((workout) =>{
            return(
              <>
            <div className="flex relative">
            <h1 className="uppercase font-black">{workout.name}</h1>
              </div>
              </>
            )}
          )}
        </div>
      </div>
      </>
    );
  };

export default WorkoutList;
