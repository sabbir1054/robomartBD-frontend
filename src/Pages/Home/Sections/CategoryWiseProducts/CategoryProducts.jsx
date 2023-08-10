import React from "react";
import SingleCategoryProducts from "./SingleCategoryProducts";
const CategoryProducts = () => {
  return (
    <>
          <SingleCategoryProducts title={"Network Modules" } />
          <SingleCategoryProducts title={"Controller Boards" } />
          <SingleCategoryProducts title={"Battery and Chargers" } />
         
    </>
  );
};

export default CategoryProducts;
