import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./CategoryProducts.module.scss";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


const TutorialRelatedProducts = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
  

  return (
    <>
      <div style={{ padding: "3vh 0vh" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
        >
          Related Products
        </Typography>
        {isLoading && <CircularProgress />}
        <>
          <Swiper
            slidesPerView={4}
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {data?.map((product) => (
              <SwiperSlide>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#4f4f4f",
                    "&:hover": { color: "black !important" },
                  }}
                  to={`/product/${product?.id}/${product?.name?.replace(
                    / /g,
                    "_"
                  )}`}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "200px",
                        height: "150px",
                        border: "1px solid #e2e2e2",
                      }}
                      // src={`https://i.ibb.co/zbyRK5d/small-product.png`}
                      src={`${product?.photo}`}
                      alt="image"
                      srcset=""
                    />
                  </Box>
                  <p style={{ textAlign: "center" }}>{product?.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </>
  );
};

export default TutorialRelatedProducts;
