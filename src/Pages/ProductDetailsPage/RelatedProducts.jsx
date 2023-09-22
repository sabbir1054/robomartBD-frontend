import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./CategoryProducts.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedProducts = ({ categoriesId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const newData = [];

      for (const id of categoriesId) {
        try {
          const response = await fetch(
            `https://api.robomartbd.com/api/catagory/${id}/category`
          );
          if (response.ok) {
            const categoryData = await response.json();
            newData.push(categoryData);
          }
        } catch (error) {
          console.log(error);
        }
      }

      setData(...newData);
      setIsLoading(false);
    };

    fetchData();
  }, [categoriesId]);
  console.log(categoriesId);
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
            {data?.map((product) => (
              <SwiperSlide>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#4f4f4f",
                    "&:hover": { color: "black !important" },
                  }}
                  to={``}
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
                      src={`https://api.robomartbd.com${product?.photo}`}
                      alt="no-image"
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

export default RelatedProducts;
