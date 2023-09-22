/* eslint-disable import/no-named-as-default */

import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/material";
import { useGetHomeDataQuery } from "../../../../../../redux/api/api";

const HeroSlider = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  if (homeLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={true}
      >
        {homeData1?.homeslider?.map((sliderImg) => (
          <SwiperSlide>
            <img
              style={{ width: "100%" }}
              src={`${sliderImg?.poster}`}
              // src={`/assets/display.png`}
              alt=""
              srcset=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
