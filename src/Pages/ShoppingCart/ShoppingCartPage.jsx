import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CartItems from "./Components/CartItems/Cartitems";
import CartPrice from "./Components/CartPrice/CartPrice";
import styles from "./ShoppingCartPages.module.scss";
const ShoppingCartPage = () => {
  return (
    <div>
      <Container>
        <Box className={styles.cartPageHeading} sx={{ paddingY: "6vh" }}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Shopping Cart
          </Typography>
        </Box>
        <CartItems />
        <CartPrice />
      </Container>
    </div>
  );
};

export default ShoppingCartPage;
