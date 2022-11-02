import React from "react";
import "./App.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { Route, Router, Routes } from "react-router-dom";
import { Slide1 } from "./slide1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Slide1 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
