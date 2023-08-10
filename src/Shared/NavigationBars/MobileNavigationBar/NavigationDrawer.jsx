import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Divider, Drawer, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MobileNavigation.module.scss";
import SmallSearch from "./SmallSearch";
import SelectCategory from "../HeroNavigationBar/SelectCategory";

const NavigationDrawer = () => {

  const [open, setOpen] = useState();
  const [isSearchTrigger, setIsSearchTrigger] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="text" onClick={toggleDrawer} sx={{ color: "white" }}>
        <MenuIcon />{" "}
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List className={styles.drawerList}>
          <ListItem sx={{ borderBottom: "1px solid gray" }}>
            <Button
              onClick={toggleDrawer}
              startIcon={<CloseIcon  />}
              sx={{ width: "100%", }}
              variant="contained"
              className={styles.searchBtn}
              disableElevation
            >
              Close
            </Button>
            <Divider />
          </ListItem>
          <ListItem sx={{ borderBottom: "1px solid gray" }}>
            <SelectCategory/>
            <Divider />
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
          >
            <NavLink to={"/shopping-cart"} className={styles.iLink}>
              <ShoppingCartIcon />
              Cart
            </NavLink>
          </ListItem>

          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
          >
            <NavLink to={"/login"} className={styles.iLink}>
              <LoginIcon />
              Login
            </NavLink>
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
          >
            <NavLink to={"/register"} className={styles.iLink}>
              <AppRegistrationIcon />
              Register
            </NavLink>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #cfcfcfdb",
            }}
            // className={styles.drawerListItem}
          >
            
            <SmallSearch />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
