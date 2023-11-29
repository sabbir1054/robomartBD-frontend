import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useGetHomeDataQuery } from "../../redux/api/api";
import styles from "./Footer.module.scss";
const Footer = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  return (
    <div>
      <Box className={styles.footerTopWrapper}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h6" className={styles.footerTitle}>
                <NavLink style={{ color: "black" }} to={"/"}>
                  Home
                </NavLink>
              </Typography>
              <ul className={styles.footerLists}>
                <li>
                  <NavLink className={styles.footerListItem} to="/products">
                    <StorefrontIcon /> Shop
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={styles.footerListItem}>
                    <RssFeedSharpIcon /> Our Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.footerListItem}>
                    <PlayLessonIcon /> Tutorial{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography
                variant="h6"
                className={styles.footerTitle}
                style={{ display: "flex", alignItems: "center" }}
              >
                <HelpCenterIcon />{" "}
                <span style={{ margin: "0 5px" }}>Support</span>
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
                  <NavLink className={styles.footerListItem} to={"/tutorials"}>
                    Technical Video
                  </NavLink>
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
              <Typography
                variant="h6"
                className={styles.footerTitle}
                paddingTop={0}
              >
                Helpline:
              </Typography>
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
                  {homeData1?.phone}
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
                  info@robomartbd.com
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
          className={styles.copR8}
        >
          <p>Copyright © 2023 RoboMart BD. All Rights Reserved.</p>
          <Box
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <p>Stay Connected:</p>{" "}
            <NavLink to={`${homeData1?.facebook}`} style={{ color: "white" }}>
              {" "}
              <FacebookIcon className={styles.socialIcon} />
            </NavLink>
            <NavLink to={`${homeData1?.youtube}`} style={{ color: "white" }}>
              {" "}
              <YouTubeIcon className={styles.socialIcon} />
            </NavLink>
            <NavLink to={`${homeData1?.linkdin}`} style={{ color: "white" }}>
              {" "}
              <LinkedInIcon className={styles.socialIcon} />
            </NavLink>
            <NavLink to={`${homeData1?.twiter}`} style={{ color: "white" }}>
              {" "}
              <TwitterIcon className={styles.socialIcon} />
            </NavLink>
            <NavLink to={`${homeData1?.instragram}`} style={{ color: "white" }}>
              {" "}
              <InstagramIcon className={styles.socialIcon} />
            </NavLink>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
