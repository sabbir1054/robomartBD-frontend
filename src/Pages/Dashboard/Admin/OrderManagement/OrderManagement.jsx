import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ActiveOrders from "./Components/ActiveOrders/ActiveOrders";
import CompleteOrders from "./Components/CompleteOrders/CompleteOrders";
import PendingOrders from "./Components/PendingOrders/PendingOrders";
import AllReturn from "./Components/ReturnOrders/AllReturn";
import AllSuccess from "./Components/SuccessOrders/AllSuccess";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OrderManagement = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ minHeight: "70vh", padding: "2vh 0" }}>
      <Container maxWidth={"xl"}>
        <Typography
          variant="h5"
          textAlign={"center"}
          paddingTop={4}
          paddingBottom={2}
          fontWeight={"bold"}
        >
          Manage Orders
        </Typography>

        {/* Pending Orders */}
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--primaryColor)",
              },
            }}
          >
            <Tab
              label="Pending Orders"
              {...a11yProps(0)}
              style={{ color: "black" }}
              sx={{
                // color: value === 0 ? "black" : "black",
                fontWeight: value === 0 ? "bold" : "normal",
                fontSize: "16px",
              }}
            />
            <Tab
              label="Active Orders"
              {...a11yProps(1)}
              style={{ color: "black" }}
              sx={{
                // Change active and inactive tab font color
                fontWeight: value === 1 ? "bold" : "normal",
                fontSize: "16px", // Change font size
              }}
            />
            {/* <Tab label="Blogs" {...a11yProps(2)} /> */}
            <Tab
              label="Delivered Orders"
              {...a11yProps(2)}
              style={{ color: "black" }}
              sx={{
                // color:"black", // Change active and inactive tab font color
                fontWeight: value === 2 ? "bold" : "normal",
                fontSize: "16px", // Change font size
              }}
            />
            <Tab
              label="Success Orders"
              {...a11yProps(3)}
              style={{ color: "black" }}
              sx={{
                // color:"black", // Change active and inactive tab font color
                fontWeight: value === 2 ? "bold" : "normal",
                fontSize: "16px", // Change font size
              }}
            />
            <Tab
              label="Return Orders"
              {...a11yProps(4)}
              style={{ color: "black" }}
              sx={{
                // color:"black", // Change active and inactive tab font color
                fontWeight: value === 2 ? "bold" : "normal",
                fontSize: "16px", // Change font size
              }}
            />
          </Tabs>
        </Box>

        <Divider />
        <CustomTabPanel value={value} index={0}>
          <PendingOrders />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography
            variant="subtitle2"
            style={{ color: "red", fontWeight: "bold" }}
          >
            [*Note :] After Deliver Products to customer update order status to
            delivered or before click status returned confirm it
          </Typography>
          <ActiveOrders />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <CompleteOrders />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <AllSuccess />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <AllReturn />
        </CustomTabPanel>
      </Container>
    </div>
  );
};

export default OrderManagement;
