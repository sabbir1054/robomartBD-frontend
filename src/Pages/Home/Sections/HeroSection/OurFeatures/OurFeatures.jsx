import CreditCardIcon from "@mui/icons-material/CreditCard";
import ForumIcon from "@mui/icons-material/Forum";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncIcon from "@mui/icons-material/Sync";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./OurFeatures.module.scss";
const OurFeatures = () => {
  return (
    <div>
      {/* <Container className={styles.ourFeatures_wrapper}> */}
      <Box paddingY={2} marginY={3} className={styles.ourFeatures_wrapper}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={3} className={styles.singleFeature}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                <LocalShippingIcon
                  sx={{ fontSize: "50px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  Fast Delivery
                </Typography>
                <Typography
                  variant="subTitle"
                  fontWeight={"normal"}
                  className={styles.featureText}
                >
                  For all orders over 200tk
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={styles.singleFeature}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                <SyncIcon
                  sx={{ fontSize: "50px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  15 Days Return
                </Typography>
                <Typography
                  variant="subTitle"
                  fontWeight={"normal"}
                  className={styles.featureText}
                >
                  If components have problem
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={styles.singleFeature}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                <CreditCardIcon
                  sx={{ fontSize: "50px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  Secure Payment
                </Typography>
                <Typography
                  variant="subTitle"
                  fontWeight={"normal"}
                  className={styles.featureText}
                >
                  100% Secure Payment
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                <ForumIcon
                  sx={{ fontSize: "50px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  24/7 Support
                </Typography>
                <Typography
                  variant="subTitle"
                  fontWeight={"normal"}
                  className={styles.featureText}
                >
                  Dedicated Support
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </div>
  );
};

export default OurFeatures;
