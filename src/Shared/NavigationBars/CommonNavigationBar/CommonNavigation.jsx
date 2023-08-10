import { AppBar, Box, Container, Grid } from "@mui/material";
import React from "react";
import PageNavigationBar from "../PageNavigationBar.jsx/PageNavigationBar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import styles from "./CommnNavigation.module.scss"
import { NavLink } from "react-router-dom";
// this navigation is  use in blogs and forum page
const CommonNavigation = () => {
  return (
    <AppBar
      sx={{ backgroundColor: "var(--primaryColor)", boxShadow: "unset" }}
      component=""
      position="relative"
    >
      <Container maxWidth="lg" className={styles.heroNavigation_Container}>
        <Grid
          container
          display={`flex`}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={2}
            id="branding-section"
            display={`flex`}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <NavLink to="/">
                {" "}
                <img src="/assets/logo.png" alt="" width={200} srcset="" />
              </NavLink>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
          >
            <PageNavigationBar />
          </Grid>
          <Grid item md={2}>
            <div className={styles.loginSectionNav}>
              <div>
                <PermIdentityIcon className={styles.profileIcon} />
              </div>
              <div>
                <NavLink to={"/login"}>
                  <p>Login</p>
                </NavLink>
                <NavLink to="/register">
                  <p>Register</p>
                </NavLink>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default CommonNavigation;
