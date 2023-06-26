import { Box, Button, Container } from "@mui/material";
import React from "react";
import styles from "./OfferBanner.module.scss";
const OfferBanner = () => {
  return (
    <Container className={styles.offerBannerWrapper}>
      <Box className={styles.OfferBannerBtn}>
        <Button
          sx={{
            backgroundColor: "var(--primaryColor)",
            position: "absolute",
            bottom: "15px",
            transform: "translateX(-50%)",
            left: "50%",
          }}
          variant="contained"
          color="primary"
        >
          Visit Shop
        </Button>
      </Box>
    </Container>
  );
};

export default OfferBanner;
