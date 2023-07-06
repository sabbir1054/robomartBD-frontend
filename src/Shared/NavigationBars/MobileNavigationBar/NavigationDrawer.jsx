import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./MobileNavigation.module.scss";
import SmallSearch from "./SmallSearch";
import { NavLink } from "react-router-dom";

const NavigationDrawer = () => {
  const [open, setOpen] = useState();
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
              startIcon={<CloseIcon />}
              sx={{ width: "100%" }}
              variant="contained"
              className={styles.searchBtn}
              disableElevation
            >
              Close
            </Button>
            <Divider />
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
          >
            <NavLink to={"/shopping-cart"} className={styles.cartLink}>
              {/* <ListItemIcon> */}
              <ShoppingCartIcon />
              Cart
              {/* </ListItemIcon> */}
              {/* <ListItemText primary="Cart" /> */}
            </NavLink>
          </ListItem>
          <ListItem
            sx={{ display: "flex", justifyContent: "space-between" }}
            className={styles.drawerListItem}
          >
           
         
                <SearchIcon />
            
              <SmallSearch />
           
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
