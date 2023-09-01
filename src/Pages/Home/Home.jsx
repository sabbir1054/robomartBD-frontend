import React, { useEffect } from "react";
import { useGetHomeDataQuery } from "../../redux/api/api";
import { encryptAndStoreData } from "../../utils/encript";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import JoinOurCommunity from "./Sections/JoinOurCommunity/JoinOurCommunity";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
  const { data: homeData, isLoading, isError } = useGetHomeDataQuery();

  useEffect(() => {
    if ( homeData) {
      fetch(`https://api.robomartbd.com/api/products`)
        .then((res) => res.json())
        .then((data) => {
          encryptAndStoreData(data);
          console.log(data);
        });
    }
  }, [homeData]);

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
