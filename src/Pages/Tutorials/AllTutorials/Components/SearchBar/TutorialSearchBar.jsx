import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";

const TutorialSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search value:", searchValue);
    console.log("Search triggered by:", e.type); // Logs the event type (e.g., 'submit' or 'keydown')
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
