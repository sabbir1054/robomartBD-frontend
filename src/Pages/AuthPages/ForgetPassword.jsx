import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const postEmail = () => {
    fetch(`https://api.robomartbd.com/api/change_password`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0) {
      postEmail();
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Provide your email ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          minWidth: "300px",
        }}
      >
        <Card style={{ minWidth: "300px", width: "600px" }}>
          <CardContent>
            <Typography variant="h6" sx={{ py: "15px" }}>
              Enter your email:
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgetPassword;
