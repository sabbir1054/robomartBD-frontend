import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleBlogList from "./Components/BlogList/SingleBlogList";
import SingleHeroBlog from "./Components/SingleHeroBlog/SingleHeroBlog";
import styles from "./TopBlogs.module.scss";
import { NavLink } from "react-router-dom";
const TopBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch(`https://api.robomartbd.com/blog/get_all_blog`)
      .then((res) => res.json())
      .then((data) => {
        setBlogsData(data.slice(0, 4));
      });
    console.log(blogsData);
  }, []);

  return (
    <>
      <Container className={styles.topBlogsWrapper}>
        <Typography
          variant="h5"
          className={styles.topBlogsTitle}
          align="center"
          fontWeight={"bold"}
          borderBottom={"1px solid #f2f2f2"}
        >
          Top Blogs
        </Typography>
        <Grid
          container
          spacing={2}
          paddingTop={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={6}>
            <SingleHeroBlog blog={blogsData[0]} />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <AllBlogsList /> */}
            <SingleBlogList blog={blogsData[1]} /> <br />
            <SingleBlogList blog={blogsData[2]} /> <br />
            <SingleBlogList blog={blogsData[3]} /> <br />
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          <NavLink to={`/blogs`}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black" }}
              className={styles.blogSectionBtn}
            >
              Explore Blog Section
            </Button>
          </NavLink>
        </Box>
      </Container>
    </>
  );
};

export default TopBlogs;
