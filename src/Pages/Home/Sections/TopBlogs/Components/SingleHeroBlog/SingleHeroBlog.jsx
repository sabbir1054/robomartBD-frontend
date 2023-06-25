import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import styles from "./SingleHeroBolg.module.scss";
const SingleHeroBlog = () => {
  return (
    <>
      <Card className={styles.cardWrapper}>
        <CardMedia
          component="img"
          className={styles.cardMedia}
          image={"https://i.ibb.co/gJVbQqN/blogphoto.jpg"}
          title="Blog Image"
        />
        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="h2" className={styles.blogTitle}>
            New Products 6/21/23 Feat. Adafruit EYESPI BFF for QT Py or Xiao –
            18 Pin FPC Connector!
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Written by Author
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date Published
          </Typography>
          <Box display={"flex"} justifyContent={"flex-end"}>
            {" "}
            <Button variant="contained" className={styles.buyThisBtn}>
              <Typography variant="body1" component="p">
                Buy This
              </Typography>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleHeroBlog;
