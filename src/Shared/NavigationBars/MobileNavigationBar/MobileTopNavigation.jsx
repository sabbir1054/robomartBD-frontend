import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetUserQuery } from "../../../redux/api/api";
import { backendUrl } from "../../../utils/backendApiUrlProvider";
import AvarterBtnAdmin from "../HeroNavigationBar/AvarterBtnAdmin";
import AvaterBtnMeny from "../HeroNavigationBar/AvaterBtnMeny";
import NavigationDrawer from "./NavigationDrawer";
import SmallSearch2 from "./SmallSearch2";

const MobileTopNavigation = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [data, setData] = useState({});
  const { data: userData, isLoading, isError } = useGetUserQuery();
 
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
          spacing={0}
          padding={"1px"}
          display={`flex`}
          justifyContent={`space-between`}
        >
          <Grid item xs={8}>
            <NavLink to="/">
              {" "}
              <img src="/assets/logo.png" alt="" width={200} srcset="" />
            </NavLink>
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"end"}>
            {
              <div>
                <IconButton
                  onClick={() => setShowSearchBar(!showSearchBar)}
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginTop: "18px",
                  }}
                  size="small"
                >
                  <SearchIcon />
                </IconButton>
              </div>
            }
          </Grid>
          <Grid item xs={2} paddingRight={1} marginTop={1}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
           
              {data && data?.email && data?.role === "Admin" && (
                <AvarterBtnAdmin data={data} />
              )}
              {data && data?.email && data?.role === "Customer" && (
                <AvaterBtnMeny data={data} />
              )}

              {!userData && <NavigationDrawer />}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: showSearchBar ? "block" : "none",
              // transform: showSearchBar ? "translateY(0)" : "translateY(-100%)", // Move from top (-100%) to normal position (0%)
              // transition: "transform 0.3s ease-in",
            }}
          >
            <SmallSearch2 />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default MobileTopNavigation;
