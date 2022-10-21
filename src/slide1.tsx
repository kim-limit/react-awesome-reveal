import ReactFullpage from "@fullpage/react-fullpage";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Box1 } from "./components/Box1";
import { Header } from "./components/header";
import { NavFrame } from "./components/NavFrame";
import { useScroll } from "./useScroll";
import backimg from "./backimg.jpg";
export const Slide1 = () => {
  return (
    <ReactFullpage
      //fullpage options

      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <NavFrame>
              <Header />
            </NavFrame>
            <div
              className="section"
              style={{ backgroundImage: `url(${backimg})` }}
            >
              <Box1 />
            </div>

            <div
              className="section"
              style={{
                backgroundColor: "#00ffff",
              }}
            >
              <div style={{ height: "90vh" }}>
                <Box1 />
              </div>
            </div>

            <div className="section">section3</div>
            <div className="section">
              <Box1 />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
