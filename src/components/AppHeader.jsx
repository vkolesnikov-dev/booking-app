import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
          <Button sx={{ marginRight: 10 }} color="inherit">
            Home
          </Button>
          <Button sx={{ marginRight: 130 }} color="inherit">
            Calendar
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
