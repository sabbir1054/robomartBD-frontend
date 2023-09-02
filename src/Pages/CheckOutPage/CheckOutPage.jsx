import { Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./CheckOut.module.scss"
import { useGetCartQuery, useGetUserQuery } from "../../redux/api/api";
import { useForm } from "react-hook-form";
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
    setUser(data ? data[0] : []);
  }, [data]);

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
              Tutorial Title :
            </Typography>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className={styles.auth_form_inputField}
          />
        </form>
      </Container>
    </div>
  );
};

export default CheckOutPage;
