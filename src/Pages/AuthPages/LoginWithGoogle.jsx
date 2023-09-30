import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
const LoginWithGoogle = () => {
  const apiUrl = import.meta.env.VITE_GOOGLE_AUTH_LINK;
  const [authUrl, setAuthUrl] = useState("");
  // const postLoginData = (data) => {
  //   fetch(`https://api.robomartbd.com/api/auth/jwt/create/`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result.detail) {
  //         customError(result.detail);
  //       }

  //       if (result.refresh && result.access) {
  //         localStorage.setItem("user", JSON.stringify(result.access));

  //         reset();
  //         navigate("/");
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Login Successful",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
  const authLoginGoogle = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
       setAuthUrl(data?.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (authUrl?.length > 0) {
      openNewTab(authUrl);
    }
  }, [authUrl]);

  return (
    <>
      <Button
        onClick={() => authLoginGoogle()}
        disableElevation
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          padding: "10px",
        }}
      >
        <GoogleIcon />{" "}
        <span style={{ margin: "0px 5px" }}> Login with google</span>
      </Button>
    </>
  );
};

export default LoginWithGoogle;
