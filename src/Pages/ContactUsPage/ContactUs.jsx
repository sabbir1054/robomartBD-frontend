// Import necessary modules
import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

// ContactUsForm component
const ContactUs = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
    console.log("Form Submitted:", formData);
  };

  return (
    <Container maxWidth="sm" style={{ minHeight: "70vh", padding: "10vh 0" }}>
      <Typography variant="h4" fontFamily={"Poppins"} fontWeight={"bold"}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ margin: "5px 0px" }}
          fullWidth
          label="Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          style={{ margin: "5px 0px" }}
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          style={{ margin: "5px 0px" }}
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={8}
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "var(--primaryColor)",
            "&:hover": { backgroundColor: "green" },
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;
