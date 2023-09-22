import { Box, Card, Grid, Rating } from "@mui/material";
import React from "react";
import WriteYourFeedback from "./WriteYourFeedback";

const ReviewAndFeedBack = ({ productDetails }) => {
  return (
    <div>
      <Box sx={{ marginTop: "5vh" }}>
        {/* <Typography variant="h6" borderBottom={"1px solid #e1e1e1"}>
          Review & Feedback :
        </Typography> */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <WriteYourFeedback productDetails={productDetails} />
        </Box>
        <Card sx={{ marginY: "10px", padding: "1vh 2vh" }}>
          <Grid container>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <Rating name="read-only" size="small" value={4} readOnly />
            </Grid>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <p style={{}}>
                For Gaming and Movie, this Monitor is amazing, but for Graphics
                design, it's not recommended, and if you are not used to curved
                displays, you will not feel comfortable with the display
                surface.
              </p>
            </Grid>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <p>
                {" "}
                By{" "}
                <span style={{ color: "var(--primaryColor)" }}>
                  Shuvo Ahmed
                </span>{" "}
                on <span style={{ fontWeight: "bold" }}>20 Mar 2023</span>{" "}
              </p>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ marginY: "10px", padding: "1vh 2vh" }}>
          <Grid container>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <Rating name="read-only" size="small" value={4} readOnly />
            </Grid>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <p style={{}}>
                For Gaming and Movie, this Monitor is amazing, but for Graphics
                design, it's not recommended, and if you are not used to curved
                displays, you will not feel comfortable with the display
                surface.
              </p>
            </Grid>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <p>
                {" "}
                By{" "}
                <span style={{ color: "var(--primaryColor)" }}>
                  Shuvo Ahmed
                </span>{" "}
                on <span style={{ fontWeight: "bold" }}>20 Mar 2023</span>{" "}
              </p>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ marginY: "10px", padding: "1vh 2vh" }}>
          <Grid container>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <Rating name="read-only" size="small" value={4} readOnly />
            </Grid>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <p style={{}}>
                For Gaming and Movie, this Monitor is amazing, but for Graphics
                design, it's not recommended, and if you are not used to curved
                displays, you will not feel comfortable with the display
                surface.
              </p>
            </Grid>
            <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
              <p>
                {" "}
                By{" "}
                <span style={{ color: "var(--primaryColor)" }}>
                  Shuvo Ahmed
                </span>{" "}
                on <span style={{ fontWeight: "bold" }}>20 Mar 2023</span>{" "}
              </p>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default ReviewAndFeedBack;
