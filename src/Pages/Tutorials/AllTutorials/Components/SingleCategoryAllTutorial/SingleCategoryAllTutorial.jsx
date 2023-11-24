import {
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleTutorialCard from "../Tutorials/SingleTutorialCard";

const SingleCategoryAllTutorial = () => {
  const [load, setLoad] = useState(false);
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoad(true);
    fetch(
      `https://robomartbd.com/blog/get_all_blog_by_category/${params?.categoryId}`
    )
      .then((res) => res.json())
      .then((getData) => {
        setData(getData?.results);
        setLoad(false);
      });
  }, [params]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth="xl" style={{ padding: "5vh 0" }}>
        <Typography variant="h5" paddingY={4} fontFamily={"Poppins"}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
          {params?.categoryName}{" "}
        </Typography>
        <Divider />
        <Grid container spacing={2} paddingY={5}>
          {load && <CircularProgress />}
          {!load && data?.length == 0 && <h5>No tutorials </h5>}
          {data?.length &&
            data?.map((tutorial) => (
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <SingleTutorialCard tutorial={tutorial} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default SingleCategoryAllTutorial;
