import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styles from "./AuthPage.module.scss";
const Register = ({ showPass, setShowPass }) => {
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
          Register An Account
        </Typography>
        <Box className={styles.auth_container}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.auth_form}>
            <label htmlFor="email" className={styles.auth_label}>
              Name:*
            </label>
            <input
              type="name"
              {...register("name", { required: true })}
              className={styles.auth_form_inputField}
            />
            {errors.name && (
              <span className={styles.auth_form_error}>
                *This field is required
              </span>
            )}
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
              type="password"
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
            <p>
              Already Have an Account ?<NavLink to={'/login'}>Login Here</NavLink>
            </p>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
