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

function App() {
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

  return (
    <>
      <Router>
        <NavBar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/logs" component={Logs} />
          <Route path="/addlog" component={AddLog} />
          <Route path="/contact" component={Contact} />
          <Route path="/workout" component={WorkOut} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
