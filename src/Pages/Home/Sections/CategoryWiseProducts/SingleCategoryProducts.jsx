import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SingleProductCard from "../../../../Shared/SingleProductCard/SingleProductCard";
import styles from "./CategoryProducts.module.scss";
const SingleCategoryProducts = ({ title }) => {
  return (
    <Container className={styles.categoryProductsWrapper}>
      <Box paddingY={5} marginY={2}>
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

        <Box paddingY={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SingleProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SingleProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SingleProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SingleProductCard />
            </Grid>
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          {" "}
          <Button variant="contained" className={styles.showMoreBtn}>
            Show More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleCategoryProducts;
