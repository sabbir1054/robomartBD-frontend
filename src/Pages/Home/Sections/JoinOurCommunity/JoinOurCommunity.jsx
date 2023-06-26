import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./joinOurCommunity.module.scss";
const JoinOurCommunity = () => {
  return (
    <>
      <Box className={styles.joinCommunityWrapper}>
        <Container>
          <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                paddingY={2}
                color={"white"}
                fontWeight={"bold"}
                sx={{ fontFamily: "var(--secondaryFont)" }}
              >
                Join Our Supportive Community
              </Typography>
              <Typography body="1" color="#f2f2f2">
                <p>
                  {" "}
                  "Seeking community support? Join our vibrant forum for
                  valuable discussions, assistance, and connections. Together,
                  we foster growth, learning, and a supportive environment. Join
                  us today!"
                </p>
                <p>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--primaryColor)",
                      "&:hover": { backgroundColor: "green" },
                    }}
                  >
                    Join
                  </Button>
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="https://i.ibb.co/FKmYjCj/p.png" alt="" srcset="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default JoinOurCommunity;
