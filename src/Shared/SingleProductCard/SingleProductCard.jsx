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
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetCartQuery, useGetUserQuery, usePostToCartMutation } from "../../redux/api/api";
import styles from "./SingleProductCard.module.scss";
import Swal from "sweetalert2";

const loadingNotify = () => toast.loading("Adding...");
const successNotify = () => toast.success("Successfully added !");
const errorNotify = () => toast.error("Something went wrong !");
// toast.promise(myPromise, {
//   loadingNotify: "Adding...",
//   successNotify: "Successfully added !",
//   errorNotify: "Something went wrong !",
// });
const SingleProductCard = ({ product }) => {
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
  if (isError) {
    errorNotify();
    console.log(postToCart);
  }
  if (isSuccess) {
    successNotify();
  }

  // if (isLoading) {
  //   loadingNotify();
  // }

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
          <Link to={`/product/${product?.id}`}>
            <CardMedia
              component="img"
              image={
                product?.photo
                  ? `https://api.robomartbd.com${product?.photo}`
                  : "/assets/no-img.jpg"
              }
              alt="Products Image"
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
              <div productid={"props.data.id"} onClick={() => addToCart()}>
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
            {product?.name?.length > 50
              ? product?.name?.substring(0, 50) + "..."
              : product?.name}
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
