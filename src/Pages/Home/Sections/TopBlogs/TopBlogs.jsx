import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AllBlogsList from "./Components/BlogList/AllBlogsList";
import SingleHeroBlog from "./Components/SingleHeroBlog/SingleHeroBlog";
import styles from "./TopBlogs.module.scss";
const TopBlogs = () => {
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
            <SingleHeroBlog />
          </Grid>
          <Grid item xs={12} md={6}>
            <AllBlogsList />
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "var(--secondaryColor)" }}
            className={styles.blogSectionBtn}
          >
            Explore Blog Section
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TopBlogs;
