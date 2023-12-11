import { Typography } from "@mui/material";
import React from "react";
import { useGetHomeDataQuery } from "../../../../../redux/api/api";

const OrderSummaryFooter = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();


  return (
    <div style={{ marginTop: "5px" }}>
      {/* <Divider /> */}
      <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
        Thank You
      </Typography>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <img src="/assets/logo.png" alt="" width={"150px"} /> */}
          <Typography variant="title1" fontWeight={"bold"} textAlign={"center"}>
            Join our Support 24/7
          </Typography>{" "}
          <Typography variant="title1" textAlign={"center"}>
            <span style={{ fontWeight: "bold" }}> Email: </span>{" "}
            support@robomartbd.com ,{" "}
            <span style={{ fontWeight: "bold" }}> Mobile: </span> {homeData1?.phone}
          </Typography>
          {/* <Typography
            variant="title1"
            fontWeight={"normal"}
            textAlign={"center"}
          >
            <span style={{ fontWeight: "bold" }}> Address: </span>Ashulia,
            Savar, Dhaka
          </Typography> */}
          <Typography
            variant="title1"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            www.robomartbd.com
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryFooter;
