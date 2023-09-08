import React, { useEffect } from "react";
import { useGetHomeDataQuery } from "../../redux/api/api";
import { encryptAndStoreData } from "../../utils/encript";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import JoinOurCommunity from "./Sections/JoinOurCommunity/JoinOurCommunity";
import OurCorporateClients from "./Sections/OurSupplierPartner/OurCorporateClients";
import OurSupplierNPartner from "./Sections/OurSupplierPartner/OurSupplierNPartner";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
  const { data: homeData, isLoading, isError, error } = useGetHomeDataQuery();

  useEffect(() => {
    if (error?.status===401 && !isLoading) {
      localStorage.removeItem("user");
    }
  }, [error]);
  
  useEffect(() => {
    if (homeData) {
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
      <OurSupplierNPartner />
      <OurCorporateClients />
      <JoinOurCommunity />
    </>
  );
};

export default Home;
