import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./SingleProductCard.module.scss";
const SingleProductCard2 = () => {
  return (
    <>
      <Card
        style={{ boxShadow: "none", width: "100%" }}
        sx={{ height: "100%", paddingBottom: "5px" }}
        className={`${styles.card} card`}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          className={styles.imageDiv}
        >
          <CardMedia
            component="img"
            image={`https://i.ibb.co/zbyRK5d/small-product.png`}
            // image={`https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg`}
            alt="green iguana"
            sx={{ width: "100%" }}
          />
          <div
            className={styles.addToWishList}
            //   productid={props.data.id}
            // onClick={addToWishlist}
          >
            <FavoriteIcon />
            <div className={styles.top}>
              <p>add to wishlist</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.content}>
              <div productid={"props.data.id"}>
                <AddShoppingCartIcon />
                <h5>add to cart</h5>
              </div>
              <div className={styles.rode}></div>
              <Link to={`product/`}>
                <VisibilityIcon />
                <h5>quick view</h5>
              </Link>
            </div>
          </div>
        </Box>
        <CardContent className={styles.cardContent}>
          {/* <p className={styles.category}>{props.data.category}</p> */}
          <Link to={`product/`} className={styles.title}>
            Arduino Uno
          </Link>
          <Box
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            paddingBottom={1}
            borderBottom={"1px solid #f2f2f2"}
          >
            {" "}
            <Rating name="read-only" size="small" value={5} readOnly />
            <p className={styles.price} paddingTop={1}>
              Price: 100Tk
            </p>
          </Box>
        </CardContent>
        <NavLink to={"/products/id"}>
          <Button
            className={styles.productViewBtn}
            color="primary"
            fullWidth
            sx={{ width: "100%" }}
          >
            View Details
          </Button>
        </NavLink>
      </Card>
    </>
  );
};

export default SingleProductCard2;
