import { Box, Grid } from '@mui/material';
import React from 'react';

const OfferCards = () => {
    return (
      <>
        <Grid container display={'flex'} justifyContent={'space-around'}>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <img
              src="https://i.ibb.co/XWktr0z/2023-05-31-09-39-43.jpg"
              alt=""
              style={{ width: "85%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
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