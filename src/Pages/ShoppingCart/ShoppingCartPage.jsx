import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetUserQuery } from "../../redux/api/api";
import CartItems from "./Components/CartItems/Cartitems";
import CartPrice from "./Components/CartPrice/CartPrice";
import styles from "./ShoppingCartPages.module.scss";
const ShoppingCartPage = () => {
  const [isDataChange, setIsDataChange] = useState(false);
  const { data, isLoading, isError } = useGetUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data && !isLoading) {
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
        <CartItems setIsDataChange={setIsDataChange} />
        <CartPrice isDataChange={isDataChange } />
      </Container>
    </div>
  );
};

export default ShoppingCartPage;
