import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const AvaterBtnMeny = ({ data }) => {
  console.log(data);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    handleCloseUserMenu();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={`Your dashboard`}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" style={{ backgroundColor: "black" }} />
          </IconButton>
        </Tooltip>
        <br />
        <small style={{ color: "black", fontFamily: "Poppins" }}>
          {data && data[0]?.first_name}
        </small>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <NavLink
            to="/dashboard/user/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
          </NavLink>
          <Divider />
          <NavLink
            to="/shopping-cart"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Go to Cart</Typography>
            </MenuItem>
          </NavLink>
          <Divider />

          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Order History</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default AvaterBtnMeny;
