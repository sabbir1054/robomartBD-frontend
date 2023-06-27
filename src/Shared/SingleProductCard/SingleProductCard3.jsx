import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./singleproductCard3.module.scss";
// const useStyles = makeStyles({
//   card: {
//     maxWidth: 300,
//     margin: "0 auto",
//     transition: "transform 0.2s",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   },
//   media: {
//     height: 200,
//     backgroundSize: "contain",
//     transition: "opacity 0.2s",
//     "&:hover": {
//       opacity: 0.8,
//     },
//   },
//   details: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 10,
//   },
// });
const SingleProductCard3 = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <Card
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.mediaContainer}>
          <CardMedia
            component="img"
            className={styles.media}
            image={"https://i.ibb.co/zbyRK5d/small-product.png"}
            // title={name}
          />
          {hovered && (
            <div className={styles.overlay}>
              <CardContent className={styles.overlayContent}>
                <Typography variant="subtitle">Arduino Uno</Typography>
                <br />
                <NavLink to="/products/id">
                  <Button
                    variant="contained"
                    size={"small"}
                    sx={{
                      backgroundColor: "var(--primaryColor)",
                      "&:hover": { backgroundColor: "green" },
                    }}
                  >
                    View Details
                  </Button>
                </NavLink>
              </CardContent>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default SingleProductCard3;
