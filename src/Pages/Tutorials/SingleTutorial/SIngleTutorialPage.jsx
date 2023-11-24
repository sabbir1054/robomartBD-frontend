import { Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllComments from "./Components/CommentSection/AllComments";
import TutorialProducts from "./Components/TutorialProducts/TutorialProducts";
import TutorialSections from "./Components/TutorialSectionsScroll/TutorialSections";
import TutorialTitleNav from "./Components/TutorialTitleNav/TutorialTitleNav";
import TutorialHead from "./Components/TutorialsHead/TutorialHead";
const SIngleTutorialPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [changePosition, setChangePosition] = useState(false);
  const [tutorialDetails, setTutorialDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://robomartbd.com/blog/get_blog/${params?.tutorialId}`)
      .then((res) => res.json())
      .then((data) => setTutorialDetails(data));
  }, []);

  /* track */

  useEffect(() => {
    const handleScroll = () => {
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
          {tutorialDetails?.title}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <TutorialHead
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              tutorialDetails={tutorialDetails}
            />
            <TutorialProducts tutorialDetails={tutorialDetails} />

            <TutorialSections
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              tutorialDetails={tutorialDetails}
            />

            {/* Comments Section */}
            <AllComments />
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
                tutorialDetails={tutorialDetails}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SIngleTutorialPage;
