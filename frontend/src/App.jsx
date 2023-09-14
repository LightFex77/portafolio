import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import "./styles/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
    </>
  );
};

export default App;
