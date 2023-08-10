import { Button } from "@mui/material";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import React, { useEffect, useState } from "react";
import styles from "./HeroNavigation.module.scss";
const SelectCategory = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/catagorylist`)
      .then((res) => res.json())
      .then((data) => {
        setCategoriesList(data);
      });
  }, []);
  return (
    <>
      <Menu
        className={styles.menuWrapper}
        menuButton={
          <Button
            className={styles.categoryBtn}
            disableElevation
            variant="contained"
            sx={{
              // backgroundColor:"black",

              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              color: "white",
              "&:hover": {
                backgroundColor: "white !important",
                border: "1px solid #e2e2e2",
              },
            }}
          >
            {/* <DensityMediumIcon />{" "} */}
            <span style={{ paddingLeft: "2px" }}> Select Category</span>
          </Button>
        }
        transition
      >
        {categoriesList?.map((category) => (
          <MenuItem className={styles.menuItems}>{category?.name}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectCategory;
