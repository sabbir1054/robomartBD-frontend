import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BlogList.module.scss";
import { backendUrl } from "../../../../../../utils/backendApiUrlProvider";
const SingleBlogList = ({ blog }) => {
  return (
    <>
      <Card className={styles.cardListWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <NavLink to={`/blog/${blog?.id}`}>
              <CardMedia
                component="img"
                className={styles.cardMedia}
                style={{ maxWidth: "200px" }}
                image={
                  blog?.image
                    ? `${blog?.image}`
                    : "/assets/no-img.jpg"
                }
                title="Blog Image"
              />
            </NavLink>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent className={styles.cardContent}>
              <NavLink to={`/blog/${blog?.id}`} style={{ color: "black" }}>
                {" "}
                <Typography
                  variant="subtitle2"
                  paddingBottom={2}
                  className={styles.blogTitle}
                >
                  {blog?.title}
                </Typography>
              </NavLink>

              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight={"bold"}
              >
                Written by : {blog?.created_by?.first_name}
              </Typography>

              <Button variant="contained" className={styles.buyThisBtn}>
                <NavLink
                  to={`/blog/${blog?.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Typography variant="body1" component="p">
                    Details
                  </Typography>
                </NavLink>
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SingleBlogList;
