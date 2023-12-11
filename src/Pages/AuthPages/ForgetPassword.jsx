import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { backendUrl } from "../../utils/backendApiUrlProvider";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const postEmail = () => {
    setLoading(true);
    fetch(`${backendUrl}/api/change_password`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((result) => {
       
        if (result.msg === "Done") {
          setLoading(false);
          setEmailSent(true);
        } else if (result === "User Not Registered") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "User not registered ! ",
            showConfirmButton: false,
            timer: 1500,
          });
          setLoading(false);
          navigate("/login");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong ! ",
            showConfirmButton: false,
            timer: 1500,
          });
          setLoading(false);
          navigate("/login");
        }
      });
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
    <div style={{ minHeight: "80vh", backgroundColor: "#f2f2f2" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5vh",
          // height: "100vh",
          minWidth: "300px",
        }}
      >
        <Card style={{ minWidth: "300px", width: "600px" }}>
          {loading ? (
            <CardContent
              style={{
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </CardContent>
          ) : (
            <>
              {emailSent ? (
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="/assets/email.png"
                      alt="email-logo"
                      width={"200px"}
                      srcset=""
                    />
                  </div>
                  <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    {" "}
                    Check Inbox and Spam box{" "}
                  </Typography>
                  <Typography variant="subtitle2" textAlign={"center"}>
                    Password reset link sent to email
                  </Typography>

                  <div style={{ textAlign: "center", margin: "15px 0" }}>
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="contained"
                        disableElevation
                        startIcon={<MoveToInboxIcon />}
                        sx={{
                          backgroundColor: "green",
                          "&:hover": { backgroundColor: "var(--primaryColor)" },
                        }}
                      >
                        Check Inbox
                      </Button>
                    </a>
                  </div>
                </CardContent>
              ) : (
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
                      fullWidth
                      sx={{
                        backgroundColor: "black",
                        "&:hover": { backgroundColor: "black" },
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgetPassword;
