import React from "react";
import SingleCategoryProducts from "./SingleCategoryProducts";
const CategoryProducts = () => {
  return (
    <>
      <SingleCategoryProducts title={"Best Selling Products"} id={ 1} />
      <SingleCategoryProducts title={"Electronics"} id={2 } />
      <SingleCategoryProducts title={"Micro Controller"} id={3} />
    </>
  );
};

export default CategoryProducts;
