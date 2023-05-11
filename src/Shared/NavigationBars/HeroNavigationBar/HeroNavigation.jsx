import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PageNavigationBar from "../PageNavigationBar.jsx/PageNavigationBar";
import styles from "./HeroNavigation.module.scss";
import SelectCategory from "./SelectCategory";

const theme = createTheme({
  palette: {
    black: {
      main: "black",
      contrastText: "white",
    },
  },
});

const HeroNavigation = () => {
  const [category, setCategory] = useState("");
  const location = useLocation();
  console.log(location);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "var(--primaryColor)", boxShadow: "unset" }}
      component=""
      position=""
      positionRelative
    >
      <Container className={styles.heroNavigation_Container}>
        <Grid
          container
          display={`flex`}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            lg={2}
            id="branding-section"
            display={`flex`}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <img src="/assets/logo.png" alt="" width={250} srcset="" />
            </Box>
          </Grid>
          <Grid
            item
            lg={8}
            id="search-category"
            display={`flex`}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              InputProps={{
                startAdornment: <SearchIcon />,
                style: { height: "42px" },
              }}
              id="outlined-basic"
              // label="Outlined
              placeholder="Search "
              variant="outlined"
              className={styles.searchField}
            />
            <Button
              variant="contained"
              className={styles.searchBtn}
              disableElevation
            >
              Search
            </Button>
          </Grid>
          <Grid
            item
            lg={2}
            id="dashboard-icons"
            display={`flex`}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className={styles.navigationIcons}
          >
            <ThemeProvider theme={theme}>
              <NavLink>
                <Badge
                  color={"black"}
                  className={styles.iconBadge}
                  badgeContent={5}
                  overlap="circular"
                >
                  <FavoriteBorderIcon className={styles.whishListIcon} />
                </Badge>
              </NavLink>
              <NavLink>
                <Badge
                  color={"black"}
                  className={styles.iconBadge}
                  badgeContent={2}
                  overlap="circular"
                >
                  <ShoppingCartIcon className={styles.cartIcon} />
                </Badge>
              </NavLink>
            </ThemeProvider>

            <div className={styles.loginSectionNav}>
              <div>
                <PermIdentityIcon className={styles.profileIcon} />
              </div>
              <div>
                <NavLink>
                  <p>Login</p>
                </NavLink>
                <NavLink>
                  <p>Register</p>
                </NavLink>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divider></Divider>
      {/* Secondary nav */}
      <Container className={styles.heroNavigation_Container}>
        <Grid
          container
          // sx={{ padding: "5px 0px" }}
          display={`flex`}
          alignItems={`center`}
        >
          <Grid item md={2}>
            <SelectCategory />
          </Grid>
          <Grid
            item
            md={10}
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
          >
            <PageNavigationBar />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default HeroNavigation;
