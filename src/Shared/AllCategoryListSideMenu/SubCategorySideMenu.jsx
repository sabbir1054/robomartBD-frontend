import { List, ListItemButton } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./CategorySideMenu.module.scss";
const SubCategorySideMenu = ({ items }) => {
  const navigate = useNavigate();

  const navigateToSubcategory = (path) => {
    navigate(`/${path}`);
  };

  return (
    <List
      sx={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: "100%",
        display: "none",
      }}
      className={styles.sub_menu}
    >
      {items?.map((item, index) => (
        <ListItemButton key={index} className={styles.sub_menu_item}>
          <NavLink
            to={`/products/scategories/${item?.id}/${item?.name?.replace(
              / /g,
              "_"
            )}`}
            style={{ textDecoration: "none", color: "black" }}
            className={styles.subMenuName}
          >
            {item?.name}
          </NavLink>
        </ListItemButton>
      ))}
    </List>
  );
};

export default SubCategorySideMenu;
