import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

import SearchIcon from "@mui/icons-material/Search";

const AvaterBtnMeny = ({ data }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const handleSearch = () => {
    // Add your search logic here
    navigate(`/products/search=/${query}`);
    handleCloseUserMenu();
    setQuery("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
     
      handleSearch();
    }
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
          {data && data?.first_name}
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
          <NavLink
            to="/dashboard/user/order_history"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Order History</Typography>
            </MenuItem>
          </NavLink>
          <Divider />

          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            {/* <div style={{ display: "none" }} className={styles.searchBtn}>
              <SmallSearch />
            </div> */}
            <TextField
              variant="outlined"
              value={query}
              fullWidth
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default AvaterBtnMeny;
