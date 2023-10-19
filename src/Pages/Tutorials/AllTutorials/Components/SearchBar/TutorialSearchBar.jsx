import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const TutorialSearchBar = () => {
  const location = useLocation();
  
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default TutorialSearchBar;
