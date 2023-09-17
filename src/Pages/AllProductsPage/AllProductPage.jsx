import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllCategorySideMenu from "../../Shared/AllCategoryListSideMenu/AllCategorySideMenu";
import { useGetCategoryListProductsQuery } from "../../redux/api/api";
import AllProductsSection from "./Components/AllProductsSection/AllProductsSection";
import CategorySection from "./Components/CategorySection/CategorySection";

const AllProductPage = () => {
  const {
    data: categoryList,
    isLoading,
    isError,
  } = useGetCategoryListProductsQuery();
  console.log(categoryList);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/catagorylist`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      });
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} padding={2}>
          <AllCategorySideMenu category={categoryList} />
        </Grid>
        <Grid item xs={12} sm={12} md={10} paddingY={2}>
          <Container maxWidth="xxl" sx={{ borderLeft: "1px solid #f2f2f2" }}>
            <CategorySection categoryList={categoryList} />
            <AllProductsSection />
            {/*   {allProducts?.length > 0 &&
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
                        md={4}
                        lg={3}
                        xl={2}
                        display={"flex"}
                        justifyContent={"center"}
                        marginTop={2}
                      >
                        <SingleProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                </>
              ))} */}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllProductPage;
