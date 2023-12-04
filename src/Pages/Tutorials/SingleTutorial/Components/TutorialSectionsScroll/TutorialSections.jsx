import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import EditorTextViewer from "../../../../../Shared/EditorTextViewer/EditorTextViewer";







const TutorialSections = ({
  activeSection,
  setActiveSection,
  tutorialDetails,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    const sections = document.querySelectorAll(".scroll-spy-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const testArr = [2, 3, 4, 5, 6];

  return (
    <>
      {tutorialDetails?.pages?.slice(1)?.map((test) => (
        <div id={`sec${test?.page_no}`} className="scroll-spy-section">
          <Typography
            variant="h6"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              marginTop: "3vh",
            }}
          >
            {test?.page_title}
          </Typography>
          <Typography variant="body1" textAlign={"justify"}>
            {test?.content && <EditorTextViewer froalaHTML={test?.content} />}
          </Typography>
        </div>
      ))}

      <br />
    </>
  );
};

export default TutorialSections;
