import { Box, Card, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WriteYourComment from "./WriteYourComment";
import { backendUrl } from "../../../../../utils/backendApiUrlProvider";
const AllComments = () => {
  const [isLoad, setIsLoad] = useState(false);
  const params = useParams();
  const [allComments, setAllComments] = useState([]);

  const getALLComments = async () => {
    setIsLoad(true);
    const response = await fetch(
      `${backendUrl}/blog/${params?.tutorialId}/get_all_comment`
    );
    const data = await response.json();
    setAllComments(data.reverse());
    if (data?.length) {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    getALLComments();
  }, []);

  return (
    <div>
      <div style={{ paddingBottom: "10vh" }}>
        <Box sx={{ marginTop: "5vh" }}>
          <Typography variant="h6" borderBottom={"1px solid #e1e1e1"}>
            Comments :
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <WriteYourComment
              blogId={params?.tutorialId}
              getALLComments={getALLComments}
            />
          </Box>
          {isLoad && <CircularProgress />}
          {!isLoad && (
            <>
              {allComments?.length > 0 &&
                allComments?.map((comment) => (
                  <Card sx={{ marginY: "10px", padding: "1vh 2vh" }}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sx={{ marginY: "2vh", paddingX: "3vh" }}
                      >
                        <p>
                          By
                          <span
                            style={{
                              margin: "0 2px ",
                              color: "var(--primaryColor)",
                            }}
                          >
                            {comment?.commented_by?.first_name}{" "}
                            {comment?.commented_by?.last_name}
                          </span>{" "}
                          on{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {(comment?.created_at).split("T")[0]}
                          </span>{" "}
                        </p>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ marginY: "2vh", paddingX: "3vh" }}
                      >
                        <p style={{}}>{comment?.comment}</p>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
            </>
          )}
        </Box>
      </div>
    </div>
  );
};

export default AllComments;
