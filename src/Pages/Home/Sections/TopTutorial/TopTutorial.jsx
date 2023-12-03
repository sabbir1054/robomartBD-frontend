import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { backendUrl } from "../../../../utils/backendApiUrlProvider";
import styles from "../TopBlogs/TopBlogs.module.scss";
import SingleTutorial2 from "./SingleTutorial2";
const TopTutorial = () => {
  const [tutorialsData, setTutorialsData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch(`${backendUrl}/blog/get_tutorial?page=1`)
      .then((res) => res.json())
      .then((data) => {
        setTutorialsData(data?.results.slice(0, 6));
        setLoad(false);
      });
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Typography
          textAlign={"center"}
          variant="h5"
          className={styles.topBlogsTitle}
          align="center"
          fontWeight={"bold"}
          borderBottom={"1px solid #f2f2f2"}
        >
          Top Tutorials
        </Typography>
        <Grid container spacing={2}>
          {load && <CircularProgress />}
          {tutorialsData?.map((tutorial) => (
            <Grid item xs={"4"} marginY={2}>
              <SingleTutorial2 tutorial={tutorial} />
            </Grid>
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"center"} paddingY={3}>
          <NavLink to={`/tutorials`}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black" }}
              className={styles.blogSectionBtn}
            >
              Explore More Tutorials
            </Button>
          </NavLink>
        </Box>
      </Container>
    </div>
  );
};

export default TopTutorial;
