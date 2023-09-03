import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SingleProductCard from "../../../../Shared/SingleProductCard/SingleProductCard";
import styles from "./CategoryProducts.module.scss";
const SingleCategoryProducts = ({ title, fetchProducts, id }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [data, setData] = useState([]);
  const [maxProductNum, setMaxProductNum] = useState(
    screenWidth > 1200 ? 6 : 4
  );
  const [products, setProducts] = useState(fetchProducts ? fetchProducts : []);
  useEffect(() => {
    if (products?.length > maxProductNum) {
      setProducts(products.slice(0, maxProductNum));
    } else {
      setProducts(products);
    }
  }, []);

  return (
    <Container maxWidth>
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
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            {" "}
            {title}
          </Typography>
        </Box>

        <Box paddingY={2} display={"flex"} justifyContent={"space-around"}>
          <Grid container spacing={2}>
            {products?.map((product) => (
              <>
                {" "}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  lg={2}
                  xl={2}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <SingleProductCard product={product} />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          {" "}
          <NavLink
            to={`/products/categories/${id}/${title.replace(/ /g, "_")}`}
          >
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
