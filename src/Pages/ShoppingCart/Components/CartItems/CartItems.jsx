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
       
      </Grid>
    </>
  );
};

export default CartItems;
