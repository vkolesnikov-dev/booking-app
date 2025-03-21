import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
          <Typography
            variant="h6"
            component="div"
            sx={{ marginRight: 7, fontSize: 17 }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: 17 }}
          >
            Calendar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
