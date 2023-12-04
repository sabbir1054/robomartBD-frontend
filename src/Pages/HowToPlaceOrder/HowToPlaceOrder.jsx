// Import necessary modules
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// InstructionPage component
const HowToPlaceOrder = () => {
  return (
    <Container maxWidth="md" style={{ minHeight: "80vh" }}>
      <Typography variant="h4" gutterBottom textAlign={"center"} fontFamily={"Poppins"} fontWeight={"bold"} paddingTop={4}>
        How to Place an Order
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="1. Browse Products"
            secondary="Explore our product catalog and choose the items you want to purchase."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Add to Cart"
            secondary="Click on the 'Add to Cart' button next to each item to add them to your shopping cart."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. Review Cart"
            secondary="Review the items in your shopping cart. You can adjust quantities or remove items if needed."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="4. Proceed to Checkout"
            secondary="Click on the 'Proceed to Checkout' button to start the checkout process."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="5. Provide Information"
            secondary="Enter your shipping address, payment details, and any additional required information."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="6. Review Order"
            secondary="Review your order details, including the items, quantities, and total cost, before confirming."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="7. Place Order"
            secondary="Click on the 'Place Order' button to complete the purchase. You will receive a confirmation email."
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default HowToPlaceOrder;
