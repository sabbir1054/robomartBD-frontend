import { Button, Grid, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import FormLabelCheckout from "./FormLabelCheckout";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "./CheckOut.module.scss";

const mystyles = {
  leftItem: {
    order: 2, // On small screens, move this item to the bottom
  },
  rightItem: {
    order: 1, // On small screens, move this item to the top
  },
};

const BillingOptions = ({ billingOptions }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSSL = () => {
    Swal.fire({
      position: "top-center",
      icon: "warning",
      title: "This Payment method is under development",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
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
  const onSubmit = (data) => {
    console.log(data);
  };
  if (billingOptions === "") {
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
            <img src="/public/assets/cod-photo.png" width={"300px"} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Button
              variant="contained"
              style={{ backgroundColor: "var(--primaryColor)" }}
              disableElevation
            >
              Confirm Order
            </Button>
          </div>
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.checkout_wrapper}
              >
                <FormLabelCheckout label={" Payment Method:"} />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentMethod}
                  label="Payment methods"
                  onChange={handleChange}
                  className={styles.auth_form_inputField}
                >
                  <MenuItem value={"bkash"}>Bkash</MenuItem>
                  <MenuItem value={"nagad"}>Nagad</MenuItem>
                  <MenuItem value={"rocket"}>Rocket</MenuItem>
                </Select>
                <FormLabelCheckout label={"Uses mobile no for payment :"} />
                <input
                  type="text"
                  // {...register(, { required: true })}
                  className={styles.auth_form_inputField}
                />
                <FormLabelCheckout label={"Transaction ID :"} />
                <input
                  type="text"
                  // {...register(, { required: true })}
                  className={styles.auth_form_inputField}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "var(--primaryColor)" }}
                  disableElevation
                >
                  Confirm Order
                </Button>
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
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                onClick={handleSSL}
                variant="outlined"
                style={{
                  color: "var(--primaryColor)",
                  border: "1px solid var(--primaryColor)",
                }}
              >
                Make Payment & Confirm Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BillingOptions;
