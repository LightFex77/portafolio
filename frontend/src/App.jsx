import React from "react";
import Header from "./components/Header";
import HomeSectionPresentation from "./components/HomeSectionPresentation";
import { BrowserRouter as Router } from "react-router-dom";
import HomeSectionProjects from "./components/HomeSectionProjects";
import "./styles/index.css";

const App = () => {
  return (
    <div className="home-container">
      <Router>
        <Header />
        <HomeSectionPresentation />
        <HomeSectionProjects />
      </Router>
    </div>
  );
};

export default App;
