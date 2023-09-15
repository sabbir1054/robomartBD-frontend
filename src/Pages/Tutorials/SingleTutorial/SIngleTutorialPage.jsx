import { Container, Grid, Typography } from "@mui/material";

import React from "react";
import TutorialProducts from "./Components/TutorialProducts/TutorialProducts";
import TutorialSections from "./Components/TutorialSectionsScroll/TutorialSections";
import TutorialTitleNav from "./Components/TutorialTitleNav/TutorialTitleNav";
import TutorialHead from "./Components/TutorialsHead/TutorialHead";
const SIngleTutorialPage = () => {
  return (
    <>
      <Container maxWidth={"xl"} style={{ minHeight: "80vh" }}>
        <Typography
          variant="h4"
          style={{
            padding: "5vh 0 0vh 0vh",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          SparkFun Arduino UNO R4 WiFi Qwiic Kit Hookup Guide
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <TutorialHead />
            <TutorialProducts />
            <TutorialSections />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <TutorialTitleNav />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SIngleTutorialPage;
