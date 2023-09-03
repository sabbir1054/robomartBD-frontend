import { Grid } from "@mui/material";
import React from "react";
import { useGetHomeDataQuery } from "../../../../../../redux/api/api";

const OfferCards = () => {
  
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  if (homeLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Grid container >
        {homeData1?.spacialoffer?.map((offer) => (
          <Grid item xs={6} md={6} lg={12} paddingY={1} display={"flex"} justifyContent={"center"}>
            <img
              src={`https://api.robomartbd.com${offer?.poster}`}
              alt=""
              style={{ width: "80%" }}
            />
          </Grid>
        ))}

    
      </Grid>
    </>
  );
};

export default OfferCards;
