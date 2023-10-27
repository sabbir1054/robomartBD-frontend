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
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetCartQuery,
  useGetUserQuery,
  usePostToCartMutation,
} from "../../redux/api/api";
import styles from "./SingleProductCard.module.scss";

const loadingNotify = () => toast.loading("Adding...");
const successNotify = () => toast.success("Successfully added !");
const errorNotify = () => toast.error("Something went wrong !");
// toast.promise(myPromise, {
//   loadingNotify: "Adding...",
//   successNotify: "Successfully added !",
//   errorNotify: "Something went wrong !",
// });
const SingleProductCard = ({ product }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useGetUserQuery();
  const { data: cartData } = useGetCartQuery();
  const [postToCart, { isLoading, isError, isSuccess }] =
    usePostToCartMutation();

  const addToCart = () => {
    setCheck(true);
    if (!userData) {
      navigate("/login");
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please Login First !",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const options = { product: { product: product?.id, quantity: 1 } };
      postToCart(options);
    }
  };
  if (isError && check) {
    errorNotify();
    setCheck(false);
  }
  if (isSuccess && check) {
    successNotify();
    setCheck(false);
  }

  return (
    <>
      <Card
        style={{ boxShadow: "none", width: "250px" }}
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
          <Link
            to={`/product/${product?.id}/${(product?.name).replace(/ /g, "_")}`}
          >
            <CardMedia
              component="img"
              image={
                product?.photo ? `${product?.photo}` : "/assets/no-img.jpg"
              }
              alt="Products Image"
              sx={{ width: "100%" }}
              className={styles.cardImg}
            />
          </Link>

          <div className={styles.addToWishList}>
            <AddTaskIcon />
            <div className={styles.top}>
              <p>Order Now</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.content}>
              {isLoading ? (
                <span style={{ color: "white" }}> Loading ...</span>
              ) : (
                <div productid={"props.data.id"} onClick={() => addToCart()}>
                  <AddShoppingCartIcon />
                  <h5>add to cart</h5>
                </div>
              )}
            </div>
          </div>
        </Box>
        <CardContent className={styles.cardContent}>
          <Link
            to={`/product/${product?.id}/${(product?.name).replace(/ /g, "_")}`}
            className={styles.title}
            style={{ height: "30px", overflow: "hidden" }}
          >
            {product?.name?.length > 57
              ? product?.name?.substring(0, 57) + "..."
              : product?.name}
          </Link>
          <Box paddingBottom={1} borderBottom={"1px solid #f2f2f2"}>
            {" "}
            {screenWidth > 500 && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Rating
                  name="read-only"
                  size="small"
                  value={product?.ratting}
                  readOnly
                />
              </div>
            )}
            <p
              className={styles.productDescription}
              style={{
                fontSize: "12px",
                textAlign: "justify",
                height: "40px",
                overflow: "hidden",
              }}
            >
              {product?.discription?.substring(0, 110) + "..."}
            </p>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p className={styles.price}>
                BDT <span> {product?.price} </span>{" "}
              </p>
            </div>
          </Box>
        </CardContent>
        <NavLink
          to={`/product/${product?.id}/${(product?.name).replace(/ /g, "_")}`}
        >
          <Button
            className={styles.productViewBtn}
            color="primary"
            fullWidth
            sx={{ width: "100%", borderRadius: "0px" }}
          >
            View Details
          </Button>
        </NavLink>
      </Card>
    </>
  );
};

export default SingleProductCard;
