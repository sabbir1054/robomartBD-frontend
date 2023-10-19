import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./CategorySideMenu.module.scss";
import SubCategorySideMenu from "./SubCategorySideMenu";
const AllCategorySideMenu = ({ category }) => {
  const [viewAll, setViewAll] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location?.pathname === "/" || location?.pathname === "/home") {
      setViewAll(true);
    }
  }, [location]);


  return (
    <div className={styles.sideMenu}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e2e2e2",
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
                <NavLink
                  to={`/products/categories/${scat?.id}/${scat?.name?.replace(
                    / /g,
                    "_"
                  )}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span style={styles.menuName}>{scat?.name}</span>
                </NavLink>
                {scat?.sub_category?.length > 0 && (
                  <SubCategorySideMenu items={scat?.sub_category} />
                )}
              </div>
              <Divider />
            </>
          ))}
        {viewAll && (
          <div
            style={{
              padding: "0.7vh 0",
              borderRadius: "0px 0px 5px 5px",
            }}
          >
            <NavLink
              to={"/products"}
              style={{ textDecoration: "none", color: "black" }}
              className={styles.link}
            >
              <Typography
                variant="subtitle1"
                textAlign={"center"}
                style={{ fontFamily: "Poppins" }}
              >
                Show All
              </Typography>
            </NavLink>
          </div>
        )}
      </Box>
    </div>
  );
};

export default AllCategorySideMenu;
