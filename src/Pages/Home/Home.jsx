import React from "react";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import JoinOurCommunity from "./Sections/JoinOurCommunity/JoinOurCommunity";
import OfferBanner from "./Sections/OfferBanner/OfferBanner";
import TopSellingProducts from "./Sections/ToSellingProducts/TopSellingProducts";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
  return (
    <>
      <Hero />
      <TopSellingProducts />
      <OfferBanner />
      <CategoryProducts />
      <TopBlogs />
      <JoinOurCommunity />
    </>
  );
};

export default Home;
