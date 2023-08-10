import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Container, Grid, Rating } from "@mui/material";
import React, { useCallback, useState } from "react";
import styles from "./ProductDetail.module.scss";
import ReviewAndFeedBack from "./ReviewAndFeedBack";
import BottomTabs from "./BottomTabs";
import SingleCategoryProducts from "../Home/Sections/CategoryWiseProducts/SingleCategoryProducts";
import RelatedProducts from "./RelatedProducts";
const ProductDetailsPage = () => {
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

  return (
    <div>
      <Container sx={{ py: "10vh" }}>
        {/* <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNext fontSize="small" />}
            sx={{ p: "14px 0" }}
          >
            <BCLink
              className={styles.brdHov}
              underline="none"
              color="inherit"
              href="/"
              fontSize={"14px"}
            >
              Home
            </BCLink>
            <BCLink
              underline="none"
              color="text.primary"
              href="/wishlist"
              aria-current="page"
              fontSize={"14px"}
            >
              Shopping Cart
            </BCLink>
          </Breadcrumbs>
        </div> */}
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item md={6} className={styles.left}>
            <div className={styles.images}>
              {revImgArr.map((item, index) => (
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
              ))}
            </div>
            <div
              className={styles.mainImage}
              onMouseMove={zoom}
              style={{
                backgroundImage: `url(${revImgArr[imageIndex]})`,
                backgroundPosition: bgPosition,
              }}
            >
              <img
                src={revImgArr[imageIndex]}
                alt="mainImage"
                style={{
                  border: "1px solid #f2f2f2",
                  boxShadow: "1px 1px 20px #e1e1e185",
                  borderRadius: "5px",
                }}
              />
            </div>
            {/* <div
              className={styles.mainImage}
              onMouseMove={zoom}
              style={{
                backgroundImage: `url(https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg)`,
                backgroundPosition: bgPosition,
              }}
            >
              <img
                src="https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg"
                alt="mainImage"
              />
            </div> */}
          </Grid>
          <Grid item md={6}>
            <div className={styles.right}>
              <h1>1.54 inch E-Ink display module (Three Color)</h1>
              <h3 style={{ marginBottom: "10px" }}>Product code: e4de234</h3>
              <div className={styles.rate}>
                <Rating name="read-only" size="small" value={4} readOnly />
                <p>(5 Reviews)</p>
              </div>
              <p className={styles.price}>
                100 Tk{" "}
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
                  In Stoke
                </Button>
              </p>
              <Box></Box>
              <p className={styles.description}>
                {/* {product[productID].description} */}This is an E-Ink
                (E-Paper) display module, similar to those used in E-book
                readers. The Size is 1.54inch covering a 200x200 resolution,
                with embedded controller, communicating via SPI interface.
                refreshing SPI interface, for connecting with controller boards
                like Raspberry Pi/Arduino/Nucleo, etc. Comes with development
                resources and manual (examples for Raspberry Pi/Arduino/STM32)
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
                <button
                  className={styles.addToCardBtn}
                  //   onClick={addToCart}
                  //   id={product[productID].id}
                >
                  <AddShoppingCartIcon />
                  ADD TO CART
                </button>
                <button
                  className={styles.addToWishlist}
                  //   onClick={addToWishlist}
                  //   id={product[productID].id}
                >
                  <FavoriteBorderIcon />
                  <p>Add to Wishlist</p>
                </button>
              </div>
              {/* <div className={styles.end}>
                <p>Category: {product[productID].category}</p>
                <div className={styles.socials}>
                  <p>Share on:</p>
                  <div className={styles.socialsIcon}>
                    <div>
                      <FaFacebookF />
                    </div>
                    <div>
                      <FaTwitter />
                    </div>
                    <div>
                      <FaInstagram />
                    </div>
                    <div>
                      <FaYoutube />
                    </div>
                    <div>
                      <FaPinterest />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </Grid>
        </Grid>
        {/* <ReviewAndFeedBack /> */}
        <BottomTabs />
        <div style={{ padding: "5vh 0" }}>
          {/* <SingleCategoryProducts title={"Sensors"} /> */}
          {/* <RelatedProducts/> */}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
