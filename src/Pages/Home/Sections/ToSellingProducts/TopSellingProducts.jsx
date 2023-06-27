import { Box, Container, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";
import SingleProductCard3 from "../../../../Shared/SingleProductCard/SingleProductCard3";
import styles from "./TopSellingProducts.module.scss";

const TopSellingProducts = () => {
  const navigationBtns = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <Container className={styles.topSellingWrapper}>
        <Box paddingY={5} marginY={2}>
          <Box
            className={styles.topSeelingHeading}
            borderBottom={"1px solid #d1d1d1"}
          >
            <Typography
              variant="h5"
              style={{
                borderLeft: "4px solid var(--primaryColor)",
                textTransform: "uppercase",
                fontFamily: "var(--primaryFont)",
              }}
            >
              {" "}
              Best selling Items{" "}
            </Typography>
            {/* <hr /> */}
          </Box>

          <Box paddingY={2}>
            <Swiper
              {...navigationBtns}
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1600: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
              <SwiperSlide>
                <SingleProductCard3 />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TopSellingProducts;
