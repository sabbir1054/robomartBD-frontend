import React, { useEffect, useState } from "react";
import { useGetHomeDataQuery, useGetUserQuery } from "../../redux/api/api";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import JoinOurCommunity from "./Sections/JoinOurCommunity/JoinOurCommunity";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
 


  return (
    <>
      <Hero />
     
      <CategoryProducts />
      <TopBlogs />
      <JoinOurCommunity />
    </>
  );
};

export default Home;
