import { Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetCartQuery, useGetUserQuery } from "../../redux/api/api";
import styles from "./CheckOut.module.scss";
const CheckOutPage = () => {
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
  console.log(user);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ minHeight: "70vh" }}>
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
                  Name:
                </Typography>
              </label>
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
                  Write your full address :
                </Typography>
              </label>
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
        </form>
      </Container>
    </div>
  );
};

export default CheckOutPage;
