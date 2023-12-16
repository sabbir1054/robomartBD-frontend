import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetCartQuery,
  useGetUserProfileQuery,
} from "../../../../redux/api/api";
import { addCheckoutData } from "../../../../redux/features/checkoutSlice";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";
import styles from "./CartPrice.module.scss";
const CartPrice = ({ isDataChange }) => {
  const {
    data: userProfile,
    isLoading: profileLoading,
    isError: profileError,
    error,
  } = useGetUserProfileQuery();

  const [discountPercentage, setDisCountPercentage] = useState(0);
  const [useBalance, setUseBalance] = useState(false);

  const [isCouponValid, setIsCouponValid] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);
  const dispatch = useDispatch();
  const { data: cartData } = useGetCartQuery();
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  let total = parseInt(cartData?.price + shipping - discountPercentage);

  const handleApplyCoupon = () => {
    setCouponLoading(true);
    const data = { cupon: coupon, total_price: total };

    const storedData = localStorage.getItem("user");
    const userData = JSON.parse(storedData);
    fetch(`${backendUrl}/order/cheak_copun`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userData}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        if (result?.discount) {
          setIsCouponValid(true);
          //discount
          setDisCountPercentage(result.discount);

          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `You get discount ${result?.discount} BDT`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setCouponLoading(false);
      })
      .catch((error) => {
        setCoupon("");
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Coupon is not Valid",
          showConfirmButton: false,
          timer: 1500,
        });
        setCouponLoading(false);
      });
  };

  const setDataForCheckOut = () => {
    let ship = "";
    if (shipping === 50) {
      ship = "in_dhaka";
    } else if (shipping === 100) {
      ship = "out_dhaka";
    }
    const data = {
      delivery: ship,
      cupon: coupon,
      useBalance: useBalance,
    };

    dispatch(addCheckoutData(data));
  };

  const handleNavigateCheckout = () => {
    setDataForCheckOut();
    navigate("/checkOut");
  };

  // useEffect(() => {
  //   if (discountPercentage > 0) {
  //     const discountAmount = total * (discountPercentage / 100);

  //     setDiscount(parseInt(discountAmount));
  //   }
  // }, [discountPercentage]);
  useEffect(() => {
    setDiscount(0);
    setIsCouponValid(false);
  }, [isDataChange]);

  const handleBalanceBtn = () => {
    if (shipping === 0) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: `Please choose shipping `,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (shipping > 0 && userProfile?.balance > total) {
      setUseBalance(true);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `You able to use balance `,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (userProfile?.balance < total) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: `You have not enough money `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Grid container sx={{ paddingY: "5vh" }}>
        <Grid item lg={8} xs={12}>
          <Box sx={{ pb: 3 }}>
            <Link to="/products">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "var(--primaryColor)",
                  borderColor: "var(--primaryColor)",
                  transition: "all 0.3s ease-in",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "var(--primaryColor)",
                    borderColor: "var(--primaryColor)",
                  },
                }}
              >
                CONTINUE SHOPPING
              </Button>
            </Link>
          </Box>
          <Box sx={{ py: 3 }}>
            <Typography
              variant={"h5"}
              sx={{
                fontFamily: "var(--secondaryFont)",
                fontWeight: "bold",
              }}
            >
              Coupon Discount :
            </Typography>
            <TextField
              disabled={isCouponValid && true}
              id="coupon-field"
              onChange={(e) => setCoupon(e.target.value)}
              // id="outlined-basic"
              label="Coupon"
              variant="outlined"
              className={styles.couponTextField}
            />{" "}
            <br />
            {couponLoading ? (
              <CircularProgress />
            ) : (
              <Button
                disabled={isCouponValid && true}
                id="apply-btn"
                variant="contained"
                onClick={handleApplyCoupon}
                sx={{
                  my: 2,
                  backgroundColor: "var(--primaryColor)",
                  transition: "all 0.3s ease-in",
                  "&:hover": { backgroundColor: "green" },
                }}
                disableElevation
                size="large"
              >
                Apply
              </Button>
            )}
          </Box>
          <Box sx={{ py: 3 }}>
            <Typography
              variant={"h5"}
              sx={{
                fontFamily: "var(--secondaryFont)",
                fontWeight: "bold",
              }}
            >
              Your balance BDT:
            </Typography>
            <TextField
              disabled
              value={userProfile?.balance}
              id="coupon-field"
              variant="outlined"
              className={styles.couponTextField}
            />{" "}
            <br />
            <Button
              id="apply-btn"
              variant="contained"
              onClick={handleBalanceBtn}
              disabled={useBalance ? true : false}
              sx={{
                my: 2,
                backgroundColor: "var(--primaryColor)",
                transition: "all 0.3s ease-in",
                "&:hover": { backgroundColor: "green" },
              }}
              disableElevation
              size="large"
            >
              USE Balance
            </Button>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <div className={styles.checkOutProcess}>
            <div className={styles.cartDetail}>
              <h5>Cart Total</h5>
              <p>
                Subtotal: <span>{cartData?.price}</span>
              </p>
              <p style={{ color: "#025a0e", fontWeight: "bold" }}>
                Discount: <span> - {discountPercentage}</span>
              </p>
            </div>
            <div className={styles.shipping}>
              <p className={styles.title}>Shipping:</p>
            </div>
            <FormControl
              fullWidth
              sx={{ pb: "23px", borderBottom: "1px solid #ebebeb" }}
            >
              <RadioGroup>
                <FormControlLabel
                  sx={{ mr: 0 }}
                  value="50"
                  control={
                    <Radio
                      size="small"
                      color="success"
                      onClick={() => setShipping(50)}
                    />
                  }
                  label={
                    <p className={styles.shippingItem}>
                      Inside Dhaka: <span>50 Tk</span>
                    </p>
                  }
                />
                <FormControlLabel
                  sx={{ mr: 0 }}
                  value="100"
                  control={
                    <Radio
                      size="small"
                      color="success"
                      onClick={() => setShipping(100)}
                    />
                  }
                  label={
                    <p className={styles.shippingItem}>
                      OutSide Dhaka: <span>100 Tk</span>
                    </p>
                  }
                />
              </RadioGroup>
            </FormControl>
            <div className={styles.end}>
              <p>
                Total
                <span>{total}</span>
              </p>
              <button
                className={
                  !shipping == 0
                    ? `${styles.checkOutBtn}`
                    : `${styles.checkOutBtnDisable}`
                }
                disabled={!shipping == 0 && false}
                onClick={!shipping == 0 && handleNavigateCheckout}
              >
                {/* {auth.currentUser.isAnonymous */}Proceed To Checkout
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartPrice;
