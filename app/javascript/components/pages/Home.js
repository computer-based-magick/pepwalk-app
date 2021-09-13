import React from "react";
import Hero from "../components/Hero";

const Home = ({loggedIn}) => {
  return (
    <>
    {loggedIn &&
      <Hero />
    }
    {!loggedIn &&
      <>
      <h1>Log in first</h1>
      <p>text</p>
      </>
    }
    </>
  );
};

export default Home;
