import { AppBar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetUserQuery } from "../../../redux/api/api";
import AvarterBtnAdmin from "../HeroNavigationBar/AvarterBtnAdmin";
import AvaterBtnMeny from "../HeroNavigationBar/AvaterBtnMeny";
import NavigationDrawer from "./NavigationDrawer";

const MobileTopNavigation = () => {
  const [data, setData] = useState({});
  const { data: userData, isLoading, isError } = useGetUserQuery();
  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);

    fetch(`https://robomartbd.com/api/profile`, {
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
          <Grid item paddingRight={1} marginTop={1}>
            {data && data?.email && data?.role === "Admin" && (
              <AvarterBtnAdmin data={data} />
            )}
            {data && data?.email && data?.role === "Customer" && (
              <AvaterBtnMeny data={data} />
            )}

            {!userData && <NavigationDrawer />}
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default MobileTopNavigation;
