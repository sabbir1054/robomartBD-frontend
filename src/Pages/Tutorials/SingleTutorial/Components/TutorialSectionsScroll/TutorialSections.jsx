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
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",

              margin: "2vh 0",
            }}
          >
            <img
              src="/assets/photo-blog.jpg"
              alt=""
              style={{
                maxWidth: "400px",
                transition: "transform 0.3s",
                border: "1px solid #e2e2e2",
              }}
              srcset=""
              onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div> */}
        </div>
      ))}

      {}

      {/*  <div
        id={"sec3"}
        className="scroll-spy-section"
  
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            marginTop: "3vh",
          }}
        >
          The Project: Displaying Accelerometer Data Over Bluetooth
        </Typography>
        <Typography variant="body1" textAlign={"justify"}>
          Is there anything more tedious than having to connect dozens of wires
          to get your latest project up and running? Wouldn’t it be nice if
          there was some way to wirelessly send data over short distances and
          eliminate the need for all those pesky wires? <br />
          Enter Bluetooth! It’s a relatively simple way for electronic devices
          to wirelessly connect by using a radio frequency to share data over
          short distances. In this tutorial, we’ll teach you how to get
          <br /> started using Bluetooth in your projects by sending sensor data
          between multiple SparkFun Thing Plus ESP32 Wroom USB-C devices.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            margin: "2vh 0",
          }}
        >
          <img
            src="/assets/photo-blog.jpg"
            alt=""
            style={{
              maxWidth: "400px",
              transition: "transform 0.3s",
              border: "1px solid #e2e2e2",
            }}
            srcset=""
            onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </div>
      <div
        id={"sec4"}
        className="scroll-spy-section"
  
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            marginTop: "3vh",
          }}
        >
          Triple Axis Accelerometer Breakout - BMA400 (Qwiic)
        </Typography>
        <Typography variant="body1" textAlign={"justify"}>
          Is there anything more tedious than having to connect dozens of wires
          to get your latest project up and running? Wouldn’t it be nice if
          there was some way to wirelessly send data over short distances and
          eliminate the need for all those pesky wires? <br />
          Enter Bluetooth! It’s a relatively simple way for electronic devices
          to wirelessly connect by using a radio frequency to share data over
          short distances. In this tutorial, we’ll teach you how to get
          <br /> started using Bluetooth in your projects by sending sensor data
          between multiple SparkFun Thing Plus ESP32 Wroom USB-C devices.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            margin: "2vh 0",
          }}
        >
          <img
            src="/assets/photo-blog.jpg"
            alt=""
            style={{
              maxWidth: "400px",
              transition: "transform 0.3s",
              border: "1px solid #e2e2e2",
            }}
            srcset=""
            onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </div> */}
      <br />
    </>
  );
};

export default TutorialSections;
