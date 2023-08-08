import React, { useEffect } from "react";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import JoinOurCommunity from "./Sections/JoinOurCommunity/JoinOurCommunity";
import OfferBanner from "./Sections/OfferBanner/OfferBanner";
import TopSellingProducts from "./Sections/ToSellingProducts/TopSellingProducts";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";
import localforage from "localforage";
import { useGetUserQuery } from "../../redux/api/api";

const Home = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  if (data) {
    console.log(data[0].first_name);
  }
    // useEffect(() => {
    //   // Retrieve the access token from local storage
    //   localforage
    //     .getItem("accessToken")
    //     .then((accessToken) => {
    //       if (accessToken) {
    //         console.log("Access token retrieved:", accessToken);
    //         // You can use the accessToken as needed (e.g., for making API requests)
    //       } else {
    //         console.log("Access token not found in local storage");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error retrieving access token:", error);
    //     });
    // }, []);
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
