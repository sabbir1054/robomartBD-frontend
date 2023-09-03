import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SupplierNPartner = [
  {
    name: "ROBOTICS BD",
    logo: "dfs",
  },
  {
    name: "ROBOTICS BD",
    logo: "dfs",
  },
  {
    name: "ROBOTICS BD",
    logo: "dfs",
  },
];



const OurCorporateClients = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div style={{ minHeight: "25vh", padding: "3vh 0" }}>
      <div>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Our Corporate Partner
        </Typography>
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            // pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation]}
            // autoplay={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {data?.map((company) => (
              <SwiperSlide>
                <img
                  style={{
                    width: "200px",
                    height: "150px",
                    // border: "1px solid #e2e2e2",
                  }}
                  // src={`https://i.ibb.co/zbyRK5d/small-product.png`}
                  src={`https://api.robomartbd.com${company?.logo}`}
                  alt="no-image"
                  srcset=""
                />
                <p style={{ textAlign: "center" }}>{company?.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default OurCorporateClients;
