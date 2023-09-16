import { Grid, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import FormLabelCheckout from "./FormLabelCheckout";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "./CheckOut.module.scss";

const mystyles = {
  leftItem: {
    order: 2, // On small screens, move this item to the bottom
  },
  rightItem: {
    order: 1, // On small screens, move this item to the top
  },
};

const BillingOptions = ({
  billingOptions,
  setPaymentMedium,
  setTrnxID,
  setPaymentNumber,
}) => {
  const checkoutData = useSelector((state) => state.checkoutData);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
    setPaymentMedium(event.target.value);
  };

  const {
    register,
    control,
    handleSubmit,
    unregister,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  if (billingOptions === "" && checkoutData?.useBalance === false) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <FormLabelCheckout label={"Select Your Billing Method"} />
      </div>
    );
  }

  return (
    <>
      {billingOptions === "cod" && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5vh",
            }}
          >
            <img src="/assets/cod-photo.png" width={"300px"} />
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Button
              variant="contained"
              style={{ backgroundColor: "var(--primaryColor)" }}
              disableElevation
            >
              Confirm Order
            </Button>
          </div> */}
        </>
      )}

      {billingOptions === "mp" && (
        <>
          <Grid container padding={2} className={styles.billMPGrid}>
            <Grid item xs={12} sm={12} md={6}>
              <FormLabelCheckout
                label={" Fill up this form for payment confirmation :"}
              />{" "}
              <br /> <br />
              <form className={styles.checkout_wrapper}>
                <FormLabelCheckout label={" Payment Method:"} />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentMethod}
                  label="Payment methods"
                  onChange={handleChange}
                  className={styles.auth_form_inputField}
                >
                  <MenuItem value={"BKASH"}>Bkash</MenuItem>
                  <MenuItem value={"NAGAD"}>Nagad</MenuItem>
                  <MenuItem value={"ROCKET"}>Rocket</MenuItem>
                </Select>
                <FormLabelCheckout label={"Uses mobile no for payment :"} />
                <input
                  type="text"
                  onChange={(e) => setPaymentNumber(e.target.value)}
                  className={styles.auth_form_inputField}
                />
                <FormLabelCheckout label={"Transaction ID :"} />
                <input
                  type="text"
                  onChange={(e) => setTrnxID(e.target.value)}
                  className={styles.auth_form_inputField}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div>
                <FormLabelCheckout label={"Our payment info :"} />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/assets/bkash-logo.png"
                      width={"100px"}
                      alt=""
                      srcset=""
                    />
                    <p style={{ margin: "10px" }}>
                      <FormLabelCheckout label={": 01682921257   "} />
                      <small>(Send Money)</small>
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/assets/nagad-logo.png"
                      width={"100px"}
                      alt=""
                      srcset=""
                    />
                    <p style={{ margin: "10px" }}>
                      <FormLabelCheckout label={": 01682921257  "} />
                      <small>(Payment)</small>
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/assets/rocket-logo.png"
                      width={"100px"}
                      alt=""
                      srcset=""
                    />
                    <p style={{ margin: "10px" }}>
                      <FormLabelCheckout label={": 01682921257  "} />{" "}
                      <small>(Payment)</small>
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </>
      )}

      {billingOptions === "op" && (
        <div style={{ padding: "5vh" }}>
          <div>
            <img
              src="/assets/Payment-Brands.jpg"
              style={{ maxWidth: "600px", width: "100%" }}
              alt=""
              srcset=""
            />{" "}
            <br />
            <div style={{ display: "flex" }}>
              <FormLabelCheckout label={"Powered By : "} />
              <img
                src="/assets/ssl-logo.png"
                style={{ maxWidth: "150px" }}
                alt=""
                srcset=""
              />
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default BillingOptions;
