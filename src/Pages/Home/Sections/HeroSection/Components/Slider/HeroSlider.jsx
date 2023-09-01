import React from "react";
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
    <>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={true}
        className="mySwiper"
      >
        {homeData1?.homeslider.map((sliderImg) => (
          <SwiperSlide>
            <Box>
              <img
                style={{ width: "100%" }}
                src={`https://api.robomartbd.com${sliderImg?.poster}`}
                alt=""
                srcset=""
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
