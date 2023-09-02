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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetCartQuery } from "../../../../redux/api/api";
import styles from "./CartPrice.module.scss";
const CartPrice = () => {
  const [couponLoading, setCouponLoading] = useState(false);
  const dispatch = useDispatch();
  const { data: cartData } = useGetCartQuery();
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  const [shipping, setShipping] = useState(0);

  console.log(shipping);
  let total = parseInt(cartData?.price + shipping);

  const handleApplyCoupon = () => {
    setCouponLoading(true);
    const data = { cupon: coupon, total_price: total };
    const storedData = localStorage.getItem("user");
    const userData = JSON.parse(storedData);
    fetch(`https://api.robomartbd.com/order/cheak_copun`, {
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
        console.log(result);
        setCouponLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Coupon is not Valid",
          showConfirmButton: false,
          timer: 1500,
        });
        setCouponLoading(false);
        // Get the element by its id
        const couponField = document.getElementById("coupon-field");
        const applyBtn = document.getElementById("apply-btn");

        applyBtn.disabled = true;
        couponField.disabled = true;
        console.error("Fetch error:", error);
      });
  };

  const setDataForCheckOut = () => {
    let ship = "";
    if (shipping === 100) {
      ship = "in_dhaka";
    } else if (shipping === 150) {
      ship = "outside_dhaka";
    }
    const data = {
      delivery: ship,
      cupon: coupon,
      items: cartData?.items,
    };
    console.log(data);
    // dispatch(addCheckoutData({}));
  };

  const handleNavigateCheckout = () => {
    setDataForCheckOut();
    navigate("/checkOut");
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
        </Grid>
        <Grid item lg={4} xs={12}>
          <div className={styles.checkOutProcess}>
            <div className={styles.cartDetail}>
              <h5>Cart Total</h5>
              <p>
                Subtotal: <span>{cartData?.price}</span>
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
                      Inside Dhaka: <span>100 Tk</span>
                    </p>
                  }
                />
                <FormControlLabel
                  sx={{ mr: 0 }}
                  value="150"
                  control={
                    <Radio
                      size="small"
                      color="success"
                      onClick={() => setShipping(150)}
                    />
                  }
                  label={
                    <p className={styles.shippingItem}>
                      OutSide Dhaka: <span>150 Tk</span>
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
