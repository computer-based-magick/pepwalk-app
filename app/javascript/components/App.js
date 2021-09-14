import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Logs from "./pages/Logs";
import DropDown from "./components/DropDown";
import AddLog from "./pages/AddLog";
import Contact from "./pages/Contact";
import WorkOut from "./pages/Workout";
import NotFound from "./pages/NotFound";
import LogShow from "./pages/LogShow";

const getRandomWorkout = (workouts) => {
  const randNum = Math.floor(Math.random() * workouts.length - 1);
  return workouts[randNum];
};



function App(props) {
  const [workout, setWorkout] = useState({});
  const [logs, setLogs] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getLogs = () => {
    fetch("/fitness_logs")
        .then((response) => response.json())
        .then((logs) => {
          setLogs(logs);
        })
        .catch((errors) => console.log(errors));
  }
  
  const createLog = (newLog) => {
    console.log(newLog)
    return fetch("/fitness_logs", {
      body: JSON.stringify(newLog),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Please check your submission.");
        }
        return response.json();
      })
      .then((payload) => {
        getLogs();
      })
      .catch((errors) => {
        console.log("apartment create errors", errors);
      });
  }

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

  useEffect(() => {
    fetch(`https://wger.de/api/v2/exercise/?language=2&limit=20`)
      .then((response) => response.json())
      .then((workouts) => {
        setWorkout(getRandomWorkout(workouts.results));
      })
      .catch((errors) => console.log(errors));
  }, []);

  useEffect(() => {
    getLogs()
  }, []);

  return (
    <>
      <Router>
        <NavBar
          signInRoute={props.sign_in_route}
          signOutRoute={props.sign_out_route}
          loggedIn={props.logged_in}
          currentUser={props.current_user}
          toggle={toggle}
        />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home signUp={props.new_user_route} loggedIn={props.logged_in} />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/logs" component={() => <Logs logs={logs} />} />
          <Route
            path="/log/:id"
            render={(props) => {
              let id = props.match.params.id;
              let log = logs.find((log) => log.id === +id);
              return <LogShow log={log} />;
            }}
          />
          <Route
            path="/addlog"
            component={() => 
              <AddLog workout={workout} currentUserId={props.current_user.id} createLog={createLog}/>
            }
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/workout"
            component={() => (
              <WorkOut workout={workout} setWorkout={setWorkout} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
