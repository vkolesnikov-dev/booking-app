import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: 30, fontSize: 25 }}
          >
            Meeting-scheduler
          </Typography>
          <NavLink className={"header-link"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"header-link"} to={"/calendar"}>
            Calendar
          </NavLink>
          <Button sx={{ marginLeft: 130 }} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
