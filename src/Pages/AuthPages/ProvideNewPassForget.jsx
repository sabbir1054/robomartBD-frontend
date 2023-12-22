import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { backendUrl } from "../../utils/backendApiUrlProvider";
const errorNotify = () => toast.error("Password not match !");
const ProvideNewPassForget = () => {
  const [loading, setIsLoading] = useState(false);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  console.log(params);
  const test = "";
  const submitNewPassword = (password) => {
    setIsLoading(true);
    fetch(
      `${backendUrl}/api/renew_password/${params?.email}/${params?.code}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ new_password: password }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);

        if (result?.msg === "Done") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Password change successful ✅ ",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/login");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong ‼️ Try again ",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/auth/forget_password");
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      submitNewPassword(confirmPassword);
    } else {
      errorNotify();
    }
  };
  return (
    <div style={{ minHeight: "80vh", backgroundColor: "#f2f2f2" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5vh",
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
            <CardContent>
              <Typography
                variant="h6"
                sx={{ py: "15px", fontFamily: "Poppins" }}
              >
                Make your new password:
              </Typography>
              <form onSubmit={handleSubmit}>
                <div>
                  {
                    <InputLabel htmlFor="outlined-adornment-password">
                      New Password
                    </InputLabel>
                  }
                  <OutlinedInput
                    value={newPassword}
                    onChange={handlePasswordChange}
                    fullWidth
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </div>
                <div style={{ margin: "20px 0px" }}>
                  {
                    <InputLabel htmlFor="outlined-adornment-password">
                      Re-type Password
                    </InputLabel>
                  }
                  <OutlinedInput
                    fullWidth
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      backgroundColor: "var(--primaryColor)",
                      "&:hover": { backgroundColor: "green" },
                    }}
                  >
                    Change Password
                  </Button>
                </div>
              </form>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ProvideNewPassForget;
