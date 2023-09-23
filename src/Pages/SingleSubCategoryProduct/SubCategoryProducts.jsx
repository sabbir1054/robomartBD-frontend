import { Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../../Shared/SingleProductCard/SingleProductCard";
import CategoryList from "../Home/Sections/HeroSection/CategoryList";

const SubCategoryProducts = () => {
  const params = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50); // Set the number of items per page

  useEffect(() => {
    fetch(
      `https://api.robomartbd.com/api/catagory/${params.subCategoryId}/subcategory`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      });
  }, [params]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                {currentItems?.map((product) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={2}
                    display={"flex"}
                    justifyContent={"center"}
                    key={product.id}
                  >
                    <SingleProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              color="success"
              count={Math.ceil(categoryProducts.length / itemsPerPage)}
              page={currentPage}
              onChange={(event, page) => paginate(page)}
            />
          </div>
        </Grid>
      </Grid>
      <hr style={{ color: "#e2e2e2" }} />
    </div>
  );
};

export default SubCategoryProducts;
