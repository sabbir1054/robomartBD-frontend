import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartPrice.module.scss";
const CartPrice = () => {
  const handleChange = (event) => {
    // setShipping(event.target.value);
  };
  return (
    <div>
      <Grid container sx={{ paddingY: "5vh" }}>
        <Grid item lg={8} xs={12}>
          <Box sx={{ pb: 3 }}>
            <Link to="/">
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
              id="outlined-basic"
              label="Coupon"
              variant="outlined"
              className={styles.couponTextField}
            />{" "}
            <br />
            <Button
              variant="contained"
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
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <div className={styles.checkOutProcess}>
            <div className={styles.cartDetail}>
              <h5>Cart Total</h5>
              <p>
                Subtotal: <span>1200</span>
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
                  control={<Radio size="small" color="success" />}
                  label={
                    <p className={styles.shippingItem}>
                      Inside Dhaka: <span>100 Tk</span>
                    </p>
                  }
                />
                <FormControlLabel
                  sx={{ mr: 0 }}
                  value="150"
                  control={<Radio size="small" color="success" />}
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
                <span>1200</span>
              </p>
              <button
                className={`${styles.checkOutBtn}`}
                //   disabled={auth.currentUser.isAnonymous}
                //   onClick={checkOut}
              >
                {/* {auth.currentUser.isAnonymous */}Proceed To Checkout
                {/* : "Checkout"} */}
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartPrice;
