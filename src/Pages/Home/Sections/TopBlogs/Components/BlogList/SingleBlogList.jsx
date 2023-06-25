import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./BlogList.module.scss";
const SingleBlogList = () => {
  return (
    <>
      <Card className={styles.cardListWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              className={styles.cardMedia}
              image={"https://i.ibb.co/gJVbQqN/blogphoto.jpg"}
              title="Blog Image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent className={styles.cardContent}>
              <Typography
                variant="subtitle2"
                paddingBottom={2}
                className={styles.blogTitle}
              >
                New Products 6/21/23 Feat. Adafruit EYESPI BFF for QT Py or Xiao
                – 18 Pin FPC Connector!
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Written by Author
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Date Published
              </Typography>
              <Button variant="contained" className={styles.buyThisBtn}>
                <Typography variant="body1" component="p">
                  Buy This
                </Typography>
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SingleBlogList;
