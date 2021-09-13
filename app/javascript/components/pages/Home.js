import React from "react";
import Hero from "../components/Hero";
import NotLoggedIn from "./NotLoggedIn";

const Home = (props) => {
  return (
    <>
      {props && props.loggedIn && <Hero />}
      {props && !props.loggedIn && <NotLoggedIn signUp={props.signup} />}
    </>
  );
};

export default Home;
