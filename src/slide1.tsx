import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

export const Slide1 = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    console.log(scrollY);
    // if (scrollY > 0) {
    //   navigate("/2");
    // }
  }, [scrollY]);

  return (
    <div
      style={{
        height: "100vh",
        padding: "0.5px",
        // width: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <Fade duration={3000}>
            <h2 style={{ fontSize: "4.2rem" }}>{"프리미엄 부동산 금융투자"}</h2>
            <h3 style={{ fontSize: "3.2rem" }}>
              {"자산가와 기관들의 투자가치를 당신에게"}
            </h3>
          </Fade>
        </Grid>
        <Grid item xs={7} display={"flex"}>
          <Fade duration={3000} direction={"left"}>
            <Box
              sx={{
                width: 300,
                height: 500,
                backgroundColor: "grey",
              }}
            />
          </Fade>
          <Fade duration={3000} direction={"right"}>
            <Box
              sx={{
                width: 300,
                height: 500,
                backgroundColor: "grey",
              }}
            />
          </Fade>
        </Grid>
      </Grid>
      {/* <Fade>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ></div>
      </Fade>
      <Zoom>줌</Zoom> */}
    </div>
  );
};
