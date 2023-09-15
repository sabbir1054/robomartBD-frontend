import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./SingleTutorial.module.scss";
const SingleTutorialCard = () => {
  return (
    <>
      {" "}
      <Card sx={{ maxWidth: 345 }} disableElevation>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/public/assets/photo-blog.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={styles.tutorial_title}
          >
            SparkFun Arduino UNO R4 WiFi Qwiic Kit Hookup Guide
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleTutorialCard;
