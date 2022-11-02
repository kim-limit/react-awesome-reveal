import ReactFullpage from "@fullpage/react-fullpage";
import { Button, Grid } from "@mui/material";
import { Box1 } from "./components/Box1";
import { Header } from "./components/header";
import { NavFrame } from "./components/NavFrame";

import backimg from "./backimg.jpg";

export const Slide1 = () => {
  return (
    <>
      <NavFrame>
        <Header />
      </NavFrame>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                style={{ backgroundImage: `url(${backimg})` }}
              >
                <Box1 />
                <Button>fsad</Button>
              </div>

              <div
                className="section"
                style={
                  {
                    // backgroundColor: "#00ffff",
                  }
                }
              >
                <div>
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
    </>
  );
};
