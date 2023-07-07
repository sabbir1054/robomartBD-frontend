import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const AuthPages = () => {
  const [component, setComponent] = useState("login");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      setComponent("login");
    } else {
      setComponent("register");
    }
  }, [location]);

  return (
    <div>
      <Container>
        <Box sx={{ py: 7, display: "flex", justifyContent: "center" }}>
          <NavLink style={{textDecoration:"none",color:component==="login"?'black':"#c7c7c7"}} to="/login">
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                px: 3,
                borderBottom:
                  component === "login" && "5px solid var(--primaryColor)",
                transition: "all 0.3s ease-in",
              }}
            >
              Login
            </Typography>
          </NavLink>
          <NavLink style={{textDecoration:"none",color:component==="register"?'black':"#c7c7c7"}} to="/register">
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                px: 3,
                borderBottom:
                  component === "register" && "5px solid var(--primaryColor)",
                transition: "all 0.3s ease-in",
              }}
            >
              Register
            </Typography>
          </NavLink>
        </Box>
      </Container>
    </div>
  );
};

export default AuthPages;
