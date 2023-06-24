import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/material";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/5MbWKSY/img3.jpg"
              alt=""
              srcset=""
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/5MbWKSY/img3.jpg"
              alt=""
              srcset=""
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/5MbWKSY/img3.jpg"
              alt=""
              srcset=""
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
