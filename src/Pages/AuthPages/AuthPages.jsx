import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AuthPages = () => {
  const [value, setValue] = useState("login");
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
          <Container>
              <Box>
                  
              </Box>
      </Container>
    </div>
  );
};

export default AuthPages;
