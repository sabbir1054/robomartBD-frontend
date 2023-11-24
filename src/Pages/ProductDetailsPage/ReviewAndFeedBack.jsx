import { Box, Card, Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import WriteYourFeedback from "./WriteYourFeedback";
import { backendUrl } from "../../utils/backendApiUrlProvider";

const ReviewAndFeedBack = ({ productDetails }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [allFeedback, setAllFeedback] = useState([]);
  const getAllFeedData = async () => {
    setIsLoad(true);
    const response = await fetch(
      `${backendUrl}/feedback/get_all_feedback/${productDetails?.id}`
    );
    const data = await response.json();

    setAllFeedback(data.reverse());
    if (data?.length) {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    getAllFeedData();
  }, []);

  return (
    <div>
      <Box sx={{ marginTop: "5vh" }}>
        {/* <Typography variant="h6" borderBottom={"1px solid #e1e1e1"}>
          Review & Feedback :
        </Typography> */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <WriteYourFeedback
            productDetails={productDetails}
            getAllFeedData={getAllFeedData}
          />
        </Box>
        {allFeedback?.length > 0 &&
          allFeedback?.map((feedback) => (
            <Card sx={{ marginY: "10px", padding: "1vh 2vh" }}>
              <Grid container>
                <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
                  <Rating
                    name="read-only"
                    size="small"
                    value={parseInt(feedback?.ratting)}
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
                  <p style={{}}>{feedback?.review}</p>
                </Grid>
                <Grid item xs={12} sx={{ marginY: "2vh", paddingX: "3vh" }}>
                  <p>
                    {" "}
                    By{" "}
                    <span style={{ color: "var(--primaryColor)" }}>
                      {feedback?.user?.first_name} {feedback?.user?.last_name}
                    </span>{" "}
                    {/* on <span style={{ fontWeight: "bold" }}>20 Mar 2023</span>{" "} */}
                  </p>
                </Grid>
              </Grid>
            </Card>
          ))}
      </Box>
    </div>
  );
};

export default ReviewAndFeedBack;
