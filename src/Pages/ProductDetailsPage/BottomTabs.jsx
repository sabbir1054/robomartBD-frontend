import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditorTextViewer from "../../Shared/EditorTextViewer/EditorTextViewer";
import ReviewAndFeedBack from "./ReviewAndFeedBack";

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

const BottomTabs = ({ productDetails }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
              label="Product Description"
              {...a11yProps(0)}
              style={{ color: "black" }}
              sx={{
                // color: value === 0 ? "black" : "black",
                fontWeight: value === 0 ? "bold" : "normal",
                fontSize: "16px",
              }}
            />
            <Tab
              label="Documents & Tutorials"
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
              label="Review and Feedback"
              {...a11yProps(2)}
              style={{ color: "black" }}
              sx={{
                // color:"black", // Change active and inactive tab font color
                fontWeight: value === 2 ? "bold" : "normal",
                fontSize: "16px", // Change font size
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* Product Description */}
          <EditorTextViewer froalaHTML={productDetails?.product_discription} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <EditorTextViewer froalaHTML={productDetails?.product_tutorial} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ReviewAndFeedBack productDetails={productDetails } />
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={3}></CustomTabPanel> */}
      </Box>
    </>
  );
};

export default BottomTabs;
