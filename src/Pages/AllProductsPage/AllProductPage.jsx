import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllCategorySideMenu from "../../Shared/AllCategoryListSideMenu/AllCategorySideMenu";
import SmallSearch from "../../Shared/NavigationBars/MobileNavigationBar/SmallSearch";
import { useGetCategoryListProductsQuery } from "../../redux/api/api";
import AllProductsSection from "./Components/AllProductsSection/AllProductsSection";
import CategorySection from "./Components/CategorySection/CategorySection";
import styles from "./AllProductsPage.module.scss"

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
        <Grid item xs={12} sm={12} md={2} padding={2} className={styles.shop_search} style={{display:"none"}}>
          <SmallSearch />
        </Grid>
        <Grid item xs={12} sm={12} md={2} padding={2}>
          <AllCategorySideMenu category={categoryList} />
        </Grid>
        <Grid item xs={12} sm={12} md={10} paddingY={2}>
          <Container maxWidth="xxl" sx={{ borderLeft: "1px solid #f2f2f2" }}>
            <CategorySection categoryList={categoryList} />
            <AllProductsSection />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllProductPage;
