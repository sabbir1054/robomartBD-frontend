import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SearchIcon from "@mui/icons-material/Search";
import {
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
        <List>
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
          <ListItem sx={{ borderBottom: "1px solid #cfcfcfdb" }}>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Your List Item Here" />
          </ListItem>
          <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
            <SearchIcon /> <SmallSearch />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
