import { Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MonthlyBar from "./Components/MonthlyBar";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(`${backendUrl}/order_management/get_dashbord`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDashboardData(data));
  }, []);

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
                {dashboardData?.total_order}
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
                Active & Pending{" "}
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {dashboardData &&
                  parseInt(dashboardData?.active_order) +
                    parseInt(dashboardData?.pending_order)}
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
                {dashboardData?.completed_order}
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
                {dashboardData?.success}%
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
                This month Sell <small>(product)</small>
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {dashboardData?.current_month_sell}
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
                This month profit <small>(BDT)</small>
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {dashboardData?.current_month_profit}
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
                Total Sell <small>(product)</small>
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {dashboardData?.total_sell}
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
                Total Profit <small>(BDT)</small>
              </Typography>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {dashboardData?.total_profit}
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
