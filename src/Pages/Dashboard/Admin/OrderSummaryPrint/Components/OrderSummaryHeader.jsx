import { Grid, Typography } from "@mui/material";
import React from "react";
import Barcode from "react-barcode";
import { useParams } from "react-router-dom";

const OrderSummaryHeader = ({ ordersInfo }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const params = useParams();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={7}>
          {/* logo */}
          <img src="/assets/logo.png" alt="" width={"200px"} srcset="" />
          <div>
            <Typography
              variant="title2"
              style={{ textDecoration: "underline" }}
            >
              Shipping Info:
            </Typography>
            <br />
            <Typography
              variant="title1"
              fontWeight={"bold"}
              fontFamily={"Poppins"}
            >
              Asif Khan{" "}
            </Typography>
            <br />
            <Typography variant="title2" fontFamily={"Poppins"}>
              Daffodil International University, Ashulia , Dhaka
            </Typography>
            <br />
            <Typography
              variant="title1"
              fontFamily={"Poppins"}
              fontWeight={"bold"}
            >
              014579869634
            </Typography>
            <br />
          </div>
        </Grid>
        <Grid item md={5}>
          <Barcode value={`#RMBD${ordersInfo?.id}`} height={50} />
          <div>
            <Typography
              variant="title2"
              style={{ textDecoration: "underline" }}
            >
              Order Info:
            </Typography>
            <br />
            <Typography
              variant="title1"
              fontWeight={"bold"}
              fontFamily={"Poppins"}
            >
              Order ID: #{ordersInfo?.id}
            </Typography>
            <br />
            <Typography variant="title2" fontFamily={"Poppins"}>
              Order date:{" "}
              {ordersInfo?.order_date && formatDate(ordersInfo?.order_date)}
            </Typography>
            <br />
            <Typography
              variant="title1"
              fontFamily={"Poppins"}
              fontWeight={"bold"}
            >
              Payment Method: <br />
            </Typography>
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummaryHeader;
