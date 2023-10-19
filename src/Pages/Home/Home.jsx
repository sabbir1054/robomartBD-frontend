import React, { useEffect, useState } from "react";
import { useGetHomeDataQuery } from "../../redux/api/api";
import { encryptAndStoreData } from "../../utils/encript";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import OurCorporateClients from "./Sections/OurSupplierPartner/OurCorporateClients";
import OurSupplierNPartner from "./Sections/OurSupplierPartner/OurSupplierNPartner";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
  const [reFetch, setRefetch] = useState(false);
  const { data: homeData, isLoading, isError, error } = useGetHomeDataQuery();

  useEffect(() => {
    if (error?.status === 401 && !isLoading) {
      localStorage.removeItem("user");
      window.location.reload();
    }
  }, [error]);

  useEffect(() => {
    if (homeData) {
      fetch(`https://api.robomartbd.com/api/products`)
        .then((res) => res.json())
        .then((data) => {
          encryptAndStoreData(data);
        
        });
    }
  }, [homeData]);

  return (
    <>
      <Hero />
      <CategoryProducts />
      <TopBlogs />

      <OurCorporateClients />
      <OurSupplierNPartner />
      {/* <JoinOurCommunity /> */}
    </>
  );
};

export default Home;
