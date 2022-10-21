import { Button, Typography } from "@mui/material";

import logo from "../logo.png";

export const Header = () => {
  // const classes = useStyles();
  return (
    <>
      <img src={logo} width={`100px`} height={`100px`} />
      <Typography sx={{ flexGrow: 1 }}> </Typography>
    </>
  );
};
