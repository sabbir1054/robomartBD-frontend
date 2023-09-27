import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MonthlyBar from "./Components/MonthlyBar";

const AdminDashboard = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <Container maxWidth="xl" style={{ padding: "5vh 0" }}>
        {/* Order Summary  */}
        <Typography variant="h5" marginBottom={2}>
          Orders Summary
        </Typography>
        <Divider />
        <Grid container spacing={5} marginTop={1}>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#624BFF",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                {" "}
                Total Orders{" "}
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {" "}
                11478{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#624BFF",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                {" "}
                Active Orders{" "}
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {" "}
                4548{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#624BFF",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                {" "}
                Completed Orders{" "}
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {" "}
                6356{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#624BFF",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                Success
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                78%
              </Typography>
            </div>
          </Grid>
        </Grid>
        {/* Balance Summary */}
        <Typography variant="h5" marginBottom={2} marginTop={5}>
          Accounts Summary
        </Typography>
        <Divider />
        <Grid container spacing={5} marginTop={1}>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#F5803E",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="title1"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                Current month Sell
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {" "}
                11478{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#F5803E",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="title1"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                {" "}
                Last month sell
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {" "}
                4548{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#F5803E",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                Total Sell
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                6356
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "#F5803E",
                color: "white",
                padding: "3vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                Total Profit
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                78998
              </Typography>
            </div>
          </Grid>
        </Grid>
        {/* Graph or Bars */}
        <MonthlyBar />
      </Container>
    </div>
  );
};

export default AdminDashboard;
