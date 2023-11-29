import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";

const OurSupplierNPartner = () => {
  const theme = useTheme();
  const isMScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${backendUrl}/api/our_supplier`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div style={{ minHeight: "25vh", padding: "3vh 5vh" }}>
      <div>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
            padding: "2vh 0",
          }}
        >
          Our Partner
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: isMScreen ? "70px" : "150px",
                      height: isMScreen ? "70px" : "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #e2e2e2",
                    }}
                  >
                    <NavLink to={`${company?.link}`}>
                      {" "}
                      <img
                        style={{
                          width: isMScreen ? "70px" : "150px",
                          // border: "1px solid #e2e2e2",
                        }}
                        // src={`https://i.ibb.co/zbyRK5d/small-product.png`}
                        src={`${company?.logo}`}
                        alt="no-image"
                        srcset=""
                      />
                    </NavLink>
                  </div>
                </div>

                <Typography
                  variant={isMScreen ? "subtitle2" : "subtitle1"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                >
                  {company?.name}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default OurSupplierNPartner;
