import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Button } from "@mui/material";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import React from "react";
import styles from "./HeroNavigation.module.scss";
const SelectCategory = () => {
  return (
    <>
      <Menu
        className={styles.menuWrapper}
        menuButton={
          <Button
            className={styles.categoryBtn}
            variant="text"
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              color: "white",
            }}
          >
            <DensityMediumIcon />{" "}
            <span style={{ paddingLeft: "2px" }}> Select Category</span>
          </Button>
        }
        transition
      >
        <MenuItem className={styles.menuItems}>Raspberry Pi</MenuItem>
        <MenuItem className={styles.menuItems}>DIY Robotics Kit</MenuItem>
        <MenuItem className={styles.menuItems}>Arduino Boards</MenuItem>
        <MenuItem className={styles.menuItems}>Sensors</MenuItem>
        <MenuItem className={styles.menuItems}>Controller Boards</MenuItem>
        <MenuItem className={styles.menuItems}>Wireless</MenuItem>
        <MenuItem className={styles.menuItems}>Motor and Motor Driver</MenuItem>
        <MenuItem className={styles.menuItems}>Battery & Chargers</MenuItem>
        <MenuItem className={styles.menuItems}>Projects</MenuItem>
      </Menu>
    </>
  );
};

export default SelectCategory;
