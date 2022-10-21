import { Box, Grid } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import phone from "../phone.jpg";
export const Box1 = () => {
  return (
    <div style={{}}>
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
            <img src={phone} />
          </Fade>
          <Fade duration={3000} direction={"right"}>
            <img src={phone} />
          </Fade>
        </Grid>
      </Grid>
      {/* <Button onClick={navigatePage}>{"navigate page"}</Button> */}
    </div>
  );
};
