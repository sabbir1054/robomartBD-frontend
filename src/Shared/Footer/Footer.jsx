import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div>
      <Box className={styles.footerTopWrapper}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h6" className={styles.footerTitle}>
                Home
              </Typography>
              <ul className={styles.footerLists}>
                <li>
                  <NavLink className={styles.footerListItem}>
                    Best selling items
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>Our Blogs</NavLink>
                </li>
                <li>
                  <NavLink className={styles.footerListItem}>
                    Our Forum{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h6" className={styles.footerTitle}>
                Support
              </Typography>
              <ul className={styles.footerLists}>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>
                    How to place order
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>
                    Technical Video
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>FAQ</NavLink>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h6" className={styles.footerTitle}>
                Polices
              </Typography>
              <ul className={styles.footerLists}>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>
                    Terms & Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.footerListItem}>
                    Return Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.footerListItem}>
                    Warranty Policy
                  </NavLink>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* logo */}
              <img src="/assets/logo.png" alt="" srcset="" width={200} />
              <div
                style={{ display: "flex", alignItems: "center" }}
                className={styles.helpNumber}
              >
                <p style={{ fontFamily: "var(--secondaryFont)" }}>
                  <CallIcon />
                </p>
                <p
                  style={{
                    fontFamily: "var(--secondaryFont)",
                    marginLeft: "5px",
                  }}
                >
                  014568576
                </p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className={styles.helpNumber}
              >
                <p style={{ fontFamily: "var(--secondaryFont)" }}>
                  <MailIcon />
                </p>
                <p
                  style={{
                    fontFamily: "var(--secondaryFont)",
                    marginLeft: "5px",
                  }}
                >
                  014568576
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={styles.footerBottom}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="">Copyright © 2023 RoboMart BD. All Rights Reserved.</p>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <p>Stay Connected:</p>{" "}
            <FacebookIcon className={styles.socialIcon} />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
