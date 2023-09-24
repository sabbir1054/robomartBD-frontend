import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Container, Divider, Grid, Rating } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import RecentView from "../../Shared/RecntView/RecentView";
import {
  useGetCartQuery,
  useGetUserQuery,
  usePostToCartMutation,
} from "../../redux/api/api";
import BottomTabs from "./BottomTabs";
import styles from "./ProductDetail.module.scss";
import RelatedProducts from "./RelatedProducts";
const loadingNotify = () => toast.loading("Adding...");
const successNotify = () => toast.success("Successfully added !");
const errorNotify = () => toast.error("Something went wrong !");
const ProductDetailsPage = () => {
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [bgPosition, setBgPosition] = useState("50% 50%");
  const [amount, setAmount] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
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
      const options = {
        product: { product: productDetails?.id, quantity: amount },
      };
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
      .then((data) => {
        console.log(data);
        setProductDetails(data);
        // recent view products
        const cacheRecentView = localStorage.getItem("recentViewProducts");
        if (!cacheRecentView) {
          const recentArr = [];
          recentArr.push(data);
          localStorage.setItem("recentViewProducts", JSON.stringify(recentArr));
        } else {
          const pastRecentArr = JSON.parse(cacheRecentView);

          const checkDuplicateInput = cacheRecentView.includes(
            JSON.stringify(data)
          );

          if (!checkDuplicateInput) {
            pastRecentArr.push(data);
            localStorage.setItem(
              "recentViewProducts",
              JSON.stringify(pastRecentArr)
            );
          }
        }
      });
  }, [params]);
console.log(productDetails);
  return (
    <div>
      <Container sx={{ py: "10vh" }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item md={6} className={styles.left}>
            {productDetails?.media?.length > 0 && (
              <>
                {" "}
                <div className={styles.images}>
                  {productDetails?.media?.map((item, index) => (
                    <img
                      onClick={changeMainImage}
                      imgindex={index}
                      className={
                        index === imageIndex
                          ? styles.activeImage
                          : styles.notActive
                      }
                      src={item?.photo}
                      key={index}
                      alt={"images"}
                    />
                  ))}
                </div>
                <div
                  className={styles.mainImage}
                  onMouseMove={zoom}
                  style={{
                    backgroundImage: `url(${
                      productDetails?.media &&
                      productDetails?.media[imageIndex]?.photo
                    })`,
                    backgroundPosition: bgPosition,
                  }}
                >
                  <img
                    src={`${
                      productDetails?.media &&
                      productDetails?.media[imageIndex]?.photo
                    }`}
                    alt="mainImage"
                    style={{
                      border: "1px solid #f2f2f2",
                      boxShadow: "1px 1px 20px #e1e1e185",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </>
            )}

            {productDetails?.media?.length == 0 && (
              <>
                {" "}
                <div className={styles.images}></div>
                <div
                  className={styles.mainImage}
                  onMouseMove={zoom}
                  style={{
                    backgroundImage: `url(${productDetails?.photo})`,
                    backgroundPosition: bgPosition,
                  }}
                >
                  <img
                    src={`${productDetails?.photo}`}
                    alt="mainImage"
                    style={{
                      border: "1px solid #f2f2f2",
                      boxShadow: "1px 1px 20px #e1e1e185",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={styles.right}>
              <h1>{productDetails?.name}</h1>
              <h3 style={{ marginBottom: "10px" }}>
                Product code: {productDetails?.product_code}
              </h3>
              <div className={styles.rate}>
                <Rating
                  name="read-only"
                  size="small"
                  value={productDetails?.ratting}
                  readOnly
                />
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
              <div style={{ display: "inline-block", marginRight: "5px" }}>
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
              </div>
              <span style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                X
                <span style={{ margin: "0 5px" }}>
                  {" "}
                  {productDetails?.price}
                </span>{" "}
                =
                <span style={{ margin: "0 5px" }}>
                  {" "}
                  {amount * productDetails?.price}
                </span>
              </span>
              <div className={styles.buttons}>
                <button className={styles.addToCardBtn} onClick={addToCart}>
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

        <BottomTabs productDetails={productDetails} />
        <RecentView />
        <Divider />
        <RelatedProducts categoriesId={productDetails?.catagorys} />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
