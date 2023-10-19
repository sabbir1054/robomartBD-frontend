import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const OurCorporateClients = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/our_client`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
 
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
          Our Corporate Client
        </Typography>
        <>
          {/* grid */}
          <Container maxWidth={"lg"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {data?.length>0&&data?.map((company) => (
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px solid #e2e2e2",
                      transition:"all 0.3s ease-in",
                      "&:hover": {
                        border: "2px solid var(--primaryColor)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <img
                      style={{
                        width: "150px",
                        // border: "1px solid #e2e2e2",
                      }}
                      // src={`https://i.ibb.co/zbyRK5d/small-product.png`}
                      src={`${company?.logo}`}
                      alt="no-image"
                      srcset=""
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
          {/* <Swiper
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
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #e2e2e2",
                    }}
                  >
                    <img
                      style={{
                        width: "150px",
                        // border: "1px solid #e2e2e2",
                      }}
                      // src={`https://i.ibb.co/zbyRK5d/small-product.png`}
                      src={`https://api.robomartbd.com${company?.logo}`}
                      alt="no-image"
                      srcset=""
                    />
                  </div>
                </div>

                <Typography
                  variant="subtitle1"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                >
                  {company?.name}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </>
      </div>
    </div>
  );
};

export default OurCorporateClients;
