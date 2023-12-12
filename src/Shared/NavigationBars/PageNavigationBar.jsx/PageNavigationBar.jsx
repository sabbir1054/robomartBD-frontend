import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./PageNavigation.module.scss";
const PageNavigationBar = () => {
  const location = useLocation();
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
        <StorefrontIcon /> <span> Shop </span>
      </NavLink>
      <NavLink
        to="/tutorials"
        className={`${
          location.pathname === "/tutorials" ? styles.activeRoute : ""
        } ${styles.navigationMenu_Item}`}
      >
        <PlayLessonIcon /> <span>Tutorials</span>
      </NavLink>
      <NavLink
        to="/blogs"
        className={`${
          location.pathname === "/blogs" ? styles.activeRoute : ""
        } ${styles.navigationMenu_Item}`}
      >
        <RssFeedSharpIcon /> <span> Blog</span>
      </NavLink>
      <NavLink
        to="/contact_us"
        className={`${
          location.pathname === "/contact_us" ? styles.activeRoute : ""
        } ${styles.navigationMenu_Item}`}
      >
        <ContactMailIcon /> <span style={{marginLeft:"5px"}}> Contact</span>
      </NavLink>
    </Box>
  );
};

export default PageNavigationBar;
