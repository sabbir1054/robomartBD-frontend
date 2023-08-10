import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleProductCard from "../../Shared/SingleProductCard/SingleProductCard";
import CategoryList from "../Home/Sections/HeroSection/CategoryList";

const AllProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/catagorylist`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} padding={2}>
          <CategoryList />
        </Grid>
        <Grid item xs={12} sm={12} md={10} paddingY={2}>
          <Container maxWidth="xxl" sx={{borderLeft:"1px solid #f2f2f2"}}>
            {allProducts?.length > 0 &&
              allProducts?.map((singleCategory) => (
                <>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      paddingY: 2,
                    }}
                  >
                    {" "}
                    {singleCategory?.name}{" "}
                  </Typography>{" "}
                  <hr style={{ borderColor: "#f2f2f2", marginBottom: "5px" }} />
                  <Grid container spacing={2} marginBottom={2}>
                    {singleCategory?.product?.map((product) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        display={"flex"}
                            justifyContent={"center"}
                            marginTop={2}
                      >
                        <SingleProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                </>
              ))}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllProductPage;
