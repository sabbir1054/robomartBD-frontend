import { Grid } from "@mui/material";
import React from "react";

const OfferCards = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6} md={12} paddingY={1}>
          <img
            src="https://i.ibb.co/XWktr0z/2023-05-31-09-39-43.jpg"
            alt=""
            style={{ width: "85%" }}
          />
        </Grid>
        <Grid item xs={6} md={12} paddingY={1}>
          <img
            src="https://i.ibb.co/XWktr0z/2023-05-31-09-39-43.jpg"
            alt=""
            style={{ width: "85%" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OfferCards;
