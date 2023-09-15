import { Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import React from "react";
const TutorialHead = () => {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Robomart BD Admin"
        subheader="September 14, 2016"
      />
      <Divider color={"#f2f2f2"} />
      <Typography
        variant="h6"
        style={{ fontFamily: "Poppins", fontWeight: "bold", marginTop: "3vh" }}
      >
        Introduction
      </Typography>
      <Typography variant="body1" textAlign={"justify"} id={"sec1"}>
        Is there anything more tedious than having to connect dozens of wires to
        get your latest project up and running? Wouldn’t it be nice if there was
        some way to wirelessly send data over short distances and eliminate the
        need for all those pesky wires? <br />
        Enter Bluetooth! It’s a relatively simple way for electronic devices to
        wirelessly connect by using a radio frequency to share data over short
        distances. In this tutorial, we’ll teach you how to get
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
    </>
  );
};

export default TutorialHead;
