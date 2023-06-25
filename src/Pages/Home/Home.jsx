import React from "react";
import Hero from "./Sections/HeroSection/Hero";
import TopSellingProducts from "./Sections/ToSellingProducts/TopSellingProducts";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
  return (
    <>
      <Hero />
      <TopSellingProducts />
      <CategoryProducts />
      <TopBlogs/>
    </>
  );
};

export default Home;
