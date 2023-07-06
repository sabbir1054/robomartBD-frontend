import { Grid } from "@mui/material";
import React from "react";
import styles from "./CartItems.module.scss";
import SingleCartItem from "./SingleCartItem";
const CartItems = () => {
  return (
    <>
      {/* heading title */}
      <hr
        style={{
          margin: "0 0 40px",
          border: "none",
          borderBottom: "1px solid #ebebeb",
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <table className={styles.table}>
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* {cartList.map((item) => ( */}
              <SingleCartItem />
              <SingleCartItem />
              <SingleCartItem />
              {/* ))} */}
            </tbody>
          </table>
        </Grid>
        <Grid item lg={8} sx={12}></Grid>
        {/* <Grid item lg={4} xs={12}>
            <div className={styles.checkOutProcess}>
              <div className={styles.cartDetail}>
                <h5>Cart Total</h5>
                <p>
                  Subtotal: <span>${subTotal("formatted")}</span>
                </p>
              </div>
              <div className={styles.shipping}>
                <p className={styles.title}>Shipping:</p>
              </div>
              <FormControl
                fullWidth
                sx={{ pb: "23px", borderBottom: "1px solid #ebebeb" }}
              >
                <RadioGroup value={shipping} onChange={handleChange}>
                  <FormControlLabel
                    sx={{ mr: 0 }}
                    value="0.00"
                    control={<Radio size="small" color={"warning"} />}
                    label={
                      <p className={styles.shippingItem}>
                        Free Shipping: <span>$0.00</span>
                      </p>
                    }
                  />
                  <FormControlLabel
                    sx={{ mr: 0 }}
                    value="10.00"
                    control={<Radio size="small" color={"warning"} />}
                    label={
                      <p className={styles.shippingItem}>
                        Standard: <span>$10.00</span>
                      </p>
                    }
                  />
                  <FormControlLabel
                    sx={{ mr: 0 }}
                    value="20.00"
                    control={<Radio size="small" color={"warning"} />}
                    label={
                      <p className={styles.shippingItem}>
                        Express: <span>$20.00</span>
                      </p>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <div className={styles.end}>
                <p>
                  Total
                  <span>
                    $
                    {formatToCurrency(
                      (subTotal() + Number(shipping)).toFixed(2)
                    )}
                  </span>
                </p>
                <button
                  className={`${styles.checkOutBtn} ${
                    auth.currentUser.isAnonymous && styles.notActive
                  }`}
                  disabled={auth.currentUser.isAnonymous}
                  onClick={checkOut}
                >
                  {auth.currentUser.isAnonymous
                    ? "You should sign in first"
                    : "Checkout"}
                </button>
              </div>
            </div>
            <Link to="/" className={styles.continueBtn}>
              CONTINUE SHOPPING <TbRefresh />
            </Link>
          </Grid> */}
      </Grid>
    </>
  );
};

export default CartItems;
