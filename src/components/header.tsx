import { Button, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { Fade } from "react-awesome-reveal";

import logo from "../logo.png";

export const Header = () => {
  // const classes = useStyles();
  return (
    <>
      <img src={logo} width={`100px`} height={`100px`} />
      <Fade direction={"left"}>
        <Button style={{ marginLeft: "1000px" }}>fds</Button>
      </Fade>
      {/* <Typography sx={{ flexGrow: 1 }}> </Typography> */}
    </>
  );
};
