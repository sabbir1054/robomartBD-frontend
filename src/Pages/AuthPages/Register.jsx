import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
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
const Register = ({ showPass, setShowPass }) => {
  const [showPass2, setShowPass2] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const postNewUser = (data) => {
    fetch(`${backendUrl}/api/auth/users/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result?.id) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Register Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          successMassage();
          navigate("/login");
          reset();
        } else if (result.password) {
          customError(result.password);
        } else {
          errorMassage();
        }
      });
  };

  const onSubmit = (data) => {
    if (data.password !== data.re_password) {
      notify();
    } else {
      postNewUser(data);
    }
  };

  return (
    <div>
      <Box className={styles.auth_wrapper}>
        <Typography variant="subtitle1" className={styles.auth_subtitle}>
          Register An Account
        </Typography>
        <Box className={styles.auth_container}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.auth_form}>
            <label htmlFor="name" className={styles.auth_label}>
              First name:*
            </label>
            <input
              type="name"
              {...register("first_name", { required: true })}
              className={styles.auth_form_inputField}
            />
            {errors.name && (
              <span className={styles.auth_form_error}>
                *This field is required
              </span>
            )}
            <br />
            <label htmlFor="name" className={styles.auth_label}>
              Last name:
            </label>
            <input
              type="name"
              {...register("last_name", { required: true })}
              className={styles.auth_form_inputField}
            />
            <label htmlFor="email" className={styles.auth_label}>
              Email:*
            </label>
            <input
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
            <label htmlFor="password" className={styles.auth_label}>
              Password:*
            </label>
            <input
              type={showPass ? "text" : "password"}
              {...register("password", { required: true })}
              className={styles.auth_form_inputField}
            />{" "}
            <p className={styles.eyeIconR}>
              {!showPass && (
                <RemoveRedEyeIcon onClick={() => setShowPass(true)} />
              )}
              {showPass && (
                <VisibilityOffIcon onClick={() => setShowPass(false)} />
              )}
            </p>
            <br />
            <label htmlFor="password2" className={styles.auth_label}>
              Re-Type Password:*
            </label>
            <input
              type={showPass2 ? "text" : "password"}
              {...register("re_password", { required: true })}
              className={styles.auth_form_inputField}
            />{" "}
            <p className={styles.eyeIconR2}>
              {!showPass2 && (
                <RemoveRedEyeIcon onClick={() => setShowPass2(true)} />
              )}
              {showPass2 && (
                <VisibilityOffIcon onClick={() => setShowPass2(false)} />
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
              value={"Register Now"}
              className={styles.auth_form_submitBtn}
            />
          </form>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>- or -</p>
          <LoginWithGoogle />
          <p style={{ margin: "15px 0px" }}>
            Already Have an Account ?<NavLink to={"/login"}>Login Here</NavLink>
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
