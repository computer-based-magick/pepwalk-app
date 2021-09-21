import React, { useState } from "react";
import { Link } from "react-router-dom";

const EQUIPMENT = {
  barbell: 1,
  dumbbell: 3,
  none: 7,
  bench: 8,
  kettlebell: 10
}

const constructUrl = (filters) => {
  const baseUrl = `https://wger.de/api/v2/exercise/?language=2&limit=20`
  
  let fields = ""
  filters.forEach( (element) => {
    fields += `&equipment=${element.id}`
  })

  return `${baseUrl}${fields}`
}

const WorkoutList = () => {

  const [filters, setFilters] = useState([])
  const [workoutResults, setWorkoutResults] = useState([])

  const fetchWorkout = (filters) => {
    fetch(constructUrl(filters))
      .then((response) => response.json())
      .then((workouts) => {
        setWorkoutResults(workouts.results)
      })
      .catch((errors) => console.log(errors));
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      const updateFilters = [...filters,
        {
          "name": e.target.name,
          "id": e.target.value
        }
      ]
      setFilters(updateFilters)
    } else {
      setFilters(filters.filter((equipment) => equipment.name !== e.target.name))
    }
  }

  const handleSubmit = (e) => {
      setWorkoutResults(fetchWorkout(filters))
  }

  return (
    <>
      <div className="bg-yellow-300">
      <div className="flex justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">Workouts</h1>
        <br />
        <br />
        <br />
      </div>
      <div className="max-w-sm mx-auto p-8">
        {Object.entries(EQUIPMENT).map( (equipment) => {
          return (
            <>
              <div>
              <label className="inline-flex items-center">
              <input
              name={equipment[0]}
              className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
              type="checkbox"
              value={equipment[1]}
              onChange={handleChange} />
              {equipment[0]}
              </label>
              </div>
            </>
          )
        })}
      <button
        onClick={handleSubmit}
        className="w-1/2 bg-white text-blue p-3 rounded-md"
      >
        Get workouts
      </button>

      <Link
          to="/workout"
        >
      <button
        className="w-1/2 bg-white text-blue p-3 rounded-md"
      >
        Get a random workout
      </button>
      </Link>
      
    </div>
        <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
          {workoutResults && workoutResults.map((workout) =>{
            return(
              <>
              <div className="flex relative">
                <h1 className="uppercase font-black" key={workout.id}>{workout.name}</h1>
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
