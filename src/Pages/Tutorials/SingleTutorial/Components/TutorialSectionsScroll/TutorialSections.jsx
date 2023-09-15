import { Typography } from "@mui/material";
import React from "react";

const TutorialSections = () => {
  return (
    <>
      <div>
        <Typography
          id={"sec2"}
          variant="h6"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            marginTop: "3vh",
          }}
        >
          Installing Arduino
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
      <div>
        <Typography
          id={"sec3"}
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
      <div>
        <Typography
          id={"sec4"}
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
      </div>
    </>
  );
};

export default TutorialSections;
