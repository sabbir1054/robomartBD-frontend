import { Box, Grid } from "@mui/material";
import React from "react";
import SelectCategory from "../../../../Shared/NavigationBars/HeroNavigationBar/SelectCategory";
import CategoryList from "./CategoryList";
import OfferCards from "./Components/OfferCards/OfferCards";
import HeroSlider from "./Components/Slider/HeroSlider";
import OurFeatures from "./OurFeatures/OurFeatures";
const Hero = () => {
  return (
    <>
      {/* <Container className={styles.heroWrapper}> */}
      <Grid
        container
        columnSpacing={2}
        paddingTop={5}
        style={{ backgroundColor: "#F0F2F5" }}
      >
        <Grid item md={2}>
          {/* <SelectCategory /> */}
          <Box style={{ backgroundColor: "white", marginLeft: "20px" }}>
            <CategoryList />
          </Box>
        </Grid>
        <Grid item md={7} width={"100%"}>
          <HeroSlider />
        </Grid>
        <Grid item md={3} width={"100%"}>
          <OfferCards />
       
        </Grid>
      </Grid>
      <OurFeatures />
      {/* </Container> */}
    </>
  );
};

export default Hero;
