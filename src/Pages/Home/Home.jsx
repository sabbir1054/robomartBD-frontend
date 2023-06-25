import React from "react";
import Hero from "./Sections/HeroSection/Hero";
import TopSellingProducts from "./Sections/ToSellingProducts/TopSellingProducts";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <TopSellingProducts />
      <CategoryProducts/>
    </>
  );
};

export default Home;
