import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddTaskIcon from "@mui/icons-material/AddTask";
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
const SingleProductCard = ({ product }) => {
  console.log(product?.photo);
  return (
    <>
      <Card
        style={{ boxShadow: "none", width: "250px" }}
        sx={{ paddingBottom: "5px" }}
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
          <Link to={`/product/${product?.id}`}>
            <CardMedia
              component="img"
              image={`https://api.robomartbd.com${product?.photo}`}
              alt="green iguana"
              sx={{ width: "100%" }}
              className={styles.cardImg}
            />
          </Link>

          <div
            className={styles.addToWishList}
            //   productid={props.data.id}
            // onClick={addToWishlist}
          >
            <AddTaskIcon />
            <div className={styles.top}>
              <p>Order Now</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.content}>
              <div productid={"props.data.id"}>
                <AddShoppingCartIcon />
                <h5>add to cart</h5>
              </div>
              {/* <div className={styles.rode}></div>
              <Link to={`product/`}>
                <VisibilityIcon />
                <h5>quick view</h5>
              </Link> */}
            </div>
          </div>
        </Box>
        <CardContent className={styles.cardContent}>
          {/* <p className={styles.category}>{props.data.category}</p> */}
          <Link to={`/product/${product?.id}`} className={styles.title}>
            {product?.name}
            {/* nnnnnnnnnnnnnnnnn nnn nnnnn nn nnnn nnnnn nnnnn nnnnn nnn */}
          </Link>
          <Box paddingBottom={1} borderBottom={"1px solid #f2f2f2"}>
            {" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Rating
                name="read-only"
                size="small"
                value={product?.ratting}
                readOnly
              />
            </div>
            <p
              className={styles.productDescription}
              style={{ fontSize: "12px", textAlign: "justify" }}
            >
              {/* {product?.substring(0, 12)} */}
              Lorem ipsum, dolor sit amet consectetur jdd sabbir...
              {/* {props.data.description.length > 12 ? "..." : ""} */}
            </p>
            <div
              style={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <p className={styles.price} paddingTop={1}>
                BDT <span> {product?.price} </span>{" "}
              </p>
              {/* <p
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  color: "#0d8947",
                }}
              >
                {" "}
                <Brightness1Icon sx={{ fontSize: "8px" }} /> In-Stock
              </p> */}
            </div>
          </Box>
        </CardContent>
        <NavLink to={`/product/${product?.id}`}>
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

export default SingleProductCard;
