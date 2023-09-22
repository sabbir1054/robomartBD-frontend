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
import { NavLink } from "react-router-dom";
const SingleHeroBlog = ({blog}) => {
  return (
    <>
      <Card className={styles.cardWrapper}>
        <NavLink to={`/blog/${blog?.id}`}>
          {" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ maxWidth: "300px" }}
              src={
                blog?.image
                  ? `${blog?.image}`
                  : "/assets/no-img.jpg"
              }
              alt=""
              srcset=""
            />
          </div>
        </NavLink>

        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="h2">
            <NavLink to={`/blog/${blog?.id}`} className={styles.blogTitle}>
              {" "}
              {blog?.title}
            </NavLink>
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight={"bold"}>
            Written by : {blog?.created_by?.first_name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary">
            Date Published
          </Typography> */}
          <Box display={"flex"} justifyContent={"flex-end"}>
            {" "}
            <NavLink to={`/blog/${blog?.id}`}>
              <Button variant="contained" className={styles.buyThisBtn}>
                <Typography variant="body1" component="p">
                  Details
                </Typography>
              </Button>
            </NavLink>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleHeroBlog;
