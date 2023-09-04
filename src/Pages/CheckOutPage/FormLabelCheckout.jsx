import React from 'react';
import styles from "./CheckOut.module.scss"
import { Typography } from '@mui/material';
const FormLabelCheckout = ({label}) => {
    return (
      <>
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
           {label}
          </Typography>
        </label>
      </>
    );
};

export default FormLabelCheckout;