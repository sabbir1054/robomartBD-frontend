import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styles from "./AuthPage.module.scss";
const Login = ({ showPass, setShowPass }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          <p style={{ margin: "2px 0px" }}>
            Forget your password ?
            <NavLink to={"/forget-password"}>Click Here</NavLink>
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
