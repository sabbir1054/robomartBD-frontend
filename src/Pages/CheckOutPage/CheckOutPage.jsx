import { Container, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetCartQuery } from "../../redux/api/api";
import CheckOutPageForm from "./CheckOutPageForm";
const CheckOutPage = () => {
  const [formData, setFormData] = useState({});
  const { data: cartData } = useGetCartQuery();
  const cartCount = cartData
    ? cartData?.items?.reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  return (
    <>
      <Container style={{ marginTop: "5vh"}}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
            padding: "3vh 0",
          }}
        >
          Checkout
        </Typography>
        <Divider />
      </Container>
      {cartCount === 0 ? (
        <div style={{minHeight:"50vh"}}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Poppins",
              textAlign: "center",
              padding: "3vh 0",
            }}
          >
            You have no product in cart
          </Typography>
        </div>
      ) : (
        <>
          {" "}
          <CheckOutPageForm />
        </>
      )}
    </>
  );
};

export default CheckOutPage;
