import { Container, Grid } from "@mui/material";
import React from "react";
import HeroSlider from "./Components/Slider/HeroSlider";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <>
      <Container className={styles.heroWrapper}>
        <Grid container columnSpacing={2} alignItems={"center"} paddingTop={5}>
          <Grid item lg={8} width={"100%"}>
            <HeroSlider />
          </Grid>
          <Grid item lg={4} width={"100%"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
            rerum voluptate. Earum reprehenderit, repellendus sed quis, eligendi
            fugit et officiis vel autem nemo numquam? Eveniet, officiis
            explicabo provident corporis inventore praesentium placeat unde sint
            itaque ea suscipit adipisci possimus nam culpa, minima ipsum error
            assumenda excepturi quis odio. Aspernatur, vel?
          </Grid>
        </Grid>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima eligendi consequuntur voluptates, eius sunt blanditiis obcaecati quos itaque ducimus harum odit optio perferendis corporis ullam laboriosam quis odio. Et nam, nobis quisquam consectetur accusantium eaque quidem perferendis magnam quasi consequatur consequuntur placeat alias rem voluptatum vero laudantium labore sapiente!
      </Container>
    </>
  );
};

export default Hero;
