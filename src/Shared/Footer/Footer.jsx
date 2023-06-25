import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Container } from "@mui/material";
import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div>
      <Box className={styles.footerTop}></Box>
      <Box className={styles.footerBottom}>
        <Container
          sx={{
            borderTop: "1px solid #f2f2f2",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="">Copyright © 2023 RoboMart BD. All Rights Reserved.</p>
          <div style={{ display: "flex" ,alignItems:"center"}}>
            <p>Stay Connected:</p> <FacebookIcon className={styles.socialIcon} />
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
