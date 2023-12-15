import { Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import React, { useEffect } from "react";
import EditorTextViewer from "../../../../../Shared/EditorTextViewer/EditorTextViewer";
const TutorialHead = ({ activeSection, setActiveSection, tutorialDetails }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-spy-section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let divId = "sec1";
  useEffect(() => {
    if (tutorialDetails?.pages?.length > 0) {
      divId = `sec${tutorialDetails?.pages[0]?.page_no}`;
    }
  }, [tutorialDetails]);

  return (
    <>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>}
        title={`${tutorialDetails?.created_by?.first_name}
          ${tutorialDetails?.created_by?.last_name}`}
      />
      <Divider color={"#f2f2f2"} />
      <div id={divId} className="scroll-spy-section">
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            marginTop: "3vh",
          }}
        >
          {tutorialDetails?.pages?.length > 0 &&
            tutorialDetails?.pages[0]?.page_title}
        </Typography>
        <Typography variant="body1" textAlign={"justify"}>
          {tutorialDetails?.pages?.length > 0 && (
            <EditorTextViewer froalaHTML={tutorialDetails?.pages[0]?.content} />
          )}
        </Typography>
      </div>
    </>
  );
};

export default TutorialHead;
