import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTaskIcon from "@mui/icons-material/AddTask";
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
const SingleProductCard = () => {
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
          <CardMedia
            component="img"
            image={`https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg`}
            alt="green iguana"
            sx={{ width: "100%" }}
            className={styles.cardImg}
          />
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
          <Link to={`/products/id`} className={styles.title}>
            Arduino Uno
          </Link>
          <Box
            // alignItems={"center"}
            // display={"flex"}
            // flexDirection={"column"}
            // justifyContent={"center"}
            paddingBottom={1}
            borderBottom={"1px solid #f2f2f2"}
          >
            {" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Rating name="read-only" size="small" value={3} readOnly />
            </div>
            <p
              className={styles.productDescription}
              style={{ fontSize: "13px", textAlign: "justify" }}
            >
              {/* {props.data.description.substring(0, 12)} */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              tempora,...
              {/* {props.data.description.length > 12 ? "..." : ""} */}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className={styles.price} paddingTop={1}>
                Price: <span> 100Tk </span>{" "}
              </p>
              <p
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  color: "#0d8947",
                }}
              >
                {" "}
                <Brightness1Icon sx={{ fontSize: "8px" }} /> In-Stock
              </p>
            </div>
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

export default SingleProductCard;
