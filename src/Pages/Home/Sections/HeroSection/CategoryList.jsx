import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetHomeDataQuery } from "../../../../redux/api/api";
import styles from "./Hero.module.scss";
const CategoryList = () => {
    const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  const [categoriesList, setCategoriesList] = useState([]);
  const params = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/catagorylist`)
      .then((res) => res.json())
      .then((data) => {
        setCategoriesList(data);
      });
  }, []);

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
        <nav aria-label="main mailbox folders">
          <List>
            {homeData1?.catagorylist?.map((category) => (
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
           
          </List>
        </nav>
        <Divider />
      </Box>
    </>
  );
};

export default CategoryList;
