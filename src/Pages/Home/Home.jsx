import React from "react";
import Hero from "./Sections/HeroSection/Hero";
import TopSellingProducts from "./Sections/ToSellingProducts/TopSellingProducts";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";
import OfferBanner from "./Sections/OfferBanner/OfferBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <TopSellingProducts />
      <OfferBanner/>
      <CategoryProducts />
      <TopBlogs/>
    </>
  );
};

export default Home;
