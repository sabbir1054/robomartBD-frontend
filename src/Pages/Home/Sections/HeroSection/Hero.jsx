import { Box, Container, Grid } from "@mui/material";
import React from "react";
import OfferCards from "./Components/OfferCards/OfferCards";
import HeroSlider from "./Components/Slider/HeroSlider";
import styles from "./Hero.module.scss";
import OurFeatures from "./OurFeatures/OurFeatures";
const Hero = () => {
  return (
    <>
      <Container className={styles.heroWrapper}>
        <Grid container columnSpacing={2} alignItems={"center"} paddingTop={5}>
          <Grid item lg={8} width={"100%"}>
            <HeroSlider />
          </Grid>
          <Grid item lg={4} width={"100%"}>
            <Box>
              <OfferCards />
            </Box>
          </Grid>
        </Grid>
        <OurFeatures />
      </Container>
    </>
  );
};

export default Hero;
