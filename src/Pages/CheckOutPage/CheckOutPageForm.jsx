import {
  allDistict,
  allDivision,
  allUpazila,
} from "@bangladeshi/bangladesh-address";
import {
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetCartQuery, useGetUserQuery } from "../../redux/api/api";
import styles from "./CheckOut.module.scss";
import FormAddressFieldCheckout from "./FormAddressFieldCheckout";
import FormLabelCheckout from "./FormLabelCheckout";
import {
  getAllDivision,
  getAllDistrict,
  getAllUnion,
  getAllUpazila,
} from "bd-divisions-to-unions";
const CheckOutPage = () => {
  const [sameAsAddress, setSameAsAddress] = useState(false);
  const [division, setDivision] = useState({});
  const [district, setDistrict] = useState({});
  const [upozila, setUpozila] = useState({});
  const [union, setUnion] = useState({});

  const divisionData = getAllDivision("en");
  const districtsData = getAllDistrict("en");
  const upozilaData = getAllUpazila("en");
  const unionData = getAllUnion("en");



  const { data, isLoading, isError } = useGetUserQuery();
  const { data: cartData } = useGetCartQuery();
  const [user, setUser] = useState({});
  const navigate = useNavigate();


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

  const onSubmit = (data) => {
    console.log(data);
  };
 

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

  return (
    <div style={{ minHeight: "70vh", padding: "5vh 0" }}>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
            padding: "3vh 0",
          }}
        >
          Checkout
        </Typography>
        <Divider />

        <br />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.checkout_wrapper}
        >
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <FormLabelCheckout label={" Name:"} />
              {data && (
                <input
                  type="text"
                  disabled
                  defaultChecked
                  defaultValue={data[0]?.first_name + " " + data[0]?.last_name}
                  // {...register(, { required: true })}
                  className={styles.auth_form_inputField}
                />
              )}{" "}
              <br />
              <FormLabelCheckout label={" Your Address:"} />
              <input
                type="text"
                {...register("address", { required: true })}
                className={styles.auth_form_inputField}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <label htmlFor="title" className={styles.auth_label}>
                <Typography
                  variant="title1"
                  style={{
                    textAlign: "center",
                    padding: "5vh 0",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Email:
                </Typography>
              </label>
              {data && (
                <input
                  type="text"
                  disabled
                  defaultChecked
                  defaultValue={data[0]?.email}
                  // {...register(, { required: true })}
                  className={styles.auth_form_inputField}
                />
              )}
              <label htmlFor="title" className={styles.auth_label}>
                <Typography
                  variant="title1"
                  style={{
                    textAlign: "center",
                    padding: "5vh 0",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Contact number :
                </Typography>
              </label>
              <input
                type="text"
                {...register("address", { required: true })}
                className={styles.auth_form_inputField}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid item xs={12} sm={12} md={6}>
                <FormLabelCheckout label={" Delivery Address:"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {" "}
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <div>
                    <Checkbox
                      color="success"
                      onChange={(e) => setSameAsAddress(e.target.checked)}
                    />{" "}
                    <Typography variant="title1">Same as address </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
            {!sameAsAddress && (
              <Grid container spacing={2}>
                <Grid item sm={12} md={3}>
                  <FormAddressFieldCheckout
                    label={"Division"}
                    data={divisionData}
                    setSelectedData={setDivision}
                  />
                </Grid>
                <Grid item sm={12} md={3}>
                  {division?.title && (
                    <FormAddressFieldCheckout
                      label={"District"}
                      data={districtsData[division.value]}
                      setSelectedData={setDistrict}
                    />
                  )}
                </Grid>
                <Grid item sm={12} md={3}>
                  {district?.title && (
                    <FormAddressFieldCheckout
                      label={"Upozila"}
                      data={upozilaData[district?.value]}
                      setSelectedData={setUpozila}
                    />
                  )}
                </Grid>
                <Grid item sm={12} md={3}>
                  {upozila?.title && (
                    <FormAddressFieldCheckout
                      label={"Union"}
                      data={unionData[upozila?.value]}
                      setSelectedData={setUnion}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
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
                    {...register("address", { required: true })}
                    className={styles.auth_form_inputField}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default CheckOutPage;
