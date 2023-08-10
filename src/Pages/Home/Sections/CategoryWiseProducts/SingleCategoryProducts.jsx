import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SingleProductCard from "../../../../Shared/SingleProductCard/SingleProductCard";
import styles from "./CategoryProducts.module.scss";
const SingleCategoryProducts = ({ title,products }) => {
  return (
    <Container className={styles.categoryProductsWrapper}>
      <Box paddingY={1} marginY={1}>
        <Box
          className={styles.topSeelingHeading}
          borderBottom={"1px solid #d1d1d1"}
        >
          <Typography
            variant="h5"
            style={{
              borderLeft: "4px solid var(--primaryColor)",
              textTransform: "uppercase",
              fontFamily: "var(--primaryFont)",
            }}
          >
            {" "}
            {title}
          </Typography>
        </Box>

        <Box paddingY={2} display={"flex"} justifyContent={"space-around"}>
          {/* <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard /> */}

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              display={"flex"}
              justifyContent={"center"}
            >
              <SingleProductCard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              display={"flex"}
              justifyContent={"center"}
            >
              <SingleProductCard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              display={"flex"}
              justifyContent={"center"}
            >
              <SingleProductCard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              display={"flex"}
              justifyContent={"center"}
            >
              <SingleProductCard />
            </Grid>
            {/* <Grid item xs={12} sm={6} md={3}>
              <SingleProductCard />
            </Grid>
             */}
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          {" "}
          <NavLink to={"/sections/id"}>
            <Button variant="contained" className={styles.showMoreBtn}>
              Show More
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleCategoryProducts;
