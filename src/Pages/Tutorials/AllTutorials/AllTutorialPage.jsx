import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BottomPagination from "./Components/PaginationsFilter/BottomPagination/BottomPagination";
import PaginationFilter from "./Components/PaginationsFilter/PaginationFilter";
import TutorialSearchBar from "./Components/SearchBar/TutorialSearchBar";
import SingleTutorialCard from "./Components/Tutorials/SingleTutorialCard";

const AllTutorialPage = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth={"xl"}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "3vh",
          }}
        >
          {" "}
          Robomart BD Tutorials
        </Typography>
      </Container>
      <Divider style={{ borderColor: "#e2e2e2" }} />
      {/* search Bar */}
      <div style={{ backgroundColor: "#F7F7F7", padding: "10vh 2vh" }}>
        <p style={{ textAlign: "center" }}>
          <Typography
            variant="title1"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              textAlign: "center",
              padding: "3vh 0",
            }}
          >
            {" "}
            Search anything you need
          </Typography>
        </p>
        <Container maxWidth={"xl"}>
          <TutorialSearchBar />
        </Container>
      </div>
      <Divider style={{ borderColor: "#e2e2e2" }} />
      {/* Pagination and tags */}
      <Container maxWidth={"xl"}>
        <PaginationFilter />
      </Container>

      <Container maxWidth="xl" style={{ padding: "5vh 0" }}>
        <Grid container spacing={2} padding={1}>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <SingleTutorialCard />
          </Grid>
        </Grid>
      </Container>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2vh 0" }}
      >
        <BottomPagination />
      </div>
    </div>
  );
};

export default AllTutorialPage;
