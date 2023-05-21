import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
