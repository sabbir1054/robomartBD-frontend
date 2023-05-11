import React from 'react';
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PrecisionManufacturingSharpIcon from "@mui/icons-material/PrecisionManufacturingSharp";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from '@mui/material';
import styles from "./PageNavigation.module.scss"
const PageNavigationBar = () => {
      const location = useLocation();
console.log(location);
    return (
      <Box
        id="page-menu"
        className={styles.navigationMenu_wrapper}
        sx={{}}
        display={`flex`}
        justifyContent={`space-center`}
        alignItems={`center`}
      >
        <NavLink
          to={`/`}
          className={`${
            location.pathname === "/" || location.pathname === "/home"
              ? styles.activeRoute
              : ""
          } ${styles.navigationMenu_Item}`}
        >
          <HomeIcon /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/products"
          className={`${
            location.pathname === "/products" ? styles.activeRoute : ""
          } ${styles.navigationMenu_Item}`}
        >
          <PrecisionManufacturingSharpIcon /> <span> Products</span>
        </NavLink>
        <NavLink
          to="/blogs"
          className={`${
            location.pathname === "/blogs" ? styles.activeRoute : ""
          } ${styles.navigationMenu_Item}`}
        >
          <RssFeedSharpIcon /> <span>Blogs</span>
        </NavLink>
        <NavLink
          to="/forum"
          className={`${
            location.pathname === "/forum" ? styles.activeRoute : ""
          } ${styles.navigationMenu_Item}`}
        >
          <ForumSharpIcon /> <span> Forum</span>
        </NavLink>
      </Box>
    );
};

export default PageNavigationBar;