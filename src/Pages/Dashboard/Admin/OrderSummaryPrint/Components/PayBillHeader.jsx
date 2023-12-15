import { Grid, Typography } from "@mui/material";
import React from "react";
import Barcode from "react-barcode";
import { useParams } from "react-router-dom";
import { useGetHomeDataQuery } from "../../../../../redux/api/api";

function insertNewlineAfterThreeWords(inputString) {
  // Split the input string into an array of words
  const words = inputString.split(",");

  // Initialize an empty array to store the result
  const result = [];

  // Iterate through the words array
  for (let i = 0; i < words.length; i++) {
    // Add the current word to the result array
    result.push(`${words[i]},`);

    // If the current index is a multiple of 3 and not the last word, add a newline
    if ((i + 1) % 3 === 0 && i !== words.length - 1) {
      result.push("\n");
    }
  }

  // Join the result array back into a string
  const outputString = result.join(" ");

  return outputString;
}

const PayBillHeader = ({ ordersInfo }) => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
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
      <Grid container>
        <Grid item xs={4}>
          <div>
            <img src="/assets/logo2.png" alt="" width={"200px"} srcset="" />
          </div>
        </Grid>
        <Grid item xs={3}>
          {" "}
          <Typography
            style={{ marginTop: "10px" }}
            variant="h5"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Delivery Slip
          </Typography>
        </Grid>
        <Grid item xs={5} display={"flex"} justifyContent={"center"}>
          <Barcode
            value={`#INV${
              ordersInfo?.invoiceId?.id ? ordersInfo?.invoiceId?.id : ""
            }`}
            height={50}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} padding={2}>
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="title1"
                style={{ textDecoration: "underline" }}
                fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Shipping Info:
              </Typography>{" "}
              <br />
              <Typography
                variant="subtitle2"
                // fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Name : {ordersInfo?.user?.first_name}{" "}
                {ordersInfo?.user?.last_name}
              </Typography>
              {/* <br /> */}
              <Typography variant="subtitle2" fontFamily={"Poppins"}>
                <div style={{ maxWidth: "90%" }}>
                  {" "}
                  {ordersInfo?.address &&
                    insertNewlineAfterThreeWords(ordersInfo?.address)}{" "}
                </div>
              </Typography>
              {/* <br /> */}
              <Typography variant="subtitle2" fontFamily={"Poppins"}>
                {ordersInfo?.phone}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="title1"
                style={{ textDecoration: "underline" }}
                fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Client Info:
              </Typography>{" "}
              <br />
              <Typography
                variant="subtitle2"
                // fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Name : {ordersInfo?.user?.first_name}{" "}
                {ordersInfo?.user?.last_name}
              </Typography>
              {/* <br /> */}
              <Typography variant="subtitle2" fontFamily={"Poppins"}>
                <div style={{ maxWidth: "90%" }}>
                  {" "}
                  {ordersInfo?.address &&
                    insertNewlineAfterThreeWords(ordersInfo?.address)}{" "}
                </div>
              </Typography>
              {/* <br /> */}
              <Typography
                variant="subtitle2"
                fontFamily={"Poppins"}
                // fontWeight={"bold"}
              >
                {ordersInfo?.phone}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          {/* <Barcode
            value={`#INV${ordersInfo?.invoiceId ? ordersInfo?.invoiceId : ""}`}
            height={50}
          /> */}
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="title1"
                style={{ textDecoration: "underline" }}
                fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Order Info:
              </Typography>
              <br />
              <Typography
                variant="subtitle2"
                // fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Order ID: #{ordersInfo?.id}
              </Typography>
              {/* <br /> */}
              <Typography
                variant="subtitle2"
                // fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Invoice Id: {ordersInfo?.invoiceId?.id}
              </Typography>
              {/* <br /> */}
              <Typography variant="subtitle2" fontFamily={"Poppins"}>
                Order date:{" "}
                {ordersInfo?.order_date && formatDate(ordersInfo?.order_date)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="title1"
                style={{ textDecoration: "underline" }}
                fontWeight={"bold"}
                fontFamily={"Poppins"}
                marginRight={1}
              >
                Payment info:
              </Typography>
              <br />
              <Typography variant="subtitle2" fontFamily={"Poppins"}>
                Status :{ordersInfo?.invoiceId?.status} <br />
                Option: {ordersInfo?.billing_option} <br />
                Method: {ordersInfo?.payment_method}
                <br />
              </Typography>
            </Grid>
          </Grid>
          <div style={{ textAlign: "end" }}>
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PayBillHeader;
