import { Typography } from "@mui/material";
import React from "react";
import styles from "./AddProducts.module.scss";
const FormLebel = ({ text }) => {
  return (
    <>
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
          {text}
        </Typography>
      </label>
      <br />
    </>
  );
};

export default FormLebel;
