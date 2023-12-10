import { Grid, Typography } from "@mui/material";
import React from "react";
import Barcode from "react-barcode";
import { useParams } from "react-router-dom";

const OrderSummaryHeader = ({ ordersInfo, customerInfo }) => {
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
        <Grid item xs={12}>
          <Typography
            variant="h4"
            textAlign={"center"}
            fontWeight={"bold"}
            fontFamily={"Roboto"}
          >
            INVOICE
          </Typography>
        </Grid>
        <Grid item md={7}>
          <img src="/assets/logo.png" alt="" width={"200px"} srcset="" />

          <div>
            <Typography
              variant="title2"
              style={{ textDecoration: "underline" }}
            >
              Shipping Info:
            </Typography>

            <Typography
              variant="title1"
              fontWeight={"bold"}
              fontFamily={"Poppins"}
            >
              {customerInfo?.first_name} {customerInfo?.last_name}
            </Typography>
            <br />

            <Typography variant="title2" fontFamily={"Poppins"}>
              <div style={{ maxWidth: "90%" }}> {ordersInfo?.address} </div>
            </Typography>
            {/* <br /> */}
            <Typography
              variant="title1"
              fontFamily={"Poppins"}
              fontWeight={"bold"}
            >
              {ordersInfo?.phone}
            </Typography>
            <br />
          </div>
          <div>
            <Typography
              variant="title2"
              style={{ textDecoration: "underline" }}
            >
              Client Info:
            </Typography>

            <Typography
              variant="title1"
              fontWeight={"bold"}
              fontFamily={"Poppins"}
            >
              {customerInfo?.first_name} {customerInfo?.last_name}
            </Typography>
            <br />

            <Typography variant="title2" fontFamily={"Poppins"}>
              <div style={{ maxWidth: "90%" }}> {ordersInfo?.address} </div>
            </Typography>
            {/* <br /> */}
            <Typography
              variant="title1"
              fontFamily={"Poppins"}
              fontWeight={"bold"}
            >
              {ordersInfo?.phone}
            </Typography>
            <br />
          </div>
        </Grid>
        <Grid item md={5}>
          <Barcode
            value={`#INV${ordersInfo?.invoiceId ? ordersInfo?.invoiceId : ""}`}
            height={50}
          />
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
              marginRight={1}
            >
              Billing Options:
            </Typography>
            {ordersInfo?.billing_option}
            <Typography
              variant="title1"
              fontFamily={"Poppins"}
              fontWeight={"bold"}
              margin={1}
            >
              Method:
            </Typography>
            {ordersInfo?.payment_method}
            <br />
            {ordersInfo?.payment_id && (
              <small style={{ fontFamily: "Poppins" }}>
                Transaction Id:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {ordersInfo?.payment_id}
                </span>
              </small>
            )}
            {ordersInfo?.payment_id && (
              <small style={{ fontFamily: "Poppins" }}>
                Number:{ordersInfo?.payment_number}
              </small>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummaryHeader;
