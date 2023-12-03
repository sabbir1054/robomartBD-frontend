import React from "react";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import styles from "./SingleHeroBolg.module.scss";
const SingleHeroBlog = ({ blog }) => {
  return (
    <>
      <Card className={styles.cardWrapper}>
        <NavLink to={`/blog/${blog?.id}`}>
          {" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ maxHeight: "500px" }}
              src={blog?.image ? `${blog?.image}` : "/assets/no-img.jpg"}
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
              <Button
                variant="contained"
                size="small"
                className={styles.buyThisBtn}
              >
                <Typography variant="body">Details</Typography>
              </Button>
            </NavLink>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleHeroBlog;
