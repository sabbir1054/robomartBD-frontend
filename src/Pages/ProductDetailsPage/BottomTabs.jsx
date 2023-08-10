import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
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

const BottomTabs = () => {
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
          <h5>Features</h5>
          <ul>
            <li>
              Let's you make a Line Follower robot without writing any code and
              with minimal wiring
            </li>
            <li>Compatible with any chassis (ready-made or self-made)</li>
            <li>Compatible with a huge variety of dc motors.</li>
            <li>
              Comes with a great line following robot code, preloaded into the
              onboard microcontroller
            </li>
            <li>
              Detects line of variable thickness, sharp turns, + type line
              intersection and line gap.
            </li>
            <li>Comes with its own line detection sensor.</li>
            <li>
              Onboard graphical OLED display, easy & intuitive user interface.
            </li>
            <li>Small size and compact design </li>
          </ul>
          <br /> <br />
          <h5>Specs:</h5>
          <li>
            Let's you make a Line Follower robot without writing any code and
            with minimal wiring
          </li>
          <li>Compatible with any chassis (ready-made or self-made)</li>
          <li>Compatible with a huge variety of dc motors.</li>
          <li>
            Comes with a great line following robot code, preloaded into the
            onboard microcontroller
          </li>
          <li>
            Detects line of variable thickness, sharp turns, + type line
            intersection and line gap.
          </li>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Link>Download this documentation</Link> <br />
          <h5 style={{ fontSize: "16px", padding: "10px 0px" }}>
            Video Tutorials
          </h5>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/yLVQ5j6LUR0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ReviewAndFeedBack />
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={3}></CustomTabPanel> */}
      </Box>
    </>
  );
};

export default BottomTabs;
