import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Container, Grid, Rating } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomTabs from "./BottomTabs";
import styles from "./ProductDetail.module.scss";
const ProductDetailsPage = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [bgPosition, setBgPosition] = useState("50% 50%");
  const [amount, setAmount] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const zoom = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  const revImgArr = [
    "https://i.ibb.co/109P1Zm/p1.jpg",
    "https://i.ibb.co/FYdfgW9/p2.jpg",
    "https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg",
  ];
  const changeMainImage = useCallback((event) => {
    const selectedImgIndex = Number(
      event.currentTarget.getAttribute("imgindex")
    );
    setImageIndex(selectedImgIndex);
  }, []);
  const changeAmount = (qty) => {
    if (qty + amount >= 1) {
      setAmount((prevState) => prevState + qty);
    }
  };

  useEffect(() => {
    fetch(`https://api.robomartbd.com/api/product/${params?.productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);

  return (
    <div>
      <Container sx={{ py: "10vh" }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item md={6} className={styles.left}>
            <div className={styles.images}>
              {/* {revImgArr.map((item, index) => (
                <img
                  onClick={changeMainImage}
                  imgindex={index}
                  className={
                    index === imageIndex ? styles.activeImage : styles.notActive
                  }
                  src={item}
                  key={index}
                  alt={"images"}
                />
              ))} */}
              {/* <img
                // onClick={changeMainImage}
                // imgindex={index}
                // className={
                //   index === imageIndex ? styles.activeImage : styles.notActive
                // }
                src={`https://api.robomartbd.com${productDetails?.photo}`}
                // key={index}
                alt={"images"}
              /> */}
            </div>
            <div
              className={styles.mainImage}
              onMouseMove={zoom}
              style={{
                backgroundImage: `url(https://api.robomartbd.com${productDetails?.photo})`,
                backgroundPosition: bgPosition,
              }}
            >
              <img
                src={`https://api.robomartbd.com${productDetails?.photo}`}
                alt="mainImage"
                style={{
                  border: "1px solid #f2f2f2",
                  boxShadow: "1px 1px 20px #e1e1e185",
                  borderRadius: "5px",
                }}
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={styles.right}>
              <h1>{productDetails?.name}</h1>
              <h3 style={{ marginBottom: "10px" }}>
                Product code: {productDetails?.id}
              </h3>
              <div className={styles.rate}>
                <Rating name="read-only" size="small" value={productDetails?.ratting} readOnly />
                <p>({productDetails?.total_review})</p>
              </div>
              <p className={styles.price}>
                BDT
                <span style={{ margin: "0 3px" }}>
                  {" "}
                  {productDetails?.after_discount}
                </span>
                <small>
                  {" "}
                  <del>{productDetails?.price}</del>
                </small>
                {productDetails?.in_stock === false ? (
                  <Button
                    sx={{
                      marginLeft: "20px",
                      backgroundColor: "red",
                      "&:hover": {
                        backgroundColor: "red",
                        cursor: "auto",
                      },
                    }}
                    size={"small"}
                    variant="contained"
                    disableElevation
                  >
                    Out of Stock
                  </Button>
                ) : (
                  <Button
                    sx={{
                      marginLeft: "20px",
                      backgroundColor: "var(--primaryColor)",
                      "&:hover": {
                        backgroundColor: "var(--primaryColor)",
                        cursor: "auto",
                      },
                    }}
                    size={"small"}
                    variant="contained"
                    disableElevation
                  >
                    In Stock ({productDetails?.stock})
                  </Button>
                )}
              </p>
              <Box></Box>
              <p className={styles.description}>
                {productDetails?.discription}
              </p>

              <div className={styles.quantity}>
                <div>
                  <button onClick={(event) => changeAmount(-1)}>
                    <RemoveIcon />
                  </button>
                  <input type={"number"} min={1} value={amount} readOnly />
                  <button onClick={(event) => changeAmount(+1)}>
                    <AddIcon />
                  </button>
                </div>
              </div>
              <div className={styles.buttons}>
                <button className={styles.addToCardBtn}>
                  <AddShoppingCartIcon />
                  ADD TO CART
                </button>
                {/* <button
                  className={styles.addToWishlist}
             
                >
                  <FavoriteBorderIcon />
                  <p>Add to Wishlist</p>
                </button> */}
              </div>
            </div>
          </Grid>
        </Grid>

        <BottomTabs />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
