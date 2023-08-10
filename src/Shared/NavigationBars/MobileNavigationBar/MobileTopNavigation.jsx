import { AppBar, Grid } from "@mui/material";
import React from "react";
import NavigationDrawer from "./NavigationDrawer";
import { NavLink } from "react-router-dom";

const MobileTopNavigation = () => {
  return (
    <>
      <AppBar
        className="mobile-top-navigation"
        sx={{
          backgroundColor: "var(--primaryColor)",
          boxShadow: "unset",
        }}
        component=""
        position="sticky"
      >
        <Grid
          container
          padding={"1px"}
          display={`flex`}
          justifyContent={`space-between`}
        >
          <Grid item>
            <NavLink to="/">
              {" "}
              <img src="/assets/logo.png" alt="" width={200} srcset="" />
            </NavLink>
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
