import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { backendUrl } from "../../utils/backendApiUrlProvider";
import styles from "./AuthPage.module.scss";
import LoginWithGoogle from "./LoginWithGoogle";
const notify = () => toast.error("Password not match!");
const successMassage = () =>
  toast.success("Register successfully! Now Login Here");
const errorMassage = () => toast.error("Not register please try again!");
const customError = (massage) => toast.error(massage);

const Login = ({ showPass, setShowPass }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const postLoginData = (data) => {
    fetch(`${backendUrl}/api/auth/jwt/create/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.detail) {
          customError(result.detail);
        }

        if (result.refresh && result.access) {
          // Cookies.set("refreshToken", result.refresh, { expires: 7 });
          localStorage.setItem("user", JSON.stringify(result.access));

          reset();
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const onSubmit = (data) => {
    if (data.email && data.password) {
      postLoginData(data);
    } else {
      customError("Please enter email and password");
    }
  };

  return (
    <div>
      <Box className={styles.auth_wrapper}>
        <Typography variant="subtitle1" className={styles.auth_subtitle}>
          Log In Your Account
        </Typography>
        <Box className={styles.auth_container}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.auth_form}>
            <input
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: true })}
              className={styles.auth_form_inputField}
            />
            {errors.email && (
              <span className={styles.auth_form_error}>
                *This field is required
              </span>
            )}
            <br />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className={styles.auth_form_inputField}
            />{" "}
            <p className={styles.eyeIcon}>
              {!showPass && (
                <RemoveRedEyeIcon onClick={() => setShowPass(true)} />
              )}
              {showPass && (
                <VisibilityOffIcon onClick={() => setShowPass(false)} />
              )}
            </p>
            {errors.password && (
              <span className={styles.auth_form_error}>
                This field is required
              </span>
            )}{" "}
            <br />
            <input
              type="submit"
              value={"Log in"}
              className={styles.auth_form_submitBtn}
            />
          </form>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>- or -</p>
          <LoginWithGoogle />
          <p style={{ margin: "15px 0px" }}>
            Forget your password ?
            <NavLink to={"/auth/forget_password"}>Click Here</NavLink>
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
