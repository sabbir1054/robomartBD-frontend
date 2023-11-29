import CreditCardIcon from "@mui/icons-material/CreditCard";
import ForumIcon from "@mui/icons-material/Forum";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncIcon from "@mui/icons-material/Sync";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import styles from "./OurFeatures.module.scss";
const OurFeatures = () => {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const variantH = isXlScreen ? "h6" : "subtitle2";

  return (
    <div style={{ width: "98%", display: "flex", justifyContent: "center" }}>
      {/* <Container className={styles.ourFeatures_wrapper}> */}
      <Box paddingY={2} className={styles.ourFeatures_wrapper}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={3} className={styles.singleFeature}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">
                <LocalShippingIcon
                  sx={{ fontSize: "40px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant={variantH}
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  Fast Delivery
                </Typography>
                <Typography
                  fontSize={!isXlScreen && "14px"}
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
              <Typography variant="h6">
                <SyncIcon
                  sx={{ fontSize: "40px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant={variantH}
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  15 Days Return
                </Typography>
                <Typography
                  variant="subTitle2"
                  fontSize={!isXlScreen && "14px"}
                  fontWeight={"normal"}
                  className={styles.featureText}
                >
                  If products have problem
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
              <Typography variant="h6">
                <CreditCardIcon
                  sx={{ fontSize: "40px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant={variantH}
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  Secure Payment
                </Typography>
                <Typography
                  variant="subTitle2"
                  fontWeight={"normal"}
                  className={styles.featureText}
                  fontSize={!isXlScreen && "14px"}
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
              <Typography variant="h6">
                <ForumIcon
                  sx={{ fontSize: "40px" }}
                  className={styles.featureIcons}
                />
              </Typography>
              <Box paddingX={3}>
                <Typography
                  variant={variantH}
                  fontWeight={"bold"}
                  className={styles.featureTitle}
                >
                  24/7 Fast Support
                </Typography>
                <Typography
                  variant="subTitle"
                  fontWeight={"normal"}
                  className={styles.featureText}
                  fontSize={!isXlScreen && "14px"}
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
