import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, Box, Container, Divider, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  useGetCartQuery,
  useGetHomeDataQuery,
  useGetUserQuery,
} from "../../../redux/api/api";
import PageNavigationBar from "../PageNavigationBar.jsx/PageNavigationBar";
import AvarterBtnAdmin from "./AvarterBtnAdmin";
import AvaterBtnMeny from "./AvaterBtnMeny";
import styles from "./HeroNavigation.module.scss";
import SearchBar from "./SearchBar";
import { backendUrl } from "../../../utils/backendApiUrlProvider";

const theme = createTheme({
  palette: {
    black: {
      main: "black",
      contrastText: "white",
    },
  },
});

const HeroNavigation = () => {
  const [data, setData] = useState({});

  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  const { data: userData, isLoading, isError } = useGetUserQuery();

  const { data: cartData } = useGetCartQuery();
  const cartCount = cartData
    ? cartData?.items?.reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const location = useLocation();

  const [changeIcon, setChangeIcon] = useState(false);
  //scrolling navbar
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setChangeIcon(true) : setChangeIcon(false);
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

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);

    fetch(`${backendUrl}/api/profile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [userData]);
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "var(--primaryColor)",
          height: "73px",
          boxShadow: "unset",
          padding: changeIcon ? "0px 0px" : "",
        }}
        component=""
        position="fixed"
      >
        <Container className={styles.heroNavigation_Container} maxWidth={"xl"}>
          <Grid container className={styles.heroNavGrid} spacing={3}>
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
                <NavLink to={"/"}>
                  <img
                    src="/assets/logo.png"
                    alt=""
                    style={{ width: "100%", maxWidth: "200px" }}
                    srcset=""
                  />
                </NavLink>
              </Box>
            </Grid>
            <Grid
              item
              md={8}
              // id="search-category"
              display={`flex`}
              // direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <SearchBar />
            </Grid>
            <Grid
              item
              md={2}
              id="dashboard-icons"
              display={`flex`}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              className={styles.navigationIcons}
            >
              {data?.email && (
                <ThemeProvider theme={theme}>
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

                {data && data?.email && data?.role === "Admin" && (
                  <AvarterBtnAdmin data={data} />
                )}
                {data && data?.email && data?.role === "Customer" && (
                  <AvaterBtnMeny data={data} />
                )}

                {!data?.email && (
                  <>
                    <NavLink to="/login">
                      <p>Login</p>
                    </NavLink>
                    <p style={{ margin: "0px 3px" }}>/</p>
                    <NavLink to="/register">
                      <p> Register</p>
                    </NavLink>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <AppBar
        sx={{
          backgroundColor: "var(--primaryColor)",
          boxShadow: "unset",
          marginTop: "73px",
        }}
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
