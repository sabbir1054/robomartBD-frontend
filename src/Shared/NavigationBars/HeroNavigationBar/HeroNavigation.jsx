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
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useGetCartQuery, useGetUserQuery } from "../../../redux/api/api";
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
  const { data, isLoading, isError } = useGetUserQuery();
  const { data: cartData } = useGetCartQuery();
  const cartCount = cartData ? cartData.count : 0;
  const navigate = useNavigate();
  if (data) {
    // console.log(data[0]?.first_name);
  }

  const [category, setCategory] = useState("");
  const location = useLocation();

  const [changeIcon, setChangeIcon] = useState(false);
  //scrolling navbar
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setChangeIcon(true) : setChangeIcon(false);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "var(--primaryColor)",
          boxShadow: "unset",
          padding: changeIcon ? "10px 0px" : "",
        }}
        component=""
        position="sticky"
      >
        <Container className={styles.heroNavigation_Container}>
          <Grid container className={styles.heroNavGrid}>
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
                {changeIcon ? (
                  <SelectCategory />
                ) : (
                  <img src="/assets/logo.png" alt="" width={200} srcset="" />
                )}
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
              {data && (
                <ThemeProvider theme={theme}>
                  {/* <NavLink>
                    <Badge
                      color={"black"}
                      className={styles.iconBadge}
                      badgeContent={5}
                      overlap="circular"
                    >
                      <FavoriteBorderIcon className={styles.whishListIcon} />
                    </Badge>
                  </NavLink> */}
                  <NavLink to="/shopping-cart">
                    <Badge
                      color={"black"}
                      className={styles.iconBadge}
                      badgeContent={`${cartCount}`}
                      overlap="circular"
                    >
                      <ShoppingCartIcon className={styles.cartIcon} />
                    </Badge>
                  </NavLink>
                </ThemeProvider>
              )}

              <div className={styles.loginSectionNav}>
                <div>
                  {!data && <PermIdentityIcon className={styles.profileIcon} />}
                </div>

                {data ? (
                  <>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {data[0]?.first_name}
                    </p>
                  </>
                ) : (
                  <div>
                    <NavLink to="/login">
                      <p>Login</p>
                    </NavLink>
                    <NavLink to="/register">
                      <p>Register</p>
                    </NavLink>
                  </div>
                )}
              </div>
              {data && (
                // <NavLink to="/login">
                <Button
                  disableElevation
                  variant="contained"
                  style={{ background: "red", color: "white" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                // </NavLink>
              )}
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <AppBar
        sx={{ backgroundColor: "var(--primaryColor)", boxShadow: "unset" }}
        component=""
        position=""
        positionRelative
      >
        <Divider></Divider>
        {/* Secondary nav */}
        <Container className={styles.heroNavigation_Container}>
          <Grid
            container
            // sx={{ padding: "5px 0px" }}
            display={`flex`}
            alignItems={`center`}
            justifyContent={"center"}
          >
            {/* <Grid item md={2}>
              <SelectCategory />
            </Grid> */}
            <Grid
              item
              // md={10}
              display={`flex`}
              justifyContent={`center`}
              alignItems={`center`}
            >
              <PageNavigationBar />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default HeroNavigation;
