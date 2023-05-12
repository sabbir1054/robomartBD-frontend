import { AppBar, Grid } from "@mui/material";
import React from "react";
import NavigationDrawer from "./NavigationDrawer";

const MobileTopNavigation = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "var(--primaryColor)",
          boxShadow: "unset",
        }}
        component=""
        position="sticky"
      >
        <Grid container padding={"1px"} display={`flex`} justifyContent={`space-between`}>
          <Grid item>
            <img
              src="/assets/logo.png"
              alt=""
              srcset=""
              style={{ width: "30vw" }}
            />
          </Grid>
          <Grid item>
            <NavigationDrawer />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default MobileTopNavigation;
