import { Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import TutorialProducts from "./Components/TutorialProducts/TutorialProducts";
import TutorialSections from "./Components/TutorialSectionsScroll/TutorialSections";
import TutorialTitleNav from "./Components/TutorialTitleNav/TutorialTitleNav";
import TutorialHead from "./Components/TutorialsHead/TutorialHead";
const SIngleTutorialPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [changePosition, setChangePosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
        console.log(
          document.body.scrollHeight,
          window.scrollY + window.innerHeight
        );
      }

      if (window.scrollY >= 0.1 * window.innerHeight) {
        setChangePosition(true);
      } else {
        setChangePosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <TutorialHead
              setActiveSection={setActiveSection}
              activeSection={activeSection}
            />
            <TutorialProducts />
            <TutorialSections
              setActiveSection={setActiveSection}
              activeSection={activeSection}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div
              style={{
                position: changePosition ? "sticky" : "",
                top: changePosition ? "20px" : "",
                marginBottom: "3vh",
              }}
            >
              <TutorialTitleNav
                setActiveSection={setActiveSection}
                activeSection={activeSection}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SIngleTutorialPage;
