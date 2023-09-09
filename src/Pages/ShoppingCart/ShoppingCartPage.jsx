import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetCartQuery, useGetUserQuery } from "../../redux/api/api";
import CartItems from "./Components/CartItems/Cartitems";
import CartPrice from "./Components/CartPrice/CartPrice";
import styles from "./ShoppingCartPages.module.scss";
const ShoppingCartPage = () => {
  const [isDataChange, setIsDataChange] = useState(false);
  const { data: cartData } = useGetCartQuery();
  const { data, isLoading, isError } = useGetUserQuery();
  const navigate = useNavigate();
const cartCount = cartData
  ? cartData?.items?.reduce((acc, item) => acc + item.quantity, 0)
  : 0;
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
      <Container style={{minHeight:"70vh"}}>
        <Box className={styles.cartPageHeading} sx={{ paddingY: "6vh" }}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Shopping Cart
          </Typography>
        </Box>

        {cartCount == 0 ? (
          <>
            {" "}
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              Your cart is empty🛒
            </Typography>
          </>
        ) : (
          <>
            <CartItems setIsDataChange={setIsDataChange} />
            <CartPrice isDataChange={isDataChange} />
          </>
        )}
      </Container>
    </div>
  );
};

export default ShoppingCartPage;
