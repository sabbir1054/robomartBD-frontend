import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./CategorySideMenu.module.scss";
import SubCategorySideMenu from "./SubCategorySideMenu";
const AllCategorySideMenu = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/catagorylist`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border:"1px solid #e2e2e2"
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0.7vh 0",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            style={{ fontFamily: "Poppins" }}
          >
            Categories
          </Typography>
        </div>
        {category &&
          category?.map((scat) => (
            <>
              <div className={styles.menu_item}>
                <span>{scat?.name}</span>
                <SubCategorySideMenu items={scat?.sub_category} />
              </div>
              <Divider />
            </>
          ))}
      </Box>
    </div>
  );
};

export default AllCategorySideMenu;
