import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import HomeIcon from "@mui/icons-material/Home";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import StoreIcon from "@mui/icons-material/Store";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const MobileNavigation = () => {
  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        className="mobile-bottom-navigation"
      >
        <BottomNavigation
          style={{ backgroundColor: "var(--primaryColor)" }}
          showLabels
        >
          <BottomNavigationAction
            sx={{ color: "white", fontSize: "20px" }}
            label="Home"
            icon={
              <NavLink to={`/`} style={{ color: "white" }}>
                <HomeIcon />
              </NavLink>
            }
          />
          <BottomNavigationAction
            sx={{ color: "white", fontSize: "20px" }}
            label="Shop"
            icon={
              <NavLink to={`/products`} style={{ color: "white" }}>
                <StoreIcon />
              </NavLink>
            }
          />
          <BottomNavigationAction
            sx={{ color: "white", fontSize: "20px" }}
            label="Blogs"
            icon={
              <NavLink to={`/blogs`} style={{ color: "white" }}>
                <RssFeedSharpIcon />
              </NavLink>
            }
          />
          <BottomNavigationAction
            sx={{ color: "white", fontSize: "20px" }}
            label="Forum"
            icon={
              <NavLink to={`/forum`} style={{ color: "white" }}>
                <ForumSharpIcon />
              </NavLink>
            }
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default MobileNavigation;
