import { Collapse, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetHomeDataQuery } from "../../../../redux/api/api";
import styles from "./Hero.module.scss";
import SingleListItem from "./SingleListItem";
const CategoryList = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
  console.log(
    homeData1?.catagorylist?.slice(5, homeData1?.catagorylist?.length)
  );
  console.log(homeData1?.catagorylist);

  const params = useParams();
  const navigation = useNavigate();

  const handleNavigation = (id) => {
    navigation(`/products/categories/${id}`);
  };

 

  return (
    <>
      <Box
        className={styles.categoryList}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          borderRadius: "10px",
          boxShadow: "2px 1px 25px #e9e9e9",
        }}
      >
        <div style={{ backgroundColor: "var(--primaryColor)" }}>
          <h2
            style={{
              marginLeft: "1rem",
              padding: "10px 0",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Categories
          </h2>
        </div>
        {/* <nav aria-label="main mailbox folders">
          <List>
            {homeData1?.catagorylist?.slice(0, 7).map((category) => (
              <>
                <Divider />
                <ListItem
                  disablePadding
                  onClick={() => handleNavigation(category?.id)}
                >
                  <ListItemButton
                    sx={{
                      backgroundColor:
                        params?.categoryId == category?.id
                          ? "var(--primaryColor)"
                          : "white",
                    }}
                  >
                    <ListItemText primary={`${category?.name}`} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
            <Divider />
            <SelectCategory
              categoriesList={homeData1?.categoriesList?.slice(
                8,
                homeData1?.categoriesList?.length - 1
              )}
            />
          </List>
        </nav> */}
        <div>
          <List component="nav">
            {homeData1?.catagorylist?.slice(0, 7)?.map((category) => (
              <SingleListItem category={category} />
            ))}
            {/* <ListItemButton onClick={handleClick}>
              <ListItemText primary="Category 1" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton> */}
          
            {/* Add more categories and subcategories */}
          </List>
        </div>
        <Divider />
      </Box>
    </>
  );
};

export default CategoryList;
