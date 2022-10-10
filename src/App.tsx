import React from "react";
import "./App.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { Route, Router, Routes } from "react-router-dom";
import { Slide1 } from "./slide1";
import { Slide2 } from "./slide2";
import { Slide3 } from "./slide3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Slide1 />}></Route>
        <Route path="/2" element={<Slide2 />}></Route>
        <Route path="/3" element={<Slide3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
