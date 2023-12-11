import {
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import {
  getAllDistrict,
  getAllDivision,
  getAllUnion,
  getAllUpazila,
} from "bd-divisions-to-unions";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetCartQuery,
  useGetUserProfileQuery,
  useGetUserQuery,
  usePostOrderMutation,
} from "../../redux/api/api";
import BillingOptions from "./BillingOptions";
import styles from "./CheckOut.module.scss";
import FormAddressFieldCheckout from "./FormAddressFieldCheckout";
import FormLabelCheckout from "./FormLabelCheckout";
const CheckOutPage = () => {
  const { data: userProfile, isLoading: userProfileLoading } =
    useGetUserProfileQuery();
  const checkoutData = useSelector((state) => state.checkoutData);

  const [billingOptions, setBillingOptions] = useState(""); //cod=cash on delivery //

  const [sameAsAddress, setSameAsAddress] = useState(false);
  const [division, setDivision] = useState({});
  const [district, setDistrict] = useState({});
  const [upozila, setUpozila] = useState({});
  const [union, setUnion] = useState({});
  const [fullAddress, setFullAddress] = useState("");

  const divisionData = getAllDivision("en");
  const districtsData = getAllDistrict("en");
  const upozilaData = getAllUpazila("en");
  const unionData = getAllUnion("en");

  const [paymentMedium, setPaymentMedium] = useState("");
  const [trnxID, setTrnxID] = useState("");
  const [paymentNumber, setPaymentNumber] = useState("");

  const { data, isLoading, isError } = useGetUserQuery();
  const { data: cartData } = useGetCartQuery();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  //when reload page this data remove from redux so we redirect it previous page
  useEffect(() => {
    if (
      checkoutData?.delivery === "" &&
      checkoutData?.cupon === "" &&
      checkoutData?.useBalance === false
    ) {
      navigate("/shopping-cart");
    }
  }, [checkoutData?.delivery, checkoutData?.cupon, checkoutData?.useBalance]);

  const [
    postOrder,
    {
      isLoading: postOrderLoading,
      isError: postOrderError,
      isSuccess: postOrderSuccess,
      error: postOrderErrors,
    },
  ] = usePostOrderMutation();
  
  const {
    register,
    control,
    handleSubmit,
    unregister,
    reset,
    watch,
    formState: { errors },
  } = useForm({});
  useEffect(() => {
    if (!data && !isLoading) {
      navigate("/login");
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Login Required",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setUser(data);
  }, [data]);

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />;
      </div>
    );
  }
  const makeAddressString = () => {
    let updatedAddress = fullAddress;
    if (union.title) {
      updatedAddress += "," + union?.title + ",";
    }
    if (upozila.title) {
      updatedAddress += upozila?.title + ",";
    }
    if (upozila.title) {
      updatedAddress += upozila?.title + ",";
    }
    if (district.title) {
      updatedAddress += district?.title + ",";
    }
    if (division.title) {
      updatedAddress += division?.title;
    }

    return updatedAddress;
  };

  const postAnOrder = (orderData) => {
    if (userProfile?.phone?.length >= 11) {
      if (billingOptions !== "op") {
        const options = { data: orderData };
        postOrder(options);
      }
    } else {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please update phone number from your profile !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleSubmitBtn = () => {
    if (billingOptions === "op") {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "This Payment method is under development",
        showConfirmButton: false,
        timer: 1500,
      });
      return 0;
    }
    if (!billingOptions && !checkoutData?.useBalance) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Select Payment Options",
        showConfirmButton: false,
        timer: 1500,
      });
      return 0;
    }
    let confirmAddress = "";
    if (sameAsAddress) {
      confirmAddress = userProfile?.address;
    } else {
      confirmAddress = makeAddressString();
    }
    if (!sameAsAddress && confirmAddress == "") {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please Select Address",
        showConfirmButton: false,
        timer: 1500,
      });
      return 0;
    }
    let billing_options = "";

    if (checkoutData?.useBalance) {
      billing_options = "BALANCE";
    } else if (billingOptions === "mp") {
      billing_options = "MANUAL";
    } else if (billingOptions === "cod") {
      billing_options = null;
    }

    const newItems = [];

    cartData?.items?.map((item) => newItems.push(item));

    const data = {
      delevary: checkoutData?.delivery,
      address: confirmAddress,
      phone: userProfile?.phone,
      cupon: checkoutData?.cupon === "" ? null : checkoutData?.cupon,
      billing_option: billing_options,
      payment_method: paymentMedium === "" ? null : paymentMedium,
      payment_id: trnxID === "" ? null : trnxID,
      payment_number: paymentNumber === "" ? null : paymentNumber,
      items: newItems,
    };

    if (data?.phone === "") {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Update contact from profile",
        showConfirmButton: false,
        timer: 1500,
      });
      return 0;
    }
    postAnOrder(data);
  };

  if (postOrderSuccess) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Thanks for your order",
      text: "You can cancel order before approved.",
      showConfirmButton: false,
      timer: 5000,
    });
    navigate("/");
  }

  return (
    <div style={{ minHeight: "70vh", padding: "5vh 0" }}>
      <Container maxWidth={"xl"}>
        <br />
        <form className={styles.checkout_wrapper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2}>
              <FormLabelCheckout label={" Name:"} />
              {data && (
                <input
                  type="text"
                  disabled
                  defaultChecked
                  defaultValue={data[0]?.first_name + " " + data[0]?.last_name}
                  {...register("name")}
                  className={styles.auth_form_inputField}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <FormLabelCheckout label={"Email :"} />
              {data && (
                <input
                  type="text"
                  disabled
                  defaultChecked
                  defaultValue={data[0]?.email}
                  {...register("email")}
                  className={styles.auth_form_inputField}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <FormLabelCheckout label={"Contact number :"} />
              {userProfileLoading ? (
                <CircularProgress />
              ) : (
                <input
                  type="text"
                  disabled
                  defaultValue={userProfile?.phone}
                  {...register("phone")}
                  className={styles.auth_form_inputField}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              {" "}
              <FormLabelCheckout label={" Your Address:"} />
              {userProfileLoading ? (
                <CircularProgress />
              ) : (
                <input
                  id="name"
                  type="text"
                  disabled
                  defaultValue={userProfile?.address}
                  {...register("phone")}
                  className={styles.auth_form_inputField}
                />
              )}
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid item xs={12} display={"flex"} alignItems={"center"}>
                <FormLabelCheckout label={" Delivery Address:"} />
                <div style={{ display: "flex", justifyContent: "end" }}>
                  {!userProfileLoading && userProfile?.address && (
                    <div>
                      <Checkbox
                        color="success"
                        onChange={(e) => setSameAsAddress(e.target.checked)}
                      />{" "}
                      <Typography variant="title1">Same as address </Typography>
                    </div>
                  )}
                </div>
              </Grid>
            </Grid>
            {!sameAsAddress && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>
                  <FormAddressFieldCheckout
                    label={"Division"}
                    data={divisionData}
                    setSelectedData={setDivision}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  {division?.title && (
                    <FormAddressFieldCheckout
                      label={"District"}
                      data={districtsData[division.value]}
                      setSelectedData={setDistrict}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  {district?.title && (
                    <FormAddressFieldCheckout
                      label={"Upozila"}
                      data={upozilaData[district?.value]}
                      setSelectedData={setUpozila}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  {upozila?.title && (
                    <FormAddressFieldCheckout
                      label={"Union"}
                      data={unionData[upozila?.value]}
                      setSelectedData={setUnion}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography
                    variant="title1"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                      marginLeft: "10px",
                      padding: "10px 0px",
                    }}
                  >
                    <label htmlFor="">
                      Street/Vill/Sector (Provide in details)
                    </label>
                  </Typography>
                  <input
                    type="text"
                    onChange={(e) => setFullAddress(e.target.value)}
                    className={styles.auth_form_inputField}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
          {/* Billing */}
          <Grid container paddingY={2}>
            <Grid item xs={12}>
              <label htmlFor="title" className={styles.auth_label}>
                <Typography
                  variant="h5"
                  style={{
                    // padding: "5vh 0",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  Billing Options :
                </Typography>
              </label>
              <Divider />
            </Grid>
            {checkoutData?.useBalance === true ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5vh",
                }}
              >
                <FormLabelCheckout label={"You are using your balance now"} />
              </div>
            ) : (
              <>
                {" "}
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  style={{
                    borderRight: "1px solid #ddd",
                    minHeight: "30vh",
                    padding: "3vh",
                  }}
                >
                  <FormControl fullWidth sx={{ pb: "23px" }}>
                    <RadioGroup>
                      <FormControlLabel
                        sx={{ mr: 0 }}
                        value="cod"
                        control={
                          <Radio
                            size="small"
                            color="success"
                            onClick={() => setBillingOptions("cod")}
                          />
                        }
                        label={
                          <p className={styles.shippingItem}>
                            Cash on delivery
                          </p>
                        }
                      />
                      <FormControlLabel
                        sx={{ mr: 0 }}
                        value="mp"
                        control={
                          <Radio
                            size="small"
                            color="success"
                            onClick={() => setBillingOptions("mp")}
                          />
                        }
                        label={
                          <p className={styles.shippingItem}>Manual Payment</p>
                        }
                      />
                      <FormControlLabel
                        sx={{ mr: 0 }}
                        value="op"
                        control={
                          <Radio
                            size="small"
                            color="success"
                            onClick={() => setBillingOptions("op")}
                          />
                        }
                        label={
                          <p className={styles.shippingItem}>Online Payment</p>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={9} md={10}>
                  <BillingOptions
                    setBillingOptions={setBillingOptions}
                    billingOptions={billingOptions}
                    setPaymentNumber={setPaymentNumber}
                    setTrnxID={setTrnxID}
                    setPaymentMedium={setPaymentMedium}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </form>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <input
            type="submit"
            className={styles.form_submitBtn}
            onClick={handleSubmitBtn}
            value={"Confirm Order"}
            style={{ width: "100%", maxWidth: "200px" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default CheckOutPage;
