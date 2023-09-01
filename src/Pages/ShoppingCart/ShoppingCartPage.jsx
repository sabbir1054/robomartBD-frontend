import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api/api";
import CartItems from "./Components/CartItems/Cartitems";
import CartPrice from "./Components/CartPrice/CartPrice";
import styles from "./ShoppingCartPages.module.scss";
import Swal from "sweetalert2";
const ShoppingCartPage = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/login");
       Swal.fire({
         position: "top-center",
         icon: "warning",
         title: "Login Required",
         showConfirmButton: false,
         timer: 1500,
       });
    }
  }, []);

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
