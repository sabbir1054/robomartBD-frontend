import React from "react";
import { useGetHomeDataQuery } from "../../../../redux/api/api";
import SingleCategoryProducts from "./SingleCategoryProducts";
const CategoryProducts = () => {
  const { data: homeData, isLoading, isError } = useGetHomeDataQuery();

  return (
    <>
      {homeData?.catagory?.map((category) => (
        <SingleCategoryProducts
          title={category?.name}
          id={category?.id}
          fetchProducts={category?.product}
        />
      ))}
    </>
  );
};

export default CategoryProducts;
