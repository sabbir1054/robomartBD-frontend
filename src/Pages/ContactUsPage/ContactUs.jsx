// Import necessary modules
import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { backendUrl } from "../../utils/backendApiUrlProvider";

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

  const sendEmail = (data) => {
    console.log(data);
    fetch(`${backendUrl}/order_management/post_contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.msg === "Done!") {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email send Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
    sendEmail({
      name: formData?.name,
      email: formData?.email,
      msg: formData?.message,
    });
    console.log(formData);
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
