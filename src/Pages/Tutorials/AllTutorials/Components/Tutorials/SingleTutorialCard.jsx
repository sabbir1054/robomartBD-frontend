import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./SingleTutorial.module.scss";
const SingleTutorialCard = ({ tutorial }) => {
  const location = useLocation();
 
  return (
    <>
      {" "}
      <Card sx={{ maxWidth: 345 }} disableElevation>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={tutorial?.image ? `${tutorial?.image}` : "/assets/no-img.jpg"}
        />
        <CardContent>
          <NavLink
            to={`/${location?.pathname === "/blogs" ? "blogs" : "tutorials"}/${
              tutorial?.id
            }/${(tutorial?.title).replace(/ /g, "_")}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className={styles.tutorial_title}
            >
              {tutorial?.title}
            </Typography>
          </NavLink>
          <Typography variant="body2" color="text.secondary">
            {tutorial?.description?.substring(0, 250) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink
            to={`/tutorials/${tutorial?.id}/${(tutorial?.title).replace(
              / /g,
              "_"
            )}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button size="small" sx={{ color: "var(--primaryColor)" }}>
              Read More
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleTutorialCard;
