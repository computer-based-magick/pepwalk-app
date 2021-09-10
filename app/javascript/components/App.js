import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Logs from "./pages/Logs";
import DropDown from "./components/DropDown";
import { AddLog } from "./pages/AddLog";
import { Contact } from "./pages/Contact";
import WorkOut from "./pages/Workout";
import NotFound from "./pages/NotFound";

const getRandomWorkout = (workouts) => {
  return workouts[0]
}

function App(props) {
  const [workout, setWorkout] = useState({})
  const [logs, setLogs] = useState([])

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resizeddd");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    fetch(`https://wger.de/api/v2/exercise/?language=2&limit=10`)
      .then(response => response.json())
      .then(workouts => {
        console.log(workouts)
        setWorkout(getRandomWorkout(workouts.results))
      })
      .catch(errors => console.log(errors))
  }, [])

  useEffect(() => {
    fetch('/fitness_logs')
      .then(response => response.json())
      .then(logs => {
        console.log(logs)
        setLogs(logs)
      })
      .catch(errors => console.log(errors))
  }, [])


  return (
    <>
      <Router>
        <NavBar toggle={toggle}
                sign_in_route={props.sign_in_route}
                sign_out_route={props.sign_out_route}
                logged_in={props.logged_in}/>
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/logs" component={() => <Logs logs={logs} />} />
          <Route path="/addlog" component={AddLog} />
          <Route path="/contact" component={Contact} />
          <Route path="/workout" component={() => <WorkOut workout={workout} setWorkout={setWorkout}/>} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
