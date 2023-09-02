import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../../Shared/SingleProductCard/SingleProductCard";
import CategoryList from "../Home/Sections/HeroSection/CategoryList";
const SubCategoryProducts = () => {
  const params = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  console.log(params);
  useEffect(() => {
    fetch(
      `https://api.robomartbd.com/api/catagory/${params.subCategoryId}/subcategory`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      });
  }, [params]);
  return (
    <div>
      {" "}
      <Grid container sx={{ backgroundColor: "#f2f2f2", minHeight: "80vh" }}>
        <Grid item xs={2} padding={2}>
          <CategoryList />
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Poppins" }}
          ></Typography>

          <Box paddingY={1} marginY={1}>
            <Box paddingY={2} display={"flex"} justifyContent={"space-around"}>
              <Grid container spacing={2}>
                {categoryProducts?.map((product) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={2}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <SingleProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <hr style={{ color: "#e2e2e2" }} />
    </div>
  );
};

export default SubCategoryProducts;
